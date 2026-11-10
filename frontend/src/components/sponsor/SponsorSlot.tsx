import type { SponsorSlot as Slot } from '@/lib/sponsors';
import type { SponsorCardVariant } from './SponsorCard';

interface SponsorSlotProps {
  slot: Slot;
  variant?: SponsorCardVariant;
  className?: string;
}

// Fork policy: no paid placements on login, dashboard or internal pages.
export default function SponsorSlot(props: SponsorSlotProps) {
  void props;
  return null;
}
