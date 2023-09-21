import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center mb-4">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="w-full p-2 border border-gray-300 rounded-md"
          type="search"
          role="searchbox"
          placeholder="Search students..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        ></input>
      </form>
    </div>
  );
};

export default Search;
