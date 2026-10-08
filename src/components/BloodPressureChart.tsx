import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  registerables,
} from 'chart.js';
import { DiagnosisRecord } from '../types/patient';

ChartJS.register(...registerables);

interface BloodPressureChartProps {
  diagnosisHistory: DiagnosisRecord[];
}

export const BloodPressureChart: React.FC<BloodPressureChartProps> = ({
  diagnosisHistory,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartJS | null>(null);
  const [timeRange, setTimeRange] = useState<'6' | '12' | 'all'>('6');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Filter diagnosis history according to selected timeframe (default latest 6 months)
  const count = timeRange === '6' ? 6 : timeRange === '12' ? 12 : diagnosisHistory.length;
  // History is newest first in API, so slice and reverse for chronological display
  const records = diagnosisHistory.slice(0, count).reverse();

  const latestRecord = diagnosisHistory[0] || records[records.length - 1];

  const systolicValue = latestRecord?.blood_pressure?.systolic?.value ?? 160;
  const systolicLevel = latestRecord?.blood_pressure?.systolic?.levels ?? 'Higher than Average';
  const diastolicValue = latestRecord?.blood_pressure?.diastolic?.value ?? 78;
  const diastolicLevel = latestRecord?.blood_pressure?.diastolic?.levels ?? 'Lower than Average';

  useEffect(() => {
    if (!canvasRef.current || records.length === 0) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const labels = records.map((r) => `${r.month.slice(0, 3)}, ${r.year}`);
    const systolicData = records.map((r) => r.blood_pressure.systolic.value);
    const diastolicData = records.map((r) => r.blood_pressure.diastolic.value);

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    chartInstanceRef.current = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Systolic',
            data: systolicData,
            borderColor: '#E66FD2',
            backgroundColor: '#E66FD2',
            pointBackgroundColor: '#E66FD2',
            pointBorderColor: '#FFFFFF',
            pointBorderWidth: 1.5,
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.45,
            borderWidth: 2,
          },
          {
            label: 'Diastolic',
            data: diastolicData,
            borderColor: '#8C6FE6',
            backgroundColor: '#8C6FE6',
            pointBackgroundColor: '#8C6FE6',
            pointBorderColor: '#FFFFFF',
            pointBorderWidth: 1.5,
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.45,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: '#072635',
            titleFont: { family: 'Manrope', size: 12, weight: 'bold' },
            bodyFont: { family: 'Manrope', size: 12 },
            padding: 10,
            cornerRadius: 8,
            callbacks: {
              label: (context) => ` ${context.dataset.label}: ${context.parsed.y} mmHg`,
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                family: 'Manrope',
                size: 12,
              },
              color: '#072635',
            },
          },
          y: {
            min: 60,
            max: 180,
            ticks: {
              stepSize: 20,
              font: {
                family: 'Manrope',
                size: 12,
              },
              color: '#072635',
            },
            grid: {
              color: '#CBC8D4',
            },
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [records]);

  return (
    <div className="bg-[#F4F0FE] rounded-2xl p-4 md:p-5 mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Chart Column (8 cols) */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Chart Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#072635]">
              Blood Pressure
            </h3>

            {/* Timeframe selector dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 text-xs md:text-sm font-normal text-[#072635] hover:text-[#0C3E57] focus:outline-none"
              >
                <span>
                  {timeRange === '6'
                    ? 'Last 6 months'
                    : timeRange === '12'
                    ? 'Last 12 months'
                    : 'All history'}
                </span>
                <img
                  src="/assets/ExpandMoreIcon.svg"
                  alt=""
                  className={`w-2.5 h-1.5 transition-transform ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-36 bg-white rounded-xl shadow-lg border border-[#EDEDED] py-1 z-20 text-xs font-medium text-[#072635]">
                  <button
                    type="button"
                    onClick={() => {
                      setTimeRange('6');
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-[#F6F7F8]"
                  >
                    Last 6 months
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTimeRange('12');
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-[#F6F7F8]"
                  >
                    Last 12 months
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTimeRange('all');
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-[#F6F7F8]"
                  >
                    All history
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Chart Canvas */}
          <div className="h-[210px] w-full">
            <canvas ref={canvasRef} />
          </div>
        </div>

        {/* Stats Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-center pl-0 lg:pl-3">
          {/* Systolic Block */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#E66FD2] inline-block shrink-0"></span>
              <h4 className="text-sm font-bold text-[#072635]">Systolic</h4>
            </div>
            <p className="text-2xl font-extrabold text-[#072635] tracking-tight mb-2">
              {systolicValue}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#072635]">
              {systolicLevel.toLowerCase().includes('higher') ? (
                <img src="/assets/ArrowUp.svg" alt="" className="w-2.5 h-1.5" />
              ) : systolicLevel.toLowerCase().includes('lower') ? (
                <img src="/assets/ArrowDown.svg" alt="" className="w-2.5 h-1.5" />
              ) : null}
              <span>{systolicLevel}</span>
            </div>
          </div>

          <div className="h-[1px] bg-[#CBC8D4] my-4 w-full"></div>

          {/* Diastolic Block */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#8C6FE6] inline-block shrink-0"></span>
              <h4 className="text-sm font-bold text-[#072635]">Diastolic</h4>
            </div>
            <p className="text-2xl font-extrabold text-[#072635] tracking-tight mb-2">
              {diastolicValue}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#072635]">
              {diastolicLevel.toLowerCase().includes('higher') ? (
                <img src="/assets/ArrowUp.svg" alt="" className="w-2.5 h-1.5" />
              ) : diastolicLevel.toLowerCase().includes('lower') ? (
                <img src="/assets/ArrowDown.svg" alt="" className="w-2.5 h-1.5" />
              ) : null}
              <span>{diastolicLevel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
