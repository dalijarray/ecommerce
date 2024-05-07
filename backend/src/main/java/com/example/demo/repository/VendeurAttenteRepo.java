package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.VendeurAttente;

public interface VendeurAttenteRepo extends MongoRepository<VendeurAttente, String> {
}