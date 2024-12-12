<?php
   //Creating a connection
   $con = mysqli_connect("localhost", "root", "", "phpmysql");

   //Executing the multi query
   $query = "SELECT * FROM my_team;CREATE TABLE Test1 (id int,firstname VARCHAR(255), lastname VARCHAR(255));insert into Test1 values(1,'Raju', 'test1'),(2,'Rahman', 'test2'),(3,'Ramani', 'test3');SELECT * FROM Test1;";

   $res = mysqli_multi_query($con, $query);

   if ($res) {
      do {
         if ($result = mysqli_use_result($con)) {
            while ($row = mysqli_fetch_row($result)) {
               echo "First Name: ".$row[1]."<br/>";
               echo "Last Name: ".$row[2]."<br/>";
            }
            mysqli_free_result($result);
         }
         if (mysqli_more_results($con)) {
            echo "<br/>";
         }
      } while (mysqli_next_result($con));
   }
   mysqli_close($con);
?>