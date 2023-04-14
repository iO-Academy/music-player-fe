import ArtistList from "../../components/ArtistList";
import {Link} from "react-router-dom";


function Artists() {

    const allArtists = {
        "artists": [
            {
                "name": "Billie Eilish",
                "albums": [
                    {
                        "name": "When We All Fall Asleep, Where Do We Go?",
                        "songs": [
                            "bad guy",
                            "bury a friend",
                            "you should see me in a crown"
                        ],
                        "artwork_url": "https://example.com/billie_eilish_when_we_all_fall_asleep.jpg"
                    },
                    {
                        "name": "Happier Than Ever",
                        "songs": [
                            "NDA",
                            "Therefore I Am",
                            "Happier Than Ever"
                        ],
                        "artwork_url": "https://example.com/billie_eilish_happier_than_ever.jpg"
                    }
                ]
            },
            {
                "name": "Beyonce",
                "albums": [
                    {
                        "name": "Lemonade",
                        "songs": [
                            "Formation",
                            "Sorry",
                            "Hold Up"
                        ],
                        "artwork_url": "https://example.com/beyonce-lemonade.jpg"
                    },
                    {
                        "name": "BEYONCE",
                        "songs": [
                            "Drunk in Love",
                            "Partition",
                            "XO"
                        ],
                        "artwork_url": "https://example.com/beyonce-beyonce.jpg"
                    }
                ]
            },
            {
                "name": "Taylor Swift",
                "albums": [
                    {
                        "name": "Lover",
                        "songs": [
                            "ME!",
                            "You Need To Calm Down",
                            "Lover"
                        ],
                        "artwork_url": "https://example.com/taylor_swift_lover.jpg"
                    },
                    {
                        "name": "1989",
                        "songs": [
                            "Shake It Off",
                            "Blank Space",
                            "Bad Blood"
                        ],
                        "artwork_url": "https://example.com/taylor-swift-1989.jpg"
                    },
                    {
                        "name": "folklore",
                        "songs": [
                            "the 1",
                            "cardigan",
                            "exile (feat. Bon Iver)",
                            "my tears ricochet",
                            "mirrorball",
                            "seven",
                            "august",
                            "this is me trying",
                            "illicit affairs",
                            "invisible string",
                            "mad woman",
                            "epiphany",
                            "betty",
                            "peace",
                            "hoax"
                        ],
                        "artwork_url": "https://example.com/taylor_swift_folklore.jpg"
                    },
                    {
                        "name": "evermore",
                        "songs": [
                            "willow",
                            "champagne problems",
                            "gold rush",
                            "'tis the damn season",
                            "tolerate it",
                            "no body, no crime (feat. HAIM)",
                            "happiness",
                            "dorothea",
                            "coney island (feat. The National)",
                            "ivy",
                            "cowboy like me",
                            "long story short",
                            "marjorie",
                            "closure"
                        ],
                        "artwork_url": ""
                    }
                ]
            },
            {
                "name": "Will Smith",
                "albums": [
                    {
                        "name": "Lost and Found",
                        "songs": [
                            "Here He Comes",
                            "Party Starter",
                            "Switch",
                            "Mr. Niceguy",
                            "Ms. Holy Roller",
                            "Tell Me Why",
                            "I Wish I Made That / Swagga"
                        ]
                    }
                ]
            },
            {
                "name": "Ed Sheeran",
                "albums": [
                    {
                        "name": "÷",
                        "songs": [
                            "Shape of You",
                            "Castle on the Hill",
                            "Galway Girl"
                        ],
                        "artwork_url": "https://example.com/ed-sheeran-divide.jpg"
                    },
                    {
                        "name": "x",
                        "songs": [
                            "One",
                            "I'm a Mess",
                            "Sing",
                            "Don't",
                            "Nina",
                            "Photograph",
                            "Bloodstream",
                            "Tenerife Sea",
                            "Runaway",
                            "The Man",
                            "Thinking Out Loud",
                            "Afire Love"
                        ],
                        "artwork_url": "https://example.com/ed-sheeran-x.jpg"
                    }
                ]
            }
        ]
    }

    return (
        <div className="row align-items-start gx-5 h-75 p-5 overflow-x-auto">
            <div className="col-12 mb-5">
                <Link to="/" className="float-end text-white link-underline link-underline-opacity-0"><i
                    className="bi bi-arrow-return-left"></i> back</Link>
                <h1>Artists</h1>
            </div>
            <div className="col">
                <div className="row">
                    {allArtists.artists.map(artist => <ArtistList artist={artist} />)}
                </div>
            </div>
        </div>
    );
}
export default Artists;
