
import PropTypes from 'prop-types';
import CharactersCard from './CharactersCard';


function CharacterList({characters}) {

    const getPlaceholderImage = (name) => {
        const encodedName = encodeURIComponent(name); // Codifica el nombre del personaje para usarlo en la URL
        return `https://via.placeholder.com/210x295/ffffff/666666/?text=${encodedName}`;
      };

    
    return (
        <ul className="cards">


            {characters.map((character) => (
                <CharactersCard 
                key={character.id} 
                character={character} 
                getPlaceholderImage={getPlaceholderImage} 
            />
            ))}



        </ul>
    );
}

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired
  };

export default CharacterList;