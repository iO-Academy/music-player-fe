import {
    Link
} from "react-router-dom";
import Album from "../Album";

function PopularAlbums() {

    const albums = [
        {
            "artist": "Billie Eilish",
            "name": "When We All Fall Asleep, Where Do We Go?",
            "songs": [
                "bad guy",
                "bury a friend",
                "you should see me in a crown"
            ],
            "artwork_url": "https://via.placeholder.com/50x50/386641/6A994E?text=The+Memory+of+Trees"
        }    ,
        {
            "artist": "Taylor Swift",
            "name": "Lover",
            "songs": [
                "ME!",
                "You Need To Calm Down",
                "Lover"
            ],
            "artwork_url": "https://via.placeholder.com/50x50/386641/6A994E?text=The+Memory+of+Trees"
        },
        {
            "artist": "Ed Sheeran",
            "name": "÷",
            "songs": [
                "Shape of You",
                "Castle on the Hill",
                "Galway Girl"
            ],
            "artwork_url": "https://via.placeholder.com/50x50/386641/6A994E?text=The+Memory+of+Trees"
        }
    ]

    return (
        <div className="col">
            <h5 className="mb-3">Most Popular Albums</h5>

            {albums.map(album =>
                <Album
                    key={album.name}
                    name={album.name}
                    artwork={album.artwork_url}
                    artistName={album.artist}
                />
            )}

        </div>
    );
}

export default PopularAlbums;
