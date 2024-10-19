import { useBackgroundChange } from '@/shared/lib/useBackgroundChange/useBackgroundChange';
import { useRef } from 'react';

interface BackgroundChangeSectionProps {
  children: React.ReactNode;
  colorStart: string;
  colorEnd: string;
  className?: string;
}
export const BackgroundChangeSection = ({
  children,
  colorStart,
  colorEnd,
  className,
}: BackgroundChangeSectionProps) => {
  const sectionRef = useRef(null);
  useBackgroundChange(sectionRef, colorStart, colorEnd);

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
};
