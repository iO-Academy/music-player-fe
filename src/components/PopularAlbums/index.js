import Album from "../Album";
import {useEffect, useState} from "react";
import Loading from "../Loading";

function PopularAlbums() {

    const [albums, setAlbums] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const fetchAlbums = async () => {
        const response = await fetch('popularAlbums.json')
        const albums = await response.json()
        setAlbums(albums)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchAlbums()
    }, [])

    return (
        <div className="col">
            <h5 className="mb-3">Most Popular Albums</h5>

            {albums && albums.map(album =>
                <Album
                    key={album.name}
                    name={album.name}
                    artwork={album.artwork_url}
                    artistName={album.artist}
                />
            )}

            {isLoading && <Loading />}

        </div>
    );
}

export default PopularAlbums;
