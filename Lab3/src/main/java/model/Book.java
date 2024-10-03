package com.example.bookstore.model;

public class Book {
    private int id;
    private String title;
    private String isbn;
    private double price;

    public Book(int id, String title, String isbn, double price) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.price = price;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getIsbn() { return isbn; }
    public void setIsbn(String isbn) { this.isbn = isbn; }
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
}
