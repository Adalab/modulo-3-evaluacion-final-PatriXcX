import PropTypes from "prop-types";
import CharactersCard from "./CharactersCard";

function CharacterList({ characters }) {
  return (
    <ul className="cards">
      {characters.map((character) => (
        <CharactersCard key={character.id} character={character} />
      ))}
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
