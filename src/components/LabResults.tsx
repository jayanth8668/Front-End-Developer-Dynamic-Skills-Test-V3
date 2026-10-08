import React from 'react';

interface LabResultsProps {
  labResults: string[];
}

export const LabResults: React.FC<LabResultsProps> = ({ labResults }) => {
  return (
    <aside className="bg-white rounded-2xl p-6 shadow-[0_1px_8px_rgba(0,0,0,0.04)] mt-6">
      <h2 className="text-2xl font-extrabold text-[#072635] tracking-tight mb-4">
        Lab Results
      </h2>

      {/* Scrollable Test List */}
      <div className="custom-scrollbar max-h-[220px] overflow-y-auto space-y-1 pr-1">
        {labResults.map((test, index) => (
          <div
            key={`${test}-${index}`}
            className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-[#F6F7F8] transition-colors cursor-pointer group"
          >
            <span className="text-sm font-normal text-[#072635]">
              {test}
            </span>
            <button
              type="button"
              className="p-1 rounded-full hover:bg-white focus:outline-none"
              aria-label={`Download ${test}`}
            >
              <img
                src="/assets/DownloadIcon.svg"
                alt=""
                className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};
