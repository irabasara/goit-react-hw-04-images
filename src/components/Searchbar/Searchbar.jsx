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

// export class Searchbar extends Component {
//   state = {
//     search: '',
//   };

//   handlerChange = e => {
//     this.setState({ search: e.target.value.toLowerCase() });
//   };

//   handlerSubmit = e => {
//     e.preventDefault();

//     if (this.state.search.trim() === '') {
//       alert('enter your search');
//       return;
//     }

//     this.props.onSubmit(this.state.search);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       search: '',
//     });
//   };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.searchForm} onSubmit={this.handlerSubmit}>
//           <button type="submit" className={css.button}>
//             <span>{<BsSearch size="18px" />}</span>
//           </button>

//           <input
//             className={css.input}
//             type="text"
//             value={this.state.search}
//             placeholder="Search images and photos"
//             onChange={this.handlerChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }
