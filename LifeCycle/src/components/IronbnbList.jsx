import { useState, useEffect } from 'react'
import axios from 'axios'

function IronbnbList() {
    const [apartments, setApartments] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('https://ironbnb-m3.herokuapp.com/apartments')
            .then((response) => {
                setIsLoading(false)
                setApartments(response.data)
            })
    }, [])

    return (
        <div>
            {isLoading && <p>...Loading</p>}

            {apartments.map((apartment) => {
                return (
                    <div key={apartment._id} className="card">
                        <img src={apartment.img} alt="" />
                        <h3>{apartment.title}</h3>
                        <p>Price: {apartment.pricePerDay}</p>
                    </div>

                )
            })}
        </div>
    )
}

// exercise
// 1. create a Countries.jsx component
// 2. make an axios call on the initial render (mounting phase) to get all the countries from https://restcountries.com/
// 3. display the common name of the country and the flag 
// 4. if the country is a UN member then display <p>Country is in the United Nations</p>


export default IronbnbList