CREATE TABLE Category(
   id_category VARCHAR(50) ,
   name VARCHAR(50) ,
   PRIMARY KEY(id_category)
);

CREATE TABLE Brand(
   id_brand VARCHAR(50) ,
   name VARCHAR(50) ,
   PRIMARY KEY(id_brand)
);

CREATE TABLE Fuel_type(
   id_fuel_type VARCHAR(50) ,
   name VARCHAR(50) ,
   PRIMARY KEY(id_fuel_type)
);

CREATE TABLE Motorisation(
   id_motorisation VARCHAR(50) ,
   name VARCHAR(50) ,
   PRIMARY KEY(id_motorisation)
);

CREATE TABLE Model(
   id_model VARCHAR(50) ,
   name VARCHAR(50) ,
   id_brand VARCHAR(50)  NOT NULL,
   id_category VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_model),
   FOREIGN KEY(id_brand) REFERENCES Brand(id_brand),
   FOREIGN KEY(id_category) REFERENCES Category(id_category)
);

CREATE TABLE Car_status(
   id_car_status INTEGER,
   name VARCHAR(50) ,
   PRIMARY KEY(id_car_status)
);

CREATE TABLE Gear_box(
   id_gear_box VARCHAR(50) ,
   name VARCHAR(50) ,
   PRIMARY KEY(id_gear_box)
);

CREATE TABLE users(
   id_users VARCHAR(50) ,
   gender INTEGER,
   username VARCHAR(50) ,
   name VARCHAR(50) ,
   first_name VARCHAR(50) ,
   birthdate INTEGER,
   email VARCHAR(50) ,
   password VARCHAR(50) ,
   is_admin BOOLEAN,
   PRIMARY KEY(id_users)
);

CREATE TABLE Message(
   id_message VARCHAR(50) ,
   sender VARCHAR(50) ,
   recipient VARCHAR(50) ,
   content VARCHAR(255) ,
   date_send TIMESTAMP,
   PRIMARY KEY(id_message)
);

CREATE TABLE model_gear_box(
   id_model_gear_box SERIAL,
   id_model VARCHAR(50) ,
   id_gear_box VARCHAR(50) ,
   PRIMARY KEY(id_model_gear_box),
   FOREIGN KEY(id_model) REFERENCES Model(id_model),
   FOREIGN KEY(id_gear_box) REFERENCES Gear_box(id_gear_box)
);

CREATE TABLE model_motor(
   id_model_motor SERIAL,
   id_model VARCHAR(50) ,
   id_motorisation VARCHAR(50) ,
   PRIMARY KEY(id_model_motor),
   FOREIGN KEY(id_model) REFERENCES Model(id_model),
   FOREIGN KEY(id_motorisation) REFERENCES Motorisation(id_motorisation)
);

CREATE TABLE model_fuel_type(
   id_model_fuel_type SERIAL,
   id_model VARCHAR(50)  NOT NULL,
   id_fuel_type VARCHAR(50) ,
   PRIMARY KEY(id_model_fuel_type),
   FOREIGN KEY(id_model) REFERENCES Model(id_model),
   FOREIGN KEY(id_fuel_type) REFERENCES Fuel_type(id_fuel_type)
);

CREATE TABLE transmission(
   id_transmission VARCHAR(50) ,
   name VARCHAR(50) ,
   PRIMARY KEY(id_transmission)
);

CREATE TABLE Car(
   id_car VARCHAR(50) ,
   door_number INTEGER,
   kilometrage NUMERIC(15,2),
   color VARCHAR(50),
   id_transmission VARCHAR(50) ,
   id_model_motor INTEGER,
   id_model_fuel_type INTEGER,
   id_users VARCHAR(50)  NOT NULL,
   id_model VARCHAR(50) ,
   id_car_status INTEGER,
   id_model_gear_box INTEGER,
   PRIMARY KEY(id_car),
   FOREIGN KEY(id_transmission) REFERENCES transmission(id_transmission),
   FOREIGN KEY(id_model_motor) REFERENCES model_motor(id_model_motor),
   FOREIGN KEY(id_model_fuel_type) REFERENCES model_fuel_type(id_model_fuel_type),
   FOREIGN KEY(id_users) REFERENCES users(id_users),
   FOREIGN KEY(id_model) REFERENCES Model(id_model),
   FOREIGN KEY(id_car_status) REFERENCES Car_status(id_car_status),
   FOREIGN KEY(id_model_gear_box) REFERENCES model_gear_box(id_model_gear_box)
);

CREATE TABLE photo(
   id VARCHAR(50) ,
   picture VARCHAR(255) ,
   id_car VARCHAR(50) ,
   PRIMARY KEY(id),
   FOREIGN KEY(id_car) REFERENCES Car(id_car)
);

CREATE TABLE Annonce(
   id_annonce VARCHAR(50) ,
   status INTEGER,
   price NUMERIC(15,2)  ,
   description VARCHAR(255),  
   date_add TIMESTAMP,
   date_validation TIMESTAMP,
   id_car VARCHAR(50) ,
   PRIMARY KEY(id_annonce),
   FOREIGN KEY(id_car) REFERENCES Car(id_car)
);

CREATE TABLE Vente(
   id_vente VARCHAR(50) ,
   date_sell TIMESTAMP,
   price_payed NUMERIC(15,2)  ,
   id_annonce VARCHAR(50) ,
   id_users VARCHAR(50) ,
   PRIMARY KEY(id_vente),
   FOREIGN KEY(id_annonce) REFERENCES Annonce(id_annonce),
   FOREIGN KEY(id_users) REFERENCES users(id_users)
);

CREATE TABLE Favoris(
   id_favoris SERIAL,
   id_annonce VARCHAR(50) ,
   id_users VARCHAR(50) ,
   PRIMARY KEY(id_favoris),
   FOREIGN KEY(id_annonce) REFERENCES Annonce(id_annonce),
   FOREIGN KEY(id_users) REFERENCES users(id_users)
);
