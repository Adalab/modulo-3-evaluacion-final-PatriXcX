
import PropTypes from 'prop-types';
function FilterName({filterName, handleFilterName }) {
  return (
    <div className="form-group">
          <label htmlFor="searchCharacter">Busca por personaje:</label>
          <input
            value={filterName}
            onInput={handleFilterName}
            className="form__input-text"
            type="text"
            name="search_character"
            id="search_character"
          />
        </div>
  );
}

FilterName.propTypes = {
    filterName: PropTypes.string.isRequired,
    
    handleFilterName: PropTypes.func.isRequired  
  
  }

export default FilterName;