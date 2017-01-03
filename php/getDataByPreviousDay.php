<?php
require 'connect.php';
$par = $_POST['par'];

if ($result =  $mysqli->query("SELECT stanica_id, datum, {$par} FROM podaci WHERE datum between subdate(CURDATE(), 1) and CURDATE() ORDER BY stanica_id"))
{
	$numRows = $result->num_rows;
	if($numRows>0)
	{
		$counter = 0;
		//loop through selected data
		while($row = $result->fetch_row())
		{	
			$respond[$counter]["stanica"] = $row[0];
			$respond[$counter]["datum"] = $row[1];
			$respond[$counter]["par"] = $row[2];
			$counter++;
		}
	}
	else
	{
		$respond['numRowsError'] = 0;
	}
}
else
{
	die("QUERY ERROR: " . $result->error);
}

echo json_encode($respond);
