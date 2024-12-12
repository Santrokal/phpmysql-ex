<?php
   $con = mysqli_connect("localhost", "root", "", "phpmysql");

   

   //Inserting a records into the my_team table
   mysqli_query($con, "insert into my_team values(NULL,'test', 'test', 'test', 'test')");
   $id = mysqli_insert_id($con);
   echo "Insert ID: ".$id ."<br/>";
   mysqli_query($con, "insert into my_team values(NULL,'test1', 'test1', 'test1', 'test1')");
   $id = mysqli_insert_id($con);
  echo "Insert ID: $id <br/>";
  
  
   //Closing the connection
   mysqli_close($con);
?>
