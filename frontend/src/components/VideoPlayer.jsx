import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // CORS proxy
                const targetUrl =
                    "https://www.imdb.com/video/vi3877612057/?ref_=tt_vi_i_1";
                const response = await fetch(proxyUrl + targetUrl, {
                    method: "GET",
                    headers: {
                        Accept: "video/mp4;charset=UTF-8",
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.text();
                //console.log(data);
                setResponseData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Data from API</h1>
            {/* {
                <ReactPlayer
                    url=""
                    controls // Display video controls (play, pause, etc.)
                    width="100%" // Set the width of the video player
                    height="auto" // Set the height automatically based on the aspect ratio
                />
            } */}
            <iframe
                title="IMDb Video"
                width="560"
                height="315"
                src="https://imdb-video.media-imdb.com/vi3877612057/1434659607842-pgv4ql-1616202333253.mp4?Expires=1691571896&Signature=CIJ5MeKRZ4wyWOP4nZ~ip8L4CR~Q8ndHVDGN5Js0qCmp3dleGS8Dc~E1XWlClkReYDSZPkWycfeGcAdEOv25OhMmy6NEnq6v3Mvkd~upoGbx4cjRVoc1cJdak~FEn7dc~Z5JuRdii4UfEPuedX06K1bq6OB~Hnh6E1zD8XdHc-Zm66H~5dfDNxwpWUx2K0Hi1iJmh05xOe2Y0qkuhao-5QLNWX7Xod5jfFlGndTtHs~B0ALGJGBfPL-nA1dkBQ2ZadrMKkaZhVFzMkfva9AxLL-gw8kjh1saAJYuy8rC90i606AExyRoPKIpDkyL4souurB2lWg9GuqcxgR8wFkqEg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default VideoPlayer;
