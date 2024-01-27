package carselling.selling.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "commission")
public class Commission {

	@Column(name = "boundary_inferior")
	Double boundaryInferior;
	@Column(name = "percentage")
	Integer percentage;
	@Column(name = "boundary_superior")
	Double boundarySuperior;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id_commission")
	Integer idCommission;




	public Commission(){}

	public Double getBoundaryInferior(){
		return this.boundaryInferior;
	}
	public void setBoundaryInferior(Double boundaryInferior) throws Exception{
		if (boundaryInferior < 0) {
			throw new Exception("Inferior boundary should not be negative");
		}

		this.boundaryInferior = boundaryInferior;
	}
	public Integer getPercentage(){
		return this.percentage;
	}
	public void setPercentage(Integer percentage) throws Exception{
		if (percentage < 0) {
			throw new Exception("Percentage should not be negative");
		}
		this.percentage = percentage;
	}
	public Double getBoundarySuperior(){
		return this.boundarySuperior;
	}
	public void setBoundarySuperior(Double boundarySuperior) throws Exception{
		if (boundarySuperior < 0) {
			throw new Exception("Superior boundary should not be negative");
		}

		this.boundarySuperior = boundarySuperior;
	}
	public Integer getIdCommission(){
		return this.idCommission;
	}
	public void setIdCommission(Integer idCommission){
		this.idCommission = idCommission;
	}


}
