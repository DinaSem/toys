import React from 'react';
import styles from './Breadcrumbs.module.scss';
import Link from 'next/link';

interface ILink {
  link: string;
  name: string;
}

interface BreadcrumbsProps {
  links: ILink[];
}
const crumbsUrls = {
  list: 'https://schema.org/BreadcrumbList',
  item: 'https://schema.org/ListItem',
};

export const Breadcrumbs = ({ links }: BreadcrumbsProps) => {
  return (
    <ul className={styles.breadcrumbs} itemScope itemType={crumbsUrls.list}>
      <li itemProp='itemListElement' itemScope itemType={crumbsUrls.item}>
        <Link href='/' itemProp='item'>
          <span itemProp='name'>Главная</span>
          <meta itemProp='position' content='1' />
        </Link>
      </li>
      {links.map((el, index) => {
        return (
          <React.Fragment key={index}>
            <span>/</span>
            <li itemProp='itemListElement' itemScope itemType={crumbsUrls.item}>
              {index !== links.length - 1 ? (
                <Link href={el.link} itemProp='item'>
                  {el.name}
                </Link>
              ) : (
                <p itemProp='item'>{el.name}</p>
              )}
              <meta itemProp='position' content={`${index + 2}`} />
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};
