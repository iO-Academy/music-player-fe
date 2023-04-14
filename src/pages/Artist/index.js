import {Link, useNavigate, useParams} from "react-router-dom";
import AlbumList from "../../components/AlbumList";


function Artist({playSong}) {
    const {artistName} = useParams();

    const navigate = useNavigate()

    const artist = {
        "name": "Billie Eilish",
        "albums": [
            {
                "name": "When We All Fall Asleep, Where Do We Go?",
                "songs": [
                    "bad guy",
                    "bury a friend",
                    "you should see me in a crown"
                ],
                "artwork_url": "https://example.com/billie_eilish_when_we_all_fall_asleep.jpg"
            },
            {
                "name": "Happier Than Ever",
                "songs": [
                    "NDA",
                    "Therefore I Am",
                    "Happier Than Ever"
                ],
                "artwork_url": "https://example.com/billie_eilish_happier_than_ever.jpg"
            }
        ]
    }

    return (
        <div className="row align-items-start gx-5 h-75 p-5 overflow-x-auto">
            <div className="col-12 mb-5">
                <Link onClick={() => navigate(-1)} className="float-end text-white link-underline link-underline-opacity-0"><i
                    className="bi bi-arrow-return-left"></i> back</Link>
                <h1>{artist.name}</h1>
            </div>
            <div className="col">
                <div className="row">
                    {artist.albums.map(album => <AlbumList key={album.name} album={album} playSong={playSong} artist={artist.name} />)}
                </div>
            </div>
        </div>
    );
}
export default Artist;
