import '../styles/App.scss';


function App() {
  return (

    <div className="page">

    <header className="header">
      <img src="/images/logo.png" alt="logo" className="logo" />
    </header>
  
    <main className="main">

        <form className="form__container">

        <div className="form-group">
          <label htmlFor="searchCharacter">Busca por personaje:</label>
          <input
            className="form__input-text"
            type="text"
            name="search_character"
            id="search_character"
          />
        </div>

        <div className="form-group">
          <label htmlFor="searchHouse">Selecciona la casa:</label>
          <select className="form__select" name="house" id="house">
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuffr">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
            </select>
        </div>
        </form>

        <section className="characters">
       
        <ul className="cards">

          <li className="card">
           
              <img src="https://ik.imagekit.io/hpapi/sirius.JPG" alt="" className="card__img" />

              <div>
                <h2 className="card__tittle">Sirius Black</h2>
                <p className="card__specie">human</p>
                
              </div>
              </li>

              <li className="card">
              <img src="https://ik.imagekit.io/hpapi/sirius.JPG" alt="" className="card__img" />
              <div>
                <h2 className="card__tittle">Sirius Black</h2>
                <p className="card__specie">human</p>
                
              </div> 
          </li>
        </ul>
      </section>
    </main>
  </div>
  );
}

export default App;
