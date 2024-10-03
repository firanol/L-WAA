package com.example.bookdemo.controller;

import com.example.bookdemo.domain.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class BookController {

    @GetMapping("/books")
    public List<Book> getBooks() {
        return Arrays.asList(
                new Book(1, "Spring Boot in Action", "9781617292545"),
                new Book(2, "Java: The Complete Reference", "9781260440232")
        );
    }
}
