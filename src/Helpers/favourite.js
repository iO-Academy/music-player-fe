import BASE_URL from "../settings";

const favouriteSong = async (name, artist) => {
    const response = await fetch(BASE_URL + 'favourite.php', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name: name, artist: artist})
    })
    return response.json()
}

export default favouriteSong;