import React from "react";
import { Link } from "react-router-dom";

const PageNumbers = props => (
  <div>
    {[...Array(props.page)].map((e, item) => (
      // <Link
      //   to={
      //     "/" +
      //     props.sortParams.by +
      //     props.sortParams.order +
      //     parseInt(item + 1)
      //   }
      //   key={item + 1}
      // >
      <Link
        to={"/"}
        key={item + 1}
        value={item + 1}
        onClick={() => props.activePage()}
      >
        <li className="pagesItem">{item < 9 ? `0${item + 1}` : item + 1}</li>
      </Link>
    ))}
  </div>
);

export default PageNumbers;
