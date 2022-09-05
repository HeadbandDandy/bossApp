INSERT INTO department (name, description)
VALUES 
('Front-End', 'The Front-End team develops user facing visual programming and architecture!'),
('Back-End', 'The Back-End team collects data that allows the company to interact with the user'),
('Accounting', 'The accounting team handles all transactions and account'),
('Management', 'This team handles, recruiting, hours, staffing, and project completion for the company!') 
('Facility Staff', 'This team handles all facility needs!');


INSERT INTO role (id, title, salary, department_id)
VALUES
(124414, 'Janitor', 50000, 5),
(1234, 'Engineer', 80000, 2),
(09271, 'Engineer', 120000, 2),
(827132, 'Accountant', 85000, 3),
(23812, 'Project Manager', 100000, 4),
(437181, 'Lead Manager', 150000, 4),
(5671223, 'Front-End Developer', 65000, 1)
(66716, 'Senior Front-End Developer', 135000, 1),
(91231, 'Chief Accountant', 175000, 3),
(8817132, 'Lead Janitor', 76000, 5)









INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Don', 'Castro', 10, 5),
('James', 'Gunn', 101, 4),
('Debra', 'Bean', 1010, 4),
('John', "Snow", 101010, 1),
('Ethan', 'Black', 101010, 1),
('George', 'Jungle', 121, 2),
('Jeff', 'Hardy', 10, 5),
('Evan', 'Pea', 123, 3),
('Oscar', 'Proud', 123, 3),
('Paul', 'Blart', 121, 2),
('Jenny', 'Craig', 1010, 4);
