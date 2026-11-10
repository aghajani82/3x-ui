import type { SponsorList } from '@/generated/types';

const EMPTY: SponsorList = { sponsors: [] };

// No advertisement request is made by this fork's frontend.
export function useSponsorsQuery() {
  return { data: EMPTY, fetched: true };
}
