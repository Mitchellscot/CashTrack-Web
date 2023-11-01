import classNames from 'classnames';
import styles from './download.module.scss';

export default function Page() {
  const container = classNames(styles.container, 'flex-grow-1 container-fluid');
  return <div>This is where you would be able to pick a download file.</div>;
}
