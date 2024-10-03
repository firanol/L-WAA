package com.example.bookstore.controller;

import com.example.bookstore.model.Book;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/books")
public class BookController {
    private List<Book> books = new ArrayList<>();

    public BookController() {
        // Hardcoded books
        books.add(new Book(1, "Book One", "ISBN001", 29.99));
        books.add(new Book(2, "Book Two", "ISBN002", 39.99));
    }

    // Original CRUD methods
    @GetMapping
    public List<Book> getAllBooks() {
        return books;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable int id) {
        Optional<Book> book = books.stream().filter(b -> b.getId() == id).findFirst();
        return book.map(ResponseEntity::ok).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        books.add(book);
        return new ResponseEntity<>(book, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable int id, @RequestBody Book updatedBook) {
        Optional<Book> existingBook = books.stream().filter(b -> b.getId() == id).findFirst();
        if (existingBook.isPresent()) {
            Book book = existingBook.get();
            book.setTitle(updatedBook.getTitle());
            book.setIsbn(updatedBook.getIsbn());
            book.setPrice(updatedBook.getPrice());
            return new ResponseEntity<>(book, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable int id) {
        boolean removed = books.removeIf(book -> book.getId() == id);
        return removed ? new ResponseEntity<>(HttpStatus.NO_CONTENT) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Versioning methods
    @GetMapping(value = "/{id}", produces = "application/cs.miu.edu-v2+json")
    public ResponseEntity<Book> getBookByIdV2(@PathVariable int id) {
        Optional<Book> book = books.stream().filter(b -> b.getId() == id).findFirst();
        return book.map(ResponseEntity::ok).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value = "/{id}", headers = "X-API-VERSION=2")
    public ResponseEntity<Book> getBookByIdHeaderV2(@PathVariable int id) {
        Optional<Book> book = books.stream().filter(b -> b.getId() == id).findFirst();
        return book.map(ResponseEntity::ok).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/v1/books/{id}")
    public ResponseEntity<Book> getBookByIdV1(@PathVariable int id) {
        Optional<Book> book = books.stream().filter(b -> b.getId() == id).findFirst();
        return book.map(ResponseEntity::ok).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping(value = "/{id}", params = "version=2")
    public ResponseEntity<Book> getBookByIdRequestParamV2(@PathVariable int id) {
        Optional<Book> book = books.stream().filter(b -> b.getId() == id).findFirst();
        return book.map(ResponseEntity::ok).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
