
import PropTypes from 'prop-types';
function CharacterList({characters}) {

    const getPlaceholderImage = (name) => {
        const encodedName = encodeURIComponent(name); // Codifica el nombre del personaje para usarlo en la URL
        return `https://via.placeholder.com/210x295/ffffff/666666/?text=${encodedName}`;
      };

    
    return (
        <ul className="cards">


            {characters.map((character) => (
                <li key={character.id} className="card">

                        <img src={character.image || getPlaceholderImage(character.name)} alt={character.name} className="card__img" />
                    <div className="card__info">
                        <h2 className="card__title">{character.name}</h2>
                        <p className="card__specie">{character.species}</p>
                    </div>

            </li>))}



        </ul>
    );
}

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired
  };

export default CharacterList;