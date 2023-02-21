import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseURL } from '../constants/constants.js';

const initialState = {
  loading: false,
  movies: []
}

const getMoviesAsync = async (searchQuery) => {
  const response = await fetch(`${baseURL}/search?query=${searchQuery}`)
  return await response.json();
}

const getMovies = createAsyncThunk("search/getMovies", getMoviesAsync)

const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: {
    [getMovies.pending]: (state, _) => {
      state.loading = true
    },
    [getMovies.fulfilled]: (state, action) => {
      state.loading = false
      state.movies = action.payload.results
    },
    [getMovies.rejected]: (state, _) => {
      state.loading = false
    }
  }
})

export { getMovies }
export default searchSlice.reducer
