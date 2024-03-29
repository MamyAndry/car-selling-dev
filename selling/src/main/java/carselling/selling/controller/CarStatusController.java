package carselling.selling.controller;


import carselling.selling.repository.CarStatusRepository;
import carselling.selling.response.ApiResponse;
import carselling.selling.entity.CarStatus;
import org.springframework.http.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "carStatus")
public class CarStatusController
 {

	@Autowired
	private CarStatusRepository repository;


	@PostMapping()
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> save(@RequestBody CarStatus carStatus){
		ApiResponse response = new ApiResponse();
		try{
			response.addData("data", repository.save(carStatus));
			return ResponseEntity.ok(response);
		 }catch(Exception e){
			response.addError("error", e.getCause().getMessage());
			return ResponseEntity.ok(response);
		 }
	}

	@PutMapping()
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> update(@RequestBody CarStatus carStatus){
		 ApiResponse response = new ApiResponse();
		 try{
			response.addData("data", repository.save(carStatus));
			return ResponseEntity.ok(response);
		 }catch(Exception e){
			response.addError("error", e.getCause().getMessage());
			return ResponseEntity.ok(response);
		 }
	}

	@DeleteMapping()
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> delete(@RequestBody CarStatus carStatus){
    ApiResponse response = new ApiResponse();
    try{
        repository.delete(carStatus);
        response.addData("data", "Deleted successfully");
        return ResponseEntity.ok(response);
    }catch(Exception e){
        response.addError("error", e.getCause().getMessage());
        return ResponseEntity.ok(response);
    }
	}
	@GetMapping()
	public ResponseEntity<?> findAll(){
		ApiResponse response = new ApiResponse();
		try{
			response.addData("data", repository.findAll());
			return ResponseEntity.ok(response);
		}catch(Exception e){
			response.addError("error", e.getCause().getMessage());
			return ResponseEntity.ok(response);
		}
	}

	@GetMapping("{id}")
	public ResponseEntity<?> findById(@PathVariable int id){
		ApiResponse response = new ApiResponse();
		try{
			response.addData("data", repository.findById(id));
			return ResponseEntity.ok(response);
		}catch(Exception e){
			response.addError("error", e.getCause().getMessage());
			return ResponseEntity.ok(response);
		}
	}

}
