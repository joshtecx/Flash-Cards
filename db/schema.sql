DROP DATABASE IF EXISTS project_db;

CREATE DATABASE project_db;

USE project_db;

CREATE TABLE user(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL,
    PRIMARY KEY (id);
)

CREATE TABLE javascript_cards(
    id INT NOT NULL AUTO_INCREMENT,
    question VARCHAR (250) NOT NULL,
    hint VARCHAR(200) NOT NULL,
    answer VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE html_cards(
    id INT NOT NULL AUTO_INCREMENT,
    question VARCHAR (250) NOT NULL,
    hint VARCHAR(200) NOT NULL,
    answer VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE css_cards(
    id INT NOT NULL AUTO_INCREMENT,
    question VARCHAR (250) NOT NULL,
    hint VARCHAR(200) NOT NULL,
    answer VARCHAR(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

