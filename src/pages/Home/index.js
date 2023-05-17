import RecentlyPlayed from "../../components/RecentlyPlayed";
import Artists from "../../components/Artists";
import PopularAlbums from "../../components/PopularAlbums";

function Home({playSong, setError}) {

    return (
        <div className="row align-items-start gx-5 h-75 p-5 overflow-x-auto">
            <h1 className="col-12 mb-5">Home</h1>
            <Artists setError={setError} />
            <RecentlyPlayed playSong={playSong} setError={setError} />
        </div>
    );
}
export default Home;
