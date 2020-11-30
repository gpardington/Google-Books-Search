import React from "react";

function SearchForm (props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control book-input"
          placeholder="Enter the book's title that you would like to search for"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-info search-btn">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;