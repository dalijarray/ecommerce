package com.example.demo.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }
    @GetMapping("/product/{id}")
    public Product getProductById(@PathVariable Integer id){
        Optional<Product> optionalproduct=productService.getProductById(id);
        return optionalproduct.orElseThrow(()->new ProductNotFoundException("product not found whith id "+id));
    }
}
