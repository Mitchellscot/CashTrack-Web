import classNames from 'classnames';
import React from 'react';
import { NavigationLinks } from '../../constants/NavigationLinks';
import styles from './DocumentationNav.module.scss';
import Link from 'next/link';
interface DocumentationNavProps {
  activeLink: NavigationLinks;
}

const DocumentationNav: React.FC<DocumentationNavProps> = ({ activeLink }) => {
  const listItemStyle = classNames(
    '',
    'list-group-item list-group-item-action text-primary'
  );
  const activeListItemStyle = classNames(
    'active',
    'list-group-item list-group-item-action text-white'
  );
  const navigationLinks: string[] = Object.values(NavigationLinks);
  return (
    <ul className="list-group mt-5">
      {navigationLinks.map((link, index) => {
        return (
          <Link
            className={
              activeLink === link ? activeListItemStyle : listItemStyle
            }
            key={index}
            href={`/documentation/${link.replaceAll(' ', '-').toLowerCase()}`}
          >
            {link}
          </Link>
        );
      })}
    </ul>
  );
};

export default DocumentationNav;
