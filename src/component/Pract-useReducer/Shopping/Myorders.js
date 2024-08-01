import React, { useContext } from 'react'
import shoppingContext from '../../../ContextAPI/ShoppingContext'

const Myorders = () => {
    //console.log(useContext(shoppingContext));
    let {myOrder} = useContext(shoppingContext);
  return (
    <div>
        <h1>My Orders</h1>
        <ul className="list-group">
            {
              myOrder.map((e)=>(
                <div className='col-md-8'>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                <h6>Product : {e.name} </h6>
                Price : {e.price} $
                <span> <button className='btn btn-danger'>Remove From Cart</button></span>
              </li>
              </div>
              ))
            }
                   
           
      </ul>
    </div>
  )
}

export default Myorders