
<?php

error_reporting(E_PARSE);
session_start();
 
$con=mysqli_connect("localhost","root","");
mysqli_select_db($con, "phpmysql");



$i = 0;
$option = "";
$query = "";
$username = "";
$password = "";	
$err = "";				
					
					  

if(isset($_POST['accept']))
{
	
		$query = "select username from phpmysql.register where username = '".$_POST['username']."' and 
				  password = '".md5($_POST['password'])."'";
		$result = mysqli_query($con,$query);
		if (mysqli_num_rows($result)) {
			echo "connected";
			if($row = mysqli_fetch_array($result))
			{
				$_SESSION['username'] = $row['username'];
			}
			
			header("location:home.php");
			
		}else{
			$err = "Login Error!";
		}
		




}




?>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>PHP with database</title>

</head>

<body>

<h2>User Login...</h2> &nbsp; &nbsp; <span style="color:red;"> <?php echo $err; ?></span>
<hr/>
		<form action="" method="post">
        <table>
        	           
             <tr>
            	<td>
                	User Name:                </td>  	
            
            	<td>
                	<input type="text" name="username" value="<?php echo $username;?>"/>                </td>
        	</tr>
            
            <tr>
            	<td>
                	Pass Word:                </td>  	
            
            	<td>
                	<input type="password" name="password" value=""/>                </td>
        	</tr>
            
            
            
             <tr>
             	<td colspan="2" align="center">
                <input type="submit" name="accept" value ="Login"/>
				&nbsp; &nbsp; Click here to <a href="Register.php">Register</a>
				
                </td>
             </tr>
        </table>
        </form>
		
		
		
		
</body>


</html>
