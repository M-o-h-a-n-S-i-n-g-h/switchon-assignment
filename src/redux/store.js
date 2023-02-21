import { configureStore} from '@reduxjs/toolkit';
import searchMoviesReducer from "./searchSlice"
import movieDetailsReducer from "./movieDetailsSlice"
import filterReviewReducer from "./filterReviewSlice"

export const store = configureStore({
  reducer: {
    searchMovies: searchMoviesReducer,
    movieDetail: movieDetailsReducer,
    filterReview: filterReviewReducer
  }
})
