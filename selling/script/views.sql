CREATE OR REPLACE VIEW v_vente_par_an as
    SELECT EXTRACT('YEAR' FROM vente.date_sell) as year, COUNT(id_vente) as number 
        FROM vente 
    GROUP BY year;

CREATE OR REPLACE VIEW v_most_sold_brand as
    SELECT Brand.name as brand , COUNT(id_vente) as number 
        FROM vente 
         JOIN Annonce
            ON vente.id_annonce = Annonce.id_annonce
         JOIN Car
            ON Car.id_car = Annonce.id_annonce
         JOIN Model
            ON Model.id_model = Car.id_model
         JOIN Brand
            ON Brand.id_brand = Model.id_brand
    GROUP BY Brand.name
    ORDER BY number DESC;

CREATE OR REPLACE VIEW v_most_sold_model as
    SELECT Model.id_model, Model.name , COUNT(id_vente) as number 
        FROM vente 
         JOIN Annonce
            ON vente.id_annonce = Annonce.id_annonce
         JOIN Car
            ON Car.id_car = Annonce.id_annonce
         JOIN Model
            ON Model.id_model = Car.id_model
    GROUP BY Model.id_model, Model.name
    ORDER BY number DESC;