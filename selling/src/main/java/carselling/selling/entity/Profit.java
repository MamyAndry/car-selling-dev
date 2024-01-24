package carselling.selling.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.sql.Date;


@Entity
@Table(name = "profit")
public class Profit {

	@Column(name = "date_add")
	Date dateAdd;
	@Column(name = "rising")
	Double rising;
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id_profit")
	Integer idProfit;
	@Column(name = "id_users")
	String idUsers;




	public Profit(){}

	public Date getDateAdd(){
		return this.dateAdd;
	}
	public void setDateAdd(Date dateAdd){
		this.dateAdd = dateAdd;
	}
	public Double getRising(){
		return this.rising;
	}
	public void setRising(Double rising){
		this.rising = rising;
	}
	public Integer getIdProfit(){
		return this.idProfit;
	}
	public void setIdProfit(Integer idProfit){
		this.idProfit = idProfit;
	}
	public String getIdUsers(){
		return this.idUsers;
	}
	public void setIdUsers(String idUsers){
		this.idUsers = idUsers;
	}


}
