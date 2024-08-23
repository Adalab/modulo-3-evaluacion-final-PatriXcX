import PropTypes from "prop-types";
function FilterSpecies({ filterSpecies, handleChangeSpeciesFilter }) {
  return (
    <div className="form-group">
      <label htmlFor="searchSpecies">Selecciona la especie:</label>
      <select
        onChange={handleChangeSpeciesFilter}
        value={filterSpecies}
        className="form__select"
        name="species"
        id="species"
      >
        <option value="human">Human@</option>
        <option value="werewolf">Hombre-lobo</option>
        <option value="half-giant">Semigigante</option>
        <option value="ghost">Fantasma</option>
      </select>
    </div>
  );
}

FilterSpecies.propTypes = {
  filterSpecies: PropTypes.string.isRequired,

  handleChangeSpeciesFilter: PropTypes.func.isRequired,
};

export default FilterSpecies;
