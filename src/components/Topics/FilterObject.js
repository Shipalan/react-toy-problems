import { useState } from "react";

const FilterObject = (props) => {
  const [userInput, setUserInput] = useState("");
  const [filteredArr, setFilterArr] = useState([]);
  const people = [
    {
      name: "Alan",
      age: 26,
      job: "Unemployed",
    },
    {
      name: "Nathan",
      married: true,
      homeOwner: true,
    },
    {
      name: "Jaden",
      gamer: true,
    },
  ];

//   const filter = (value) => {
//     let filteredArray = [];
//     for (let person of people) {
//       if (person.hasOwnProperty(value)) {
//         filteredArray.push(person);
//       }
//     }
//     setFilterArr(filteredArray);
//   };

//Fancy Zack method
  const filter = (value) => {
    setFilterArr(people.filter(e => e.hasOwnProperty(value)));
  };

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">{JSON.stringify(people)}</span>
      <input
        className="inputLine"
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={() => filter(userInput)}>
        Confirm
      </button>
      <span className="resultsBox filterObjectRB">
        {JSON.stringify(filteredArr)}
      </span>
    </div>
  );
};

export default FilterObject;
