import styles from './budget.module.scss';
import classNames from 'classnames';

export default function Page() {
  const container = classNames(styles.container, 'flex-grow-1 container-fluid');
  return <div className={container}></div>;
}
