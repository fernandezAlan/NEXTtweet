import SearchIcon from "../Icon/SearchIcon";
import { useState } from "react";
export default function SearchInput({ placeholder, handleSearch }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch({ name: value });
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <SearchIcon />
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
      <style jsx>{`
        label {
          display: flex;
        }
        div {
          padding: 5px;
          margin-left: 30px;
          background-color: rgb(231 234 235);
          border-radius: 15px;
        }
        input {
          border: 0px;
          background-color: rgb(231 234 235);
        }
        input:focus {
          outline: none;
        }
      `}</style>
    </>
  );
}
