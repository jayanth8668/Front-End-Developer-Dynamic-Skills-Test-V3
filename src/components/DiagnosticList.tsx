import React from 'react';
import { DiagnosticItem } from '../types/patient';

interface DiagnosticListProps {
  diagnosticList: DiagnosticItem[];
}

export const DiagnosticList: React.FC<DiagnosticListProps> = ({
  diagnosticList,
}) => {
  return (
    <section className="bg-white rounded-2xl p-5 shadow-[0_1px_8px_rgba(0,0,0,0.04)] mt-6">
      <h2 className="text-2xl font-extrabold text-[#072635] tracking-tight mb-5">
        Diagnostic List
      </h2>

      {/* Table Header Bar */}
      <div className="bg-[#F6F7F8] rounded-full px-6 py-3.5 flex items-center text-sm font-bold text-[#072635] mb-2">
        <div className="w-[30%] pr-2">Problem/Diagnosis</div>
        <div className="w-[50%] pr-2">Description</div>
        <div className="w-[20%]">Status</div>
      </div>

      {/* Table Rows (scrollable container matching template) */}
      <div className="custom-scrollbar max-h-[200px] overflow-y-auto">
        {diagnosticList.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="px-6 py-4 flex items-center text-sm text-[#072635] border-b border-[#F6F7F8] last:border-b-0 hover:bg-[#FBFBFB] transition-colors"
          >
            <div className="w-[30%] font-medium pr-2">{item.name}</div>
            <div className="w-[50%] text-[#072635] pr-2 font-normal">
              {item.description}
            </div>
            <div className="w-[20%] text-[#072635] font-normal">
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
