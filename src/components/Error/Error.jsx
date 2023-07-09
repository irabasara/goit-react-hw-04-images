import { TbFaceIdError } from 'react-icons/tb';
import css from '../Start/start.module.css';

export const Error = ({ message }) => {
  return (
    <div className={css.start}>
      <h2>{message}</h2>
      <TbFaceIdError size="96" color="blue" />
    </div>
  );
};
