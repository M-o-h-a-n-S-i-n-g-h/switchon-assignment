import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../redux/movieDetailsSlice.js';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { movieDetail } = useSelector(state => state.movieDetail)
  
  useEffect(() => {
    dispatch(getMovieDetail(id || ''))
  }, [])
  
  const handleShowReview = () => {
    navigate(`/review`, { state: id })
  }
  
  return (
    <div>
      <h1>Movie Details page</h1>
      <div>
        <img src={movieDetail.image} width={100} height={100} alt={movieDetail.title} />
        <div>
          <h2>Plot</h2>
          <p>{movieDetail.plot}</p>
        </div>
      </div>
      <button onClick={handleShowReview}>
        Show reviews
      </button>
    </div>
  )
}

export default MovieDetails
