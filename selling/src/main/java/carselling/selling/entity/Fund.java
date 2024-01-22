package carselling.selling.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.sql.Date;


@Entity
@Table(name = "fund")
public class Fund {

	@Column(name = "date_add")
	Date dateAdd;
	@Column(name = "rising")
	Double rising;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id_fund")
	Integer idFund;
	@Column(name = "id_vente")
	String idVente;




	public Fund(){}

	public Date getDateAdd(){
		return this.dateAdd;
	}
	public void setDateAdd(Date dateAdd){
		this.dateAdd = dateAdd;
	}
	public Double getRising(){
		return this.rising;
	}
	public void setRising(Double rising) throws Exception{
		if (rising < 0) {
			throw new Exception("Price should not be negative");
		}
		this.rising = rising;
	}
	public Integer getIdFund(){
		return this.idFund;
	}
	public void setIdFund(Integer idFund){
		this.idFund = idFund;
	}
	public String getIdVente(){
		return this.idVente;
	}
	public void setIdVente(String idVente){
		this.idVente = idVente;
	}


}
