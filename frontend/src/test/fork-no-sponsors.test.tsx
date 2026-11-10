import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { useSponsorsQuery } from '@/api/queries/useSponsorsQuery';
import SponsorSlot from '@/components/sponsor/SponsorSlot';

describe('fork policy: no paid sponsor placements', () => {
  test.each(['login', 'dashboard', 'page'] as const)('%s slot renders nothing', (slot) => {
    const { container } = render(<SponsorSlot slot={slot} />);
    expect(container.innerHTML).toBe('');
  });

  test('the panel never receives a sponsored item from its frontend query', () => {
    function QueryReader() {
      const result = useSponsorsQuery();
      return <output data-testid="result">{JSON.stringify(result)}</output>;
    }

    const { getByTestId } = render(<QueryReader />);
    expect(getByTestId('result').textContent).toBe(
      JSON.stringify({ data: { sponsors: [] }, fetched: true }),
    );
  });
});
