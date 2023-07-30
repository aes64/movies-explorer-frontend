import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import "./Error";

function Error() {
  const history = useHistory();
  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <div className="error">
      <p className="error__404">404</p>
      <p className="error__text">Страница не найдена</p>
      <button onClick={goBack} className="error__button">
        Назад
      </button>
    </div>
  );
}

export default Error;
