--STATISTICS BRANDS
CREATE OR REPLACE VIEW v_sold_car AS
    SELECT br.name brand, m.name modele, m.id_model id, v.date_sell, v.id_vente FROM Brand br
        LEFT JOIN Model m
            ON m.id_brand = br.id_brand
        LEFT JOIN Car c
            ON c.id_model = m.id_model
        LEFT JOIN Annonce an 
            ON c.id_car = an.id_car
        LEFT JOIN Vente v
            ON v.id_annonce = an.id_annonce;

CREATE OR REPLACE FUNCTION f_get_sales_count_by_month()
RETURNS TABLE(brand_result VARCHAR(50), model_result VARCHAR(50), model_id VARCHAR(50), year INT, month INT, vente_count INT) AS $$
DECLARE
    brand_loop VARCHAR(50);
    model_loop VARCHAR(50);
    id_loop VARCHAR(50);
    month_loop INT;
BEGIN
    FOR brand_loop, model_loop, id_loop IN SELECT DISTINCT brand, modele, id FROM v_sold_car
    LOOP
        FOR year IN SELECT DISTINCT EXTRACT(YEAR FROM date_sell) FROM v_sold_car WHERE brand = brand_loop AND modele = model_loop
        LOOP
            FOR month_loop IN 1..12
            LOOP
                vente_count := COALESCE((
                    SELECT COUNT(id_vente)
                    FROM v_sold_car
                    WHERE EXTRACT(YEAR FROM date_sell) = year
                    AND EXTRACT(MONTH FROM date_sell) = month_loop
                    AND brand = brand_loop
                    AND modele = model_loop
                    AND id = id_loop
                ), 0);
                month := month_loop;

                IF vente_count IS NOT NULL THEN
                    brand_result := brand_loop;
                    model_result := model_loop;
                    model_id := id_loop;
                    month := month_loop;
                    RETURN NEXT;
                END IF;
            END LOOP;
        END LOOP;
    END LOOP;
END;
$$ LANGUAGE PLPGSQL;


CREATE OR REPLACE VIEW v_most_sold_car_per_year AS
    SELECT brand_result, model_result, year, COALESCE(SUM(vente_count), 0) count  
        FROM f_get_sales_count_by_month()
    GROUP BY brand_result,model_result,year;

CREATE OR REPLACE VIEW v_most_sold_brand_per_year AS
    SELECT brand_result, year, SUM(count) 
        FROM v_most_sold_car_per_year 
    GROUP BY brand_result,year;

--RECHERCHE AVANCEE