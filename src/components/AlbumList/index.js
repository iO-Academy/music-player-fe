import Song from "../Song";

function AlbumList({album, artist, playSong}) {

    return (
        <div className="col-4 mb-4">
            <div className="rounded light-blue px-3 pt-4 pb-1 text-light">
                <h4 className="mb-3">{album.name}</h4>

                {album.songs.map(song =>
                    <Song
                        key={song}
                        name={song}
                        length={"3:28"}
                        playSong={playSong}
                        subhead={"Played 5 times"}
                        artist={artist}
                        artwork={album.artwork_url}
                    />
                )}

            </div>
        </div>
    );
}

export default AlbumList;
