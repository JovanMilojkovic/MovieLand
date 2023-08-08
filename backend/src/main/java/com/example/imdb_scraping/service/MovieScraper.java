package com.example.imdb_scraping.service;

import com.example.imdb_scraping.Entity.Movie;
import com.example.imdb_scraping.repository.MovieRepository;
import jakarta.annotation.PostConstruct;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class MovieScraper {
    private final ConnectingToImdb connecting;
    private final List<Movie> movies;
    private final MovieRepository movieRepository;
    public final List<String> imdbMoviesId;
    private final String top250Url = "https://www.imdb.com/chart/top/?ref_=nv_mv_250";


    public MovieScraper(ConnectingToImdb connecting, List<Movie> movies, MovieRepository movieRepository) {
        this.connecting = connecting;
        this.movies = movies;
        this.movieRepository = movieRepository;
        this.imdbMoviesId = new ArrayList<>();
    }

    @PostConstruct
    public void scrapingLiElementsFromTop250Imdb() {
        Elements liElements = connecting
                .connectingAndReturnPage(top250Url)
                .getElementsByClass("ipc-metadata-list-summary-item sc-bca49391-0 eypSaE cli-parent");

        for (Element li : liElements) {
            Movie movie = new Movie();
            movie.setTitle(Arrays.stream(li.select("h3").text().split("\\."))
                    .skip(1)
                    .toList()
                    .get(0)
                    .trim());
            movie.setYear(li.select(".kHVqMR").get(0).text());
            movie.setDuration(li.select(".kHVqMR").get(1).text());
            movie.setScore(li.select("span.ipc-rating-star--base").get(0).text());
            movie.setImgUrl(li.select("img.ipc-image")
                    .attr("src")
                    .replace("140", "280")
                    .replace("207", "414"));
            String videoUrl= (li.getElementsByClass("ipc-title-link-wrapper").attr("href"));
            movie.setVideoUrl("https://www.imdb.com"+connecting.connectingAndReturnPage("https://imdb.com" + videoUrl)
                    .getElementsByClass("ipc-lockup-overlay ipc-focusable")
                    .get(1)
                    .attr("href"));
            System.out.println(liElements.indexOf(li));
            movieRepository.save(movie);
        }

    }

}
