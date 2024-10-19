import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useLockBodyScroll } from './useLockBodyScroll';

const TestComponent = ({ isLocked }: { isLocked: boolean }) => {
  useLockBodyScroll(isLocked);
  return <div />;
};

describe('useLockBodyScroll', () => {
  let originalScrollTo: any;

  beforeEach(() => {
    // Сохранение оригинальной функции scrollTo
    originalScrollTo = window.scrollTo;
    // Мокирование функции scrollTo
    window.scrollTo = jest.fn();
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
  });

  afterEach(() => {
    // Восстановление оригинальной функции scrollTo после каждого теста
    window.scrollTo = originalScrollTo;
    cleanup(); // Очистить DOM после каждого теста
  });

  test('locks body scroll when isLocked is true', () => {
    render(<TestComponent isLocked={true} />);
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.position).toBe('fixed');
    expect(document.body.style.top).toBe('-100px');
  });

  test('unlocks body scroll when isLocked is false and restores original style', () => {
    render(<TestComponent isLocked={true} />); // Сначала заблокировать
    render(<TestComponent isLocked={false} />); // Затем разблокировать

    expect(document.body.style.overflow).toBe('unset');
    expect(document.body.style.position).toBe('unset');
    expect(document.body.style.top).toBe('-100px');
  });

  test('does not alter body styles when initially unlocked', () => {
    render(<TestComponent isLocked={false} />);
    expect(document.body.style.overflow).toBe('unset');
    expect(document.body.style.position).toBe('unset');
    expect(document.body.style.top).toBe('-100px');
  });
});
