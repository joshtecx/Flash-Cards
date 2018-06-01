DROP DATABASE IF EXISTS project_db;

CREATE DATABASE project_db;

USE project_db;


CREATE TABLE Decks(
    id INT NOT NULL AUTO_INCREMENT,
    deck_name VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Cards(
    id INT NOT NULL AUTO_INCREMENT,
    deck_id INT NOT NULL,
    question VARCHAR (250) NOT NULL,
    hint VARCHAR(200) NOT NULL,
    answer VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (deck_id) REFERENCES Decks(id);
);
