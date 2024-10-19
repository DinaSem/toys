import { useEffect, useState } from 'react';

export const useDevice = (mobileBreakpoint = 540, tabletBreakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Проверяем только на клиенте
    if (typeof window !== 'undefined') {
      const mobileMediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
      const tabletMediaQuery = window.matchMedia(
        `(min-width: ${mobileBreakpoint + 1}px) and (max-width: ${tabletBreakpoint}px)`,
      );

      const handleMobileChange = () => setIsMobile(mobileMediaQuery.matches);
      const handleTabletChange = () => setIsTablet(tabletMediaQuery.matches);

      // Устанавливаем начальные значения
      setIsMobile(mobileMediaQuery.matches);
      setIsTablet(tabletMediaQuery.matches);

      // Добавляем слушатели на изменения медиа-запросов
      mobileMediaQuery.addEventListener('change', handleMobileChange);
      tabletMediaQuery.addEventListener('change', handleTabletChange);

      // Убираем слушатели при размонтировании
      return () => {
        mobileMediaQuery.removeEventListener('change', handleMobileChange);
        tabletMediaQuery.removeEventListener('change', handleTabletChange);
      };
    }
  }, [mobileBreakpoint, tabletBreakpoint]);

  return { isMobile, isTablet };
};
