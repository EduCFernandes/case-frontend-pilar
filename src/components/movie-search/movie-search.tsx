import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function MovieSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const initialQuery = searchParams.get('query') || '';
    setQuery(initialQuery);
  }, [searchParams]);

  const handleSearch = () => {
    if (location.pathname !== '/search') {
      navigate(`/search?query=${query}`);
    } else {
      setSearchParams({ query });
    }
  };

  return (
    <div className="flex gap-4" data-testid="test-movie-search">
      <input
        type="text"
        placeholder="Search for a movie"
        className="w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        data-testid="test-search-input"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default MovieSearch;
