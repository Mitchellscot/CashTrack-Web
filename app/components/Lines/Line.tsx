import classNames from 'classnames';
import styles from './Line.module.scss';

interface LineBlueGreenProps {
  direction?: 'blueGreen' | 'greenBlue';
  className?: string;
}

export default function LineBlueGreen({
  className = '',
  direction = 'blueGreen',
}: LineBlueGreenProps) {
  const classes = classNames(className, {
    [styles.lineBlueGreen]: direction === 'blueGreen',
    [styles.lineGreenBlue]: direction === 'greenBlue',
  });
  return <div className={classes}></div>;
}
