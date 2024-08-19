import {useState, useEffect} from "react";
import '../styles/App.scss';
import CharacterList from './Characters/CharactersList';
import Filters from "./Filters/Filters";



function App() {

  const [characters, setCharacters ] = useState([]);
  const [ houseFilter, setHouseFilter ] = useState( 'Gryffindor' );
  const [ filterName, setFilterName ] = useState( '' );


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

   const filteredCharacters = characters.filter(c => c.house === houseFilter).filter(NameObj=> NameObj.name.toLowerCase().includes(filterName.toLowerCase()));

  //Filtrar por nombre

  const handleFilterName = (ev) => {
  
    setFilterName(ev.currentTarget.value);
    };
    
  



  return (

    <div className="page">

    <header className="header">
      <img src="/images/logo.png" alt="logo" className="logo" />
    </header>
  
    <main className="main">

        <Filters filterName={filterName} houseFilter={houseFilter} handleFilterName={handleFilterName} handleChangeHouseFilter={handleChangeHouseFilter}/>

        <section className="characters">
       
        <CharacterList characters={filteredCharacters} />
      </section>
    </main>
  </div>
  );
}

export default App;
