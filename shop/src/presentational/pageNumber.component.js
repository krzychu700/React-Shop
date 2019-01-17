import React from "react";
import { Link } from "react-router-dom";

const PageNumbers = props => (
  <div>
    {[...Array(props.page)].map((e, item) => (
      <Link
        to={
          "/" +
          parseInt(item + 1) +
          "/" +
          props.sortParams.by +
          "/" +
          props.sortParams.order
        }
        key={item + 1}
        value={item + 1}
      >
        <li
          className="pagesItem"
          value={item + 1}
          data-by={props.sortParams.by}
          data-order={props.sortParams.order}
        >
          {item < 9 ? `0${item + 1}` : item + 1}{" "}
        </li>
      </Link>
    ))}
  </div>
);

export default PageNumbers;
