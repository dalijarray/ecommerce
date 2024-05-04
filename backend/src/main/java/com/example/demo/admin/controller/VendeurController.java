package com.example.demo.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.admin.models.Vendeur;
import com.example.demo.admin.service.VendeurService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/vendeurs")
public class VendeurController {

    @Autowired
    private VendeurService vendeurService;

    @GetMapping
    public ResponseEntity<List<Vendeur>> listerVendeurs() {
        List<Vendeur> vendeurs = vendeurService.getAllVendeurs();
        return new ResponseEntity<>(vendeurs, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Vendeur> creerVendeur(@RequestBody Vendeur vendeur) {
        Vendeur nouveauVendeur = vendeurService.createVendeur(vendeur);
        return new ResponseEntity<>(nouveauVendeur, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vendeur> obtenirVendeurrParId(@PathVariable String id) {
        Optional<Vendeur> vendeur = vendeurService.getVendeurById(id);
        return vendeur.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vendeur> mettreAJourVendeur(@PathVariable String id, @RequestBody Vendeur vendeurDetails) {
        Vendeur vendeurMaj = vendeurService.updateVendeur(id, vendeurDetails);
        return new ResponseEntity<>(vendeurMaj, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimerVendeur(@PathVariable String id) {
        vendeurService.deleteVendeur(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
