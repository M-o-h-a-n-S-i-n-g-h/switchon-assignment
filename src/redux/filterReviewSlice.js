import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  reviews: []
}

const filterReviews = async ({ reviewId, filter, sortOrder }) => {
  const url = new URL(`https://imdb-api.tprojects.workers.dev/reviews/${reviewId}`)
  url.searchParams.append("option", filter)
  url.searchParams.append("sortOrder", sortOrder)
  const response = await fetch(url)
  return await response.json();
}

const filterReviewById = createAsyncThunk("filter/filterReviewById", filterReviews)

const filterReviewSlice = createSlice({
  name: "filterReview",
  initialState,
  extraReducers: {
    [filterReviewById.pending]: (state, _) => {
      state.loading = true
    },
    [filterReviewById.fulfilled]: (state, action) => {
      state.loading = false
      state.reviews = action.payload?.reviews
    },
    [filterReviewById.rejected]: (state, _) => {
      state.loading = false
    }
  }
})


export { filterReviewById }
export default filterReviewSlice.reducer
