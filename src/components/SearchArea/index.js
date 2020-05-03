import React from "react";
import "./SearchArea.css";

const SearchArea = (props) => {
  return (
    <div className="SearchArea">
      <input
        className="InputField"
        onChange={props.handleChange}
        placeholder="Search player"
      ></input>
      <button className="SearchAreaButton">Search</button>
    </div>
  );
};

export default SearchArea;
