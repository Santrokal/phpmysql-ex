<?php 
if (!isset($_POST["submit"])) { ?>
 
  <form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
   To: <input type="text" name="to_email"><br>
  
   Subject: <input type="text" name="subject"><br>
   Message: <textarea rows="10" cols="20" name="message"></textarea><br>
   <input type="submit" name="submit" value="Send Email">
  </form>
<?php
} else {
 
  if (isset($_POST["to_email"])) {
    
		 $to = $_POST["to_email"];	  
         $subject = $_POST["subject"]; 
		 $message = $_POST["message"];       		              
         $header = "From:noreply@mcashc.org \r\n";         
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";         
         $retval = mail ($to,$subject,$message,$header);
         


	
 
    if ( $retval) {
      echo("Email successfully sent to $to...");
    } else {
      echo("Email sending failed...");
    }
  }
}
?>