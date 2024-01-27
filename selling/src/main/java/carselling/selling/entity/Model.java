package carselling.selling.entity;


import java.util.*;

import jakarta.persistence.*;



@Entity
@Table(name = "model")
public class Model {

	@Id
	@Column(name = "id_model")
	String idModel;
	@Column(name = "name")
	String name;
	@ManyToOne
	@JoinColumn(name = "id_brand")
	Brand brand;
	@ManyToOne
	@JoinColumn(name = "id_category")
	Category category;
	@OneToMany(mappedBy = "model")
	List<ModelGearBox> modelGearBoxes;




	public Model(){}

	public Brand getBrand(){
		return this.brand;
	}
	public void setBrand(Brand brand){
		this.brand = brand;
	}
	public Category getCategory(){
		return this.category;
	}
	public void setCategory(Category category){
		this.category = category;
	}
	public String getName(){
		return this.name;
	}
	public void setName(String name){
		this.name = name;
	}
	public String getIdModel(){
		return this.idModel;
	}
	public void setIdModel(String idModel){
		this.idModel = idModel;
	}


}
