package carselling.selling.controller.messagerie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import carselling.selling.entity.messagerie.Message;
import carselling.selling.repository.messagerie.MessageRepository;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "messages")
public class MessageController {
    @Autowired
	private MessageRepository repository;


	@PostMapping()
	public ResponseEntity<Message> save(@RequestBody Message message){
	 	return ResponseEntity.ok(repository.save(message));
	}
	@PutMapping()
	public ResponseEntity<Message> update(@RequestBody Message message){
	 	return ResponseEntity.ok(repository.save(message));
	}
	@DeleteMapping()
	public void delete(@RequestBody Message message){
	 	repository.delete(message);
	}
	@GetMapping()
	public ResponseEntity<Iterable<Message>> findAll(){
	 	return ResponseEntity.ok(repository.findAll());
	}

}
