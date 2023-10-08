import classNames from 'classnames';
import styles from './HomeHero.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeHero() {
  const logoContainer = classNames('m-2', styles.logoContainer);
  const heroImageContainer = classNames(
    'col-12 col-md-6 mx-auto d-flex justify-content-center align-self-center',
    styles.heroImageContainer
  );
  const line = classNames('mb-3', styles.line);
  return (
    <div className="row d-flex mt-3 mt-md-5 justify-content-center">
      <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-4 mb-md-5">
        <h1 className="text-center">
          <em>Get your finances on track</em>
        </h1>
        <div className={logoContainer}>
          <Image
            src="/hero-logo.png"
            width={400}
            height={215}
            alt="the cash track logo"
            className={styles.logo}
          />
        </div>
        <h2 className="h3 mb-3 text-center">
          A free personal budget application
        </h2>
        <div className={line}></div>
        <div className="d-flex">
          <Link
            target="_blank"
            href="https://demo.cashtrack.net"
            className="btn btn-success btn-lg me-3"
          >
            View Demo
          </Link>
          <Link href="/Documentation" className="btn btn-info btn-lg me-3">
            Get Started
          </Link>
        </div>
      </div>
      <div className={heroImageContainer}>
        <Image
          src="/hero.png"
          width={621}
          height={438}
          alt="a desktop image of the cash track program"
        />
      </div>
    </div>
  );
}
