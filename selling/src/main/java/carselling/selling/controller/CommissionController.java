package carselling.selling.controller;


import carselling.selling.repository.CommissionRepository;
import carselling.selling.entity.Commission;
import org.springframework.http.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "commission")
public class CommissionController
 {

	@Autowired
	private CommissionRepository repository;


	@PostMapping()
	public ResponseEntity<Commission> save(@RequestBody Commission commission){
	 	return ResponseEntity.ok(repository.save(commission));
	}
	@PutMapping()
	public ResponseEntity<Commission> update(@RequestBody Commission commission){
	 	return ResponseEntity.ok(repository.save(commission));
	}
	@DeleteMapping()
	public void delete(@RequestBody Commission commission){
	 	repository.delete(commission);
	}
	@GetMapping()
	public ResponseEntity<Iterable<Commission>> findAll(){
	 	return ResponseEntity.ok(repository.findAll());
	}





}
