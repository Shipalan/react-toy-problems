import React, { useState } from "react";

const FilterString = () => {
  const [unfilt, setUnFilt] = useState([
    "James",
    "Jessica",
    "Melody",
    "Tyler",
    "Blake",
    "Jennifer",
    "Mark",
    "Maddy",
  ]);
  const [userInput, setUserInput] = useState("");
  const [filteredArr, setFilteredArr] = useState([]);

  const filter = (value) => {
    setFilteredArr(unfilt.filter((e) => e.includes(value)));
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">{JSON.stringify(unfilt)}</span>
      <input
        className="inputLine"
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={() => filter(userInput)}>
        Confirm
      </button>
      <span className="resultsBox filterStringRB">
        {JSON.stringify(filteredArr)}
      </span>
    </div>
  );
};

export default FilterString;
