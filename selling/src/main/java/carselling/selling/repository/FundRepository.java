package carselling.selling.repository;


import carselling.selling.entity.Fund;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;


public interface FundRepository extends CrudRepository<Fund, String> {

}
