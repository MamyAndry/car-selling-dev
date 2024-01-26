package carselling.selling.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;



@Entity
@Table(name = "model_gear_box")
public class ModelGearBox {

	@Column(name = "id_gear_box")
	String idGearBox;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@ManyToOne
	@JoinColumn(name = "id_model_gear_box")
	ModelGearBox modelGearBox;
	@ManyToOne
	@JoinColumn(name = "id_model")
	Model model;




	public ModelGearBox(){}

	public String getIdGearBox(){
		return this.idGearBox;
	}
	public void setIdGearBox(String idGearBox){
		this.idGearBox = idGearBox;
	}

	public Model getModel() {
		return model;
	}

	public void setModel(Model model) {
		this.model = model;
	}


}
