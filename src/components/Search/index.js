import {useState} from "react";
import Song from "../Song";
import BASE_URL from "../../settings";

function Search({showSearch, playSong, setError}) {

    const [results, setResults] = useState([])

    const search = async (e) => {
        const searchTerm = e.target.value
        try {
            const response = await fetch( BASE_URL + 'search.php?name=' + searchTerm)
            const searchResults = await response.json()
            setResults(searchResults)
        } catch(e) {
            setError(e.message)
        }
    }

    return (
        <div className={"position-fixed search p-3 border-top dark-blue"}>
            <i className="float-end bi bi-x-square" onClick={() => showSearch(false)}></i>
            <h5><label htmlFor={"songSearch"}>SEARCH</label></h5>
            <input type={"search"} className="form-control mb-3" id={"songSearch"} onChange={search} />

            {
                results.length > 0 &&
                <div className={"overflow-x-auto results"}>
                    {
                        results.map((song, index) =>
                            <Song
                                key={index}
                                name={song.name}
                                length={song.length}
                                playSong={playSong}
                                subhead={`Played ${song.play_count} times`}
                                artist={song.artist}
                                artwork={song.artwork_url}
                                is_fav={song.is_fav}
                                setError={setError}
                            />
                        )
                    }
                </div>
            }

        </div>
    )

}

export default Search;
