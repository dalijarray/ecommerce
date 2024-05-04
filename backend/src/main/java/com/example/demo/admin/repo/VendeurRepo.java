package com.example.demo.admin.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.admin.models.Vendeur;


public interface VendeurRepo extends MongoRepository<Vendeur, String> {
}