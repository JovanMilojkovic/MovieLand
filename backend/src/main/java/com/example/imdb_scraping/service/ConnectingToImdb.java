package com.example.imdb_scraping.service;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class ConnectingToImdb {

    //Connecting and returning whole page
    public Document connectingAndReturnPage(String url) {
        try {
            return Jsoup.connect(url)
                    .timeout(30000)
                    .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36")
                    .header("Accept-Language", "en;q=0.8")
                    .get();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
