import { useEffect, useRef } from 'react';

/**
 * Хук для блокировки или разблокировки прокрутки тела страницы.
 *
 * Используется для предотвращения прокрутки основного содержимого страницы, например, при открытии модального окна.
 * Когда прокрутка блокируется, текущая позиция прокрутки сохраняется, так что пользователь может вернуться на ту же позицию после разблокировки.
 * Эффект применяется при изменении состояния `isLocked`.
 *
 * @param {boolean} isLocked Состояние блокировки прокрутки: `true` для блокировки, `false` для разблокировки.
 * @param {boolean} [isVisibleHeader=false] Флаг, указывающий, нужно ли показывать хедер блокировке
 */
export const useLockBodyScroll = (isLocked: boolean, isVisibleHeader: boolean = false) => {
  const scrollPosition = useRef<number>(0);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>('#header');

    if (isLocked) {
      const positionY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${positionY}px`;
      scrollPosition.current = positionY;
      document.documentElement.style.overscrollBehaviorY = 'none';

      if (header && !isVisibleHeader) {
        header.style.opacity = '0';
      }
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.top = 'unset';
      window.scrollTo(0, scrollPosition.current);
      document.documentElement.style.overscrollBehaviorY = 'auto';

      if (header && !isVisibleHeader) {
        header.style.opacity = '1';
      }
    }
  }, [isLocked, isVisibleHeader]);
};
