import { useNavigate } from 'react-router-dom';

const Suggestion = ({ suggestion }) => {
  const navigate = useNavigate()
  
  return (
    <div
      className="suggestions"
      style={{
        display: "flex",
        gap: "20px",
        cursor: "pointer"
      }}
      onClick={() => {
        navigate(`/movie/${suggestion.id}`)
      }}
    >
      <img width={70} height={70} src={suggestion.image} alt={suggestion.title} />
      <div className="movie-content">
        <h3>{suggestion.title}</h3>
        <p>{suggestion.year}</p>
      </div>
    </div>
  )
}

export default Suggestion
