USE project_db;

INSERT INTO Decks(deck_name)
VALUES
("JavaScript"),
("Html"),
("Css");



INSERT INTO Cards(deck_name, question, hint, answer)
VALUES
("JavaScript", "What language are Express apps written in?", "It starts with a 'J' ", "JavaScript"),
("JavaScript", "What is one way a website can store data in a user's browser?", "They are delicious with milk", "Cookies"),
("JavaScript", "What is a common way to shorten the response object's name inside middleware?", "It has the same abbreviation as 'Resolution'", "res"),
("JavaScript", "How many different values can booleans have?", "Think: binary", "2"),
("JavaScript", "Which HTML element can contain JavaScript?", "It starts with an 'S' ", "<script>"),
("Html", "What does HTML stand for?", "It starts with a 'Hyper' ", "Hyper Text Markup Language"),
("Html", "< br  / >What type of tag is this?", "Think Kit Kat", "Break"),
("Html", "What tag is used to connect HTML and CSS?", "Zelda", "Link"),
("Html", "What is the correct HTML element to define important text?", "Lift weights to get...", "Strong"),
("Html", "Which HTML element can contain JavaScript?", "It starts with an 'S' ", "<script>"),
("Css", "What does CSS stand for?", "_____ Style Sheets ", "Cascading Style Sheets"),
("Css", "What symbol is used to reference an ID?", "They are huge on social media", " # "),
("Css", "Which CSS property controls the text size?", " it is NOT text-size ", " font-size "),
("Css", "What symbol is used to reference a CLASS ?", " Very commonly used punctuation mark ", " . "),
("Css", "How do you specify the right margin of an element?", "This is super self-explanatory", "margin-right");
