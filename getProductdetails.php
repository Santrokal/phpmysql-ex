<?php
include_once 'connection.php';
$connection = new Database();  
$quantity = $_GET['quantity'];
$unitprice = $_GET['unitprice'];
$discount = $_GET['discount'];


$totalcost = 0;
$totalcostd = 0;
$discountamount = 0;
$totaldiscountamount = 0;
$len = 0;

 
    if ($connection->connectToDatabase()) {
		$totalcost = $quantity * $unitprice;
		$len = strlen($discount);
		$discountvalue = substr ($discount,0,$len-1);
		$discountamount = $unitprice * ($discountvalue/100);
		$totaldiscountamount = $quantity * $discountamount;
		$totalcostd = $totalcost - $totaldiscountamount;
		
		echo "<table id='show'><tr>
            	<td>
                	Total Cost (without percentage):                
				</td>  	
            
            	<td>
                	<input type='text' id='totalcost' name='totalcost' value='".$totalcost."' readonly='true'/>                
				</td>
        	</tr>
			
			<tr>
            	<td>
                	Toal Discount :                
				</td>  	
            
            	<td>
					<input type='text' id='tdiscount' name='tdiscount' value='".$totaldiscountamount."' readonly='true'/> 
				</td>
        	</tr>
			
			<tr>
            	<td>
                	Toal Amount with Discount :                
				</td>  	
            
            	<td>
					<input type='text' id='totalcostd' name='totalcostd' value='".$totalcostd."' readonly='true'/> 
				</td>
        	</tr></table>";
		
		
		
		
      
?>
 
<?php
    }
?>
