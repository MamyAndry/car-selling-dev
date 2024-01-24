package carselling.selling.controller;


import carselling.selling.repository.VenteRepository;
import carselling.selling.service.Service;
import carselling.selling.service.vente.VenteService;
import carselling.selling.entity.Vente;
import org.springframework.http.*;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "vente")
public class VenteController
 {

	@Autowired
	private VenteRepository repository;
	@Autowired 
	private VenteService venteService;

	@PostMapping()
	public ResponseEntity<?> save(@RequestBody Vente vente){
		vente.setIdVente(Service.getPK("FUT", repository.getNextSequenceValue(), 7));
	 	return ResponseEntity.ok(repository.save(vente));
	}
	@PutMapping()
	public ResponseEntity<?> update(@RequestBody Vente vente){
	 	return ResponseEntity.ok(repository.save(vente));
	}
	@DeleteMapping()
	public void delete(@RequestBody Vente vente){
	 	repository.delete(vente);
	}
	@GetMapping()
	public ResponseEntity<?> findAll(){
	 	return ResponseEntity.ok(repository.findAll());
	}

	@PostMapping("validateSell")
	public ResponseEntity<?> sellCar(@RequestBody Vente vente) {
		try {
			return venteService.sellCar(vente);
		} catch (Exception e) {
			return ResponseEntity.ok(e.getMessage());
		}
	}
	



}
