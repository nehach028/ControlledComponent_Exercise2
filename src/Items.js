import React from 'react';
import PropTypes from 'prop-types';

const Items = props => {
  return <li>{props.item}</li>;
};

Items.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Items;
