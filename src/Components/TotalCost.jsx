import React from 'react';

const TotalCost = (props) => {
    
    const totalPrice = props.basketList.length ?
    props.basketList.map((item)=> item.price * item.quantity).reduce((acc, currVal) => acc + currVal)
    : 0;
    
    const totalTax = props.basketList.length ?
    props.basketList.map((item)=>
    item.taxDue * item.quantity)
    .reduce((acc, currVal) => acc + currVal)
    : 0;
    
    const totalDue = props.basketList.length ?
    props.basketList.map((item)=> (item.price + item.taxDue) * item.quantity)
    .reduce((acc, currVal) => acc + currVal)
    : 0;

    

    return(
        <tr>
              <th>
                  TOTALS
              </th>
              <th>
                  £{totalPrice.toFixed(2)}
              </th>
              <th>
                  £{totalTax.toFixed(2)}
              </th>
              <th>
                  £{totalDue.toFixed(2)}
              </th>
              <th>
                  
              </th>
            </tr>
    )
}

export default TotalCost;