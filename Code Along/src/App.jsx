import { useState } from 'react';
import './App.css';
import foodData from './foods.json'
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import {Input} from 'antd'
import Search from './components/Search';


function App() {
  const [foods,setFoods] = useState(foodData)
  const [allFoods,setAllFoods] = useState(foodData)
  //console.log(foods)
  function addFood(newFood){
    const foodsCopy = [newFood,...foods]
    const allFoodsCopy = [newFood,...allFoods]
    setFoods(foodsCopy)
    setAllFoods(allFoodsCopy)
  }

  function deleteFood(foodToDeleteId){
    const leftOverFoods = foods.filter((oneFood)=>{
      return oneFood.id !== foodToDeleteId

    })
    const leftOverallFoods = allFoods.filter((oneFood)=>{
      return oneFood.id !== foodToDeleteId

    })
    console.log(leftOverFoods)
    setFoods(leftOverFoods)
    setAllFoods(leftOverallFoods)
  }

  function filterFoods(searchTerm){
    const foodsSearched = allFoods.filter((oneFood)=>{
      return oneFood.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    })

    setFoods(foodsSearched)
  }
  return (
    <div className="App">
      <Search filterFoods={filterFoods}></Search>
      <button onClick={deleteFood}>delete</button>
      <AddFoodForm addFood={addFood}></AddFoodForm>
      {/* arguement of the map method is a function */}
      {foods.map((oneFood)=>{
        oneFood.id = uuidv4()
        // console.log(oneFood)
        return(
          <FoodBox deleteFood={deleteFood} key={oneFood.id} food={oneFood}></FoodBox>
        )
      })}
    </div>
  );
}

export default App;
