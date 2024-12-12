<?php
   $con = mysqli_connect("localhost", "root", "", "phpmysql");

   
   //Retrieving the contents of the table
   $res = mysqli_query($con, "SELECT * FROM my_team");

   //Fetching all the rows as arrays
   while($row = mysqli_fetch_assoc($res)){
      echo "Row ID: ".$row["rowid"]."<br/>" ;
      echo "First Name: ".$row["first_name"]."<br/>" ;
      echo "Last Name: ".$row["last_name"]."<br/>";
      echo "Place Of Birth: ".$row["place_of_birth"]."<br/>" ;
      echo "Country: ".$row["country"]."<br/>";
	  echo "<br/>";
   }
   //Closing the statement
   mysqli_free_result($res);

   //Closing the connection
   mysqli_close($con);
   
?>
