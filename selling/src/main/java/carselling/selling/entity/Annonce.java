package carselling.selling.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.sql.Timestamp;


@Entity
@Table(name = "annonce")
public class Annonce {

	@Id
	@Column(name = "id_annonce")
	String idAnnonce;
	@Column(name = "date_add")
	Timestamp dateAdd;
	@Column(name = "date_validation")
	Timestamp dateValidation;
	@Column(name = "price")
	Double price;
	@Column(name = "description")
	String description;
	@Column(name = "id_car")
	String idCar;
	@Column(name = "status")
	Integer status;




	public Annonce(){}

	public String getIdAnnonce(){
		return this.idAnnonce;
	}
	public void setIdAnnonce(String idAnnonce){
		this.idAnnonce = idAnnonce;
	}
	public Timestamp getDateAdd(){
		return this.dateAdd;
	}
	public void setDateAdd(Timestamp dateAdd){
		this.dateAdd = dateAdd;
	}
	public Timestamp getDateValidation(){
		return this.dateValidation;
	}
	public void setDateValidation(Timestamp dateValidation){
		this.dateValidation = dateValidation;
	}
	public Double getPrice(){
		return this.price;
	}
	public void setPrice(Double price) throws Exception{
		if (price < 0) {
			throw new Exception("Price should not be negative");
		}
		this.price = price;
	}
	public String getDescription(){
		return this.description;
	}
	public void setDescription(String description){
		this.description = description;
	}
	public String getIdCar(){
		return this.idCar;
	}
	public void setIdCar(String idCar){
		this.idCar = idCar;
	}
	public Integer getStatus(){
		return this.status;
	}
	public void setStatus(Integer status){
		this.status = status;
	}


}
