import { renderHook } from '@testing-library/react';
import useDate from './useDate';

describe('useDate', () => {
  it('should return the default locale and associated formats', async () => {
    const { result } = renderHook(() => useDate());
    const date = '1/10/2024 6:10 PM';
    expect(result.current.locale).toBe('en');
    expect(result.current.formatDateTime(date)).toBe('01/10/2024 6:10 PM');
    expect(result.current.formatTime(date)).toBe('6:10 PM');
    expect(result.current.formatFullDate(date)).toBe('Jan 10, 2024');
    expect(result.current.formatFullDateTime(date)).toBe('Jan 10, 2024 6:10 PM');
  });
});

export {}