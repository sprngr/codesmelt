
var $window = $(this);
jQuery.fn.renderPreview = function()
{
    var editor = document.getElementById('editor');
    var previewFrame = document.getElementById('output');
    var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
    preview.open();
    preview.write(editor.value);
    preview.close();
};

$(document).ready(function()
{
    var $textarea = $('#editor');
    var $output = $('#output');
    var $window = $(this);
    $textarea.height($window.height()-65);
    $textarea.width('50%');
    //alert($textarea.css('width'));
    $output.height($window.height()-65);
    $output.width('50%');
    $textarea.linedtextarea();
    $textarea.tabby();
    $textarea.renderPreview();
});

$(window).resize(function()
{
    var $textarea = $('#editor');
    var $output = $('#output');
    var $window = $(this);
    alert($window.width()/2);
    alert("$textarea "+$textarea.css('height')+" x "+$textarea.css('width'));
    //alert("$output "+$output.css('height')+" x "+$output.css('width'));
    $textarea.height($window.height()-60);
    $textarea.width('50%');
    $output.height($window.height()-60);
    $output.width('50%');

});

$('#editor').bind('keyup', function() {
    $(this).renderPreview();
});

$('#new').click(function ()
{
    var $textarea = $('#editor');
	$textarea.val('<html>\n<head>\n\t<title></title>\n</head>\n<body>\n\tSkeleton File\n</body>\n</html>');
	$(this).renderPreview();
});

$('#reload').click(function ()
{
    $(this).renderPreview();
});

$("#toggle").click(function ()
{
    var $textarea = $('#editor');
    var regex = new RegExp();
});




