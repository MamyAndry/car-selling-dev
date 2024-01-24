package carselling.selling.controller;


import carselling.selling.repository.FuelTypeRepository;
import carselling.selling.service.Service;
import carselling.selling.entity.FuelType;
import org.springframework.http.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "fuelType")
public class FuelTypeController
 {

	@Autowired
	private FuelTypeRepository repository;


	@PostMapping()
	public ResponseEntity<?> save(@RequestBody FuelType fuelType){
		fuelType.setIdFuelType(Service.getPK("FUT", repository.getNextSequenceValue(), 7));
	 	return ResponseEntity.ok(repository.save(fuelType));
	}
	@PutMapping()
	public ResponseEntity<?> update(@RequestBody FuelType fuelType){
	 	return ResponseEntity.ok(repository.save(fuelType));
	}
	@DeleteMapping()
	public void delete(@RequestBody FuelType fuelType){
	 	repository.delete(fuelType);
	}
	@GetMapping()
	public ResponseEntity<?> findAll(){
	 	return ResponseEntity.ok(repository.findAll());
	}





}
