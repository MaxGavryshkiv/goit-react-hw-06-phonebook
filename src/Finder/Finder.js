import React from 'react';
import PropTypes from 'prop-types';

const Finder = ({ value, onChange }) => (
  <label>
    Фильтр по имени
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Finder.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Finder;
