function Song({name, subhead, length, playSong, artist, artwork}) {

    return (
        <div className="light-blue p-2 ps-3 pe-4 mb-3 rounded d-flex justify-content-between align-items-center">
            <div className="w-75">
                <h6 className="mb-0">{name}</h6>
                <small>{subhead}</small>
            </div>
            <div className={"mx-2"}>
                <small className="text-white-50">{length}</small>
            </div>
            <div className="fs-4">
                <i onClick={() => {playSong(name, artist, artwork)}} className="bi bi-play-circle-fill"></i>
            </div>
        </div>
    );
}

export default Song;
