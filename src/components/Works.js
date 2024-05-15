import React, { useState, useEffect } from "react";
import videoSrcTetris from "./TetrisPlay.mp4";
import videoSrcMD from "./MD.mp4";

const Works = () => {
  const [response, setResponse] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [country, setCountry] = useState({});
  const [flagGuess, setFlagGuess] = useState("");
  const [flagFeedback, setFlagFeedback] = useState("");

  useEffect(() => {
    fetchPokemon();
    fetchCountry();
  }, []);

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => {
        setFeedback("");
      }, 1650);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  useEffect(() => {
    if (flagFeedback) {
      const timer = setTimeout(() => {
        setFlagFeedback("");
      }, 1650);
      return () => clearTimeout(timer);
    }
  }, [flagFeedback]);

  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  const fetchPokemon = async () => {
    try {
      const randomId = Math.floor(Math.random() * 898) + 1;
      const response = await fetch(apiUrl + randomId);
      const data = await response.json();
      const japaneseNameResponse = await fetch(data.species.url);
      const japaneseNameData = await japaneseNameResponse.json();
      const japaneseName = japaneseNameData.names.find(
        (name) => name.language.name === "ja"
      ).name;
      data.japaneseName = japaneseName;
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  const fetchCountry = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const randomCountry = data[Math.floor(Math.random() * data.length)];
      setCountry(randomCountry);
    } catch (error) {
      console.error("Error fetching country:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput) {
      try {
        const OPENROUTER_API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;
        const requestOptions = {
          method: "POST",
          headers: {
            Authorization: `Bearer ${OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "openai/gpt-3.5-turbo",
            messages: [{ role: "user", content: userInput }],
          }),
        };
        const response = await fetch(
          "https://openrouter.ai/api/v1/chat/completions",
          requestOptions
        );
        const responseData = await response.json();
        setResponse(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const handleGuess = (event) => {
    event.preventDefault();
    const pokemonName = pokemon.japaneseName;
    if (guess.trim().toLowerCase() === pokemonName) {
      setFeedback("Correct!");
    } else {
      setFeedback(`${pokemonName}`);
    }
    fetchPokemon();
    setGuess("");
  };

  const handleFlagGuess = (event) => {
    event.preventDefault();
    const userGuess = flagGuess.trim().toLowerCase();
    const correctAnswer = country.translations.jpn.common;
    if (userGuess === correctAnswer) {
      setFlagFeedback("Correct!");
    } else {
      setFlagFeedback(`${correctAnswer}`);
    }
    fetchCountry();
    setFlagGuess("");
  };

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleFlagInputChange = (event) => {
    setFlagGuess(event.target.value);
  };

  return (
    <div className="works-container">
      <div className="videos-container">
        <div className="tetris">
          <h4>Original TETRIS made in Java</h4>
          <video controls className="video-tetris">
            <source src={videoSrcTetris} type="video/mp4" />
          </video>
        </div>
        <div className="md">
          <h4>Simulation movie of my research</h4>
          <video controls className="video-md">
            <source src={videoSrcMD} type="video/mp4" />
          </video>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div className="quiz-container">
        <div className="pokemon-quiz-container">
          <h4>Pokémon Quiz</h4>
          <img
            src={pokemon.sprites && pokemon.sprites.front_default}
            alt="Pokemon"
          />
          <form onSubmit={handleGuess}>
            <input
              type="text"
              value={guess}
              onChange={handleInputChange}
              placeholder="Enter Pokémon Name!"
            />
            <button type="submit">Submit</button>
          </form>
          <h4 className={feedback ? "feedback-animation" : ""}>{feedback}</h4>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div className="flag-quiz-container">
          <h4>Flag Quiz</h4>
          <br></br>
          <br></br>
          <img src={country.flags && country.flags.png} alt="Flag" />
          <br></br>
          <br></br>
          <form onSubmit={handleFlagGuess}>
            <input
              type="text"
              value={flagGuess}
              onChange={handleFlagInputChange}
              placeholder="Enter Country Name!"
            />
            <button type="submit">Submit</button>
          </form>
          <h4 className={flagFeedback ? "flag-feedback-animation" : ""}>
            {flagFeedback}
          </h4>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div className="api-container">
        <h4>ChatGPT-API</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask me anything!"
          />
          <button type="submit">Go</button>
        </form>

        {response && (
          <div className="api-response">
            <p>{response.choices[0].message.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Works;
