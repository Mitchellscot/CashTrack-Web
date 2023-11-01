import classNames from 'classnames';
import styles from './documentation.module.scss';

export default function Page() {
  const container = classNames(styles.container, 'flex-grow-1 container-fluid');
  return (
    <div className={container}>
      This is where you would learn how to use the application.
    </div>
  );
}
