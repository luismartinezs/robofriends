import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <label>
        <input
          type="search"
          placeholder="search robots"
          className="pa3 ba b--green bg-lightest-blue"
          onChange={searchChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
