import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function AllBeersPage() {

    const [beers, setBeers] = useState([])
    const apiUrl = "https://ih-beers-api2.herokuapp.com/beers"


    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setBeers(data)
                console.log(data) // SUCCESSFULLY FETCHING DATA
            })
            .catch((err) => console.log(err))
    }, [])

    if (!beers) {
        return <p>Loading</p>
    }


    return (
        <>
            {beers.map((beer) => {
                return (
                <Link key={beer._id} className="beerLink" to={`/beers/${beer._id}`}>
                    <div className="beerContainer">
                        <div>
                            <img src={beer.image_url} alt="" />
                        </div>
                        <div className="beerInfo">
                            <h3>{beer.name}</h3>
                            <p>{beer.tagline}</p>
                            <p><strong>Created by: </strong>{beer.contributed_by}</p>
                        </div>
                    </div>
                </Link>
                )
            })}
        </>
    )
}

export default AllBeersPage;
