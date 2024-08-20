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
    <div className="card">
      <img src={characterToShow.image} alt={characterToShow.name} />
      <div>
        <p>Nombre: {characterToShow.name}</p>
        <p>Estatus: {characterToShow.alive ? "Vivo" : "Muerto"}</p>
        <p>Especie: {characterToShow.species}</p>
        <p>Género: {characterToShow.gender}</p>
        <p>Casa: {characterToShow.house || "Desconocida"}</p>
      </div>
      <div>
        <Link to="/">Volver</Link>
      </div>
    </div>
  );
}

CharactersDetail.propTypes = {
  findCharacter: PropTypes.func.isRequired,
};

export default CharactersDetail;
