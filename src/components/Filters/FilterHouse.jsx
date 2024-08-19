import PropTypes from 'prop-types';
function FilterHouse({handleChangeHouseFilter, houseFilter}) {
  
    return (
    <div className="form-group">
          <label htmlFor="searchHouse">Selecciona la casa:</label>
          <select onChange={handleChangeHouseFilter} value={houseFilter} className="form__select" name="house" id="house">
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
            </select>
        </div>
      
  );
}

FilterHouse.propTypes = {
    houseFilter: PropTypes.string.isRequired,
    
    handleChangeHouseFilter: PropTypes.func.isRequired  
  
  }

export default FilterHouse;