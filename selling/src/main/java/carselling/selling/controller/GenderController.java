package carselling.selling.controller;


import carselling.selling.repository.GenderRepository;
import carselling.selling.entity.Gender;
import org.springframework.http.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "gender")
public class GenderController
 {

	@Autowired
	private GenderRepository repository;


	@PostMapping()
	public ResponseEntity<Gender> save(@RequestBody Gender gender){
	 	return ResponseEntity.ok(repository.save(gender));
	}
	@PutMapping()
	public ResponseEntity<Gender> update(@RequestBody Gender gender){
	 	return ResponseEntity.ok(repository.save(gender));
	}
	@DeleteMapping()
	public void delete(@RequestBody Gender gender){
	 	repository.delete(gender);
	}
	@GetMapping()
	public ResponseEntity<Iterable<Gender>> findAll(){
	 	return ResponseEntity.ok(repository.findAll());
	}





}
