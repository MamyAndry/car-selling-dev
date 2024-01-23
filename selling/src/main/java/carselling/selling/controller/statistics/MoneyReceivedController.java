package carselling.selling.controller.statistics;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import carselling.selling.repository.statistics.MoneyPerceivedRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "profitStatistics")
public class MoneyReceivedController {
    @Autowired
	private MoneyPerceivedRepository repository;

    // @GetMapping("profit/{id}")
	// public ResponseEntity<?> getProfitPerMonthPerYear(@PathVariable String id){
	//  	return ResponseEntity.ok(repository.getProfitPerMonthPerYear(id));
	// }

    @GetMapping("profit/{id}")
	public ResponseEntity<?> getProfitPerYear(@PathVariable String id){
	 	return ResponseEntity.ok(repository.getProfitPerYear(id));
	}
	@GetMapping("profit/{id}/{year}")
	public ResponseEntity<?> getProfitOfYear(@PathVariable String id, @PathVariable int year){
	 	return ResponseEntity.	ok(repository.getProfitOfYear(id, year));
	}

    @GetMapping("funds")
	public ResponseEntity<?> getFundVariationPerMonthPerYear(){
	 	return ResponseEntity.ok(repository.getFundVariationPerMonthPerYear());
	}

    @GetMapping("fund")
	public ResponseEntity<?> getFundVariationPerYears(){
		return ResponseEntity.ok(repository.getFundVariationPerYears());
   }

	@GetMapping("fund/{year}")
	public ResponseEntity<?> getFundVariationForYear(@PathVariable int year){
	 	return ResponseEntity.ok(repository.getFundVariationForYear(year));
	}	

}
