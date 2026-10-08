import React from 'react';

export interface VitalCardProps {
  label: string;
  value: string | number;
  unit?: string;
  level: string;
  bgColor: string; // e.g. '#E0F3FA', '#FFE6E9', '#FFE6E1'
  iconSrc: string;
  iconAlt?: string;
  showArrow?: boolean;
  arrowDirection?: 'up' | 'down' | null;
}

export const VitalCard: React.FC<VitalCardProps> = ({
  label,
  value,
  unit,
  level,
  bgColor,
  iconSrc,
  iconAlt = '',
  showArrow,
  arrowDirection,
}) => {
  const isLower =
    arrowDirection === 'down' ||
    (showArrow === undefined && level.toLowerCase().includes('lower'));
  const isHigher =
    arrowDirection === 'up' ||
    (showArrow === undefined && level.toLowerCase().includes('higher'));

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="rounded-2xl p-5 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
    >
      <div>
        {/* White Circular Icon Container matching Adobe XD */}
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xs">
          <img
            src={iconSrc}
            alt={iconAlt || label}
            className="w-16 h-16 object-contain"
          />
        </div>

        <p className="text-base font-medium text-[#072635] mt-4 leading-tight">
          {label}
        </p>

        <p className="text-3xl font-extrabold text-[#072635] mt-1 tracking-tight">
          {value}
          {unit ? ` ${unit}` : ''}
        </p>
      </div>

      <div className="text-sm text-[#072635] font-normal mt-4 flex items-center gap-1.5">
        {isLower && (
          <img src="/assets/ArrowDown.svg" alt="" className="w-2.5 h-1.5 shrink-0" />
        )}
        {isHigher && (
          <img src="/assets/ArrowUp.svg" alt="" className="w-2.5 h-1.5 shrink-0" />
        )}
        <span>{level}</span>
      </div>
    </div>
  );
};
