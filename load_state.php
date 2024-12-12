<?php
$countryid = $_GET['countryid'];
include_once 'connection.php';
    $connection = new Database();   
    if ($connection->connectToDatabase()) {
      $sql = "select stateid,state from state where countryid=" . $countryid;
    $result = mysqli_query($connection->myconn,$sql);
?>
<select id="stateid" name="stateid"  class="form-control">
    <option value="0">--- Select ---</option> 
    <?php
   
        while ($rows = mysqli_fetch_array($result)) {
            echo "<option value='" . $rows["stateid"] . "' >" . $rows["state"] ."</option>";
        }
    
    ?>
</select>
<?php
    }
?>
