import ArtistList from "../../components/ArtistList";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Loading from "../../components/Loading";
import BASE_URL from "../../settings";


function Artists({setError}) {

    const [allArtists, setArtists] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const fetchArtists = async () => {
        const response = await fetch('/artists.json')

        if (!response.ok) {
            setError('Unable to fetch artists')
        } else {
            const artists = await response.json()
            setArtists(artists)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchArtists()
    }, [])

    return (
        <div className="row align-items-start gx-5 h-75 p-5 overflow-x-auto">
            <div className="col-12 mb-5">
                <Link to="/" className="float-end text-white link-underline link-underline-opacity-0"><i
                    className="bi bi-arrow-return-left"></i> back</Link>
                <h1>Artists</h1>
            </div>
            <div className="col">
                <div className="row">

                    {allArtists && allArtists.artists.map(artist =>
                        <ArtistList key={artist.name} artist={artist} />
                    )}

                    {isLoading && <div className={"col"}><Loading /></div>}
                </div>
            </div>
        </div>
    );
}
export default Artists;
