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
  
   //Closing the connection
   mysqli_close($con);
?>
