<?php
  // Connect to MySQL
  $mysqli = new mysqli( "localhost", "root", "", "dipl");

  // Check our connection
  if ( $mysqli->connect_error ) {
    die( 'Connect Error: ' . $mysqli->connect_errno . ': ' . $mysqli->connect_error );
  }


