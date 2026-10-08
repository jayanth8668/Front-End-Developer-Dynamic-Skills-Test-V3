import React from 'react';
import { DiagnosisRecord } from '../types/patient';
import { VitalCard } from './VitalCard';

interface VitalCardsProps {
  latestRecord?: DiagnosisRecord;
}

export const VitalCards: React.FC<VitalCardsProps> = ({ latestRecord }) => {
  const respValue = latestRecord?.respiratory_rate?.value ?? 20;
  const respLevel = latestRecord?.respiratory_rate?.levels ?? 'Normal';

  const tempValue = latestRecord?.temperature?.value ?? 98.6;
  const tempLevel = latestRecord?.temperature?.levels ?? 'Normal';

  const heartValue = latestRecord?.heart_rate?.value ?? 78;
  const heartLevel = latestRecord?.heart_rate?.levels ?? 'Lower than Average';

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <VitalCard
        label="Respiratory Rate"
        value={respValue}
        unit="bpm"
        level={respLevel}
        bgColor="#E0F3FA"
        iconSrc="/assets/RespiratoryRate.svg"
      />

      <VitalCard
        label="Temperature"
        value={tempValue}
        unit="°F"
        level={tempLevel}
        bgColor="#FFE6E9"
        iconSrc="/assets/Temperature.svg"
      />

      <VitalCard
        label="Heart Rate"
        value={heartValue}
        unit="bpm"
        level={heartLevel}
        bgColor="#FFE6E1"
        iconSrc="/assets/HeartBPM.svg"
      />
    </div>
  );
};
