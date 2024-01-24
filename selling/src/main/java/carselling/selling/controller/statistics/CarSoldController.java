package carselling.selling.controller.statistics;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import carselling.selling.entity.statistics.BrandSoldPerYear;
import carselling.selling.entity.statistics.CarSoldPerMonthForYear;
import carselling.selling.entity.statistics.CarSoldPerYear;
import carselling.selling.repository.statistics.CarSoldRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "saleStatistics")
public class CarSoldController {
	@Autowired
	private CarSoldRepository repository;

	@GetMapping("sold")
	public ResponseEntity<?> getMostSoldCarPerYear(){
	 	return ResponseEntity.ok(repository.getMostSoldCar());
	}

	@GetMapping("sold/{year}")
	public ResponseEntity<?> getMostSoldCarForYear(@PathVariable int year){
	 	return ResponseEntity.ok(repository.getSaleStatsForYear(year));
	}

    @GetMapping("brand")
	public ResponseEntity<?> getMostSoldBrandPerYear(){
	 	return ResponseEntity.ok(repository.getMostSoldBrand());
	}

    @GetMapping("brand/{year}")
	public ResponseEntity<?> getMostSoldBrandForYear(@PathVariable int year){
		return ResponseEntity.ok(repository.getMostSoldBrandForYear(year));
   }

	@GetMapping("model/{year}/{id}")
	public ResponseEntity<?
	
	
	
	
	
	
	
	> getMostSoldModelPerMonthForYear(@PathVariable int year, @PathVariable String id){
	 	return ResponseEntity.ok(repository.getSaleStatsOfModelForYear(year, id));
	}	
}
