<?php
require 'connect.php';
$startDate = $_POST['startDate'];
$eD = $_POST['endDate'];
$par = $_POST['parametar'];
$endDate=strftime("%Y/%m/%d", strtotime("$eD +1 day"));


if ($result = $mysqli->query("SELECT datum, stanica_id, {$par} FROM podaci WHERE datum between '$startDate'and '$endDate' ORDER BY datum ASC"))
{
	$numRows = $result->num_rows;

	if($numRows>0){

		//loop through selected data
		while($row = $result->fetch_row()) {
			$respond[]=$row;
		}
	}else{
		$respond['numRowsError'] = 0;
	}

	
}else{
	die("QUERY ERROR: " . $result->error);
}

echo json_encode($respond);

