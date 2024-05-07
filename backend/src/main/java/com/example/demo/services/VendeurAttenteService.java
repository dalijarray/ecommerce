package com.example.demo.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.VendeurAttente;
import com.example.demo.repository.VendeurAttenteRepo;


import java.util.List;
import java.util.Optional;

@Service

public class VendeurAttenteService {
    @Autowired
    private VendeurAttenteRepo vendeurAttenteRepo;

    public List<VendeurAttente> getAllVendeursAttente() {
        return vendeurAttenteRepo.findAll();
    }

    public VendeurAttente createVendeurAttente(VendeurAttente vendeurAttente) {
        return vendeurAttenteRepo.save(vendeurAttente);
    }

    public Optional<VendeurAttente> getVendeurAttenteById(String id) {
        return vendeurAttenteRepo.findById(id);
    }

    public VendeurAttente updateVendeurAttente(String id, VendeurAttente vendeurAttenteDetails) {
        Optional<VendeurAttente> vendeurAttenteOptional = vendeurAttenteRepo.findById(id);
        if (vendeurAttenteOptional.isPresent()) {
            VendeurAttente vendeurAttente = vendeurAttenteOptional.get();
            // Mettre à jour les attributs
            if (vendeurAttenteDetails.getFirstName() != null) {
                vendeurAttente.setFirstName(vendeurAttenteDetails.getFirstName());
            }
            if (vendeurAttenteDetails.getLastName() != null) {
                vendeurAttente.setLastName(vendeurAttenteDetails.getLastName());
            }
            if (vendeurAttenteDetails.getEmail() != null) {
                vendeurAttente.setEmail(vendeurAttenteDetails.getEmail());
            }
            if (vendeurAttenteDetails.getPassword() != null) {
                vendeurAttente.setPassword(vendeurAttenteDetails.getPassword());
            }
        
            if (vendeurAttenteDetails.getPhoneNumber() != null) {
                vendeurAttente.setPhoneNumber(vendeurAttenteDetails.getPhoneNumber());
            }
            if (vendeurAttenteDetails.getDateOfBirth() != null) {
                vendeurAttente.setDateOfBirth(vendeurAttenteDetails.getDateOfBirth());
            }
          
           
            if (vendeurAttenteDetails.getPhoneNumber() != null) {
                vendeurAttente.setPhoneNumber(vendeurAttenteDetails.getPhoneNumber());
            }
            if (vendeurAttenteDetails.getDateOfBirth() != null) {
                vendeurAttente.setDateOfBirth(vendeurAttenteDetails.getDateOfBirth());
            }
            if (vendeurAttenteDetails.getGender() != null) {
                vendeurAttente.setGender(vendeurAttenteDetails.getGender());
            }
            if (vendeurAttenteDetails.getAddress() != null) {
                vendeurAttente.setAddress(vendeurAttenteDetails.getAddress());
            }
            return vendeurAttenteRepo.save(vendeurAttente);
        } else {
            throw new RuntimeException("Vendeur en attente non trouvé pour l'ID : " + id);
        }
    }
    
    public void deleteVendeurAttente(String id) {
        vendeurAttenteRepo.deleteById(id);
    }
}
