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
        <tr className="totalRow">
              <td>
                  TOTALS
              </td>
              <td>
                  £{totalPrice.toFixed(2)}
              </td>
              <td>
                  £{totalTax.toFixed(2)}
              </td>
              <td>
                  £{totalDue.toFixed(2)}
              </td>
              <td id="checkout">
                  <input onClick={props.handleCheckout} name="checkout" value="Checkout" type="button" />
              </td>
            </tr>
    )
}

export default TotalCost;