import React from 'react';
import PropTypes from 'prop-types';
class AddNewItem extends React.Component{
state={
value:''
}
inputIsEmpty = () => {
    return this.state.value === '';
 };
handleChange = textValue => {
    this.setState(()=>({ value: textValue }));
  };
addItem=event=>{
	event.preventDefault();	
  	this.props.onAddItem(this.state.value); 
}
  render(){
  return (
    
    	<form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
    		onChange={(event)=>{this.handleChange(event.target.value)}}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
  )
}
}
AddNewItem.proptypes={
	onAddItem:PropTypes.func.isRequired
}
export default AddNewItem;