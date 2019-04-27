import React, {Component} from 'react';
import './App.css';
import Item from './Components/Item';
import itemData from './itemData';
import ItemSelect from "./Components/ItemSelect";

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  };
  
  handleAdd(event){
    event.preventDefault();
    console.log(event.target.value);
    const displayList = itemData.filter(item => {
      if(item.key == event.target.value){
        return item;
      }
    })
    this.setState(prevState => ({items: prevState.items.concat(displayList)}))
    
  } 

  testMethod(){
    console.log("Blah")
  }

  render(){
    const optionsList = itemData.map((item)=>{
      return <option value={item.key} key={item.key}>{item.name} - Price: {item.price.toFixed(2)}</option>
    });
    const items = this.state.items;
    const itemList = items.map((item)=>{
        return(
          <Item
              key={item.key}
              name={item.name}
              tax={item.tax}
              price={item.price}
          />
        )
    });
  
    return (
      <div className="App">
        <ItemSelect
          options={optionsList}
          handleAdd={this.handleAdd}
         />
        {itemList}
      </div>
    );
  }  
}

export default App;
