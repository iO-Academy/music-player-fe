import {
    Link
} from "react-router-dom";

function PopularAlbums() {
    return (
        <div className="col">
            <h5 className="mb-3">Most Popular Albums</h5>
            <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                <div className="me-2">
                    <img src="https://via.placeholder.com/50x50/386641/6A994E?text=The+Memory+of+Trees"
                         alt="The Memory of Trees album artwork"/>
                </div>
                <div className="w-75">
                    <h6 className="mb-0">The Memory of Trees</h6>
                    <small>Artist Name</small>
                </div>
                <div className="fs-4">
                    <i className="bi bi-arrow-right-square-fill"></i>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                <div className="me-2">
                    <img src="https://via.placeholder.com/50x50/386641/6A994E?text=The+Memory+of+Trees"
                         alt="The Memory of Trees album artwork"/>
                </div>
                <div className="w-75">
                    <h6 className="mb-0">The Memory of Trees</h6>
                    <small>Artist Name</small>
                </div>
                <div className="fs-4">
                    <i className="bi bi-arrow-right-square-fill"></i>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                <div className="me-2">
                    <img src="https://via.placeholder.com/50x50/386641/6A994E?text=The+Memory+of+Trees"
                         alt="The Memory of Trees album artwork"/>
                </div>
                <div className="w-75">
                    <h6 className="mb-0">The Memory of Trees</h6>
                    <small>Artist Name</small>
                </div>
                <div className="fs-4">
                    <i className="bi bi-arrow-right-square-fill"></i>
                </div>
            </div>
        </div>
    );
}

export default PopularAlbums;
