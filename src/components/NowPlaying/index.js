import {useEffect, useState} from "react";
import BASE_URL from "../../settings";

function NowPlaying({playingSong, setError}) {

    const [playTime, setPlayTime] = useState('0:00')
    const [playWidth, setPlayWidth] = useState(0)
    const [playing, setPlaying] = useState(false)
    const [audioElement] = useState(new Audio("/song.MP3"))

    audioElement.ontimeupdate = () => {
        let mins = Math.floor(audioElement.currentTime / 60)
        let seconds = parseInt(audioElement.currentTime % 60)
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        setPlayTime(mins.toString() + ':' + seconds.toString())
        setPlayWidth((audioElement.currentTime / audioElement.duration) * 100)
    }

    const togglePlay = () => {
        if (playing){
            pause()
        } else {
            play()
        }
    }

    const play = () => {
        audioElement.play()
        setPlaying(true)
    }

    const pause = () => {
        audioElement.pause()
        setPlaying(false)
    }

    const restart = () => {
        audioElement.currentTime = 0
    }



    useEffect(() => {
        play()
    }, [])

    useEffect(() => {
        restart()
    }, [playingSong])


    return (
        <div className="row p-3 pt-4 mt-1 h-25 light-blue">
            <div className="col-12">
                <h4>Now Playing <i className="bi bi-music-note-list float-end static"></i></h4>

            </div>
            <div className="col-2">
                <img src={playingSong.artwork} alt={playingSong.artist + " Album artwork"} className={"artwork-medium"} />
            </div>
            <div className="col-10">
                <div className="row h-100">
                    <div className="col">
                        <h5>{playingSong.name}</h5>
                        <h6>{playingSong.artist}</h6>
                    </div>
                    <div className="col fs-3 d-flex justify-content-evenly align-items-center">
                        <i className="bi bi-shuffle"></i>
                        <i className="bi bi-skip-backward-circle" onClick={restart}></i>
                        <i className={"bi fs-1 " + (playing ? "bi-pause-circle": "bi-play-circle")} onClick={togglePlay}></i>
                        <i className="bi bi-skip-forward-circle" onClick={restart}></i>
                        <i className="bi bi-repeat"></i>
                    </div>
                    <div className="col-12 d-flex align-items-center">
                        <div className={"me-2"}>{playTime}</div>
                        <div className="progress mt-1 w-100" role="progressbar" aria-label="Animated striped example"
                             aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar text-end pe-1" style={{width: playWidth + '%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NowPlaying;
