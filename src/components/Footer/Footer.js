import React from "react";
import "./Footer";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__text footer__text_color">©2023</p>
        <div className="footer__information">
          <a
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
            className="footer__text footer__text_left"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="footer__text footer__text_left"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
