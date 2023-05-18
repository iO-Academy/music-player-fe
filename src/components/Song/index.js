
import favouriteSong from "../../Helpers/favourite";
import {useState} from "react";
function Song({name, subhead, length, playSong, artist, artwork, is_fav = false, setError}) {

    const [isFavourite, setIsFavourite] = useState(is_fav)

    return (
        <div className="light-blue p-2 ps-3 pe-4 mb-3 rounded d-flex justify-content-between align-items-center">
            <div className="w-50">
                <h6 className="mb-0">{name}</h6>
                <small>{subhead}</small>
            </div>
            <div className={"mx-2"}>
                <small className="text-white-50">{length}</small>
            </div>
            <div>
                <i className={"bi " + (isFavourite ? "bi-heart-fill" : "bi-heart")} onClick={() => {
                    favouriteSong(name, artist).then(response => {
                        setIsFavourite(!isFavourite)
                    }).catch(e => {
                        setError(e.message)
                    })
                }}></i>
            </div>
            <div className="fs-4">
                <i onClick={() => {playSong(name, artist, artwork)}} className="bi bi-play-circle-fill"></i>
            </div>
        </div>
    );
}

export default Song;
