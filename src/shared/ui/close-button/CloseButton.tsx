import styles from './CloseButton.module.scss';
import clsx from 'clsx';
import CloseIcon from '@/shared/assets/icons/close-menu.svg';

interface CloseButtonProps {
  className?: string;
  color?: 'orange' | 'yellow' | 'blue' | 'white';
  onClick?: () => void;
}
export const CloseButton = (props: CloseButtonProps) => {
  const { className, color = 'white', onClick } = props;

  return (
    <button type='button' className={clsx(styles.button, styles[color], className)} onClick={onClick}>
      <CloseIcon />
    </button>
  );
};
