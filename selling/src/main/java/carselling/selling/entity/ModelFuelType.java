package carselling.selling.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "model_fuel_type")
public class ModelFuelType {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id_model_fuel_type")
	Integer idModelFuelType;
	@Column(name = "id_fuel_type")
	String idFuelType;
	@Column(name = "id_model")
	String idModel;




	public ModelFuelType(){}

	public Integer getIdModelFuelType(){
		return this.idModelFuelType;
	}
	public void setIdModelFuelType(Integer idModelFuelType){
		this.idModelFuelType = idModelFuelType;
	}
	public String getIdFuelType(){
		return this.idFuelType;
	}
	public void setIdFuelType(String idFuelType){
		this.idFuelType = idFuelType;
	}
	public String getIdModel(){
		return this.idModel;
	}
	public void setIdModel(String idModel){
		this.idModel = idModel;
	}


}
