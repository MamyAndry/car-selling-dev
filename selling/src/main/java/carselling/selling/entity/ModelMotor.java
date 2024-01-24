package carselling.selling.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "model_motor")
public class ModelMotor {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id_model_motor")
	Integer idModelMotor;
	@Column(name = "id_motorisation")
	String idMotorisation;
	@Column(name = "id_model")
	String idModel;




	public ModelMotor(){}

	public Integer getIdModelMotor(){
		return this.idModelMotor;
	}
	public void setIdModelMotor(Integer idModelMotor){
		this.idModelMotor = idModelMotor;
	}
	public String getIdMotorisation(){
		return this.idMotorisation;
	}
	public void setIdMotorisation(String idMotorisation){
		this.idMotorisation = idMotorisation;
	}
	public String getIdModel(){
		return this.idModel;
	}
	public void setIdModel(String idModel){
		this.idModel = idModel;
	}


}
