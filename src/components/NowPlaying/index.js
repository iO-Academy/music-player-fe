import {
    Link
} from "react-router-dom";
import {useEffect, useState} from "react";

function NowPlaying({playingSong}) {

    const [playTime, setPlayTime] = useState('0:00')

    const endTime = '3:28'

    // useEffect(() => {
    //     // setPlayTime('0.00')
    //
    //     const timer = setInterval(() => {
    //         console.log(playTime)
    //         if (playTime === endTime) {
    //             clearInterval(timer)
    //         }
    //         let mins = parseInt(playTime.split(':')[0])
    //         let seconds = parseInt(playTime.split(':')[1])
    //
    //         if (seconds === 59) {
    //             seconds = '00'
    //             mins = (mins+1).toString()
    //         } else {
    //             seconds++
    //             if (seconds < 10){
    //                 seconds = '0' + seconds.toString()
    //             } else {
    //                 seconds = seconds.toString()
    //             }
    //             mins = mins.toString()
    //         }
    //             console.log(mins + ':' + seconds)
    //         setPlayTime(mins + ':' + seconds)
    //     }, 1000)
    // }, [playingSong])

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
                        <i className="bi bi-skip-backward-circle"></i>
                        <i className="bi bi-play-circle fs-1"></i>
                        <i className="bi bi-skip-forward-circle"></i>
                        <i className="bi bi-repeat"></i>
                    </div>
                    <div className="col-12 d-flex align-items-center">
                        <div className="progress mt-1 w-100" role="progressbar" aria-label="Animated striped example"
                             aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar text-end pe-1 w-75">{playTime}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NowPlaying;
