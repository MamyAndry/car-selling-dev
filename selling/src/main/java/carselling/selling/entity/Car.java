package carselling.selling.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "car")
public class Car {

	@Column(name = "id_transmission")
	String idTransmission;
	@Column(name = "id_model_fuel_type")
	Integer idModelFuelType;
	@Column(name = "door_number")
	Integer doorNumber;
	@Column(name = "color")
	String color;
	@Column(name = "id_model_motor")
	Integer idModelMotor;
	@Column(name = "kilometrage")
	Double kilometrage;
	@Column(name = "id_car_status")
	Integer idCarStatus;
	@Column(name = "id_users")
	String idUsers;
	@Id
	@Column(name = "id_car")
	String idCar;
	@Column(name = "id_model_gear_box")
	Integer idModelGearBox;
	@Column(name = "id_model")
	String idModel;




	public Car(){}

	public String getIdTransmission(){
		return this.idTransmission;
	}
	public void setIdTransmission(String idTransmission){
		this.idTransmission = idTransmission;
	}
	public Integer getIdModelFuelType(){
		return this.idModelFuelType;
	}
	public void setIdModelFuelType(Integer idModelFuelType){
		this.idModelFuelType = idModelFuelType;
	}
	public Integer getDoorNumber(){
		return this.doorNumber;
	}
	public void setDoorNumber(Integer doorNumber){
		this.doorNumber = doorNumber;
	}
	public String getColor(){
		return this.color;
	}
	public void setColor(String color){
		this.color = color;
	}
	public Integer getIdModelMotor(){
		return this.idModelMotor;
	}
	public void setIdModelMotor(Integer idModelMotor){
		this.idModelMotor = idModelMotor;
	}
	public Double getKilometrage(){
		return this.kilometrage;
	}
	public void setKilometrage(Double kilometrage){
		this.kilometrage = kilometrage;
	}
	public Integer getIdCarStatus(){
		return this.idCarStatus;
	}
	public void setIdCarStatus(Integer idCarStatus){
		this.idCarStatus = idCarStatus;
	}
	public String getIdUsers(){
		return this.idUsers;
	}
	public void setIdUsers(String idUsers){
		this.idUsers = idUsers;
	}
	public String getIdCar(){
		return this.idCar;
	}
	public void setIdCar(String idCar){
		this.idCar = idCar;
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
