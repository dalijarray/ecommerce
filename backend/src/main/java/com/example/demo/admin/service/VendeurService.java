package com.example.demo.admin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.admin.models.Vendeur;
import com.example.demo.admin.repo.VendeurRepo;


import java.util.List;
import java.util.Optional;

@Service
public class VendeurService {
    @Autowired
    private VendeurRepo vendeurRepository;

    // Récupérer tous les professeurs
    public List<Vendeur> getAllVendeurs() {
        return vendeurRepository.findAll();
    }

    // Créer un nouveau professeur
    public Vendeur createVendeur(Vendeur vendeur) {
        return vendeurRepository.save(vendeur);
    }

    // Récupérer un professeur par son ID
    public Optional<Vendeur> getVendeurById(String id) {
        return vendeurRepository.findById(id);
    }

    public Vendeur updateVendeur(String id, Vendeur vendeurDetails) {
        Optional<Vendeur> vendeurOptional = vendeurRepository.findById(id);
        if (vendeurOptional.isPresent()) {
            Vendeur vendeur = vendeurOptional.get();
           // Mettre à jour les attributs
            if (vendeurDetails.getFirstName() != null) {
                vendeur.setFirstName(vendeurDetails.getFirstName());
            }
            if (vendeurDetails.getLastName() != null) {
                vendeur.setLastName(vendeurDetails.getLastName());
            }
            if (vendeurDetails.getEmail() != null) {
                vendeur.setEmail(vendeurDetails.getEmail());
            }
            if (vendeurDetails.getPassword() != null) {
                vendeur.setPassword(vendeurDetails.getPassword());
            }
        
            if (vendeurDetails.getPhoneNumber() != null) {
                vendeur.setPhoneNumber(vendeurDetails.getPhoneNumber());
            }
            if (vendeurDetails.getDateOfBirth() != null) {
                vendeur.setDateOfBirth(vendeurDetails.getDateOfBirth());
            }
          
           
            if (vendeurDetails.getPhoneNumber() != null) {
                vendeur.setPhoneNumber(vendeurDetails.getPhoneNumber());
            }
            if (vendeurDetails.getDateOfBirth() != null) {
                vendeur.setDateOfBirth(vendeurDetails.getDateOfBirth());
            }
            if (vendeurDetails.getGender() != null) {
                vendeur.setGender(vendeurDetails.getGender());
            }
            if (vendeurDetails.getAddress() != null) {
                vendeur.setAddress(vendeurDetails.getAddress());
            }
            return vendeurRepository.save(vendeur);
        } else {
            throw new RuntimeException("Vendeur non trouvé pour l'ID : " + id);
        }
    }
    
    // Supprimer un professeur par son ID
    public void deleteVendeur(String id) {
        vendeurRepository.deleteById(id);
    }
}

