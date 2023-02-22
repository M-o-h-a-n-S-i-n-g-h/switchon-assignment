import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { filterReviewById } from '../redux/filterReviewSlice.js';

const filters = ['helpfulness', 'votes', 'rating', 'dates']
const sortOrders = ['asc', 'desc']

const ReviewPage = () => {
  const dispatch = useDispatch()
  const { reviews, loading } = useSelector(state => state.filterReview)
  const { state: reviewId } = useLocation()
  
  const [filter, setFilter] = useState('helpfulness')
  const [sortOrder, setSortOrder] = useState('asc')
  
  useEffect(() => {
    dispatch(filterReviewById({ reviewId, filter, sortOrder }))
  }, [filter, sortOrder, dispatch])
  
  const handleFilters = (event) => {
    setFilter(event.target.value)
  }
  
  const handleSort = (event) => {
    setSortOrder(event.target.value)
  }
  
  return (
    <div>
      <h1>Reviews</h1>
      <div style={{ display: "flex", gap: "30px" }}>
        <select onChange={handleFilters}>
          {filters.map((filter, index) => (
            <option key={index} value={filter}>
              {filter}
            </option>
          ))}
        </select>
        <select onChange={handleSort}>
          {sortOrders.map((order, index) => (
            <option key={index} value={order}>
              {order}
            </option>
          ))}
        </select>
      </div>
      {/* Displaying the filtered and sorted Reviews here */}
      {loading ? <h2>Loading...</h2> : null}
      {reviews?.map((review) => (
        <div key={review.id}>
          <h2>{review.author}</h2>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  )
}

export default ReviewPage
