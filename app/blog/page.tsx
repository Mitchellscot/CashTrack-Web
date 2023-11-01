import classNames from 'classnames';
import styles from './blog.module.scss';

export default function Page() {
  const container = classNames(styles.container, 'flex-grow-1 container-fluid');
  return (
    <div className={container}>
      This is where you would expect to see blog articles.
    </div>
  );
}
