import Song from "../Song";
import {useEffect, useState} from "react";
import Loading from "../Loading";

function RecentlyPlayed({playSong}) {

    const [songs, setSongs] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const fetchSongs = async () => {
        const response = await fetch('recentsongs.json')
        const recentSongs = await response.json()
        setSongs(recentSongs)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchSongs()
    }, [])

    return (
        <div className="col">
            <h5 className="mb-3">Recently Played Songs</h5>
            {songs && songs.map(song =>
                    <Song
                        name={song.name}
                        subhead={song.artist}
                        artist={song.artist}
                        length={song.length}
                        playSong={playSong}
                        artwork={song.artwork_url}
                    />
                )
            }
            {isLoading && <Loading />}


        </div>
    );
}

export default RecentlyPlayed;
