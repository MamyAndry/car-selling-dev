package carselling.selling.entity;


import java.math.BigDecimal;
import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "annonce")
public class Annonce {

	@Id
	@Column(name = "id_annonce")
	String idAnnonce;
	@Column(name = "date_add")
	Timestamp dateAdd;
	@Column(name = "price")
	BigDecimal price;
	@ManyToOne
	@JoinColumn(name = "id_car", referencedColumnName="id_car")
	Car car;
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
	public BigDecimal getPrice(){
		return this.price;
	}
	public void setPrice(BigDecimal price){
		this.price = price;
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
