import Link from 'next/link';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  link?: string;
  color?: 'orange' | 'yellow' | 'blue';
  variaton?: 'menu' | 'tab' | 'btn';
  transparent?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  openInNewWindow?: boolean;
}
export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    type = 'button',
    link,
    color = 'orange',
    variaton = 'btn',
    transparent = false,
    disabled,
    onClick,
    openInNewWindow = false,
  } = props;

  return (
    <>
      {link ? (
        <Link
          target={openInNewWindow ? '_blank' : undefined}
          rel={openInNewWindow ? 'noopener noreferrer' : undefined}
          href={link}
          className={clsx(styles.button, styles[color], styles[variaton], className, {
            [styles.transparent]: transparent,
          })}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          className={clsx(styles.button, styles[color], styles[variaton], className, {
            [styles.transparent]: transparent,
          })}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </>
  );
};
