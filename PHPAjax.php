<?php
include_once 'connection.php';
$connection = new Database(); 
if ($connection->connectToDatabase()) {
?>
<html>
    <head>
     
     <title>Dynamic UI Component</title>
     
     <script type="text/javascript" language="javascript">       
		
        var xmlHttp;
        function showCourse(){			         
			
				if (typeof XMLHttpRequest != "undefined"){
                    xmlHttp= new XMLHttpRequest();
                }else if (window.ActiveXObject){
                    xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
                }
                if (xmlHttp==null){
                    alert("Browser does not support XMLHTTP Request")
                    return;
                } 
				
				var len = document.formElem.progtype.length;
							
				for (i = 0; i < len; i++) {
					if ( document.formElem.progtype[i].checked ) {
						prgtype = document.formElem.progtype[i].value;
							break;
					}
				}
				
		var strURL = "load_course.php?prgtype=" + prgtype;
         xmlHttp.onreadystatechange = coursedetails;
          xmlHttp.open("GET", strURL, true);
          xmlHttp.send(null);
    }
      
      function coursedetails(){   
          if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete"){
			 
              document.getElementById('courseid').innerHTML = xmlHttp.responseText;
              
          }   
      }
		
	</script>
		 
	<script type="text/javascript">
        var xmlHttp;
        function showState(){
			var countryid = document.getElementById("countryid").value;          
			
				if (typeof XMLHttpRequest != "undefined"){
                    xmlHttp= new XMLHttpRequest();
                }else if (window.ActiveXObject){
                    xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
                }
                if (xmlHttp==null){
                    alert("Browser does not support XMLHTTP Request")
                    return;
                } 
          var url = "load_state.php?countryid=" + countryid;
          xmlHttp.onreadystatechange = showdetails;
          xmlHttp.open("GET", url, true);
          xmlHttp.send(null);
    }
      
      function showdetails(){   
          if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete"){
			  
              document.getElementById('stateid').innerHTML = xmlHttp.responseText;
              
          }   
      }
      
      
   
   
</script>
     
    </head>
    <body>
        
        
    <h2>Dynamic UI Component</h2>
        <form id ="formElem" name="formElem" action="" method="post">
        
             <label>Select the Programme&nbsp;&nbsp;&nbsp;</label>
             <input type="radio" id="progtype" name="progtype" value ="1" onchange ="return showCourse()">UG
             <input type="radio" id="progtype" name="progtype" value ="2" onchange ="return showCourse()">PG
             <input type="radio" id="progtype" name="progtype" value ="3" onchange ="return showCourse()">M.Phil
             <input type="radio" id="progtype" name="progtype" value ="4" onchange ="return showCourse()">Ph.D
        
             <br/>
			 
			 <br/>
                        Select the Course
                                           
                        <select id="courseid" name="courseid" class="form-control">
                           <option value="0">--- Select ---</option>
                                           
                                            
                        </select>                                   
              <br/>                                            
              <br/>  
                        Select the Country
                                             
                    <select id="countryid" name="countryid" class="form-control" 
                            onchange ="return showState()">
                        <option value="0">--- Select ---</option>

                        <?php
                        $query = "select countryid,country from phpmysql.country";
                        $result = mysqli_query($connection->myconn,$query);

                        
                            while ($rows = mysqli_fetch_array($result)) {
                                echo "<option value=" . $rows["countryid"] . ">" 
                                        . $rows["country"] . "</option>";                                                    
                            }
                                                                   
                        ?>
                    </select>
                     <br/>
					 <br/>
                        Select the State
                                             
                        <select id="stateid" name="stateid" class="form-control">
                            <option value="0">--- Select ---</option>


                       
               
        </form>
        
    </body>
</html>
<?php

}

?>