import React, { useEffect, useState } from 'react'
import {Input} from 'antd'

function Search(props) {
    const [searchTerm,setSearchTerm] = useState('')
    
    function handleSearch(e){
        setSearchTerm(e.target.value)

    }
    useEffect(()=>{
        props.filterFoods(searchTerm)
    },[searchTerm])
  return (
    <div>
        <label>
        <Input value={searchTerm} onChange={handleSearch} />

        </label>
    </div>
  )
}

export default Search