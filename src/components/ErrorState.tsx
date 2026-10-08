import React from 'react';

export interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  message = 'An error occurred while fetching patient data from the Coalition Technologies API.',
  onRetry,
}) => {
  return (
    <div className="w-full bg-white rounded-2xl p-8 shadow-[0_1px_8px_rgba(0,0,0,0.04)] text-center max-w-lg mx-auto my-12">
      <div className="w-16 h-16 rounded-full bg-[#FFE6E9] text-[#DC2626] flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h3 className="text-xl font-bold text-[#072635] mb-2">
        Unable to Load Patient Data
      </h3>

      <p className="text-sm text-[#707070] mb-6 leading-relaxed">
        {message}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-2 bg-[#01F0D0] hover:bg-[#00D4B8] text-[#072635] font-bold text-sm rounded-full py-3 px-6 transition-colors shadow-sm focus:outline-none"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span>Retry Connection</span>
        </button>
      )}
    </div>
  );
};
