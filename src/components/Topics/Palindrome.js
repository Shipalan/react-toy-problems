import React, { useState } from "react";

const Palindrome = () => {
  const [userInput, setUserInput] = useState("");
  const [palindrome, setPalindrome] = useState("");

  const checker = (v) => {
    let str = v.split("").reverse().join("");
    if (str.toLowerCase() === v.toLowerCase()) {
      setPalindrome("true");
    } else {
      setPalindrome("false");
    }
  };

  return (
    <div className="puzzleBox palindromePB">
      <h4>Palindrome</h4>
      <input
        className="inputLine"
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button className="confirmationButton" onClick={() => checker(userInput)}>
        Confirm
      </button>
      <span className="resultsBox">Is Palindrome: {palindrome}</span>
    </div>
  );
};

export default Palindrome;
