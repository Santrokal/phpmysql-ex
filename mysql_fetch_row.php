<?php
   $con = mysqli_connect("localhost", "root", "", "phpmysql");

   
   //Retrieving the contents of the table
   $res = mysqli_query($con, "SELECT * FROM my_team");

   //Fetching all the rows as arrays
   while($row = mysqli_fetch_row($res)){
      echo "Row ID: ".$row[0]."<br/>" ;
      echo "First Name: ".$row[1]."<br/>" ;
      echo "Last Name: ".$row[2]."<br/>";
      echo "Place Of Birth: ".$row[3]."<br/>" ;
      echo "Country: ".$row[4]."<br/>";
	  echo "<br/>";
   }
   //Closing the statement
   mysqli_free_result($res);

   //Closing the connection
   mysqli_close($con);
   
?>
