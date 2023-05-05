import {
    Link
} from "react-router-dom";
import Album from "../Album";

function ArtistList({artist}) {

    return (
        <div className="col-4 mb-4">
            <div className="rounded light-blue px-3 pt-4 pb-1 text-light">
                <h4 className="mb-3">{artist.name}</h4>

                {artist.albums.map(album =>
                    <Album
                        key={album.name}
                        name={album.name}
                        songCount={album.songs.length+1}
                        artwork={album.artwork_url}
                        artistName={artist.name}
                    />
                )}

            </div>
        </div>
    );
}

export default ArtistList;
