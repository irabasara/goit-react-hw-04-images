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

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', handleKeyDown);
//     // window.addEventListener('click', this.handleBackdropClick);
//   }

//   handleKeyDown = e => {
//     if (e.code === `Escape`) {
//       this.props.onModalClose();
//     }
//   };

//   handleBackdropeClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onModalClose();
//     }
//   };

//   render() {
//     const { largeImageURL, tags } = this.props.largeImage;

//     return (
//       <div className={css.overlay} onClick={this.handleBackdropeClick}>
//         <div>
//           <img className={css.modal} src={largeImageURL} alt={tags} />
//         </div>
//       </div>
//     );
//   }
// }
