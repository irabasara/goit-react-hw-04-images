import { Component } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';
import { Start } from 'components/Start/Start';
import { Button } from 'components/Button/Button';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import css from './app.module.css';
import Gallery from '../../utils/pixabayAPI';

export class App extends Component {
  state = {
    search: '',
    page: 1,
    showBtn: false,
    gallery: [],
    isLoading: false,
    error: null,
    isEmpty: false,
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ isLoading: true, showBtn: false });

      Gallery.getGallery(search, page)
        .then(gallery => {
          if (gallery.hits.length === 0) {
            this.setState({ isEmpty: true, isLoading: false, showBtn: false });
          }

          this.setState(prevState => ({
            gallery: [...prevState.gallery, ...gallery.hits],
            showBtn: page < Math.ceil(gallery.totalHits / 12),
            isLoading: false,
          }));
        })
        .catch(error => this.setState({ error, isLoading: false }))
        .finally(this.setState({ isEmpty: false }));
    }
  }

  handlerFormSubmit = search => {
    this.setState({
      search,
      gallery: [],
      page: 1,
    });
  };

  handleLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { search, showBtn, gallery, isLoading, error, isEmpty } = this.state;

    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handlerFormSubmit} />
        {!search && <Start />}
        <ImageGallery search={search} gallery={gallery} />
        {isLoading && <Loader />}
        {showBtn && <Button onCLick={this.handleLoadMoreClick} />}
        {error && <Error message={'Ooops, try again'} />}
        {isEmpty && <Error message={`Ooops, we can't find ${search}`} />}
      </div>
    );
  }
}
