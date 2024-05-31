import PropTypes from 'prop-types';
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.wrapper}>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={styles.input}
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
};

SearchBox.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};

export default SearchBox;