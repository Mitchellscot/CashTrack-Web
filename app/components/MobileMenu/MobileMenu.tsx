import Link from 'next/link';
import styles from './MobileMenu.module.scss';
import classNames from 'classnames';

export const MobileMenu = () => {

    return (
        <div className="offcanvas offcanvas-start" tabIndex={-1} id="mobileMenu">
            <div className="offcanvas-header d-flex justify-content-end">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <nav className="offcanvas-body">
                <ul className="navbar-nav">
                    <li className="nav-item mb-4">
                        <button className="btn btn-success btn-lg" type="button">
                            <Link href="https://demo.cashtrack.net" className={styles.demoBtn}>View Demo</Link>
                        </button>
                    </li>
                    <li className="nav-item mb-3">
                        <h3 className="fw-bolder">
                            <Link href="/About" className={styles.link}>About</Link>
                        </h3>
                    </li>
                    <li className="nav-item mb-3">
                        <h3 className="fw-bolder">
                            <Link href="/Blog" className={styles.link}>Blog</Link>
                        </h3>
                    </li>
                    <li className="nav-item mb-3">
                        <h3 className="fw-bolder">
                            <Link href="/Documentation" className={styles.link}>Documentation</Link>
                        </h3>
                    </li>
                    <li className="nav-item mb-3">
                        <h3 className="fw-bolder">
                            <Link href="/Budget" className={styles.link}>How To Budget</Link>
                        </h3>
                    </li>
                    <li className="nav-item mb-3">
                        <h3 className="fw-bolder">
                            <Link href="/Download" className={styles.link}>Download</Link>
                        </h3>
                    </li>
                </ul>
            </nav>
        </div>
    );
}