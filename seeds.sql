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
("Landon", "Martin", 2, null),
("Lady", "Gaga", 4, null),
("Will", "Smith", 2, 1),
("Kim", "K", 1, null),
("Britney", "Spears", 4, null),
("Peter", "Pan", 3, 3),
("Moe", "Carr", 1, 2),
("Ashley", "Wing", 3, null),
("Allison", "Austin", 1, null),
("Jesse", "Rob", 4, 4);