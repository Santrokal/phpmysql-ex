<?php
$degree = 0;
$prgtype = $_GET['prgtype'];
include_once 'connection.php';
    $connection = new Database();
    if ($connection->connectToDatabase()) {
            
            $sql = "select id,coursename, CONCAT_WS( '', 'Shift - ', mode ) AS shift from phpmysql.course where degree=" . $prgtype;
            $result = mysqli_query($connection->myconn,$sql);
			//echo $sql;
     ?>      
<select id="courseid" name="courseid" >
    <option value="0">--- Select ---</option> 
    <?php
    //if (mysql_num_rows($result)) {
        while ($rows = mysqli_fetch_array($result)) {
            echo "<option value='" . $rows["id"] . "' >" . $rows["coursename"] ." ".$rows["shift"]. "</option>";
        }
    //}
    ?>
</select>
<?php
    }
?>
