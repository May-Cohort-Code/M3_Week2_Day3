import React, { useState } from 'react'
import {Input} from 'antd'
import { v4 as uuidv4 } from 'uuid';


function AddFoodForm(props) {
    const [name,setName] = useState('')
    const [image,setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(1)

    function handleSubmit(e){
      //prevents page from refreshing when we click on the submit
      e.preventDefault()
      const foodToBeAdded ={name,image,servings,calories}
      foodToBeAdded.id = uuidv4()
      props.addFood(foodToBeAdded)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Name: 
        <Input value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </label>

        <label>Image: 
        <Input value={image} onChange={(e)=>{setImage(e.target.value)}}/>
        </label>

        <label>Calories: 
        <Input type='number' value={calories} onChange={(e)=>{setCalories(e.target.value)}}/>
        </label>

        <label>Servings:
        <Input type='number' value={servings} onChange={(e)=>{setServings(e.target.value)}}/>
        </label>
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default AddFoodForm