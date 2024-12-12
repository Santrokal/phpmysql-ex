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
// some code
mysqli_close($con);
?>
