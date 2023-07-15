import { useEffect } from 'react';
import css from './modal.module.css';

export const Modal = ({ onModalClose, largeImage }) => {
  const handleBackdropeClick = e => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === `Escape`) {
        onModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  const { largeImageURL, tags } = largeImage;

  return (
    <div className={css.overlay} onClick={handleBackdropeClick}>
      <div>
        <img className={css.modal} src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

