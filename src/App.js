import React, {Component} from 'react';
import './App.css';
import Item from './Components/Item';
import itemData from './itemData';
import ItemSelect from './Components/ItemSelect';
import TotalCost from './Components/TotalCost';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
}
  // Increase quantity of specific item already in basket
  handleIncrease(event){
    const displayList = [...this.state.items];
    const updatedList = displayList.map(item => {
      if(item.name === event.target.name){
        item.quantity +=1
        return item;
      } else {
        return item;
      }
    });
    this.setState({
      items: updatedList
    })
      
      
  }
  // Decrease quantity of specific item already in basket.
  // Item deleted from array when quantity reaches zero
  handleDecrease(event){
    const displayList = [...this.state.items];
    let updatedList = displayList.map(item => {
      if(item.name === event.target.name && item.quantity !==1){
        item.quantity -=1
        return item;
      } else if(item.name === event.target.name && item.quantity === 1) {
        item.quantity = 0;
        return item; 
      } else {
        return item;
      }
    });
    updatedList = updatedList.filter(item => {
      return item.quantity > 0;
    })
    this.setState({
      items: updatedList
    })
  }
  
  // Add item to basket when option clicked on dropdown
  //(Note: When item is already selected clicking on this option again will do nothing. Deselect and re-select for normal functionality or use quantity +/-) 
  
  handleAdd(event){
    if(event.target.value === "void"){
      return
    } else {
      const displayItem = itemData.filter(item => {
        return item.name === event.target.value;
      });
  
      const displayList = [...this.state.items];
      let presentInArray = false;
      
      if(displayList.length > 0){
        const updatedList = displayList.map((item) =>{
          if(displayItem[0].name === item.name){
            presentInArray = true;
            item.quantity +=1;
            return item
          } else {
            return item;
          }
      });
  
        if(presentInArray){
          this.setState({
            items: updatedList
          });
        } else {
          displayItem[0].quantity+=1;
          this.setState({
            items: updatedList.concat(displayItem)
          })
        }
        
        
      } else {
        displayItem[0].quantity+=1;
        this.setState(prevState => (
          {
            items: prevState.items.concat(displayItem)
          }
        ))
      }
    }
    
  } 

  render(){
    // Create options dropdown list with categories
    const categories = itemData.map(item =>item.category)
    .filter((item, ind, arr)=>{
      return arr.indexOf(item) === ind;
    });
    const options = categories.map(category => {
      return(
        <optgroup key={category} label={category}>
          {itemData.filter(item => {
            return category === item.category;
          }).map(item =>{
          return <option value={item.name} key={item.key}>{item.name} - Price: £{item.price.toFixed(2)}</option>
        })};
        </optgroup>
      )
    })
    
    // Render all Items currently in basket
    const items = this.state.items;
    const itemList = items.map((item)=>{
        return(
          <Item
              key={item.key}
              name={item.name}
              taxDue={item.taxDue}
              price={item.price}
              quantity={item.quantity}
              handleIncrease={this.handleIncrease}
              handleDecrease={this.handleDecrease}
          />
        )
    });
  
    return (
      <div className="App">
        <ItemSelect
          options={options}
          handleAdd={this.handleAdd}
         />
        <table>
          <tbody>

            <tr>
              <th>
                  Product Name
              </th>
              <th>
                  Price
              </th>
              <th>
                  Tax due
              </th>
              <th>
                  Total cost (With Tax)
              </th>
              <th>
                  Quantity
              </th>
            </tr>
            {itemList}
            <TotalCost basketList={this.state.items}/>
          </tbody>
        </table>
        
      </div>
    );
  }  
}

export default App;
