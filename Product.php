
<?php
error_reporting(E_PARSE);
session_start(); 
include_once 'connection.php';
$connection = new Database(); 
if ($connection->connectToDatabase()) {


$_SESSION['option'] = "";

$i = 0;
$option = "";
$query = "";
$serverdate = "";
$currentmonth = "";
$datevalue = "";
$productid = "";
$procount = 0;
$productid = $row['productid'];
					$productname =  "";
					$brandid = 0;
					$modelid = 0;
					$quantity = 0;
					$unitprice = 0;
					$discount = "";
					$totalcost = 0;
					$tdiscount = 0;
					$totalcostd = 0;	

					$query = "select date_format(current_date(),'%d/%m/%Y') as serverdate, 
								date_format(current_date(),'%d%m%Y') as datevalue";
					$result = mysqli_query($connection->myconn,$query);
					if (mysqli_num_rows($result)) {
						while ($rows = mysqli_fetch_array($result)) {
							$serverdate = $rows["serverdate"];
							$datevalue = $rows["datevalue"];
							
						}
					}					
					  

if(isset($_POST['accept']))
{
	
	
	
	$query = "select * from phpmysql.product where productid = '".$_POST['productid']."'";
		$result = mysqli_query($connection->myconn,$query);
		if (mysqli_num_rows($result)) {
			$query = "update phpmysql.product set productname = '".$_POST['productname']."', orderdate = '".$serverdate."', 
			brandid = ".$_POST['brandid'].", modelid = ".$_POST['modelid'].", quantity = ".$_POST['quantity'].", 
			unitprice = ".$_POST['unitprice'].",discount = '".$_POST['discount']."', totalcost = ".$_POST['totalcost'].",
			tdiscount = ".$_POST['tdiscount'].",totalcostd = ".$_POST['totalcostd']." where 
			productid = '".$_POST['productid']."'";			
			mysqli_query($connection->myconn,$query);
			$_SESSION['option'] = "";
		}else{
			mysqli_query($connection->myconn,"INSERT INTO phpmysql.product (productid, productname, orderdate, brandid, modelid,quantity,
			unitprice, discount, totalcost, tdiscount,totalcostd)
			VALUES ('".$_POST['productid']."','".$_POST['productname']."','".$serverdate."',".$_POST['brandid'].",".$_POST['modelid'].",".$_POST['quantity'].",".$_POST['unitprice'].",'".$_POST['discount']."',".$_POST['totalcost'].",
			".$_POST['tdiscount'].",".$_POST['totalcostd'].")");
			
			$query = "update phpmysql.procount set id = id+1" ;
			mysqli_query($connection->myconn,$query);
			
			
			$_SESSION['option'] = "";
		}
		
}

if(isset($_GET['option']))
{
	if($_GET['option'] == 'view' || $_GET['option'] == 'edit'){
		$_SESSION['option'] = "edit";
		$productid = $_GET['productid'];
		$query = "SELECT p.id as id, p.productid as productid, p.productname as productname, b.id as brandid, b.name as brand, m.id as modelid, m.name as model, p.quantity as quantity, p.unitprice as unitprice, p.discount as discount, p.totalcost as totalcost, p.tdiscount as tdiscount, p.totalcostd as totalcostd FROM phpmysql.product as p, phpmysql.brands as b, phpmysql.model as m where b.id = m.brandid and b.id = p.brandid and m.id = p.modelid and  p.productid = '".$productid."'";
		
		$result = mysqli_query($connection->myconn,$query);
		if (mysqli_num_rows($result)) {
			if($row = mysqli_fetch_array($result))
				  {
					$productid = $row['productid'];
					$productname =  $row['productname'];
					$brandid = $row['brandid'];
					$modelid = $row['modelid'];
					$quantity = $row['quantity'];
					$unitprice = $row['unitprice'];
					$discount = $row['discount'];
					$totalcost = $row['totalcost'];
					$tdiscount = $row['tdiscount'];
					$totalcostd = $row['totalcostd'];					  
				  }
				  $_SESSION['modelid'] = $modelid;
				  
		}
	}
	if($_GET['option'] == 'delete'){
		
		$productid = $_GET['productid'];
		
		$query = "delete from phpmysql.product where productid = '".$productid."'";
		mysqli_query($connection->myconn,$query);
		

	}		
}



?>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Product Detalis</title>

<script type="text/javascript">
        var xmlHttp;
        function showModel(){
			var brandid = document.getElementById("brandid").value;          
			
				if (typeof XMLHttpRequest != "undefined"){
                    xmlHttp= new XMLHttpRequest();
                }else if (window.ActiveXObject){
                    xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
                }
                if (xmlHttp==null){
                    alert("Browser does not support XMLHTTP Request")
                    return;
                } 
          var url = "getModel.php?brandid=" + brandid;
          xmlHttp.onreadystatechange = showModel1;
          xmlHttp.open("GET", url, true);
          xmlHttp.send(null);
    }
      
      function showModel1(){   
          if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete"){			  
              document.getElementById('modelid').innerHTML = xmlHttp.responseText;              
          }   
      }
	  
	  
	  
	  function showDetails(){
			var quantity = document.getElementById("quantity").value;
			var unitprice = document.getElementById("unitprice").value;
			var discount = document.getElementById("discount").value;   
			
				if (typeof XMLHttpRequest != "undefined"){
                    xmlHttp= new XMLHttpRequest();
                }else if (window.ActiveXObject){
                    xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
                }
                if (xmlHttp==null){
                    alert("Browser does not support XMLHTTP Request")
                    return;
                } 
          var url = "getProductdetails.php?quantity=" + quantity+"&&unitprice="+unitprice+"&&discount="+discount+"";
          xmlHttp.onreadystatechange = showDetails1;
          xmlHttp.open("GET", url, true);
          xmlHttp.send(null);
    }
      
      function showDetails1(){   
          if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete"){							  
              document.getElementById('show').innerHTML = xmlHttp.responseText;              
          }   
      }
      
      
   
   
</script>

</head>

<body>
		<form action="" method="post">
        <table>
		
			<tr>
            	<td>
                	Product Id:                
				</td>  	
            
				<?php
				
					
					if($_SESSION['option'] == ''){
						$query = "select id from phpmysql.procount";
						$result = mysqli_query($connection->myconn,$query);
						if (mysqli_num_rows($result)) {
							if ($rows = mysqli_fetch_array($result)) {
								$procount = $rows["id"];
							}
						}
						$productid = "P".$datevalue.$procount;
					}
				
				?>
			
            	<td>
                	<input type="text" id="productid" name="productid" 
						value="<?php echo $productid;?>" readonly="true"/>                
				</td>
        	</tr>
			
			<tr>
            	<td>
                	Product Name:                
				</td> 
				<td>
                	<input type="text" id="productname" name="productname" 
						value="<?php echo $productname;?>" />                
				</td>
        	</tr>
			
        	<tr>
            	<td>
                	Brand                </td>  	
            
            	<td>
					<select id="brandid" name="brandid" onchange ="return showModel()">
                        <option value="0">--- Select ---</option>

                        <?php
                        $query = "select id,name from phpmysql.brands";
						$result = mysqli_query($connection->myconn,$query);

                        if (mysqli_num_rows($result)) {
                            while ($rows = mysqli_fetch_array($result)) {
								if($rows["id"] == $brandid){
									echo "<option value=" . $rows["id"] . " selected>" 
                                        . $rows["name"] . "</option>";
								}
								else{
									echo "<option value=" . $rows["id"] . ">" 
                                        . $rows["name"] . "</option>";
								}
                            }
                        }                                            
                        ?>
                    </select>
				</td>
        	</tr>
            
            <tr>
            	<td>
                	Model:                
				</td>  	
            
            	<td>
                	 <select id="modelid" name="modelid">
					 
                      <option value="0">--- Select ---</option>
					  </select>
				</td>
        	</tr>
        	
            <tr>
            	<td>
                	Quantity:                
				</td>  	
            
            	<td>
                	<input type="text" id="quantity" name="quantity" value="<?php echo $quantity;?>"/>                
				</td>
        	</tr>
			
			<tr>
            	<td>
                	Unit Price:                
				</td>  	
            
            	<td>
                	<input type="text" id="unitprice" name="unitprice" value="<?php echo $unitprice;?>"/>                
				</td>
        	</tr>
			
			<tr>
            	<td>
                	Discount (in percentage):                
				</td>  	
            
            	<td>
                	<input type="text" id="discount" name="discount" value="<?php echo $discount;?>" 
					onchange ="return showDetails()"/>                
				</td>
        	</tr>
			</table>
			<table id="show">
			<tr>
            	<td>
                	Total Cost (without percentage):                
				</td>  	
            
            	<td>
                	<input type="text" id="totalcost" name="totalcost" value="<?php echo $totalcost;?>" readonly="true"/>                
				</td>
        	</tr>
			
			<tr>
            	<td>
                	Toal Discount :                
				</td>  	
            
            	<td>
                	<input type="text" id="tdiscount" name="tdiscount" value="<?php echo $tdiscount;?>" readonly="true"/>                
				</td>
        	</tr>
			
			<tr>
            	<td>
                	Toal Amount with Discount :                
				</td>  	
            
            	<td>
                	<input type="text" id="totalcostd" name="totalcostd" value="<?php echo $totalcostd;?>" readonly="true"/>                
				</td>
        	</tr>
        </table>
        	
			
			<table>
            
             <tr>
             	<td colspan="2" align="center">
                <input type="submit" name="accept" value ="Save"/>
				 <input type="reset" name="accept" value ="Clear"/>
                </td>
             </tr>
        </table>
        </form>
		
		
		<?php
		
		$result = mysqli_query($connection->myconn,"SELECT p.id as id, p.productid as productid, p.productname as productname, b.name as brand, m.name as model, p.quantity as quantity, p.unitprice as unitprice, p.discount as discount, p.totalcost as totalcost, p.tdiscount as tdiscount, p.totalcostd as totalcostd FROM phpmysql.product as p, phpmysql.brands as b, phpmysql.model as m where b.id = m.brandid and b.id = p.brandid and m.id = p.modelid order by p.productid, p.id");
		echo "<table border='1'>";
				
		if (mysqli_num_rows($result)) {
				echo "<table border='1'>
				<tr>
					<th>S.No</th>
					<th>Product Id</th>
					<th>Product Name</th>
					<th>Brand</th>
					<th>Model</th>
					<th>Quantity</th>
					<th>Unit Price</th>
					<th>Discount</th>				
					<th>Total Cost</th>
					<th>Total Discount</th>
					<th>Total Cost (with discount)</th>					
					<th>Options</th>
				</tr>";
				while($row = mysqli_fetch_array($result))
				  {
					$i ++;
					  echo "<tr>";
					  echo "<td>$i</td>";
					  echo "<td>" . $row['productid'] . "</td>";
					  echo "<td>" . $row['productname'] . "</td>";
					  echo "<td>" . $row['brand'] . "</td>";					  
					  echo "<td>" . $row['model'] . "</td>";
					  echo "<td>" . $row['quantity'] . "</td>";
					  echo "<td>" . $row['unitprice'] . "</td>";					
					  echo "<td>" . $row['discount'] . "</td>";
					  echo "<td>" . $row['totalcost'] . "</td>";
					  echo "<td>" . $row['tdiscount'] . "</td>";
					  echo "<td>" . $row['totalcostd'] . "</td>";					  
					  echo "<td><a href='Product.php?productid=".$row['productid']."&&option=view'>View</a>&nbsp;
								<a href='Product.php?productid=".$row['productid']."&&option=edit'>Edit</a>&nbsp;
								<a href='Product.php?productid=".$row['productid']."&&option=delete'>Delete</a>&nbsp;
								</td>";
					  echo "</tr>";
				  }
		 }else{
			 echo "<tr><th>No Record(s) is/are found</th></tr>";
		 }
		echo "</table>";
		
		?>
		
		
</body>
<script type="text/javascript">
	showModel();
</script>

</html>

<?php

}
?>
