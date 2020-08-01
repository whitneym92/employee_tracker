USE employees_db;

INSERT INTO department (name) VALUES
("Product Testing"),
("Sales"),
("IT"),
("Marketing");

INSERT INTO role (title, salary, department_id) VALUES
("JR. Sales Rep", 35000, 2),
("Sales Rep", 50000, 2),
("JR. Gamer", 50000, 1),
("Gamer", 70000, 1),
("JR. Developer", 60000, 3),
("Developer", 85000, 3),
("Director", 90000, 4),
("Social Media", 65000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Landon", "Martin", 1, null),
("Lady", "Gaga", 2, null),
("Will", "Smith", 4, 1),
("Kim", "K", 5, null),
("Britney", "Spears", 3, null),
("Peter", "Pan", 6, 3),
("Moe", "Carr", 8, 2),
("Ashley", "Wing", 7, null);
