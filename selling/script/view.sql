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

CREATE OR REPLACE FUNCTION f_get_sales_count_by_month()
RETURNS TABLE(brand_result TEXT, model_result TEXT, year INT, month INT, vente_count INT) AS $$
BEGIN
    FOR brand_result, model_result IN SELECT DISTINCT brand, modele FROM v_sold_car
    LOOP
        FOR year IN SELECT DISTINCT EXTRACT(YEAR FROM date_sell) FROM v_sold_car WHERE brand = brand_result AND modele = model_result
        LOOP
            FOR month IN 1..12
            LOOP
                vente_count := COALESCE((
                    SELECT COUNT(id_vente)
                    FROM v_sold_car
                    WHERE EXTRACT(YEAR FROM date_sell) = year
                    AND EXTRACT(MONTH FROM date_sell) = month
                    AND brand = brand_result
                    AND modele = model_result
                ), 0);

                RETURN NEXT;
            END LOOP;
        END LOOP;
    END LOOP;
END;
$$ LANGUAGE PLPGSQL;


CREATE OR REPLACE VIEW v_most_sold_car_per_year AS
    SELECT brand_result, model_result, year, month, COALESCE(SUM(vente_count), 0)  
        FROM f_get_sales_count_by_month()
    GROUP BY brand_result,model_result,year,month;
     

--RECHERCHE AVANCEE