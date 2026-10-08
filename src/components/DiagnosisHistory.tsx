import React from 'react';
import { DiagnosisRecord } from '../types/patient';
import { BloodPressureChart } from './BloodPressureChart';
import { VitalCards } from './VitalCards';

interface DiagnosisHistoryProps {
  diagnosisHistory: DiagnosisRecord[];
}

export const DiagnosisHistory: React.FC<DiagnosisHistoryProps> = ({
  diagnosisHistory,
}) => {
  const latestRecord = diagnosisHistory[0];

  return (
    <section className="bg-white rounded-2xl p-5 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <h2 className="text-2xl font-extrabold text-[#072635] tracking-tight mb-6">
        Diagnosis History
      </h2>

      {/* Blood Pressure Chart Component */}
      <BloodPressureChart diagnosisHistory={diagnosisHistory} />

      {/* Vital Metric Status Cards */}
      <VitalCards latestRecord={latestRecord} />
    </section>
  );
};
