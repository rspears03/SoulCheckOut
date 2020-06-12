import React ,{ useContext , useEffect, useState } from 'react';
// import products from "../../data/products"
import { CartContext } from "../cart/context"
import './styles.css'
// import axios from 'axios';


function Store () {
    const cartCtx = useContext(CartContext);
    const [items, setItems] = useState([]);

 useEffect(() => {
  fetchItems();
}, []);

const fetchItems = async () => {
  const data = await fetch(
    'http://localhost:3010/home'
  )
  const items = await data.json();
  console.log(items);
  setItems(items);
};


    return (
        <div>
            {items.map(item => (
                <div className="card shadow" key={item.item_id}>
                    <img className="card-img-top" src={item.photo} width="318" height="200"/>
                     {/* <div className="card-img-top">{item.photo}</div> */}
                    <div className="card-title">{item.title}</div>
                    <div className="card-body"> {item.descr} </div>
                    <div>
                        <button className="btn btn-outline-success" onClick={() => cartCtx.addToCart(item)}>Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Store


