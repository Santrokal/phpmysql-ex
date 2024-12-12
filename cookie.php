<?php
     setcookie("name", "philomen", time()+ 60,'/'); // expires after 60 seconds
     echo 'the cookie has been set for 60 seconds';
	 echo "<br/>";
	 print_r($_COOKIE);    //output the contents of the cookie array variable 
?>