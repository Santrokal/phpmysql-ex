<?php
$con = mysqli_connect("localhost","root","");
if ($con)
  {
  echo "DB Connected!";
  }
else
  {
  die('Could not connect: ' . mysqli_connect_error());
  }
  
$db_selected = mysqli_select_db($con, "phpmysql");
if ($db_selected)
  {
  die ("DB Selected");
  }
else
  {
  die ("Can\'t use phpmysql : " . mysqli_connect_error());
  }
mysqli_close($con);

?>
