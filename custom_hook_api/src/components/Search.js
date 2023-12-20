import React from 'react';

const Search = ({ searchString, searchPlaceholderString }) => {
  return (
    <>
      <input
        className="form-control m-3"
        type="text"
        placeholder="Chercher..."
        value={searchString}
        onChange={searchPlaceholderString}
      />
      <hr />
    </>
  );
};

export default Search;
