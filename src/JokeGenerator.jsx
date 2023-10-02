import React, { useState } from "react";
import "./jokes.css"

const JokeGenerator = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      setJoke(data.setup + " " + data.punchline);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h3>Silly Joke Generator</h3>
      <button className="btn" onClick={fetchJoke}>Generate Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
};

export default JokeGenerator;
