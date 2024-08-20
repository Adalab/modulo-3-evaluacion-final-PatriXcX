import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import logoImage from "../images/logo.png";

import "../styles/App.scss";
import CharacterList from "./Characters/CharactersList";
import Filters from "./Filters/Filters";
import CharactersDetail from "./Characters/CharactersDetail";

function App() {
  const [characters, setCharacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState("Gryffindor");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setCharacters(responseData);
      });
  }, []);

  //Filtrar por casa

  const handleChangeHouseFilter = (ev) => {
    const newValue = ev.currentTarget.value;
    setHouseFilter(newValue);
  };

  const filteredCharacters = characters
    .filter((c) => c.house === houseFilter)
    .filter((NameObj) =>
      NameObj.name.toLowerCase().includes(filterName.toLowerCase())
    );

  //Filtrar por nombre

  const handleFilterName = (ev) => {
    setFilterName(ev.currentTarget.value);
  };

  const findCharacter = (id) => {
    const charactertToShow = characters.find(
      (character) => character.id === id
    );
    return charactertToShow;
  };

  return (
    <div className="page">
      <header className="header">
        <img src={logoImage} alt="logo" className="logo" />
      </header>

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  filterName={filterName}
                  houseFilter={houseFilter}
                  handleFilterName={handleFilterName}
                  handleChangeHouseFilter={handleChangeHouseFilter}
                />

                <section className="characters">
                  <CharacterList characters={filteredCharacters} />
                </section>
              </>
            }
          />
          <Route
            path="/Characters/:id"
            element={<CharactersDetail findCharacter={findCharacter} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
