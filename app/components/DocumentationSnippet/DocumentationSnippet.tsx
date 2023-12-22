import React from 'react';
import Image from 'next/image';
import styles from './DocumentationSnippet.module.scss';
import classNames from 'classnames';
interface DocumentationSnippetProps {
  header: number;
  title: string;
  description: string;
  image?: string | null;
  lineStyle?: 'none' | 'alt' | 'default';
  showAlert?: boolean;
  alertTitle?: string;
  alertDescription?: string;
}

const DocumentationSnippet: React.FC<DocumentationSnippetProps> = ({
  title,
  description,
  image,
  header,
  lineStyle,
  showAlert,
  alertTitle,
  alertDescription,
}) => {
  const headerStyles = classNames(styles.header, `h${header} text-center`);
  const line = classNames(
    'mb-4',
    lineStyle === 'alt' ? styles.lineAlt : styles.line
  );
  const textStyle = classNames(header === 1 ? 'lead' : '', styles.text, 'mb-4');
  return (
    <div className="mt-4">
      {header === 1 && <h1 className={headerStyles}>{title}</h1>}
      {header === 2 && <h2 className={headerStyles}>{title}</h2>}
      {header === 3 && <h3 className={headerStyles}>{title}</h3>}
      <p className={textStyle}>{description}</p>
      {/* TODO: Add image support */}
      {image && <Image src={image} alt="Snippet Image" />}
      {showAlert && (
        <div className="alert alert-dismissible alert-info mx-5 my-3">
          <p className="lead fw-bold">{alertTitle}</p>
          <p className="">{alertDescription}</p>
        </div>
      )}
      {lineStyle !== 'none' ? <div className={line}></div> : <span></span>}
    </div>
  );
};

export default DocumentationSnippet;
