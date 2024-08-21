import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

function CharactersDetail({ findCharacter }) {
  const params = useParams();

  const characterToShow = findCharacter(params.id);
  if (characterToShow === undefined) {
    return (
      <div>
        <h2>Personaje no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="card__link__info">
      <img src={characterToShow.image} alt={characterToShow.name} />
      <div className="card__link__details">
        <p className="card__link__text"> {characterToShow.name}</p>
        <p> Género: {characterToShow.gender}</p>
        <p> Estatus: {characterToShow.alive ? "Vivo" : "Muerto"}</p>
        <p> Especie: {characterToShow.species}</p>

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
