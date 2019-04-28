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
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
}

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
    console.log(updatedList)
    this.setState({
      items: updatedList
    })
      
      
  }

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
  
  handleAdd(event){
    console.log(event.target.value)
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
            console.log(displayList)
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
    //review optgroup for single dropdown
    const categories = itemData.map(item =>item.category)
    .filter((item, ind, arr)=>{
      return arr.indexOf(item) === ind;
    });
    console.log(categories);
    const categoryLists = categories.map(category => {
      console.log(category)
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
    console.log(categoryLists);
    // const optionsList = itemData.map((item)=>{
    //   return <option value={item.name} key={item.key}>{item.name} - Price: £{item.price.toFixed(2)}</option>
    // });
    const items = this.state.items;
    const itemList = items.map((item)=>{
        return(
          <Item
              key={item.key}
              name={item.name}
              tax={item.tax}
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
          options={categoryLists}
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
          </tbody>
        </table>
        
      </div>
    );
  }  
}

export default App;
