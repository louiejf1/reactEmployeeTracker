import React, { useState, useEffect } from "react";

export default function SearchComp(props) {

  const [search, setSearch] = useState();

  function handleChange(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    props.setFilter(search)
  });

  return (
    <div className="col-12">
      <div className="col-4"></div>
      <div className="col-4">
        <input value={search} onChange={handleChange}
          className="form-control"
          type="text"
          placeholder="Filter by Last Name"
          aria-label="Search"
        ></input>
      </div>
      <div className="col-4"></div>
      <br></br>
    </div>
  );
}
