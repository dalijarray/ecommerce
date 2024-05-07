package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Client;
import com.example.demo.repository.ClientRepo;
@Service
public class ClientService {
    @Autowired
    private ClientRepo ClientRepo;

    public List<Client> getAllClient() {
        return ClientRepo.findAll();
    }

    public Client createClient(Client client) {
        return ClientRepo.save(client);
    }

    public Optional<Client> getClientById(String id) {
        return ClientRepo.findById(id);
    }

    public Client updateClient(String id, Client ClientDetails) {
        Optional<Client> ClientOptional = ClientRepo.findById(id);
        if (ClientOptional.isPresent()) {
            Client Client = ClientOptional.get();
            // Mettre à jour les attributs
            if (ClientDetails.getFirstName() != null) {
                Client.setFirstName(ClientDetails.getFirstName());
            }
            if (ClientDetails.getLastName() != null) {
                Client.setLastName(ClientDetails.getLastName());
            }
            if (ClientDetails.getEmail() != null) {
                Client.setEmail(ClientDetails.getEmail());
            }
            if (ClientDetails.getPassword() != null) {
                Client.setPassword(ClientDetails.getPassword());
            }
           
            if (ClientDetails.getPhoneNumber() != null) {
                Client.setPhoneNumber(ClientDetails.getPhoneNumber());
            }
            if (ClientDetails.getDateOfBirth() != null) {
                Client.setDateOfBirth(ClientDetails.getDateOfBirth());
            }
            if (ClientDetails.getGender() != null) {
                Client.setGender(ClientDetails.getGender());
            }
            if (ClientDetails.getAddress() != null) {
                Client.setAddress(ClientDetails.getAddress());
            }
            return ClientRepo.save(Client);
        } else {
            throw new RuntimeException("Client en attente non trouvé pour l'ID : " + id);
        }
    }
    
    public void deleteClient(String id) {
        ClientRepo.deleteById(id);
    }
}
