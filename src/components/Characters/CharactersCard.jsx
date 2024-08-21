import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getPlaceholderImage } from "../../utils/detailBackupImages";
import { translateSpecies } from "../../utils/translations";
function CharactersCard({ character }) {
  return (
    <li className="card">
      <Link to={`/characters/${character.id}`} className="card__link">
        <img
          src={character.image || getPlaceholderImage(character.name)}
          alt={character.name}
          className="card__img"
        />
        <div className="card__info">
          <h2 className="card__tittle">{character.name}</h2>
          <p className="card__specie">{translateSpecies(character.species)}</p>
        </div>
      </Link>
    </li>
  );
}

CharactersCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharactersCard;
