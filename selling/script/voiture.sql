CREATE TABLE Category(
   id_category VARCHAR(50) ,
   name VARCHAR(50) ,
   PRIMARY KEY(id_category)
);


CREATE TABLE Transmission(
   id_transmission VARCHAR(50) ,
   name VARCHAR(50) ,
   id_car VARCHAR(50) ,
   PRIMARY KEY(id_transmission)
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

CREATE TABLE gender(
   id integer primary key,
   name VARCHAR(100)
);

CREATE TABLE Users(
   id_users VARCHAR(50) ,
   name VARCHAR(50) ,
   first_name VARCHAR(50) ,
   birthdate DATE,
   username VARCHAR(50),
   email VARCHAR(50) ,
   password VARCHAR(50) ,
   is_admin BOOLEAN,
   date_registration DATE,
   id_gender integer references gender(id),
   PRIMARY KEY(id_users)
);

CREATE TABLE Commission(
   id_commission VARCHAR(50) ,
   boundary_inferior DOUBLE PRECISION,
   boundary_superior DOUBLE PRECISION,
   percentage INTEGER,
   PRIMARY KEY(id_commission)
);

CREATE TABLE profit(
   id_profit VARCHAR(50) ,
   rising DOUBLE PRECISION,
   date_add DATE,
   id_users VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_profit),
   FOREIGN KEY(id_users) REFERENCES Users(id_users)
);

CREATE TABLE Origin(
   id_origin VARCHAR(10) ,
   name VARCHAR(50) ,
   PRIMARY KEY(id_origin)
);

CREATE TABLE Location(
   id_location VARCHAR(50) ,
   name VARCHAR(50) ,
   PRIMARY KEY(id_location)
);

CREATE TABLE Brand(
   id_brand VARCHAR(50) ,
   name VARCHAR(50) ,
   id_origin VARCHAR(10)  NOT NULL,
   PRIMARY KEY(id_brand),
   FOREIGN KEY(id_origin) REFERENCES Origin(id_origin)
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

CREATE TABLE Car(
   id_car VARCHAR(50) ,
   door_number INTEGER,
   kilometrage NUMERIC(15,2)  ,
   id_model_motor INTEGER,
   id_model_fuel_type INTEGER,
   id_users VARCHAR(50)  NOT NULL,
   id_model VARCHAR(50) ,
   color VARCHAR(50),
   id_car_status INTEGER,
   id_model_gear_box INTEGER,
   id_transmission VARCHAR(50) REFERENCES transmission(id_transmission),
   PRIMARY KEY(id_car),
   FOREIGN KEY(id_model_motor) REFERENCES model_motor(id_model_motor),
   FOREIGN KEY(id_model_fuel_type) REFERENCES model_fuel_type(id_model_fuel_type),
   FOREIGN KEY(id_users) REFERENCES Users(id_users),
   FOREIGN KEY(id_model) REFERENCES Model(id_model),
   FOREIGN KEY(id_car_status) REFERENCES Car_status(id_car_status),
   FOREIGN KEY(id_model_gear_box) REFERENCES model_gear_box(id_model_gear_box)
);

CREATE TABLE Photo(
   id SERIAL,
   picture TEXT,
   id_car VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(id_car) REFERENCES Car(id_car)
);


CREATE TABLE Annonce(
   id_annonce VARCHAR(50) ,
   date_add TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   date_validation DATE,
   status INTEGER,
   price NUMERIC(15,2)  ,
   description VARCHAR(255),
   id_location VARCHAR(50)  NOT NULL,
   id_car VARCHAR(50) ,
   PRIMARY KEY(id_annonce),
   UNIQUE(id_car),
   FOREIGN KEY(id_location) REFERENCES Location(id_location),
   FOREIGN KEY(id_car) REFERENCES Car(id_car)
);

CREATE TABLE Vente(
   id_vente VARCHAR(50) ,
   date_sell TIMESTAMP,
   price_payed NUMERIC(15,2)  ,
   status INTEGER,
   date_validation DATE,
   id_annonce VARCHAR(50) ,
   id_users VARCHAR(50) ,
   PRIMARY KEY(id_vente),
   FOREIGN KEY(id_annonce) REFERENCES Annonce(id_annonce),
   FOREIGN KEY(id_users) REFERENCES Users(id_users)
);

CREATE TABLE Favoris(
   id_favoris VARCHAR(50) ,
   id_users VARCHAR(50)  NOT NULL,
   id_annonce VARCHAR(50) ,
   PRIMARY KEY(id_favoris),
   FOREIGN KEY(id_users) REFERENCES Users(id_users),
   FOREIGN KEY(id_annonce) REFERENCES Annonce(id_annonce)
);

CREATE TABLE fund(
   id_fund VARCHAR(50) ,
   rising DOUBLE PRECISION,
   date_add DATE,
   id_vente VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_fund),
   FOREIGN KEY(id_vente) REFERENCES Vente(id_vente)
);

CREATE TABLE month (
    id_month INTEGER,
    month VARCHAR(50)
);

ALTER TABLE vente RENAME COLUMN id_users TO id_seller;