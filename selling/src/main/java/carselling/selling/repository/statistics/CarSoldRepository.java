package carselling.selling.repository.statistics;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import carselling.selling.entity.statistics.CarSoldPerMonthForYear;
import carselling.selling.entity.statistics.CarSoldPerYear;
import carselling.selling.entity.Car;

public interface CarSoldRepository extends CrudRepository<Car, String>{
    @Query(nativeQuery = true,value = "SELECT * FROM v_most_sold_brand_per_year")
    public List<CarSoldPerYear> getMostSoldBrand();
i
    @Query(nativeQuery = true,value = "SELECT * FROM v_most_sold_model_per_year")
    public List<CarSoldPerYear> getMostSoldModel();


    @Query(nativeQuery = true,value = "SELECT * from v_most_sold_model_per_month_per_year where annee = :year")
    public List<CarSoldPerMonthForYear> getMostSoldModelPerMonthForYear(@Param(value = "year") int year);

    @Query(nativeQuery = true,value = "SELECT * from v_most_sold_brand_per_month_per_year where annee = :year")
    public List<CarSoldPerMonthForYear> getMostSoldBrandPerMonthForYear(@Param(value = "year") int year);
}

