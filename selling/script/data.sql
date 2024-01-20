-- Inserting data into Category table
INSERT INTO Category (id_category, name) VALUES
('CAT0001', 'Sedan'),
('CAT0002', 'SUV'),
('CAT0003', 'Hatchback');

-- Inserting data into Brand table
INSERT INTO Brand (id_brand, name) VALUES
('BRD0001', 'Toyota'),
('BRD0002', 'Ford'),
('BRD0003', 'Honda');

-- Inserting data into Fuel_type table
INSERT INTO Fuel_type (id_fuel_type, name) VALUES
('FUT0001', 'Petrol'),
('FUT0002', 'Diesel'),
('FUT0003', 'Electric');

-- Inserting data into Motorisation table
INSERT INTO Motorisation (id_motorisation, name) VALUES
('MOT0001', 'Automatic'),
('MOT0002', 'Manual'),
('MOT0003', 'Hybrid');

-- Inserting additional data into Model table
INSERT INTO Model (id_model, name, id_brand, id_category) VALUES
('MDL0001', 'Accord', 'BRD0003', 'CAT0001'),
('MDL0002', 'F-150', 'BRD0002', 'CAT0002'),
('MDL0003', 'Corolla', 'BRD0001', 'CAT0001'),
('MDL0004', 'Civic Type R', 'BRD0003', 'CAT0003'),
('MDL0005', 'Escape', 'BRD0002', 'CAT0002');

-- Inserting data into Gear_box table
INSERT INTO Gear_box (id_gear_box, name) VALUES
('GRB0001', 'Automatic'),
('GRB0002', 'Manual'),
('GRB0003', 'CVT'),
('GRB0004', 'DCT'),
('GRB0005', 'Tiptronic');

-- Inserting data into model_gear_box table
INSERT INTO model_gear_box (id_model_gear_box, id_model, id_gear_box) VALUES
(default, 'MDL0001', 'GRB0001'),
(default, 'MDL0002', 'GRB0002'),
(default, 'MDL0003', 'GRB0003'),
(default, 'MDL0004', 'GRB0004'),
(default, 'MDL0005', 'GRB0005');

-- Inserting data into model_motor table
INSERT INTO model_motor (id_model_motor, id_model, id_motorisation) VALUES
(default, 'MDL0001', 'MOT0001'),
(default, 'MDL0002', 'MOT0002'),
(default, 'MDL0003', 'MOT0003'),
(default, 'MDL0004', 'MOT0001'),
(default, 'MDL0005', 'MOT0002');

-- Inserting data into model_fuel_type table
INSERT INTO model_fuel_type (id_model_fuel_type, id_model, id_fuel_type) VALUES
(default, 'MDL0001', 'FUT0001'),
(default, 'MDL0002', 'FUT0002'),
(default, 'MDL0003', 'FUT0003'),
(default, 'MDL0004', 'FUT0001'),
(default, 'MDL0005', 'FUT0002');

INSERT INTO transmission (id_transmission, name) VALUES
(default, 'Automatic'),
(default, 'Manual'),
(default, 'Semi-automatic');

INSERT INTO Car(id_car, dour_number, kilometrage, status, colorm id_transmission, id_model_motor, id_model_fuel_type, id_users, id_model, id_car_status, id_model_gear_box) VALUES 
(default, )


