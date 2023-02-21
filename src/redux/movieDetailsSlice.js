import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseURL } from '../constants/constants.js';

const initialState = {
  loading: false,
  movieDetail: {}
}

const getMovieDetailsAsync = async (movieId) => {
  const response = await fetch(`${baseURL}/title/${movieId}`)
  return await response.json();
}

const getMovieDetail = createAsyncThunk("movie/getMovieById", getMovieDetailsAsync)

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  extraReducers: {
    [getMovieDetail.pending]: (state, _) => {
      state.loading = true
    },
    [getMovieDetail.fulfilled]: (state, action) => {
      state.loading = false
      state.movieDetail = action.payload
    },
    [getMovieDetail.rejected]: (state, _) => {
      state.loading = false
    }
  }
})


export { getMovieDetail }
export default movieDetailsSlice.reducer
