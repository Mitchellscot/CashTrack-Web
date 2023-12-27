import Link from 'next/link';
import styles from './MobileMenu.module.scss';
import classNames from 'classnames';
import { NavigationLinks } from '../../constants/NavigationLinks';
import Image from 'next/image';

export const MobileMenu = () => {
  const collapsedLink = classNames(styles.link, 'text-primary lead');
  const collapsedListItem = classNames(styles.link, 'mb-2 ps-3');
  const navigationLinks: string[] = Object.values(NavigationLinks);
  const img = classNames('mt-1 me-3', styles.logo);
  const line = classNames('mb-4', styles.line);
  return (
    <div className="offcanvas offcanvas-start" tabIndex={-1} id="mobileMenu">
      <div className="offcanvas-header d-flex justify-content-end">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <nav className="offcanvas-body">
        <ul className="navbar-nav">
          <li className="nav-item mb-2">
            <a
              className="navbar-brand text-uppercase fs-2 mx-0 d-flex"
              href="/"
            >
              <span className="text-primary fw-bold">cash track</span>
            </a>
          </li>
          <div className={line}></div>
          <li className="nav-item mb-4">
            <button className="btn btn-success btn-lg" type="button">
              <Link
                href="https://demo.cashtrack.net"
                className={styles.demoBtn}
              >
                View Demo
              </Link>
            </button>
          </li>
          <li className="nav-item mb-3">
            <h3 className="fw-bolder">
              <a
                href="#documentationLinks"
                data-bs-toggle="collapse"
                className={styles.link}
              >
                Documentation
              </a>
            </h3>
          </li>
          <ul className="collapse list-unstyled mb-3" id="documentationLinks">
            {navigationLinks.map((link, index) => {
              return (
                <li key={index} className={collapsedListItem}>
                  <Link
                    className={collapsedLink}
                    href={`/documentation/${link
                      .replaceAll(' ', '-')
                      .toLowerCase()}`}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
          <li className="nav-item mb-3">
            <h3 className="fw-bolder">
              <Link href="/budget" className={styles.link}>
                How To Budget
              </Link>
            </h3>
          </li>
          <li className="nav-item mb-3">
            <h3 className="fw-bolder">
              <Link href="/download" className={styles.link}>
                Download
              </Link>
            </h3>
          </li>
        </ul>
      </nav>
    </div>
  );
};
