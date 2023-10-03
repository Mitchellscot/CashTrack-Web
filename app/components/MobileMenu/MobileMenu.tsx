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
                <li className="nav-item">
                    Home
                </li>   
                </ul>
            </nav>
        </div>
    );
}