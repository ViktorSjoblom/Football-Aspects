import React from "react";
import SearchArea from "./components/SearchArea";
import PlayerCard from "./components/PlayerCard";
import Title from "./components/Title";
import "./App.css";

function App() {
  const [searchResult, setSearchResult] = React.useState("");
  const [inputText, setInputText] = React.useState("");

  React.useEffect(() => {
    const url = `https://api-football-v1.p.rapidapi.com/v2/players/search/${inputText}`;
    const accessHost = process.env.REACT_APP_HOST_KEY;
    const accessToken = process.env.REACT_APP_API_KEY;
    if (!inputText) {
      return;
    }

    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": `${accessHost}`,
        "x-rapidapi-key": `${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.api.players[0]);
        setSearchResult(json.api.players[1]);
      })
      .catch((err) => {
        //   console.log(err);
      });
  }, [inputText]);

  return (
    <div className="App">
      <Title>Football Aspects!</Title>
      <SearchArea handleChange={(e) => setInputText(e.target.value)} />
      {searchResult && (
        <PlayerCard
          key={searchResult}
          Player={searchResult.player_name}
          Age={searchResult.age}
          Country={searchResult.birth_country}
          Position={searchResult.position}
        />
      )}
    </div>
  );
}

export default App;
