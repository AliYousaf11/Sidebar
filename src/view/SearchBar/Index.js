import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./Index.css";

const Index = () => {
  const [data, setData] = useState({
    search: "",
  });
  const HandleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="SearchContainer">
      <h1>Search From User Data</h1>
      <input
        className="SearchInput"
        type="text"
        placeholder="Search By Name...."
        name="search"
        value={data.search}
        onChange={HandleInput}
      />
      <SearchBar data={data.search} />
    </div>
  );
};

export default Index;
