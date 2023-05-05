import {
    Link
} from "react-router-dom";
import ArtistSummary from "../ArtistSummary";
import {useEffect, useState} from "react";
import Loading from "../Loading";

function Artists({setError}) {

    const [artists, setArtists] = useState(false)
    const [artistsCount, setArtistsCount] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const fetchArtists = async () => {
        const response = await fetch('artists.json')

        if (!response.ok) {
            setError('Unable to fetch artists')
        }

        return await response.json()
    }

    useEffect(() => {
        fetchArtists().then(allArtists => {
            setArtistsCount(allArtists.artists.length-2)
            let shuffledArtists = shuffleArray(allArtists.artists)
            let chosenArtists = [shuffledArtists[0], shuffledArtists[1], shuffledArtists[2]]
            chosenArtists = chosenArtists.map((artist) => {
                artist.albumArtwork = artist.albums.map(album => album.artwork_url)
                return artist
            })

            setArtists(chosenArtists)
            setIsLoading(false)
        })
    }, [])

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    return (
        <div className="col">
            <div className="row">
                <h5 className="col-12 mb-3">Artists</h5>

                {artists && artists.map(artist =>
                    <ArtistSummary
                        key={artist.name}
                        name={artist.name}
                        albumCount={artist.albums.length+1}
                        albumArtwork={artist.albumArtwork}
                    />
                )}

                {isLoading && <Loading />}

                <div className="col-12 col-lg-6 mb-4 align-self-stretch">
                    <div className="rounded light-blue p-3 h-100 text-light d-flex align-items-center">
                        <h4 className="text-white-50 m-0">+{artistsCount} more</h4>
                    </div>
                </div>
                <div className="col-12">
                    <Link to="/artists" className="btn btn-primary float-end">See all <i
                        className="bi bi-arrow-right-square-fill static"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default Artists;
