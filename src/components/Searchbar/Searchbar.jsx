import { useState } from 'react';
import css from './searchbar.module.css';
import { BsSearch } from 'react-icons/bs';

export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handlerChange = e => {
    setSearch(e.target.value.toLowerCase());
  };

  const handlerSubmit = e => {
    e.preventDefault();

    if (search.trim() === '') {
      alert('enter your search');
      return;
    }

    onSubmit(search);
    reset();
  };

  const reset = () => {
    setSearch('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handlerSubmit}>
        <button type="submit" className={css.button}>
          <span>{<BsSearch size="18px" />}</span>
        </button>

        <input
          className={css.input}
          type="text"
          value={search}
          placeholder="Search images and photos"
          onChange={handlerChange}
        />
      </form>
    </header>
  );
};
