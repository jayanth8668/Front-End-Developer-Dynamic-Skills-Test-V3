import React from 'react';
import { Patient } from '../types/patient';

export interface PatientProfileProps {
  patient: Patient;
}

function formatDateOfBirth(rawDob: string): string {
  if (!rawDob) return 'Not available';
  const parts = rawDob.split('/');
  if (parts.length === 3) {
    const monthIndex = parseInt(parts[0], 10) - 1;
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    const date = new Date(year, monthIndex, day);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    }
  }

  const parsed = new Date(rawDob);
  if (!isNaN(parsed.getTime())) {
    return parsed.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  return rawDob;
}

export const PatientProfile: React.FC<PatientProfileProps> = ({ patient }) => {
  const formattedDob = formatDateOfBirth(patient.date_of_birth);

  return (
    <aside className="bg-white rounded-2xl p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex flex-col items-center">
      {/* 200px Circular Profile Image matching Adobe XD */}
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-6 bg-[#F6F7F8] shrink-0">
        <img
          src={patient.profile_picture || '/assets/JessicaTaylor.png'}
          alt={patient.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/JessicaTaylor.png';
          }}
        />
      </div>

      {/* Patient Name */}
      <h2 className="text-2xl font-extrabold text-[#072635] tracking-tight mb-8 text-center">
        {patient.name}
      </h2>

      {/* Profile Details List */}
      <div className="w-full space-y-6">
        {/* Date of Birth */}
        <div className="flex items-center gap-4">
          <div className="w-[42px] h-[42px] rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
            <img src="/assets/BirthIcon.png" alt="" className="w-5 h-5 object-contain" />
          </div>
          <div>
            <p className="text-xs font-medium text-[#072635]">Date Of Birth</p>
            <p className="text-sm font-bold text-[#072635] mt-0.5">
              {formattedDob || patient.date_of_birth || 'Not recorded'}
            </p>
          </div>
        </div>

        {/* Gender */}
        <div className="flex items-center gap-4">
          <div className="w-[42px] h-[42px] rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
            <img src="/assets/GenderIcon.png" alt="" className="w-5 h-5 object-contain" />
          </div>
          <div>
            <p className="text-xs font-medium text-[#072635]">Gender</p>
            <p className="text-sm font-bold text-[#072635] mt-0.5">
              {patient.gender || 'Not specified'}
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-4">
          <div className="w-[42px] h-[42px] rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
            <img src="/assets/PhoneIcon.png" alt="" className="w-5 h-5 object-contain" />
          </div>
          <div>
            <p className="text-xs font-medium text-[#072635]">Contact Info.</p>
            <p className="text-sm font-bold text-[#072635] mt-0.5">
              {patient.phone_number || 'Not available'}
            </p>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="flex items-center gap-4">
          <div className="w-[42px] h-[42px] rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
            <img src="/assets/PhoneIcon.png" alt="" className="w-5 h-5 object-contain" />
          </div>
          <div>
            <p className="text-xs font-medium text-[#072635]">Emergency Contacts</p>
            <p className="text-sm font-bold text-[#072635] mt-0.5">
              {patient.emergency_contact || 'Not available'}
            </p>
          </div>
        </div>

        {/* Insurance Provider */}
        <div className="flex items-center gap-4">
          <div className="w-[42px] h-[42px] rounded-full bg-[#F6F7F8] flex items-center justify-center shrink-0">
            <img src="/assets/InsuranceIcon.png" alt="" className="w-5 h-5 object-contain" />
          </div>
          <div>
            <p className="text-xs font-medium text-[#072635]">Insurance Provider</p>
            <p className="text-sm font-bold text-[#072635] mt-0.5">
              {patient.insurance_type || 'None'}
            </p>
          </div>
        </div>
      </div>

      {/* Show All Information CTA */}
      <button
        type="button"
        className="w-full mt-8 bg-[#01F0D0] hover:bg-[#00D4B8] text-[#072635] font-bold text-sm rounded-full py-3.5 px-6 transition-colors shadow-sm focus:outline-none"
      >
        Show All Information
      </button>
    </aside>
  );
};
