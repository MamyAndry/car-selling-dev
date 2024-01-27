package carselling.selling.entity;


import org.bson.types.ObjectId;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerator;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.*;




@Entity
@Table(name = "model_gear_box")
@JsonIdentityInfo(
	generator = ObjectIdGenerators.PropertyGenerator.class,
	property = "id"
)
public class ModelGearBox {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id_model_gear_box")
	Integer idModelGearBox;
	@ManyToOne
	@JoinColumn(name = "id_gear_box")
	GearBox gearBox;

	@ManyToOne
	@JoinColumn(name = "id_model")
	Model model;




	public ModelGearBox(){}

	public Integer getIdModelGearBox(){
		return this.idModelGearBox;
	}
	public void setIdModelGearBox(Integer idModelGearBox){
		this.idModelGearBox = idModelGearBox;
	}
	public GearBox getGearBox() {
		return gearBox;
	}
	public Model getModel() {
		return model;
	}
	public void setGearBox(GearBox gearBox) {
		this.gearBox = gearBox;
	}
	public void setModel(Model model) {
		this.model = model;
	}


}
