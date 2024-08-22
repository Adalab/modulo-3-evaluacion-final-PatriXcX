import PropTypes from "prop-types";
import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

function Filters({
  filterName,
  houseFilter,
  handleFilterName,
  handleChangeHouseFilter,
}) {
  return (
    <form className="form__container">
      <FilterName filterName={filterName} handleFilterName={handleFilterName} />

      <FilterHouse
        handleChangeHouseFilter={handleChangeHouseFilter}
        houseFilter={houseFilter}
      />
    </form>
  );
}

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  houseFilter: PropTypes.string.isRequired,
  handleFilterName: PropTypes.func.isRequired,
  handleChangeHouseFilter: PropTypes.func.isRequired,
};

export default Filters;
