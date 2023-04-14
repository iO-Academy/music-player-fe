import {
    Link
} from "react-router-dom";

function Album({name, songCount, artwork, artistName}) {

    return (
        <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
            <div className="me-2">
                <img src={artwork} alt={name + " album artwork"} />
            </div>
            <div className="w-75">
                <h6 className="mb-0">{name}</h6>
                <small>
                    {songCount ? songCount + " songs" : artistName}
                </small>
            </div>
            <div className="fs-4">
                <Link to={"/artists/" + artistName} className="bi bi-arrow-right-square-fill"></Link>
            </div>
        </div>
    );
}

export default Album;
