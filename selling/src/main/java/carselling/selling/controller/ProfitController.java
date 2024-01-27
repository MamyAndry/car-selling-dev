package carselling.selling.controller;


import carselling.selling.repository.ProfitRepository;
import carselling.selling.entity.Profit;
import org.springframework.http.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "profit")
public class ProfitController
 {

	@Autowired
	private ProfitRepository repository;


	@PostMapping()
	public ResponseEntity<Profit> save(@RequestBody Profit profit){
	 	return ResponseEntity.ok(repository.save(profit));
	}
	@PutMapping()
	public ResponseEntity<Profit> update(@RequestBody Profit profit){
	 	return ResponseEntity.ok(repository.save(profit));
	}
	@DeleteMapping()
	public void delete(@RequestBody Profit profit){
	 	repository.delete(profit);
	}
	@GetMapping()
	public ResponseEntity<Iterable<Profit>> findAll(){
	 	return ResponseEntity.ok(repository.findAll());
	}





}
