import styles from './ArrowButton.module.scss';
import Arrow from '@/shared/assets/icons/arrow.svg';
import clsx from 'clsx';

interface ArrowButtonProps {
  type: 'left' | 'right';
  className?: string;
  color?: 'orange' | 'yellow' | 'blue';
  disabled?: boolean;
  onClick?: () => void;
}
export const ArrowButton = (props: ArrowButtonProps) => {
  const { type, className, color = 'orange', disabled = false, onClick } = props;

  return (
    <button
      type='button'
      className={clsx(styles.button, type === 'left' && styles.left, styles[color], className)}
      onClick={onClick}
      disabled={disabled}
    >
      <Arrow />
    </button>
  );
};
