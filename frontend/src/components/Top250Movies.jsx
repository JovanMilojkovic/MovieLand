import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

function Top250Movies() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(10);
    const indexOfLastMovieCard = currentPage * moviesPerPage;
    const indexOfFirstMovieCard = indexOfLastMovieCard - moviesPerPage;
    const currentMovieCard = movies.slice(
        indexOfFirstMovieCard,
        indexOfLastMovieCard
    );
    const nPages = Math.ceil(movies.length / moviesPerPage);

    const fetchTop250MovieFromDb = async () => {
        try {
            const response = await fetch("http://localhost:8080/");
            const data = await response.json();
            setMovies(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTop250MovieFromDb();
    }, []);

    return (
        <>
            {movies.length > 0 ? (
                <div className="container">
                    {currentMovieCard.map((movie, index) => (
                        <MovieCard movie={movie} key={index} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>DB is empty</h2>
                </div>
            )}
            {movies.length && (
                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </>
    );
}

export default Top250Movies;
