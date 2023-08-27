import { Link } from "react-router-dom"
import beersImg from "./../assets/beers.png"
import randomBeerImg from "./../assets/random-beer.png"
import newBeerImg from "./../assets/new-beer.png"

function HomePage() {

    return (
        <>
            <ul>

                <li><Link to={"/beers"}>
                    <img src={beersImg} alt="Beers" />
                    <h2>All Beers</h2>
                    <p>Browse through our varied list of beers.</p>
                </Link></li>
                <li><Link to={"/random-beer"}>
                    <img src={randomBeerImg} alt="Random beer" />
                    <h2>Random Beer</h2>
                    <p>Not sure what you want? Let us pick a beer for you.</p>
                </Link></li>
                <li><Link to={"/new-beer"}>
                    <img src={newBeerImg} alt="New beer" />
                    <h2>New Beer</h2>
                    <p>Feeling inspired? Create your own beer!</p>
                </Link></li>
            </ul>
        </>
    )
}

export default HomePage;
