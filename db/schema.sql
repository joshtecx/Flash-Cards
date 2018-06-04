DROP DATABASE IF EXISTS project_db;

CREATE DATABASE project_db;

USE project_db;


CREATE TABLE Decks(
    -- id INT NOT NULL AUTO_INCREMENT,
    deck_name VARCHAR(200) NOT NULL,
    PRIMARY KEY (deck_name)
);

CREATE TABLE Cards(
    id INT NOT NULL AUTO_INCREMENT,
    deck_name VARCHAR(200) NOT NULL,
    question VARCHAR (250) NOT NULL,
    hint VARCHAR(200) NOT NULL,
    answer VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (deck_name) REFERENCES Decks(deck_name);
);
