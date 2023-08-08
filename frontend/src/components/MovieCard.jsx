import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const MovieCard = ({ movie }) => {
    const { id, title, year, duration, score, imgUrl, videoUrl } = movie;
    const [showVideo, setShowVideo] = useState(false);
    console.log(title);

    function handleClick() {
        showVideo ? setShowVideo(false) : setShowVideo(true);
    }

    return (
        <>
            {showVideo ? (
                <VideoPlayer video={videoUrl} />
            ) : (
                <div className="movie" onClick={handleClick}>
                    <div>
                        {showVideo && (
                            <VideoPlayer video={videoUrl} movieTitle={title} />
                        )}
                        <p>{year}</p>
                        <p>
                            <svg
                                width="13"
                                height="13"
                                xmlns="http://www.w3.org/2000/svg"
                                className="ipc-icon ipc-icon--star-inline"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                role="presentation"
                                style={{ marginTop: -4 }}
                            >
                                <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                            </svg>{" "}
                            {score}
                        </p>
                        <h5
                            style={{
                                textAlign: "right",
                                marginTop: -75,
                                fontSize: 20,
                            }}
                        >
                            Nr.
                            {id}
                        </h5>
                    </div>
                    <div>
                        <img
                            src={
                                movie.Poster !== "N/A"
                                    ? imgUrl
                                    : "https://via.placeholder.com/400"
                            }
                            alt={title}
                        />
                    </div>
                    <div>
                        <span>{movie.Type}</span>
                        <h3>{title}</h3>
                    </div>
                </div>
            )}
        </>
    );
};

export default MovieCard;
