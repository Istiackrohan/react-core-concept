import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const productPrice = [
    { name: "Photoshop", price: "150tk" },
    { name: "Illustrator", price: "250tk" },
    { name: "Premire Pro", price: "140tk" }
  ];
  const Heros = ["Khalid", "Hamza", "Sa'ad", "Ammar"];
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
        <h1>React Niye khela hobe.</h1>
        <ul>
          {
            Heros.map(Sahaba => <li>{Sahaba}</li>)
          }
          {
            productPrice.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          productPrice.map(product => <Products product = {product}></Products>)
        }
      </header>
    </div>
  );
}

function Users() {
  const [users, setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {
        users.map(user => <li>{user.email}</li>)
      }
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseClick = () => {
    setCount(count + 1)
  }
  const decreaseClick = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseClick}>Barao</button>
      <button onClick={decreaseClick}>Komao</button>
    </div>
  )
}

function Products(props) {
  const productStyle = {
    border: "2px, solid, yellow",
    borderRadius: "10px",
    backgroundColor: "Grey",
    height: "400px",
    width: "400px",
    float: "left",
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <span><h5>{price}</h5></span>
      </p>
      <button>Guta de</button>
    </div>
  )
}

export default App;