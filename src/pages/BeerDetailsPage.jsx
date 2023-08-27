import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function BeerDetailsPage() {

    const { beerId } = useParams();
    const [beerInfo, setBeerInfo] = useState({});
    const apiUrl = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setBeerInfo(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [apiUrl]);

    if (!beerInfo) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div className="beerInfoContainer">
                <div>
                    <img src={beerInfo.image_url} alt="Beer image" />
                </div>
                <div className="innerContainer">
                    <p style={{fontSize: "30px", fontWeight: "bold"}}>{beerInfo.name}</p>
                    <p>{beerInfo.attenuation_level}</p>
                </div>
                <div className="innerContainer">
                    <p>{beerInfo.tagline}</p>
                    <p><strong>{beerInfo.first_brewed}</strong></p>
                </div>
                <p><strong>{beerInfo.description}</strong></p>
                <p>{beerInfo.contributed_by}</p>
            </div>
        </>
    )
}

export default BeerDetailsPage;
