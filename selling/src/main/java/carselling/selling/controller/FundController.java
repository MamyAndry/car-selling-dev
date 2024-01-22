package carselling.selling.controller;


import carselling.selling.repository.FundRepository;
import carselling.selling.entity.Fund;
import org.springframework.http.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "fund")
public class FundController
 {

	@Autowired
	private FundRepository repository;


	@PostMapping()
	public ResponseEntity<Fund> save(@RequestBody Fund fund){
	 	return ResponseEntity.ok(repository.save(fund));
	}
	@PutMapping()
	public ResponseEntity<Fund> update(@RequestBody Fund fund){
	 	return ResponseEntity.ok(repository.save(fund));
	}
	@DeleteMapping()
	public void delete(@RequestBody Fund fund){
	 	repository.delete(fund);
	}
	@GetMapping()
	public ResponseEntity<Iterable<Fund>> findAll(){
	 	return ResponseEntity.ok(repository.findAll());
	}





}
