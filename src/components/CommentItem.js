import React, { useRef, useEffect } from "react";
import { getHumanDate } from "../helpers/dateHelper";
const Commentitem = ({ author_name, content, date, id }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.innerHTML = contentRef.current.innerText;
  }, []);

  return (
    <li>
      <p>{author_name}</p>
      <p ref={contentRef}>{content.rendered}</p>
      <p>{getHumanDate(date)}</p>
    </li>
  );
};

export default Commentitem;
