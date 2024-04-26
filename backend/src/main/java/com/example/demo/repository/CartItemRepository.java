package com.example.demo.repository;
import com.example.demo.model.CartItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
 
@Repository
public interface CartItemRepository extends MongoRepository<CartItem, String>{
    
}
