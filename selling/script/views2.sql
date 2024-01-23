CREATE OR REPLACE FUNCTION f_get_profit_user_per_month()
RETURNS TABLE(id_users_result VARCHAR(50), sum DOUBLE PRECISION, year INT, month INT) AS $$
DECLARE
    id_users_loop VARCHAR(50);
    month_loop INT;
BEGIN
    FOR id_users_loop IN SELECT DISTINCT id_users FROM users
    LOOP
        FOR year IN SELECT DISTINCT EXTRACT(YEAR FROM date_add) FROM profit
        LOOP
            FOR month_loop IN 1..12
            LOOP
                sum := COALESCE((
                    SELECT SUM(rising)
                    FROM profit
                    WHERE EXTRACT(YEAR FROM date_add) = year
                    AND EXTRACT(MONTH FROM date_add) = month_loop
                    AND id_users = id_users_loop
                ), 0);
                month := month_loop;

                IF sum IS NOT NULL THEN
                    id_users_result := id_users_loop;
                    month := month_loop;
                    RETURN NEXT;
                END IF;
            END LOOP;
        END LOOP;
    END LOOP;
END;
$$ LANGUAGE PLPGSQL;

CREATE OR REPLACE VIEW v_profit_variation_per_year AS
    SELECT id_users_result id, SUM(sum), year FROM f_get_profit_user_per_month()
        GROUP BY id_users_result,year;


CREATE OR REPLACE FUNCTION f_get_fund_user_per_month()
RETURNS TABLE(sum DOUBLE PRECISION, year INT, month INT) AS $$
DECLARE
    id_users_loop VARCHAR(50);
    month_loop INT;
BEGIN
    FOR year IN SELECT DISTINCT EXTRACT(YEAR FROM date_add) FROM profit
    LOOP
        FOR month_loop IN 1..12
        LOOP
            sum := COALESCE((
                SELECT SUM(rising)
                FROM profit
                WHERE EXTRACT(YEAR FROM date_add) = year
                AND EXTRACT(MONTH FROM date_add) = month_loop
            ), 0);
            month := month_loop;

            IF sum IS NOT NULL THEN
                month := month_loop;
                RETURN NEXT;
            END IF;
        END LOOP;
    END LOOP;
END;
$$ LANGUAGE PLPGSQL;


CREATE OR REPLACE VIEW v_fund_variation_per_year AS
    SELECT SUM(sum), year FROM f_get_fund_user_per_month()
        GROUP BY year;