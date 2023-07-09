import css from './image-gallery-item.module.css';

export const ImageGalleryItem = ({ gallery, onClick }) => {
  const { tags, webformatURL, largeImageURL } = gallery;

  return (
    <li
      className={css.galleryItem}
      onClick={e => {
        e.preventDefault();
        onClick({ largeImageURL, tags });
      }}
    >
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
