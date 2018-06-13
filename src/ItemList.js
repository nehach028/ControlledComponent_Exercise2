import React from 'react';
import Items from './Items';
import PropTypes from 'prop-types';

const ItemList = props => {
  return (
    <div>
      <p className="items">Items</p>
      
    	<ol className="item">{props.itemList.map((item, index) => <Items key={index} item={item} />)}</ol>
      
    </div>
  );
};

ItemList.propTypes = {
  itemList: PropTypes.array.isRequired,
};

export default ItemList;