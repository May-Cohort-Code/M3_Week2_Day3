import { useState, useEffect } from 'react'
import axios from 'axios'

function Counter() {
    const [count,setCount] = useState(0)
    const [myInterval,setMyInterval] = useState()
    const [myCharacter,setMyCharacter] = useState({})
    
    // console.log("Component body rerendering")
    
    // first arguement: function
    // second arguement: depedancy array
   
    useEffect(()=>{
      console.log("Mounting phase")
    const myInterval2 = setInterval(() => {
      setCount((prevCount)=>prevCount+1)
      }, 1000);
      setMyInterval(myInterval2)
      
    axios.get('https://swapi.dev/api/people/1')
    .then((response)=>{
      console.log(response.data)
      setMyCharacter(response.data)
    })


      return()=>{
        console.log("Component unmounted")
        clearInterval(myInterval2)
      }
    },[])

    
    

    useEffect(()=>{
      console.log('updating phase')
      document.title = count
      if(count>5){
        setCount(5)
        clearInterval(myInterval)
      }
    },[count])

    
    // if we want to run a function on the Mounting phase ONLY keep the dependancy array empty



  return (
    <div className='Counter'>
        <h2>Your current count is {count}</h2>

        <button onClick={()=>{setCount(count+1)}}> + </button>
        <button onClick={()=>{setCount(count-1)}}> - </button>


        <h2>Name: {myCharacter.name}</h2>
    </div>
  )
  
}

export default Counter