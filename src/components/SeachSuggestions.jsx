import Suggestion from './Suggestion.jsx';

const SearchSuggestions = ({ suggestions }) => {
  return (
    <div className="suggestions">
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <Suggestion suggestion={suggestion} key={suggestion.id} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchSuggestions
