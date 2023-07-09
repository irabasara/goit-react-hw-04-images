import { Component } from 'react';
import css from './modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    // window.addEventListener('click', this.handleBackdropClick);
  }

  handleKeyDown = e => {
    if (e.code === `Escape`) {
      this.props.onModalClose();
    }
  };

  handleBackdropeClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.largeImage;

    return (
      <div className={css.overlay} onClick={this.handleBackdropeClick}>
        <div>
          <img className={css.modal} src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
