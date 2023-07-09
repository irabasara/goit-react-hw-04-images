import css from './button.module.css';

export const Button = ({ onCLick }) => {
  return (
    <button type="button" className={css.button} onClick={onCLick}>
      Load more
    </button>
  );
};
