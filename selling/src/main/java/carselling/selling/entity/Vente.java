package carselling.selling.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.sql.Date;
import java.sql.Timestamp;


@Entity
@Table(name = "vente")
public class Vente {

	@Column(name = "id_annonce")
	String idAnnonce;
	@Column(name = "price_payed")
	Double pricePayed;
	@Id
	@Column(name = "id_vente")
	String idVente;
	@Column(name = "date_sell")
	Date dateSell;
	@Column(name = "id_seller")
	String idSeller;
	@Column
	Integer status;
	@Column(name = "date_validation")
	Date dateValidation;


	public Vente(){}

	public String getIdAnnonce(){
		return this.idAnnonce;
	}
	public void setIdAnnonce(String idAnnonce){
		this.idAnnonce = idAnnonce;
	}
	public Double getPricePayed(){
		return this.pricePayed;
	}
	public void setPricePayed(Double pricePayed) throws Exception{
		if (pricePayed < 0) {
			throw new Exception("Price should not be negative");
		}

		this.pricePayed = pricePayed;
	}
	public String getIdVente(){
		return this.idVente;
	}
	public void setIdVente(String idVente){
		this.idVente = idVente;
	}
	public Date getDateSell(){
		return this.dateSell;
	}
	public void setDateSell(Date dateSell){
		this.dateSell = dateSell;
	}
	public String getIdSeller(){
		return this.idSeller;
	}
	public void setIdSeller(String idSeller){
		this.idSeller = idSeller;
	}

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

	public Date getDateValidation() {
		return dateValidation;
	}

	public void setDateValidation(Date dateValidation) {
		this.dateValidation = dateValidation;
	}


}
