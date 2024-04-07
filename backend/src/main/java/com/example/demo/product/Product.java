package com.example.demo.product;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.annotation.processing.Generated;
import java.util.Date;

@Document(collection = "products")
public class Product {

    @Id
    private Integer id;
    private String name;
    private String description;
    private String[]color;
    private String[] size;
    private double price;
    private String type;
    private Date creationDate;
    private String gender;

    public Product(Integer id, String name, String description, String[] color, String[] size, double price, String type, String gender) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.color = color;
        this.size = size;
        this.price = price;
        this.type = type;
        this.creationDate = new Date();
        this.gender = gender;
    }

    // Getters and setters
}
