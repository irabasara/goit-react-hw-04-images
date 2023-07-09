import css from './loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={css.load}>
      {' '}
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="1"
        width="96"
        visible={true}
      />
    </div>
  );
};
