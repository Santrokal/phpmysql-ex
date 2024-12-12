<?php
   $con = mysqli_connect("localhost", "root", "", "phpmysql");

   mysqli_query($con, "CREATE TABLE IF NOT EXISTS my_team(rowid INT NOT NULL AUTO_INCREMENT primary key, first_name VARCHAR(255), last_name VARCHAR(255), place_of_birth VARCHAR(255), country VARCHAR(255))");
   echo "Table Created ...<br/>";

   //Inserting a records into the my_team table
   mysqli_query($con, "insert into my_team values(NULL,'Shikhar', 'Dhawan', 'Delhi', 'India')");
   mysqli_query($con, "insert into my_team values(NULL,'Jonathan', 'Trott', 'CapeTown', 'SouthAfrica')");
   mysqli_query($con, "insert into my_team values(NULL,'Kumara', 'Sangakkara', 'Matale', 'Srilanka')");
   mysqli_query($con, "insert into my_team values(NULL,'Virat', 'Kohli', 'Delhi', 'India')");

   echo "Records Inserted ...<br/>";
   
   
   //Retrieving the contents of the table
   $res = mysqli_query($con, "SELECT * FROM my_team");

   //Fetching all the rows as arrays
   while($row = mysqli_fetch_array($res, MYSQLI_ASSOC)){
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
