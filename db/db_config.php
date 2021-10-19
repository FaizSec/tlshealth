<?php

$host = 'localhost';
$user = 'test';
$password = '';
$db = 'tls_health';


$connection = mysqli_connect($host,$user,$password,$db);

if(!$connection){
    echo "Database Not Establised";

}

?>