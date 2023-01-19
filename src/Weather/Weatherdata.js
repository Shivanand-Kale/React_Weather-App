import React from "react";

const TempratureData = (props) => {
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={props.searchValue}
            onChange={props.onChangeHandler}
          />
          <button
            className="searchButton"
            type="button"
            onClick={props.getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default TempratureData;
