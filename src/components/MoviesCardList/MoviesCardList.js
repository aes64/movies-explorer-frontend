import "./MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useResultSize } from "../Movies/hooks";
import { LIKED_MOVIES } from "../../utils/localStorageConstants";

function MoviesCardList({ movies }) {
  const resultSize = useResultSize();
  const [totalSize, setTotalSize] = useState(resultSize);
  const [pagedMovies, setPagedMovies] = useState(movies.slice(0, resultSize));
  const likedMovies = useMemo(() => {
    let res = [];
    try {
      res = JSON.parse(localStorage.getItem(LIKED_MOVIES)) || [];
    } catch (e) {}
    return res;
  }, []);
  const getLikeId = useCallback(
    (id) => likedMovies.find((item) => item.movieId === id)?._id,
    [likedMovies],
  );

  useEffect(() => {
    setPagedMovies(movies.slice(0, totalSize));
  }, [movies]);
  const loadMore = useCallback(() => {
    setPagedMovies(movies.slice(0, totalSize + resultSize));
    setTotalSize(totalSize + resultSize);
  }, [setPagedMovies, movies, pagedMovies, resultSize]);

  return (
    <div className="movies-list">
      <div className="movies-card">
        {pagedMovies.map((movie) => (
          <MoviesCard
            key={movie?.id}
            movie={movie}
            likeId={getLikeId(movie?.id)}
          />
        ))}
      </div>
      <div className="movies__container">
        <button className="movies__button-more" onClick={loadMore}>
          Ещё
        </button>
      </div>
    </div>
  );
}

export default MoviesCardList;
