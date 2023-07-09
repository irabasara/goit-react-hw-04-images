import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import css from './image-gallery.module.css';


export class ImageGallery extends Component {
  state = {
    isShowModal: false,
    largeImage: {
      largeImageURL: null,
      tags: '',
    },
  };

  handleimageClick = largeImage => {
    this.setState({ largeImage, isShowModal: true });
  };

  handleLargeImageClose = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { isShowModal, largeImage } = this.state;

    return (
      <>
        <ul className={css.imageGallery}>
          {this.props.gallery.map(img => (
            <ImageGalleryItem
              key={img.id}
              gallery={img}
              onClick={this.handleimageClick}
            />
          ))}
        </ul>
        {isShowModal && (
          <Modal
            largeImage={largeImage}
            onModalClose={this.handleLargeImageClose}
          />
        )}
      </>
    );
  }
}
