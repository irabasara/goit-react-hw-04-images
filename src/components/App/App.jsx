import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { Start } from 'components/Start/Start';
import { Button } from 'components/Button/Button';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import css from './app.module.css';
import Gallery from '../../utils/pixabayAPI';

export const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState(null);
  const [showBtn, setShowBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (search === '') {
      return;
    }
    setIsLoading(true);
    setShowBtn(false);
    Gallery.getGallery(search, page)
      .then(gallery => {
        if (gallery.hits.length === 0) {
          setIsEmpty(true);
          setIsLoading(false);
          setShowBtn(false);
        }
        setGallery(prevGallery => [...prevGallery, ...gallery.hits]);
        setShowBtn(page < Math.ceil(gallery.totalHits / 12));
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      })
      .finally(setIsEmpty(false));
  }, [page, search]);

  const handlerFormSubmit = search => {
    setSearch(search);
    setGallery([]);
    setPage(1);
  };

  const handleLoadMoreClick = () => {
    setPage(prevPage => (prevPage += 1));
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handlerFormSubmit} />
      {!search && <Start />}
      {search && <ImageGallery search={search} gallery={gallery} />}
      {isLoading && <Loader />}
      {showBtn && <Button onCLick={handleLoadMoreClick} />}
      {error && <Error message={'Ooops, try again'} />}
      {isEmpty && <Error message={`Ooops, we can't find ${search}`} />}
    </div>
  );
};
