<?php
$the_temp_file=$_FILES['users_file']['tmp_name'];
$file_contents=file_get_contents($the_temp_file);
?><body onload='parent.openFileComplete()'><textarea id='the_file'><?php
echo $file_contents;
?></textarea></body>