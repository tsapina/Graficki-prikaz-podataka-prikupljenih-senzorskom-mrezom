<?php
require 'connect.php';
$stationID = $_POST['stationID'];
$par = $_POST['par'];

if ($result =  $mysqli->query("SELECT datum, {$par} FROM podaci WHERE datum between subdate(CURDATE(), 7) and CURDATE() AND stanica_id = '$stationID' ORDER BY datum ASC"))
{
	$numRows = $result->num_rows;

	if($numRows>0)
	{
		$counter = 0;
		//loop through selected data
		while($row = $result->fetch_row())
		{		
			$respond[$counter]["datum"] = $row[0];
			$respond[$counter]["par"] = $row[1];
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

