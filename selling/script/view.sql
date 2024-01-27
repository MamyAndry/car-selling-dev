--STATISTICS
CREATE OR REPLACE VIEW v_sold_car AS
    SELECT br.name brand, m.name modele, v.date_sell, v.id_vente FROM Brand br
        LEFT JOIN Model m
            ON m.id_brand = br.id_brand
        LEFT JOIN Car c
            ON c.id_model = m.id_model
        LEFT JOIN Annonce an 
            ON c.id_car = an.id_car
        LEFT JOIN Vente v
            ON v.id_annonce = an.id_annonce;

CREATE OR REPLACE VIEW v_most_sold_brand_per_year AS
    SELECT brand, COALESCE(COUNT(id_vente), 0) count ,EXTRACT('year' FROM date_sell) annee  FROM v_sold_car
    GROUP BY brand,annee;

CREATE OR REPLACE VIEW v_most_sold_model_per_year AS
    SELECT brand, modele, COALESCE(COUNT(id_vente), 0) count ,EXTRACT('year' FROM date_sell) annee  FROM v_sold_car
    GROUP BY brand,modele,annee; 

CREATE OR REPLACE VIEW v_most_sold_brand_per_month_per_year AS
    SELECT brand, COALESCE(COUNT(id_vente), 0) count ,EXTRACT('month' FROM date_sell) mois,EXTRACT('year' FROM date_sell) annee  FROM v_sold_car
    GROUP BY brand,annee,mois;

CREATE OR REPLACE VIEW v_most_sold_model_per_month_per_year AS
    SELECT brand, modele, COALESCE(COUNT(id_vente), 0) count ,EXTRACT('month' FROM date_sell) mois,EXTRACT('year' FROM date_sell) annee  FROM v_sold_car
    GROUP BY brand,modele,annee,mois; 

--RECHERCHE AVANCEE