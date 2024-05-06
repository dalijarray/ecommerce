package com.example.demo.admin.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.admin.models.Client;
import com.example.demo.admin.service.ClientService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/clients")
public class ClientController {
    @Autowired
    private ClientService clientService;

    @GetMapping
    public ResponseEntity<List<Client>> listerClient() {
        List<Client> clients= clientService.getAllClient();
        return new ResponseEntity<>(clients, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Client> creerClient(@RequestBody Client client) {
        Client nouveauClient = clientService.createClient(client);
        return new ResponseEntity<>(nouveauClient, HttpStatus.CREATED);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Client> obtenirClientParId(@PathVariable String id) {
        Optional<Client> Client = clientService.getClientById(id);
        return Client.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Client> mettreAJourClient(@PathVariable String id, @RequestBody Client ClientDetails) {
        Client ClientMaj = clientService.updateClient(id, ClientDetails);
        return new ResponseEntity<>(ClientMaj, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimerClient(@PathVariable String id) {
        clientService.deleteClient(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
