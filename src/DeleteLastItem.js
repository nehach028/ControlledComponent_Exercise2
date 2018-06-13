import React from 'react';
import PropTypes from 'prop-types';

const DeleteLastItem=props=>{
  const handleDeleteLastItem = event => {
    props.deleteLastItem();
  };
	return(
    	<button onClick={handleDeleteLastItem} disabled={props.noItemsFound()}>
          Delete Last Item
		</button>
    )
}
DeleteLastItem.propTypes={
	noItemsFound: PropTypes.func.isRequired,
  	deleteLastItem:PropTypes.func.isRequired
}
export default DeleteLastItem;