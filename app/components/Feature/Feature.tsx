import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Feature.module.scss';

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  mobileImage: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition: string;
  link: string;
  linkText: string;
}

export default function Feature(props: FeatureProps) {
  const textContainer = classNames(
    styles.textContainer,
    'col-12 col-md-6 d-flex flex-column justify-content-center p-5'
  );
  const imageContainer = classNames(
    styles.imageContainer,
    'col-12 col-md-6 d-flex justify-content-center align-items-center'
  );
  const descriptionText = classNames(styles.description, 'lead px-5');
  return props.imagePosition.startsWith('r') ? (
    <div className="row d-flex mb-4">
      <div className={textContainer}>
        <h2 className="text-center">{props.title}</h2>
        <div className={descriptionText}>{props.description}</div>
      </div>
      <div className={imageContainer}>
        <Image
          src={props.mobileImage}
          alt={props.imageAlt}
          width={props.imageWidth}
          height={props.imageHeight}
          className="d-lg-none rounded border shadow-lg"
        />
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={props.imageWidth}
          height={props.imageHeight}
          className="d-none d-lg-block rounded border shadow-lg"
        />
      </div>
    </div>
  ) : (
    <div className="row d-flex mb-4 flex-wrap-reverse flex-md-nowrap">
      <div className={imageContainer}>
        <Image
          src={props.mobileImage}
          alt={props.imageAlt}
          width={props.imageWidth}
          height={props.imageHeight}
          className="d-lg-none rounded border shadow-lg"
        />
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={props.imageWidth}
          height={props.imageHeight}
          className="d-none d-lg-block rounded border shadow-lg"
        />
      </div>
      <div className={textContainer}>
        <h2 className="text-center">{props.title}</h2>
        <div className={descriptionText}>{props.description}</div>
      </div>
    </div>
  );
}
