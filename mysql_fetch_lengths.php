<?php
   $con = mysqli_connect("localhost", "root", "", "phpmysql");

   
   //Retrieving the contents of the table
   $res = mysqli_query($con, "SELECT * FROM my_team");

   //Lengths of the rows
   
   while($row = mysqli_fetch_row($res)){
   $lengths = mysqli_fetch_lengths($res);

   print_r($lengths);
   
   echo "<br/>";
   
   }
   //Closing the statement
   mysqli_free_result($res);

   //Closing the connection
   mysqli_close($con);
   
?>
