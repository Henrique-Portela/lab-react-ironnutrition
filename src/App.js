import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodList from './foods.json';
import { useState } from 'react'
import FoodBox from './Components/FoodBox';

function App(props) {
  const [foods, setFoods] = useState(foodList)
    

  return (
    <div className="App">
      <>
      {foods.map((food) => {
        return (

      <FoodBox food={food} />
        )
      })}
      </>



    </div>
  );
}

export default App;
