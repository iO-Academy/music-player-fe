import {
    Link
} from "react-router-dom";

function Album({name, songCount, artwork, artistName}) {

    return (
        <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
            <div className="me-2 w-25 align-self-start">
                <img src={artwork} alt={name + " album artwork"} className={"w-100 align-top"} />
            </div>
            <div className="w-75 mx-2">
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
