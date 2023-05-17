import {Link, useNavigate, useParams} from "react-router-dom";
import AlbumList from "../../components/AlbumList";
import {useEffect, useState} from "react";
import Loading from "../../components/Loading";
import BASE_URL from "../../settings";

function Artist({playSong, setError}) {
    const {artistName} = useParams();

    const navigate = useNavigate()

    const [artist, setArtist] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const fetchArtist = async () => {
        const response = await fetch(BASE_URL + '/artist.php?name=' + encodeURI(artistName))

        if (!response.status === 200) {
            setError(`Unable to fetch artist '${artistName}`)
        } else {
            const artist = await response.json()
            setArtist(artist)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchArtist()
    }, [])

    return (
        <div className="row align-items-start gx-5 h-75 p-5 overflow-x-auto">
            <div className="col-12 mb-5">
                <Link onClick={() => navigate(-1)} className="float-end text-white link-underline link-underline-opacity-0"><i
                    className="bi bi-arrow-return-left"></i> back</Link>
                <h1>{artist.name}</h1>
            </div>
            <div className="col">
                <div className="row">
                    {artist && artist.albums.map(album =>
                        <AlbumList
                            key={album.name}
                            album={album}
                            playSong={playSong}
                            artist={artist.name}
                            setError={setError}
                        />
                    )}
                    {isLoading && <div className={"col"}><Loading /></div>}
                </div>
            </div>
        </div>
    );
}
export default Artist;
