USE project_db;

INSERT INTO Decks(deck_name)
VALUES
("JavaScript"),
("Html"),
("Css");


-- change the actual input values

INSERT INTO Cards(deck_id, question, hint, answer)
VALUES
(1, "What language are Express apps written in?", "It starts with a 'J' ", "JavaScript"),
(1, "What is one way a website can store data in a user's browser?", "They are delicious with milk", "Cookies"),
(1, "What is a common way to shorten the response object's name inside middleware?", "It has the same abbreviation as 'Resolution'", "res"),
(1, "How many different values can booleans have?", "Think: binary", "2"),
(1, "Which HTML element can contain JavaScript?", "It starts with an 'S' ", "<script>"),
(2, "What does HTML stand for?", "It starts with a 'Hyper' ", "Hyper Text Markup Language"),
(2, "< br  / >What type of tag is this?", "Think Kit Kat", "Break"),
(2, "What tag is used to connect HTML and CSS?", "Zelda", "Link"),
(2, "What is the correct HTML element to define important text?", "Lift weights to get...", "Strong"),
(2, "Which HTML element can contain JavaScript?", "It starts with an 'S' ", "<script>"),
(3, "What does CSS stand for?", "_____ Style Sheets ", "Cascading Style Sheets"),
(3, "What symbol is used to reference an ID?", "They are huge on social media", " # "),
(3, "Which CSS property controls the text size?", " it is NOT text-size ", " font-size "),
(3, "What symbol is used to reference a CLASS ?", " Very commonly used punctuation mark ", " . "),
(3, "How do you specify the right margin of an element?", "This is super self-explanatory", "margin-right");
