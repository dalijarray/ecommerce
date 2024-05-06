package com.example.demo.admin.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.admin.models.VendeurAttente;

public interface VendeurAttenteRepo extends MongoRepository<VendeurAttente, String> {
}