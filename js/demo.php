<?php
header('Content-type: text/javascript');
?>

$('#load-html').click(function ()
{
    if($prompt == true){
        if (confirm('All unsaved work will be lost. Are you sure?')) {
            editor.setValue('<?php include('../assets/doc.html');?>');
            renderPreview();
        }
    }else{
        editor.setValue('');
        renderPreview();
    }
});