<?php
session_start();
$brandid = $_GET['brandid'];
include_once 'connection.php';
    $connection = new Database();   
    if ($connection->connectToDatabase()) {
      $sql = "select id,name from phpmysql.model where brandid=" . $brandid;
   $result = mysqli_query($connection->myconn,$sql);
?>
 <select id="modelid" name="modelid">
    <option value="0">--- Select ---</option> 
    <?php
    if (mysqli_num_rows($result)) {
        while ($rows = mysqli_fetch_array($result)) {
			if($rows["id"] == $_SESSION['modelid']){
            echo "<option value='" . $rows["id"] . "' selected>" . $rows["name"] ."</option>";
			}else{
				echo "<option value='" . $rows["id"] . "' >" . $rows["name"] ."</option>";
			}
        }
    }
    ?>
</select>
<?php
    }
?>
