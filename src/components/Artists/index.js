import {
    Link
} from "react-router-dom";

function Artists() {
    return (
        <div className="col">
            <div className="row">
                <h5 className="col-12 mb-3">Artists</h5>
                <div className="col-12 col-lg-6 mb-4">
                    <div className="rounded lightest-blue-hover light-blue p-3 text-light">
                        <div className="justify-content-start mb-2 d-flex">
                            <div className="gradient-1 rounded w-25 me-2">&nbsp;</div>
                            <div className="gradient-2 rounded w-25 me-2">&nbsp;</div>
                            <div className="gradient-3 rounded w-25 me-2">&nbsp;</div>
                        </div>
                        <h4 className="mb-0">Artist name</h4>
                        <small>3 Albums</small>
                    </div>
                </div>
                <div className="col-12 col-lg-6 mb-4">
                    <div className="rounded lightest-blue-hover light-blue p-3 text-light">
                        <div className="justify-content-start mb-2 d-flex">
                            <div className="gradient-1 rounded w-25 me-2">&nbsp;</div>
                            <div className="gradient-2 rounded w-25 me-2">&nbsp;</div>
                            <div className="gradient-3 rounded w-25 me-2">&nbsp;</div>
                        </div>
                        <h4 className="mb-0">Artist name</h4>
                        <small>3 Albums</small>
                    </div>
                </div>
                <div className="col-12 col-lg-6 mb-4">
                    <div className="rounded lightest-blue-hover light-blue p-3 text-light">
                        <div className="justify-content-start mb-2 d-flex">
                            <div className="gradient-1 rounded w-25 me-2">&nbsp;</div>
                            <div className="gradient-2 rounded w-25 me-2">&nbsp;</div>
                            <div className="gradient-3 rounded w-25 me-2">&nbsp;</div>
                        </div>
                        <h4 className="mb-0">Artist name</h4>
                        <small>3 Albums</small>
                    </div>
                </div>

                <div className="col-12 col-lg-6 mb-4 align-self-stretch">
                    <div className="rounded light-blue p-3 pt-4 h-100 text-light">
                        <h4 className="text-white-50 mt-3">+15 more</h4>
                    </div>
                </div>
                <div className="col-12">
                    <a href="artists.html" className="btn btn-primary float-end">See all <i
                        className="bi bi-arrow-right-square-fill static"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Artists;
