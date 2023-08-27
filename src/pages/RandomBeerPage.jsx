import { useState, useEffect } from "react";

function RandomBeersPage() {

    const [randomBeer, setRandomBeer] = useState({})
    const apiUrl = "https://ih-beers-api2.herokuapp.com/beers/random"


    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setRandomBeer(data)
                console.log(data) // SUCCESSFULLY FETCHING DATA
            })
            .catch((err) => console.log(err))
    }, [])

    if (!randomBeer) {
        return <p>Loading</p>
    }

    return (
        <>
            <div className="beerInfoContainer">
                <div>
                    <img src={randomBeer.image_url} alt="Beer image" />
                </div>
                <div className="innerContainer">
                    <p style={{fontSize: "30px", fontWeight: "bold"}}>{randomBeer.name}</p>
                    <p>{randomBeer.attenuation_level}</p>
                </div>
                <div className="innerContainer">
                    <p>{randomBeer.tagline}</p>
                    <p><strong>{randomBeer.first_brewed}</strong></p>
                </div>
                <p><strong>{randomBeer.description}</strong></p>
                <p>{randomBeer.contributed_by}</p>
            </div>
        </>
    )
}

export default RandomBeersPage;
