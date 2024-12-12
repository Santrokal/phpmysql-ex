<?php

error_reporting(E_ALL & ~E_NOTICE);
$con = mysqli_connect("localhost", "root", "", "phpmysql");

   
   //Retrieving the contents of the table
   $res = mysqli_query($con, "SELECT * FROM my_team");

while ($property = mysqli_fetch_field($res))
  {
  $currentfield = mysqli_field_tell($res);
  echo "Current Field: ".$currentfield."<br />";  
  echo "Field name: " . $property->name . "<br />";
  echo "Table name: " . $property->table . "<br />";
  echo "Default value: " . $property->def . "<br />";
  echo "Max length: " . $property->max_length . "<br />";
  echo "Not NULL: " . $property->not_null . "<br />"; 
  echo "Primary Key: " . $property->primary_key . "<br />";
  echo "Unique Key: " . $property->unique_key . "<br />"; 
  echo "Mutliple Key: " . $property->multiple_key . "<br />";
  echo "Numeric Field: " . $property->numeric . "<br />";
  echo "BLOB: " . $property->blob . "<br />";
  echo "Field Type: " . $property->type . "<br />";
  echo "Unsigned: " . $property->unsigned . "<br />";
  echo "Zero-filled: " . $property->zerofill . "<br /><br />"; 
  }

 mysqli_close($con);
?>