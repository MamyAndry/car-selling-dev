package carselling.selling.entity;


import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import carselling.selling.utils.IdGenerator;



@Entity
@Table(name = "brand")
public class Brand {

	@Id
	@GenericGenerator(name = "custom-id", type = IdGenerator.class,
	parameters = {
		@Parameter(name = "prefix", value = "BRD"),
		@Parameter(name = "sequence", value = "seq_brand"),
		@Parameter(name = "max_length", value = "7")
	})
	@GeneratedValue(generator = "custom-id", strategy = GenerationType.IDENTITY)
	@Column(name = "id_brand")
	String idBrand;
	@Column(name = "name")
	String name;
	@ManyToOne
	@JoinColumn(name = "id_origin")
	Origin origin;




	public Brand(){}

	public String getIdBrand(){
		return this.idBrand;
	}
	public void setIdBrand(String idBrand){
		this.idBrand = idBrand;
	}
	public String getName(){
		return this.name;
	}
	public void setName(String name){
		this.name = name;
	}

	public Origin getOrigin() {
		return origin;
	}

	public void setOrigin(Origin origin) {
		this.origin = origin;
	}
	

}
