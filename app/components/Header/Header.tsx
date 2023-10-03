import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
    const img = classNames('mt-1 me-3', styles.logo);
    const anchor = classNames('d-flex brand col-md-2 d-none d-md-block text-center no-hyperlink-underline', styles.noHyperlinkUnderline);
    const logo = classNames('logo text-white pt-2 d-none d-xl-block', styles.logo);
    const navLink = classNames('nav-link text-white', styles.navLink);
    const hamburgerBtn = classNames('me-3', styles.hamburgerBtn);
    return (
        <header className="">
            <nav className="navbar navbar-expand-md bg-primary" data-bs-theme="dark">
                <div className="container-fluid d-flex justify-content-apart py-0">
                    <a className="navbar-brand text-uppercase fs-2 mx-0 d-flex" href="/">
                    <Image src='/chart.svg' height={50} width={50} className={img} alt="cashtrack logo" />
                        <span className="d-none d-lg-block">cashtrack</span>
                    </a>
                    
                    <ul className="navbar-nav justify-content-end" >
                        <li className="me-2 fs-5 nav-item d-none d-md-block">
                            <Link href='/About' className={navLink}>About</Link>
                        </li>
                        <li className="me-2 fs-5 nav-item d-none d-md-block">
                            <Link href='/Blog' className={navLink}>Blog</Link>
                        </li>
                        <li className="me-2 fs-5 nav-item d-none d-md-block">
                            <Link href='/Documentation' className={navLink}>Documentation</Link>
                        </li>
                        <li className="me-2 fs-5 nav-item d-none d-md-block">
                            <Link href='/Budget' className={navLink}>How To Budget</Link>
                        </li>
                        <li className="me-2 fs-5 nav-item d-none d-md-block">
                            <Link href='/Budget' className={navLink}>Download</Link>
                        </li>
                        <li className="d-none d-md-block">
                            <a href="https://demo.cashtrack.net" target="_blank">
                                <button className="btn btn-success" type="button">View Demo</button>
                            </a>
                        </li>
                        <li className="text-nowrap list-unstyled d-block d-md-none">
                            <button type="button" className={hamburgerBtn} data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                            <svg xmlns="http://www.w3.org/2000/svg" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" width="45" height="60" fill="#fff" className={styles.hamburger} viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>   
                        </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};