USE project_db;

INSERT INTO Decks(deck_name)
VALUES
("JavaScript"),
("Html"),
("Css");



INSERT INTO Cards(deck_name, question, hint, answer, question2, hint2, answer2,question3, hint3, answer3, question4, hint4, answer4, question5, hint5, answer5)
VALUES
("JavaScript", "What language are Express apps written in?", "It starts with a 'J' ", "JavaScript", "What is one way a website can store data in a user's browser?", "They are delicious with milk", "Cookies", "What is a common way to shorten the response object's name inside middleware?", "It has the same abbreviation as 'Resolution'", "res", "How many different values can booleans have?", "Think: binary", "2", "Which HTML element can contain JavaScript?", "It starts with an 'S' ", "<script>"),
("Html", "What does HTML stand for?", "It starts with a 'Hyper' ", "Hyper Text Markup Language", "< br  / >What type of tag is this?", "Think Kit Kat", "Break", "What tag is used to connect HTML and CSS?", "Zelda", "Link", "What is the correct HTML element to define important text?", "Lift weights to get...", "Strong", "Which HTML element can contain JavaScript?", "It starts with an 'S' ", "<script>"),
("Css", "What does CSS stand for?", "_____ Style Sheets ", "Cascading Style Sheets", "What symbol is used to reference an ID?", "They are huge on social media", " # ",   "Which CSS property controls the text size?", " it is NOT text-size ", " font-size ", "What symbol is used to reference a CLASS ?", " Very commonly used punctuation mark ", " . ", "How do you specify the right margin of an element?", "This is super self-explanatory", "margin-right")

