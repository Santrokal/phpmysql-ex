<?php
ob_start();
define('DB_SERVER', "localhost");
define('DB_USER', "root");
define('DB_PASSWORD', "");
define('DB_TABLE', "philomen");
$conn = mysqli_connect(DB_SERVER,DB_USER,DB_PASSWORD,DB_TABLE) or die('Mysql Not connected');
?>