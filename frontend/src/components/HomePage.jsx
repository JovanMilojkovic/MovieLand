import React, { useEffect } from "react";
import { useState } from "react";

import SearchIcon from "../search.svg";
import Top250Movies from "./Top250Movies.jsx";

function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showMovieList250, setShowMovieList250] = useState(false);
    const searchMovies = async () => {
        // const response = await fetch("http://localhost:8080/");
        // const data = await response.json();
        // setMovies(data);
    };

    function handleClick() {
        showMovieList250
            ? setShowMovieList250(false)
            : setShowMovieList250(true);
    }
    useEffect(() => {}, [showMovieList250]);

    return (
        <>
            <div className="app">
                <h1>MovieLand</h1>
                <div className="search">
                    <input
                        placeholder="Search for movies"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    ></input>
                    <img
                        src={SearchIcon}
                        alt="search"
                        onClick={() => searchMovies(searchTerm)}
                    />
                </div>
                <a href="#" role="button" onClick={handleClick}>
                    <h3
                        style={{
                            fontStyle: "italic",
                            color: "GrayText",
                        }}
                    >
                        {showMovieList250 ? "Home" : "Top 250 Movies"}
                    </h3>
                </a>
                {!showMovieList250 ? (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                ) : null}
                {showMovieList250 ? <Top250Movies /> : false}
            </div>
        </>
    );
}

export default HomePage;
