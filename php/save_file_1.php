<?php
$the_file_name=$_POST['fileName'];
header("Pragma: public");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0"); 
header("Content-Type: application/force-download");
header("Content-Type: application/octet-stream");
header("Content-Type: application/download");
header("Content-Disposition: attachment; filename=$the_file_name");
header("Content-Transfer-Encoding: binary ");
$the_file=$_POST['fileContents'];
echo $the_file;
?>