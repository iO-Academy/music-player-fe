import {Link} from "react-router-dom";

function ArtistSummary({name, albumCount, albumArtwork}) {

    return (
        <Link to={"#"} className="col-12 col-lg-6 mb-4 text-decoration-none">
            <div className="rounded lightest-blue-hover light-blue p-3 text-light">
                <div className="justify-content-start mb-2 d-flex">
                    {albumArtwork.map((artwork, index) => <img key={index} src={artwork} className="rounded w-25 me-2" alt="Album artwork" />)}
                </div>
                <h4 className="mb-0">{name}</h4>
                <small>{albumCount} Albums</small>
            </div>
        </Link>
    );
}

export default ArtistSummary;
