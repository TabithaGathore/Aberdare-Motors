-- Create the database
CREATE DATABASE IF NOT EXISTS onepiecemotors;

-- Use the database
USE onepiecemotors;

-- Create the registration_form table
CREATE TABLE IF NOT EXISTS registration_form (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    carModel VARCHAR(100) NOT NULL,
    budget DECIMAL(10, 2) NOT NULL,
    messages TEXT
);
