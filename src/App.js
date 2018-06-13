import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewItem from './AddNewItem';
import DeleteLastItem from './DeleteLastItem';
import ItemList from './ItemList';

class App extends React.Component {
  state = {
    items: [],
  };

  handelAddItem = newItem => {
    this.setState(oldState => ({
      items: [...oldState.items, newItem],
    }));
  };

 deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  
  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddNewItem onAddItem={this.handelAddItem}/>
       	<DeleteLastItem
       		deleteLastItem={this.deleteLastItem}
       		noItemsFound={this.noItemsFound}
       	/>
		<ItemList itemList={this.state.items}/>
      </div>
    );
  }
}

export default App;
