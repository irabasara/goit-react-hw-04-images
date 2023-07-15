import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import css from './image-gallery.module.css';

export const ImageGallery = ({ gallery }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState({
    largeImageURL: null,
    tags: '',
  });

  const handleimageClick = largeImage => {
    const { largeImageURL, tags } = largeImage;

    setLargeImage({
      largeImageURL,
      tags,
    });
    setIsShowModal(true);
  };

  const handleLargeImageClose = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <ul className={css.imageGallery}>
        {gallery.map(img => (
          <ImageGalleryItem
            key={img.id}
            gallery={img}
            onClick={handleimageClick}
          />
        ))}
      </ul>
      {isShowModal && (
        <Modal largeImage={largeImage} onModalClose={handleLargeImageClose} />
      )}
    </>
  );
};

