'use client';

import { contacts } from '@/shared/consts/contacts';
import { Button } from '@/shared/ui/button/Button';
import { useLockBodyScroll } from '@/shared/lib/useLockBodyScroll/useLockBodyScroll';
import styles from './Menu.module.scss';

interface MenuProps {
  isOpen: boolean;
  children: React.ReactNode;
  setIsOpen: (arg: boolean) => void;
}

export const Menu = ({ isOpen, children, setIsOpen }: MenuProps) => {
  useLockBodyScroll(isOpen, true);

  return (
    <div className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menuContent} data-lenis-prevent>
        <div className={styles.menuLinksContainer} onClick={() => setIsOpen(false)}>
          {children}
        </div>
        <div className={styles.contacts}>
          <ul>
            <div className={styles.phoneAndEmail}>
              <li className={styles.phone}>{contacts.phoneModified}</li>
              <li className={styles.email}>{contacts.email}</li>
            </div>
            <li className={styles.address}>{contacts.address}</li>
          </ul>
          <Button className={styles.callButton} type='button' variaton='btn'>
            Заказать звонок
          </Button>
        </div>
      </div>
    </div>
  );
};
