
<?php
error_reporting(E_PARSE);
session_start(); 

if(isset($_SESSION["username"])) {


?>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>User Home Page</title>

<table width="100%">
<tr>
<th height="50"><h1>User Home</h1></th>
</tr>
</table>
<table>
<tr>
<td width="15%"><a href="home.php">Home</a></td>
<td width="15%"><a href="Product.php">Product</a></td>
<td width="15%"><a href="logout.php">Logout</a></td>
</tr>

</table>


</head>

<body>
		
		
</body>


</html>

<?php
}else{
	header("location:login.php");
	
}


?>
