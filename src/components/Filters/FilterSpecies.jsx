import PropTypes from "prop-types";
function FilterSpecies({ handleChangeSpeciesFilter, speciesFilter }) {
  return (
    <div className="form-group">
      <label htmlFor="searchSpecies">Selecciona la especie:</label>
      <select
        onChange={handleChangeSpeciesFilter}
        value={speciesFilter}
        className="form__select"
        name="species"
        id="species"
      >
        <option value="Gryffindor">Human@</option>
        <option value="Hufflepuff">Hombre-lobo</option>
        <option value="Ravenclaw">Semigigante</option>
      </select>
    </div>
  );
}

FilterSpecies.propTypes = {
  speciesFilter: PropTypes.string.isRequired,

  handleChangeSpeciesFilter: PropTypes.func.isRequired,
};

export default FilterSpecies;
