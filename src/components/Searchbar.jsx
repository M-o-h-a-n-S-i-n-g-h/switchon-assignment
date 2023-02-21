import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchSuggestions from './SeachSuggestions.jsx';
import { getMovies } from '../redux/searchSlice.js';


const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const dispatch = useDispatch()
  const { movies: suggestions } = useSelector(state => state.searchMovies)
  
  const handleChange = (event) => {
    const query = event.target.value
    setSearchQuery(query)
    dispatch(getMovies(query))
  }
  
  return (
    <div>
      <input
        style={{ marginBottom: "20px" }}
        type="text"
        value={searchQuery}
        onChange={handleChange}
        name="searchInput"
      />
      <SearchSuggestions suggestions={suggestions} />
    </div>
  )
}

export default Searchbar;

// https://imdb-api.tprojects.workers.dev/search?query=captian marvel
