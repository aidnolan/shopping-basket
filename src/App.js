import React, {Component} from 'react';
import './App.css';
import Item from './Components/Item';
import itemData from './itemData';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: itemData
    }
  };
   
  render(){
    const items = this.state.items;
    const itemList = items.map((item)=>{
      return(
        <Item
          key={item.key}
          name={item.name}
          tax={item.tax}
          price={item.price}
          quantity={item.quantity}
        />
      ) 
    });
    return (
      <div className="App">
        {itemList}
      </div>
    );
  }  
}

export default App;
