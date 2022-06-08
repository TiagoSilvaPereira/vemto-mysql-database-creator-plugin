<?php

if(!is_array($argv) || count($argv) < 5) {
    echo 'Please, fill in the required fields to connect to the database.';
    return;
}

$user = $argv[1];
$password = $argv[2];
$host = $argv[4];
$port = $argv[5];
$database = $argv[3];

try {
    $connection = new PDO("mysql:host={$host};port={$port}", $user, $password);

    $connection->exec("CREATE DATABASE IF NOT EXISTS {$database}");
    $connection = null;

    echo 'Success!';
} catch (\PDOException $ignored) {
    echo $ignored->getMessage();
}