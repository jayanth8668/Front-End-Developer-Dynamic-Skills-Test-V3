import React from 'react';

export const LoadingState: React.FC = () => {
  return (
    <div className="w-full animate-pulse space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column Skeleton */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-5 h-[700px] lg:h-[1054px] flex flex-col gap-4">
          <div className="h-8 bg-gray-200 rounded-md w-1/3 mb-2"></div>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 p-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-100 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Column Skeleton */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-2xl p-5 space-y-6">
            <div className="h-8 bg-gray-200 rounded-md w-1/4"></div>
            <div className="bg-[#F4F0FE] rounded-2xl p-5 h-[280px]"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="h-44 bg-[#E0F3FA] rounded-2xl"></div>
              <div className="h-44 bg-[#FFE6E9] rounded-2xl"></div>
              <div className="h-44 bg-[#FFE6E1] rounded-2xl"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 space-y-4">
            <div className="h-8 bg-gray-200 rounded-md w-1/4"></div>
            <div className="h-12 bg-gray-100 rounded-full"></div>
            <div className="space-y-3 pt-2">
              <div className="h-10 bg-gray-50 rounded-lg"></div>
              <div className="h-10 bg-gray-50 rounded-lg"></div>
              <div className="h-10 bg-gray-50 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Right Column Skeleton */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center space-y-5">
            <div className="w-[200px] h-[200px] rounded-full bg-gray-200"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="w-full space-y-4 pt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div className="flex-1 space-y-1.5">
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 space-y-4">
            <div className="h-8 bg-gray-200 rounded-md w-1/3"></div>
            <div className="space-y-2">
              <div className="h-10 bg-gray-50 rounded-lg"></div>
              <div className="h-10 bg-gray-50 rounded-lg"></div>
              <div className="h-10 bg-gray-50 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
