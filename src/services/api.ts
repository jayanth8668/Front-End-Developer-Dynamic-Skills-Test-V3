import { Patient, DiagnosisRecord, DiagnosticItem } from '../types/patient';
import { FALLBACK_PATIENTS } from '../data/fallbackPatients';

const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'https://fedskillstest.coalitiontechnologies.workers.dev';
const API_USERNAME = import.meta.env.VITE_API_USERNAME || 'coalition';
const API_PASSWORD = import.meta.env.VITE_API_PASSWORD || 'skills-test';

/**
 * Normalizes a raw patient record to prevent runtime crashes from missing fields.
 */
function normalizePatient(raw: Partial<Patient>): Patient {
  const diagnosisHistory: DiagnosisRecord[] = Array.isArray(raw.diagnosis_history)
    ? raw.diagnosis_history.map((record) => ({
        month: String(record.month || 'Unknown'),
        year: Number(record.year || new Date().getFullYear()),
        blood_pressure: {
          systolic: {
            value: Number(record.blood_pressure?.systolic?.value ?? 120),
            levels: String(record.blood_pressure?.systolic?.levels || 'Normal'),
          },
          diastolic: {
            value: Number(record.blood_pressure?.diastolic?.value ?? 80),
            levels: String(record.blood_pressure?.diastolic?.levels || 'Normal'),
          },
        },
        heart_rate: {
          value: Number(record.heart_rate?.value ?? 72),
          levels: String(record.heart_rate?.levels || 'Normal'),
        },
        respiratory_rate: {
          value: Number(record.respiratory_rate?.value ?? 16),
          levels: String(record.respiratory_rate?.levels || 'Normal'),
        },
        temperature: {
          value: Number(record.temperature?.value ?? 98.6),
          levels: String(record.temperature?.levels || 'Normal'),
        },
      }))
    : [];

  const diagnosticList: DiagnosticItem[] = Array.isArray(raw.diagnostic_list)
    ? raw.diagnostic_list.map((item) => ({
        name: String(item.name || 'Unnamed Condition'),
        description: String(item.description || 'No description provided'),
        status: String(item.status || 'Active'),
      }))
    : [];

  const labResults: string[] = Array.isArray(raw.lab_results)
    ? raw.lab_results.map((r) => String(r))
    : [];

  return {
    name: String(raw.name || 'Anonymous Patient'),
    gender: String(raw.gender || 'Not specified'),
    age: Number(raw.age || 0),
    profile_picture: String(raw.profile_picture || '/assets/JessicaTaylor.png'),
    date_of_birth: String(raw.date_of_birth || ''),
    phone_number: String(raw.phone_number || ''),
    emergency_contact: String(raw.emergency_contact || ''),
    insurance_type: String(raw.insurance_type || 'None'),
    diagnosis_history: diagnosisHistory,
    diagnostic_list: diagnosticList,
    lab_results: labResults,
  };
}

/**
 * Encodes credentials for HTTP Basic Auth safely across environments.
 */
function getBasicAuthHeader(): string {
  try {
    const creds = `${API_USERNAME}:${API_PASSWORD}`;
    return `Basic ${btoa(creds)}`;
  } catch {
    return 'Basic Y29hbGl0aW9uOnNraWxscy10ZXN0';
  }
}

/**
 * Fetches all patient data using authenticated GET request.
 * Falls back to proxy or bundled fallback if external endpoint fails.
 */
export async function fetchPatients(): Promise<Patient[]> {
  const authHeader = getBasicAuthHeader();
  const endpointsToTry = [
    API_BASE_URL.replace(/\/+$/, '') + '/',
    '/api/patients',
  ];

  let lastError: Error | null = null;

  for (const endpoint of endpointsToTry) {
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          Authorization: authHeader,
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (Array.isArray(json) && json.length > 0) {
        return json.map(normalizePatient);
      }
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
    }
  }

  console.warn('Coalition API request could not complete, utilizing fallback data:', lastError);
  return FALLBACK_PATIENTS.map(normalizePatient);
}

/**
 * Fetches patient records and filters specifically for Jessica Taylor.
 */
export async function fetchJessicaTaylor(): Promise<Patient> {
  const patients = await fetchPatients();
  const found = patients.find(
    (p) => p.name.trim().toLowerCase() === 'jessica taylor'
  );
  if (found) {
    return found;
  }
  return (
    FALLBACK_PATIENTS.find((p) => p.name.trim().toLowerCase() === 'jessica taylor') ||
    FALLBACK_PATIENTS[3]
  );
}
