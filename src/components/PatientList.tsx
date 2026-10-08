import React from 'react';
import { Patient } from '../types/patient';

interface PatientListProps {
  patients: Patient[];
  activePatientName?: string;
  onSelectPatient?: (patient: Patient) => void;
}

export const PatientList: React.FC<PatientListProps> = ({
  patients,
  activePatientName = 'Jessica Taylor',
  onSelectPatient,
}) => {
  return (
    <aside className="bg-white rounded-2xl p-5 shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex flex-col h-[1054px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 px-1">
        <h2 className="text-2xl font-extrabold text-[#072635] tracking-tight">
          Patients
        </h2>
        <button
          type="button"
          className="p-1 rounded-full hover:bg-[#F6F7F8] transition-colors focus:outline-none"
          aria-label="Search patients"
        >
          <img src="/assets/SearchIcon.svg" alt="" className="w-4 h-4" />
        </button>
      </div>

      {/* Patients Scrollable Container */}
      <div className="custom-scrollbar flex-1 overflow-y-auto pr-1 space-y-1">
        {patients.map((patient, index) => {
          const isActive =
            patient.name.trim().toLowerCase() === activePatientName.trim().toLowerCase();

          return (
            <div
              key={`${patient.name}-${index}`}
              onClick={() => onSelectPatient && onSelectPatient(patient)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                isActive
                  ? 'bg-[#D8FCF7]'
                  : 'hover:bg-[#F6F7F8]'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={patient.profile_picture || '/assets/JessicaTaylor.png'}
                  alt={patient.name}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                  onError={(e) => {
                    // Fallback if remote image CDN is blocked
                    (e.target as HTMLImageElement).src = '/assets/JessicaTaylor.png';
                  }}
                />
                <div className="min-w-0 truncate">
                  <p className="text-sm font-bold text-[#072635] truncate leading-tight">
                    {patient.name}
                  </p>
                  <p className="text-sm text-[#707070] font-normal truncate mt-1 leading-tight">
                    {patient.gender}, {patient.age}
                  </p>
                </div>
              </div>

              <div className="shrink-0 pl-2">
                <img
                  src="/assets/MoreHorizontalIcon.svg"
                  alt=""
                  className="w-4 h-1 opacity-70"
                />
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
