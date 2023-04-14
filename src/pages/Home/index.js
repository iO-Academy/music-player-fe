import RecentlyPlayed from "../../components/RecentlyPlayed";
import Artists from "../../components/Artists";
import PopularAlbums from "../../components/PopularAlbums";

function Home() {
    return (
        <div className="row align-items-start gx-5 h-75 p-5">
            <h1 className="col-12 mb-5">Home</h1>
            <RecentlyPlayed />
            <Artists />
            <PopularAlbums />
        </div>
    );
}
export default Home;
