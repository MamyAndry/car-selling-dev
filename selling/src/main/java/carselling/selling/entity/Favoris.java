package carselling.selling.entity;


import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import carselling.selling.utils.IdGenerator;


@Entity
@Table(name = "favoris")
public class Favoris {

	@Column(name = "id_annonce")
	String idAnnonce;
	@Column(name = "id_users")
	String idUsers;
	@Id
	@GenericGenerator(name = "custom-id", type = IdGenerator.class,
	parameters = {
		@Parameter(name = "prefix", value = "FAV"),
		@Parameter(name = "sequence", value = "seq_favoris"),
		@Parameter(name = "max_length", value = "7")
	})
	@GeneratedValue(generator = "custom-id", strategy = GenerationType.IDENTITY)
	@Column(name = "id_favoris")
	String idFavoris;




	public Favoris(){}

	public String getIdAnnonce(){
		return this.idAnnonce;
	}
	public void setIdAnnonce(String idAnnonce){
		this.idAnnonce = idAnnonce;
	}
	public String getIdUsers(){
		return this.idUsers;
	}
	public void setIdUsers(String idUsers){
		this.idUsers = idUsers;
	}
	public String getIdFavoris(){
		return this.idFavoris;
	}
	public void setIdFavoris(String idFavoris){
		this.idFavoris = idFavoris;
	}


}
