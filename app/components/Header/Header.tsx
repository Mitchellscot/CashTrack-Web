import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

export const Header = () => {
    const img = classNames('d-none d-md-block d-xl-none pt-2', styles.image);
    const anchor = classNames('d-flex brand col-md-2 d-none d-md-block text-center no-hyperlink-underline', styles.noHyperlinkUnderline);
    const logo = classNames('logo text-white pt-2 d-none d-xl-block', styles.logo);
    return (
        <header className="d-flex justify-content-end justify-content-md-between p-0 bg-primary">
            <a href="/" className={anchor}>
                <span className={logo}>CASH TRACK</span>
                <Image src="/ct-short.png"
                    className={img} height={51} width={90} alt='cash track logo' />
            </a>
            <ul className="login-partial d-flex align-items-center list-unstyled">
                <li className="nav-item dropdown me-4" data-bs-theme="light">
                    <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="theme-menu" data-bs-toggle="dropdown" data-bs-display="static">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FFFFFF" className={styles.whiteIcon} viewBox="0 0 16 16">
                            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                        </svg>
                    </a>
                     {/* <ul className="dropdown-menu dropdown-menu-end list-unstyled">
                        <li className="color-theme-icon">
                            <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light">
                                @await Html.PartialAsync("Icons", new Icons()
                                {
                                    Icon = Icon.SunFill,
                                    Color = IconColors.Primary,
                                    Height = 22,
                                    Width = 22,
                                    Classes = ""
                                })
                                <span className="ms-2">Light</span>
                            </button>
                        </li>
                        <li className="color-theme-icon">
                            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark">
                                @await Html.PartialAsync("Icons", new Icons()
                                {
                                    Icon = Icon.MoonStarsFill,
                                    Color = IconColors.Primary,
                                    Height = 22,
                                    Width = 22,
                                    Classes = ""
                                })
                                <span className="ms-2">Dark</span>
                            </button>
                        </li>
                    </ul>  */}
                </li>
                {/* <li className="text-nowrap list-unstyled d-block d-md-none">
                    <button type="button" className="icon-button me-3" data-bs-toggle="offcanvas" data-bs-target="#offCanvasMenu">
                        @await Html.PartialAsync("Icons", new Icons()
                        {
                            Icon = Icon.List,
                            Color = IconColors.White,
                            Height = 60,
                            Width = 40,
                            Classes = "hamburger white-icon"
                        })
                    </button>
                </li> */}
            </ul>
        </header>
    );
};