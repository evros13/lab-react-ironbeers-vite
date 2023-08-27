import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddBeerPage() {

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState("")

    const navigate = useNavigate()

    const apiUrl = "https://ih-beers-api2.herokuapp.com/beers/new";


    function handleSubmit(event) {

        event.preventDefault()

        const body = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        }

        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((res) => {
                return res.json();
            })
            .then((newBeer) => {
                console.log(newBeer);
                setName("")
                setTagline("")
                setDescription("")
                setFirstBrewed("")
                setBrewersTips("")
                setAttenuationLevel(0)
                setContributedBy("")

                navigate("/beers")
            })
            .catch((error) => console.log(error));
    }

// IT SENDS ALL THE INFORMATION TO THE DATABASE (THE CONSOLE LOGS ALL THE FIELDS), BUT ONLY THE NAME, THE TAGLINE AND THE CREATED BY FIELDS ARE SHOWN ON THE LIST
// I CAN SEE OTHER PEOPLE'S TESTS AND THEY ALL SHOW THE SAME ISSUE

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} >
                    <div className="formField">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="formField">
                        <label>Tagline</label>
                        <input
                            type="text"
                            name="tagline"
                            onChange={(e) => setTagline(e.target.value)}
                            value={tagline}
                        />
                    </div>
                    <div className="formField">
                        <label>Description</label>
                        <textarea
                            type="text"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                    </div>
                    <div className="formField">
                        <label>First Brewed</label>
                        <input
                            type="text"
                            name="firstBrewed"
                            onChange={(e) => setFirstBrewed(e.target.value)}
                            value={firstBrewed}
                        />
                    </div>
                    <div className="formField">
                        <label>Brewer's Tips</label>
                        <input
                            type="text"
                            name="brewersTips"
                            onChange={(e) => setBrewersTips(e.target.value)}
                            value={brewersTips}
                        />
                    </div>
                    <div className="formField">
                        <label>Attenuation Level</label>
                        <input
                            type="number"
                            name="attenuationLevel"
                            onChange={(e) => setAttenuationLevel(e.target.value)}
                            value={attenuationLevel}
                        />
                    </div>
                    <div className="formField">
                        <label>Contributed by</label>
                        <input
                            type="text"
                            name="contributedBy"
                            onChange={(e) => setContributedBy(e.target.value)}
                            value={contributedBy}
                        />
                    </div>
                    <button type="submit">Add Beer</button>
                </form>
            </div>
        </>
    );
}

export default AddBeerPage;
