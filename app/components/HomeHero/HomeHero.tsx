import classNames from 'classnames';
import styles from './HomeHero.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Line from '../Lines/Line';

export default function HomeHero() {
  const logoContainer = classNames('m-2', styles.logoContainer);
  const heroImageContainer = classNames(
    'col-12 col-md-6 mx-auto d-flex justify-content-center align-self-center',
    styles.heroImageContainer
  );
  const line = classNames('mb-4', styles.line);
  return (
    <div className="row d-flex mt-3 mt-md-5 justify-content-center mb-5">
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
        <h2 className="h3 mb-4 text-center">
          A free personal budget application
        </h2>
        <Line direction="greenBlue" className="mb-4" />
        <div className="d-flex">
          <Link
            href="/documentation/getting-started"
            className="btn btn-info btn-lg me-3"
          >
            Get Started
          </Link>
          <Link
            target="_blank"
            href="https://github.com/Mitchellscot/CashTrack/releases/download/prerelease/CashTrack-0.9.0.exe"
            download
            className="btn btn-success btn-lg me-3"
          >
            Download
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
