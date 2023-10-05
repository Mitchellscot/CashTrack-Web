import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  const copyrightText = classNames(styles.copyright, "ms-5 text-white pt-2");
  const year = new Date().getFullYear();
  const footer = classNames(
    styles.container,
    "d-flex justify-content-between align-items-center bg-primary fixed-bottom",
  );
  const socialLink = classNames(styles.socialLink, "text-white my-2 me-4");
  const socialText = classNames(
    styles.copyright,
    "text-white fs-5 me-3 d-none d-md-inline-block",
  );
  return (
    <footer className={footer}>
      <Link href="https://www.mitchellscott.dev" legacyBehavior target="_blank">
        <span className={copyrightText}>&copy;{` ${year} Mitchell Scott`}</span>
      </Link>
      <Link
        href="https://github.com/Mitchellscot/cashtrack"
        legacyBehavior
        target="_blank"
      >
        <div className={socialLink}>
          <span className={socialText}>View code on GitHub</span>
          <Image src="/github.svg" height="40" width="40" alt="" />
        </div>
      </Link>
    </footer>
  );
}
