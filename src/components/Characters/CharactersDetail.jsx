import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { translateGender } from "../../utils/translations";
import { translateSpecies } from "../../utils/translations";
import { getPlaceholderImage } from "../../utils/detailBackupImages";

function CharactersDetail({ findCharacter }) {
  const params = useParams();

  const characterToShow = findCharacter(params.id);
  if (characterToShow === undefined) {
    return (
      <div>
        <h2>Personaje no encontrado</h2>
        <div>
          <Link to="/" className="card__link__Btn">
            Volver
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="card__link__info">
      <img
        src={characterToShow.image || getPlaceholderImage(characterToShow.name)}
        alt={characterToShow.name}
      />
      <div className="card__link__details">
        <p className="card__link__text"> {characterToShow.name}</p>
        <p> Género: {translateGender(characterToShow.gender)}</p>
        <p> Estatus: {characterToShow.alive ? "Vivo" : "Muerto"}</p>
        <p> Especie: {translateSpecies(characterToShow.species)}</p>

        <p> Casa: {characterToShow.house}</p>
      </div>
      <div>
        <Link to="/" className="card__link__Btn">
          Volver
        </Link>
      </div>
    </div>
  );
}

CharactersDetail.propTypes = {
  findCharacter: PropTypes.func.isRequired,
};

export default CharactersDetail;
