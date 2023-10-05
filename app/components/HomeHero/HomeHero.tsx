import classNames from "classnames";
import styles from "./HomeHero.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <div className="container d-flex mt-5">
      <div className="col d-flex flex-column align-items-center">
        <h1>Get your finances on track</h1>
        <Image
          src="/hero-logo.png"
          width={425}
          height={215}
          alt="the cash track logo"
          className="m-2"
        />
        <h2 className="h3 mb-4">A free personal budget application</h2>
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
      <div className="col">
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
