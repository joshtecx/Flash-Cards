DROP DATABASE IF EXISTS project_db;

CREATE DATABASE project_db;

USE project_db;


CREATE TABLE Decks(
    -- id INT NOT NULL AUTO_INCREMENT,
    deck_name VARCHAR(200) NOT NULL,
    PRIMARY KEY (deck_name)
);

CREATE TABLE Cards(
    CREATE TABLE Cards(
    id INT NOT NULL AUTO_INCREMENT,
    deck_name VARCHAR(200) NOT NULL,
    question VARCHAR (250) ,
    hint VARCHAR(200) ,
    answer VARCHAR(250) ,
    question2 VARCHAR (250) ,
    hint2 VARCHAR(200) ,
    answer2 VARCHAR(250) ,
    question3 VARCHAR (250) ,
    hint3 VARCHAR(200) ,
    answer3 VARCHAR(250) ,
    question4 VARCHAR (250) ,
    hint4 VARCHAR(200) ,
    answer4 VARCHAR(250) ,
    question5 VARCHAR (250) ,
    hint5 VARCHAR(200) ,
    answer5 VARCHAR(250) ,
    
    PRIMARY KEY (id),
    FOREIGN KEY (deck_name) REFERENCES Decks(deck_name)
);
