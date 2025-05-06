<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', 'errors.log');

include 'db_connect.php';

$fullName = $_POST["fullName"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$carModel = $_POST["carModel"];
$budget = $_POST["budget"];
$messages = $_POST["messages"];

// Use the existing database connection from db_connect.php
$conn = new mysqli($servername, $username, $password, $db);

if ($conn->connect_error) { 
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO registration_form (fullName, email, phone, carModel, budget, messages) 
        VALUES ('$fullName', '$email', '$phone', '$carModel', '$budget', '$messages')";

$result = mysqli_query($conn, $sql);

if (!$result) {
    error_log("Error executing query: " . mysqli_error($conn));
    echo "An error occurred. Please try again later.";
} else {
    echo "Registration successful!";
}

$conn->close();
?>
