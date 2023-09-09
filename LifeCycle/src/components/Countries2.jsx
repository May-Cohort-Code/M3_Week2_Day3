import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Countries() {
    const [countries, setCountries] = useState([])
    
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then((response)=>{
            setCountries(response.data)
        })
    })
  return (
    <div>
        {countries.map((country)=>{
            return(
                <div key={country.name.common}>
                    <h1>{country.name.common}</h1>
                    <img src={country.flags.png} alt="" />
                    {country.unMember && <p>is UN Member</p>}
                </div>
            )
        })}
    </div>
  )
}

export default Countries