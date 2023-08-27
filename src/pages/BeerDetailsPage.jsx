import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BeerDetailsPage() {
    
    const { beerId } = useParams();
    const [beerInfo, setBeerInfo] = useState({});
    const beerApi = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;

    useEffect(() => {
        fetch(beerApi)
            .then((res) => res.json())
            .then((data) => {
                setBeerInfo(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [beerApi]);

    if (!beerInfo) {
        return <p>Loading...</p>
    }

    return (
        <>
        <div>
            <img src={beerInfo.image_url} alt="Beer image" />
            <h2>{beerInfo.name}</h2>
            <p>{beerInfo.tagline}</p>
            <p>{beerInfo.first_brewed}</p>
            <p>{beerInfo.attenuation_level}</p>
            <p>{beerInfo.description}</p>
            <p>{beerInfo.contributed_by}</p>
        </div>
        </>
    )


}

export default BeerDetailsPage;
