import { useState } from "react";

const SearchBar = ({getData}) => {
  const [getSearchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getData(getSearchTerm);
    }
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  return (
    <div>
      <input
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="bg-gray-100 p-3 h-9 w-96 border-3"
        type="text"
        placeholder="Github Username"
      />
    </div>
  );
};

export default SearchBar;
