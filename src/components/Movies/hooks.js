import { useEffect, useState } from "react";

function getWindowWidth() {
  return window.innerWidth;
}

export function useResultSize() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    let called = false;
    const updateDimension = () => {
      if (called === false) {
        called = true;
        setTimeout(() => {
          called = false;
          setWindowWidth(getWindowWidth());
        }, 200);
      }
    };

    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [windowWidth]);

  let resultSize = 12;
  if (windowWidth < 1024) {
    resultSize = 8;
  }
  if (windowWidth < 767) {
    resultSize = 5;
  }
  return resultSize;
}
