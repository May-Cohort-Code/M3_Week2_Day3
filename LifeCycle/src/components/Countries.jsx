import {useEffect, useState} from 'react'
import axios from 'axios'

function Countries() {
    const [countries,setCountries] = useState([])


    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then((response)=>{
            setCountries(response.data)
        })
    },[])
  return (
    <div>
        {countries.map((country)=>{
            return(
                <div key={country.name.common}>
                    <h2>{country.name.common}</h2>
                    <img src={country.flags.png} alt="" />
                    {country.unMember && <p>{country.name.common} is in the United Nations</p>}
                </div>
            )
        })}
    </div>
  )
}

export default Countries