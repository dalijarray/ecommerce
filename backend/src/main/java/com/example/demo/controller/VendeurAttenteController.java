package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.VendeurAttente;
import com.example.demo.services.VendeurAttenteService;


import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/vendeurs-attente")
public class VendeurAttenteController {

    @Autowired
    private VendeurAttenteService vendeurAttenteService;

    @GetMapping
    public ResponseEntity<List<VendeurAttente>> listerVendeursAttente() {
        List<VendeurAttente> vendeursAttente = vendeurAttenteService.getAllVendeursAttente();
        return new ResponseEntity<>(vendeursAttente, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<VendeurAttente> creerVendeurAttente(@RequestBody VendeurAttente vendeurAttente) {
        VendeurAttente nouveauVendeurAttente = vendeurAttenteService.createVendeurAttente(vendeurAttente);
        return new ResponseEntity<>(nouveauVendeurAttente, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<VendeurAttente> obtenirVendeurAttenteParId(@PathVariable String id) {
        Optional<VendeurAttente> vendeurAttente = vendeurAttenteService.getVendeurAttenteById(id);
        return vendeurAttente.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<VendeurAttente> mettreAJourVendeurAttente(@PathVariable String id, @RequestBody VendeurAttente vendeurAttenteDetails) {
        VendeurAttente vendeurAttenteMaj = vendeurAttenteService.updateVendeurAttente(id, vendeurAttenteDetails);
        return new ResponseEntity<>(vendeurAttenteMaj, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimerVendeurAttente(@PathVariable String id) {
        vendeurAttenteService.deleteVendeurAttente(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
