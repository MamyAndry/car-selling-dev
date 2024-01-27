package carselling.selling.entity;


import java.util.*;

import jakarta.persistence.*;



@Entity
@Table(name = "model")
public class Model {

	@Column(name = "id_brand")
	String idBrand;
	@Column(name = "id_category")
	String idCategory;
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

	public String getIdBrand(){
		return this.idBrand;
	}
	public void setIdBrand(String idBrand){
		this.idBrand = idBrand;
	}
	public String getIdCategory(){
		return this.idCategory;
	}
	public void setIdCategory(String idCategory){
		this.idCategory = idCategory;
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
