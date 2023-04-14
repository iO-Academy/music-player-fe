import {
    Link
} from "react-router-dom";
import ArtistSummary from "../ArtistSummary";
import {useEffect, useState} from "react";

function Artists({allArtists}) {

    const [artists, setArtists] = useState([])

    useEffect(() => {
        let shuffledArtists = shuffleArray(allArtists)
        let chosenArtists = [shuffledArtists[0], shuffledArtists[1], shuffledArtists[2]]
        chosenArtists = chosenArtists.map(artist => {
            artist.albumArtwork = [
                'https://via.placeholder.com/400x400/386641/6A994E?text=The+Memory+of+Trees',
                'https://via.placeholder.com/400x400/386641/6A994E?text=The+Memory+of+Trees',
                'https://via.placeholder.com/400x400/386641/6A994E?text=The+Memory+of+Trees'
            ]
            return artist
        })
        setArtists(chosenArtists)
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

                {artists.map(artist =>
                    <ArtistSummary key={artist.name} name={artist.name} albumCount={artist.albums.length+1} albumArtwork={artist.albumArtwork} />
                )}

                <div className="col-12 col-lg-6 mb-4 align-self-stretch">
                    <div className="rounded light-blue p-3 h-100 text-light d-flex align-items-center">
                        <h4 className="text-white-50 m-0">+{allArtists.length-2} more</h4>
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
