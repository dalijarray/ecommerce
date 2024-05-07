package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Vendeur;


public interface VendeurRepo extends MongoRepository<Vendeur, String> {
}