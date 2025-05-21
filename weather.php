<?php
$apiKey = "YOUR_API_KEY_HERE"; // Vaihda oma API-avain tähän
$city = urlencode($_GET['city']);
$url = "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=metric";

$response = file_get_contents($url);
header('Content-Type: application/json');
echo $response;
?>
