import { useCallback, useState } from "react";
import "./MoviesCard.css";
import mainApi from "../../utils/MainApi";

const prettifyDuration = (duration) => {
  if (!duration) return "";
  const hours = Math.floor(duration / 60);
  const hoursStr = `${hours}ч`;
  const minutes = Math.floor(duration % 60);
  const minutesStr = `${minutes}м`;
  return [hours && hoursStr, minutes && minutesStr].filter(Boolean).join(" ");
};


function MoviesCard({ movie, likeId: _likeId, likeType = "heart", removeById }) {
  const [likeId, setLikeId] = useState(_likeId);
  const [isLiked, setIsLiked] = useState(!!likeId);
  const handleClickLike = useCallback(() => {
    if (isLiked) {
      mainApi
        .setDislikeMovie(likeId)
        .then(() => {
          setIsLiked(false);
          removeById?.(likeId);
        })
        .catch(() => {});
    } else {
      mainApi
        .setLikeMovie(movie)
        .then((res) => {
          setIsLiked(true);
          setLikeId(res?._id);
        })
        .catch(() => {});
    }
  }, [isLiked, setIsLiked, removeById]);

  const redirectToTrailer = () => {
    let otherWindow = window.open();
    otherWindow.location = movie.trailerLink;
  };
  const imgUrl =
    typeof movie?.image === "string"
      ? movie?.image
      : `https://api.nomoreparties.co${movie?.image?.url}`;

  return (
    <div className="movie">
      <img
        src={imgUrl}
        className="movie__image"
        alt="Постер к фильму"
        onClick={redirectToTrailer}
      />
      <div className="movie__container">
        <h2 className="movie__title">{movie?.nameRU}</h2>
        <div className="movie__like-container">
          {likeType === "heart" ? (
            <button
              className={`movie__like-button ${
                isLiked ? "movie__like-button_active" : "movie__like-button"
              } `}
              type="button"
              onClick={handleClickLike}
            />
          ) : (
            <button
              className="movie__button-delete"
              type="button"
              onClick={handleClickLike}
            />
          )}
        </div>
      </div>
      <p className="movie__duration">{prettifyDuration(movie?.duration)}</p>
    </div>
  );
}

export default MoviesCard;
