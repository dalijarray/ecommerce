package com.example.demo.admin.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "vendeur")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vendeur {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String address;
    private String phoneNumber;
    private String gender; // Assuming gender selection is required
    private Date dateOfBirth; // Pour stocker l'URL de l'image
   

}