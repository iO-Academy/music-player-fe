import RecentlyPlayed from "../../components/RecentlyPlayed";
import Artists from "../../components/Artists";
import PopularAlbums from "../../components/PopularAlbums";

function Home({playSong}) {

    const artists = {
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
            },
            {
                "name": "Adele",
                "albums": [
                    {
                        "name": "25",
                        "songs": [
                            "Hello",
                            "When We Were Young",
                            "Send My Love (To Your New Lover)"
                        ]
                    },
                    {
                        "name": "21",
                        "songs": [
                            "Rolling in the Deep",
                            "Someone Like You",
                            "Set Fire to the Rain"
                        ]
                    },
                    {
                        "name": "19",
                        "songs": [
                            "Chasing Pavements",
                            "Hometown Glory",
                            "Cold Shoulder"
                        ]
                    }
                ]
            },
            {
                "name": "Cardi B",
                "albums": [
                    {
                        "name": "Invasion of Privacy",
                        "songs": [
                            "Bodak Yellow",
                            "I Like It",
                            "Be Careful"
                        ]
                    }
                ]
            },
            {
                "name": "Justin Bieber",
                "albums": [
                    {
                        "name": "Justice",
                        "songs": [
                            "Peaches (feat. Daniel Caesar & Giveon)",
                            "Hold On",
                            "Anyone"
                        ]
                    },
                    {
                        "name": "Changes",
                        "songs": [
                            "Yummy",
                            "Intentions (feat. Quavo)",
                            "Forever (feat. Post Malone & Clever)"
                        ]
                    },
                    {
                        "name": "Purpose",
                        "songs": [
                            "What Do You Mean?",
                            "Sorry",
                            "Love Yourself"
                        ]
                    }
                ]
            },
            {
                "name": "Spice Girls",
                "albums": [
                    {
                        "name": "Spice",
                        "songs": [
                            "Wannabe",
                            "Say You'll Be There",
                            "2 Become 1"
                        ]
                    },
                    {
                        "name": "Spiceworld",
                        "songs": [
                            "Spice Up Your Life",
                            "Stop",
                            "Too Much"
                        ]
                    },
                    {
                        "name": "Forever",
                        "songs": [
                            "Holler",
                            "Let Love Lead the Way",
                            "Goodbye"
                        ]
                    }
                ]
            },
            {
                "name": "Enya",
                "albums": [
                    {
                        "name": "Watermark",
                        "songs": [
                            "Orinoco Flow",
                            "Storms in Africa",
                            "On Your Shore"
                        ]
                    },
                    {
                        "name": "Shepherd Moons",
                        "songs": [
                            "Caribbean Blue",
                            "Shepherd Moons",
                            "How Can I Keep from Singing?"
                        ]
                    },
                    {
                        "name": "The Memory of Trees",
                        "songs": [
                            "Anywhere Is",
                            "China Roses",
                            "The Memory of Trees"
                        ]
                    }
                ]
            },
            {
                "name": "Doja Cat",
                "albums": [
                    {
                        "name": "Amala",
                        "songs": [
                            "Go To Town",
                            "Cookie Jar",
                            "Roll With Us"
                        ]
                    },
                    {
                        "name": "Hot Pink",
                        "songs": [
                            "Say So",
                            "Boss Bitch",
                            "Like That (feat. Gucci Mane)"
                        ]
                    },
                    {
                        "name": "Planet Her",
                        "songs": [
                            "Kiss Me More (feat. SZA)",
                            "Woman",
                            "Ain't Shit"
                        ]
                    }
                ]
            },
            {
                "name": "Pink",
                "albums": [
                    {
                        "name": "Hurts 2B Human",
                        "songs": [
                            "Walk Me Home",
                            "Hustle",
                            "Can We Pretend (feat. Cash Cash)"
                        ]
                    },
                    {
                        "name": "Beautiful Trauma",
                        "songs": [
                            "What About Us",
                            "Beautiful Trauma",
                            "Revenge (feat. Eminem)",
                            "Whatever You Want"
                        ]
                    },
                    {
                        "name": "The Truth About Love",
                        "songs": [
                            "Blow Me (One Last Kiss)",
                            "Try",
                            "Just Give Me a Reason (feat. Nate Ruess)",
                            "True Love (feat. Lily Allen)"
                        ]
                    }
                ]
            },
            {
                "name": "Eminem",
                "albums": [
                    {
                        "name": "Kamikaze",
                        "songs": [
                            "The Ringer",
                            "Lucky You (feat. Joyner Lucas)",
                            "Not Alike (feat. Royce Da 5'9\")",
                            "Kamikaze",
                            "Fall",
                            "Venom (Music from the Motion Picture)"
                        ]
                    },
                    {
                        "name": "Revival",
                        "songs": [
                            "Walk on Water (feat. Beyoncé)",
                            "Believe",
                            "Untouchable",
                            "Like Home (feat. Alicia Keys)",
                            "River (feat. Ed Sheeran)"
                        ]
                    },
                    {
                        "name": "The Marshall Mathers LP 2",
                        "songs": [
                            "Bad Guy",
                            "Survival",
                            "Rap God",
                            "Berzerk"
                        ]
                    }
                ]
            },
            {
                "name": "Saweetie",
                "albums": [
                    {
                        "name": "Pretty Summer Playlist: Season 1",
                        "songs": [
                            "Best Friend (feat. Doja Cat)",
                            "See Saw (feat. Kendra Jae)",
                            "Pretty & Rich"
                        ]
                    }
                ]
            },
            {
                "name": "The Prodigy",
                "albums": [
                    {
                        "name": "The Day Is My Enemy",
                        "songs": [
                            "Nasty",
                            "The Day Is My Enemy",
                            "Wild Frontier",
                            "Rhythm Bomb (feat. Flux Pavilion)",
                            "Destroy"
                        ]
                    },
                    {
                        "name": "Invaders Must Die",
                        "songs": [
                            "Omen",
                            "Warrior's Dance",
                            "Take Me to the Hospital",
                            "Invaders Must Die",
                            "World's on Fire"
                        ]
                    },
                    {
                        "name": "Always Outnumbered, Never Outgunned",
                        "songs": [
                            "Spitfire",
                            "Girls",
                            "Hotride",
                            "Medusa's Path",
                            "Action Radar"
                        ]
                    }
                ]
            },
            {
                "name": "Goo Goo Dolls",
                "albums": [
                    {
                        "name": "Miracle Pill",
                        "songs": [
                            "Indestructible",
                            "Miracle Pill",
                            "Money, Fame & Fortune",
                            "Life's a Message",
                            "Autumn Leaves"
                        ]
                    },
                    {
                        "name": "Boxes",
                        "songs": [
                            "Over and Over",
                            "So Alive",
                            "Flood (feat. Sydney Sierota)",
                            "Lucky One",
                            "Souls in the Machine"
                        ]
                    },
                    {
                        "name": "Magnetic",
                        "songs": [
                            "Rebel Beat",
                            "When the World Breaks Your Heart"
                        ]
                    }
                ]
            },
            {
                "name": "Justin Timberlake",
                "albums": [
                    {
                        "name": "Man of the Woods",
                        "songs": [
                            "Filthy",
                            "Say Something (feat. Chris Stapleton)",
                            "Man of the Woods",
                            "Montana",
                            "Breeze Off the Pond"
                        ]
                    },
                    {
                        "name": "The 20/20 Experience - 2 of 2",
                        "songs": [
                            "Take Back the Night",
                            "TKO",
                            "True Blood",
                            "Only When I Walk Away"
                        ]
                    },
                    {
                        "name": "The 20/20 Experience",
                        "songs": [
                            "Suit & Tie (feat. Jay-Z)",
                            "Mirrors",
                            "Pusher Love Girl",
                            "Don't Hold the Wall",
                            "That Girl"
                        ]
                    }
                ]
            },
            {
                "name": "The Ting Tings",
                "albums": [
                    {
                        "name": "The Black Light",
                        "songs": [
                            "Estranged",
                            "Earthquake",
                            "A & E"
                        ]
                    },
                    {
                        "name": "Super Critical",
                        "songs": [
                            "Wrong Club",
                            "Do It Again",
                            "Give It Back",
                            "Green Poison",
                            "Only Love"
                        ]
                    }
                ]
            }
        ]
    }

    return (
        <div className="row align-items-start gx-5 h-75 p-5">
            <h1 className="col-12 mb-5">Home</h1>
            <RecentlyPlayed playSong={playSong} />
            <Artists allArtists={artists.artists} />
            <PopularAlbums />
        </div>
    );
}
export default Home;
