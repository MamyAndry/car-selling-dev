package carselling.selling.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "model_gear_box")
public class ModelGearBox {

	@Column(name = "id_gear_box")
	String idGearBox;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id_model_gear_box")
	Integer idModelGearBox;
	@Column(name = "id_model")
	String idModel;




	public ModelGearBox(){}

	public String getIdGearBox(){
		return this.idGearBox;
	}
	public void setIdGearBox(String idGearBox){
		this.idGearBox = idGearBox;
	}
	public Integer getIdModelGearBox(){
		return this.idModelGearBox;
	}
	public void setIdModelGearBox(Integer idModelGearBox){
		this.idModelGearBox = idModelGearBox;
	}
	public String getIdModel(){
		return this.idModel;
	}
	public void setIdModel(String idModel){
		this.idModel = idModel;
	}


}
