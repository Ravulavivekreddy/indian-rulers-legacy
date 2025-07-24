
import React from 'react';
import { Crown, Shield, Sword } from 'lucide-react';
import { Kingdom } from '@/data/kingdoms';

interface KingdomPinProps {
  kingdom: Kingdom;
  isSelected: boolean;
  onClick: () => void;
  currentYear: number;
}

const KingdomPin: React.FC<KingdomPinProps> = ({ kingdom, isSelected, onClick, currentYear }) => {
  const getIcon = () => {
    switch (kingdom.importance) {
      case 'major':
        return Crown;
      case 'medium':
        return Shield;
      case 'minor':
        return Sword;
      default:
        return Crown;
    }
  };

  const getSize = () => {
    switch (kingdom.importance) {
      case 'major':
        return 'h-6 w-6';
      case 'medium':
        return 'h-5 w-5';
      case 'minor':
        return 'h-4 w-4';
      default:
        return 'h-6 w-6';
    }
  };

  const Icon = getIcon();

  // Use precise SVG coordinates from the kingdom data
  const x = (kingdom.territory.x / 800) * 100; // Convert to percentage based on SVG viewBox width
  const y = (kingdom.territory.y / 900) * 100; // Convert to percentage based on SVG viewBox height

  // More restrictive boundaries to ensure pins stay within India map shape
  // India map roughly spans from 10% to 85% horizontally and 20% to 90% vertically within the SVG
  const constrainedX = Math.max(12, Math.min(80, x));
  const constrainedY = Math.max(25, Math.min(85, y));

  return (
    <button
      onClick={onClick}
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border-2 transition-all duration-300 hover:scale-125 shadow-lg z-10 ${
        isSelected
          ? `bg-white border-heritage-maroon text-heritage-maroon shadow-xl scale-110`
          : `bg-white border-current hover:shadow-xl`
      }`}
      style={{
        left: `${constrainedX}%`,
        top: `${constrainedY}%`,
        color: kingdom.stateColor
      }}
      title={`${kingdom.name} (${kingdom.startYear}-${kingdom.endYear})`}
    >
      <Icon className={getSize()} />
    </button>
  );
};

export default KingdomPin;
