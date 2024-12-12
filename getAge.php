<?php
include_once 'connection.php';
$connection = new Database();  
$dob = $_GET['dob'];

$query = "";
$serverdate = "";

    if ($connection->connectToDatabase()) {
		
		if (!preg_match("/^[0-9]{1,2}\\/[0-9]{1,2}\\/[0-9]{4}$/", $dob)) {                  
				  
			echo "<table id='agevalue'><tr>
            	<td colspan='2' align='center'>
                	<span style='color:red;'>Date of Birth must be in dd/mm/yyyy!</span>             
				</td>
				</tr></table>";
		}                 
        else{	
		
		$dob_split = explode("/",$dob);
		$datevalue = $dob_split[2]."-".$dob_split[1]."-".$dob_split[0];
		
		$query = "select date_format(current_date(),'%Y-%m-%d') as serverdate";
					$result = mysqli_query($connection->myconn,$query);
					
						while ($rows = mysqli_fetch_array($result)) {
							$serverdate = $rows["serverdate"];	
						}
				
			$diff = abs(strtotime($datevalue) - strtotime($serverdate));
			$years = floor($diff / (365*60*60*24));
			$months = floor(($diff - $years * 365*60*60*24) / (30*60*60*24));
			$days = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24)/ (60*60*24));       
		
		echo "<table id='agevalue'><tr>
            	<td>
                	Your Age:               
				</td>  	
            
            	<td>".$years." Years ".$months. " Month ".$days." Days"."</td></tr></table>";
		}

    }
?>
