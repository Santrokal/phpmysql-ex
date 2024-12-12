<?php
session_start();
unset($_SESSION["username"]);

echo "<script>alert('Logged out successfully!');
window.location.assign('login.php')</script>";

//header("Location:login.php");

?>