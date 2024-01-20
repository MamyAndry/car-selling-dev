package carselling.selling.controller.statistics;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import carselling.selling.entity.statistics.CarSoldPerMonthForYear;
import carselling.selling.entity.statistics.CarSoldPerYear;
import carselling.selling.repository.statistics.CarSoldRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "saleStatistics")
public class CarSoldController {
	@Autowired
	private CarSoldRepository repository;

	@GetMapping("brand")
	public ResponseEntity<List<CarSoldPerYear>> getMostSoldBrandPerYear(){
	 	return ResponseEntity.ok(repository.getMostSoldBrand());
	}

    @GetMapping("brand/{year}")
	public ResponseEntity<List<CarSoldPerMonthForYear>> getMostSoldBrandPerMonthForYear(@PathVariable int year){
	 	return ResponseEntity.ok(repository.getMostSoldBrandPerMonthForYear(year));
	}

    @GetMapping("model")
	public ResponseEntity<List<CarSoldPerYear>> getMostSoldModelPerYear(){
	 	return ResponseEntity.ok(repository.getMostSoldModel());
	}

	@GetMapping("model/{year}")
	public ResponseEntity<List<CarSoldPerMonthForYear>> getMostSoldModelPerMonthForYear(@PathVariable int year){
	 	return ResponseEntity.ok(repository.getMostSoldModelPerMonthForYear(year));
	}	
}
