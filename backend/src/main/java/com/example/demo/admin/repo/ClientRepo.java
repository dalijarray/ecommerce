package com.example.demo.admin.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.admin.models.Client;

public interface ClientRepo extends MongoRepository<Client, String>{

}
