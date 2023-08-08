package com.example.imdb_scraping.repository;


import com.example.imdb_scraping.Entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MovieRepository extends JpaRepository<Movie,Long> {
}
