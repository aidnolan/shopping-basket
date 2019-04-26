import React, {Component} from 'react';
import './App.css';
import Item from './Item';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [
        {key: 1,name:"Lonely Planet Italy", category: "exempt", price: 10.49, quantity: 0},
        {key: 2, name:"The White Album by The Beatles", category: "sales tax", price: 11.00, quantity:0} 
      ]
    }
  };
   
  render(){
    const items = this.state.items 
    const itemList = items.map((item)=>{
    console.log(item.name);
      return(
        
        <Item
          key={item.key}
          name={item.name}
          category={item.category}
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
