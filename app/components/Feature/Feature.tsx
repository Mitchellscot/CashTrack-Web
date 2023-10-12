import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Feature.module.scss';

interface FeatureProps {
  title: string;
  description: string;
  image: string;
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
    'col-12 col-6 d-flex flex-column justify-content-center p-5'
  );
  const imageContainer = classNames(
    styles.imageContainer,
    'col-12 col-6 rounded border shadow-lg'
  );
  const descriptionText = classNames(
    styles.description,
    'lead px-5 text-center'
  );
  return props.imagePosition.startsWith('r') ? (
    <div className="row d-flex mb-5">
      <div className={textContainer}>
        <h2 className="text-center">{props.title}</h2>
        <div className={descriptionText}>{props.description}</div>
      </div>
      <div className={imageContainer}>
        <Image
          src={props.image}
          alt=""
          width={props.imageWidth}
          height={props.imageHeight}
        />
      </div>
    </div>
  ) : (
    <div className="row d-flex mb-5">
      <div className={imageContainer}>
        <Image
          src={props.image}
          alt=""
          width={props.imageWidth}
          height={props.imageHeight}
          className=""
        />
      </div>
      <div className={textContainer}>
        <h2 className="text-center">{props.title}</h2>
        <div className={descriptionText}>{props.description}</div>
      </div>
    </div>
  );
}
