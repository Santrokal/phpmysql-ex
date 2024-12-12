<?php
   $con = mysqli_connect("localhost", "root", "", "phpmysql");

   
   //Retrieving the contents of the table
   mysqli_query($con, "SELECT * FROM my_team");

  $rows = mysqli_affected_rows($con);
  echo "Number of affected rows: ".$rows;

   //Closing the connection
   mysqli_close($con);
   
?>
