
import { Kingdom } from './types';
import { ancientKingdoms } from './kingdoms/ancient';
import { medievalKingdoms } from './kingdoms/medieval';
import { modernKingdoms } from './kingdoms/modern';

// Export the Kingdom interface for backward compatibility
export type { Kingdom } from './types';

// Combine all kingdoms from different periods
export const kingdoms: Kingdom[] = [
  ...ancientKingdoms,
  ...medievalKingdoms,
  ...modernKingdoms
];

// Export utility functions
export const getKingdomsForYear = (year: number): Kingdom[] => {
  return kingdoms.filter(kingdom => year >= kingdom.startYear && year <= kingdom.endYear);
};

export const getRulersForYear = (kingdom: Kingdom, year: number) => {
  return kingdom.rulers.filter(ruler => year >= ruler.reignStart && year <= ruler.reignEnd);
};
