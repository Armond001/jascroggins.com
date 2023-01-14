
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>contact form response</title>
<link rel="stylesheet" href="savanna's style sheet.css">
<style type="text/css">
.container{
    
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        background-color: sandybrown;
            
        border-left: 70px  solid peru;
        border-right: 70px  solid peru;
        text-align: center;
        font-size: 100%;
            
            
       
}
</style>
</head>

<body>
<div class="container">
<h1>Savanna's Coffee Shop</h1>
<h2> </h2>




<!--close div container-->

<p>RESULT WILL DISPLAY BELOW THIS LINE</p>
<hr>
<p>&nbsp;</p>

<?php

echo "<p class='colorRed'>This page was created by PHP on the server and sent back to your browser. </p>";

//It will create a table and display one set of name value pairs per row
	echo "<table border='1'>";
	echo "<tr><th>Field Name</th><th>Value of field</th></tr>";
	foreach($_POST as $key => $value)
	{
		echo '<tr class=colorRow>';
		echo '<td>',$key,'</td>';
		echo '<td>',$value,'</td>';
		echo "</tr>";
	} 
	echo "</table>";
	echo "<p>&nbsp;</p>";

?>
</div>
</body>
</html>
