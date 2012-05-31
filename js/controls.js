var $window = $(this);

//Default settings
var $langMode = 'text/html';
var $lineNum = true;
var $render = true;
var $indent = false;
var $prompt = false;

var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: $langMode,
    tabMode: 'indent',
    smartIndent: $indent,
    lineNumbers: $lineNum,
    lineWrapping: true,
    onChange: function() {
        $prompt = true;
        if($render == true){
            renderPreview();
        }	
    }
});

//Grabs ctrl+key combos for shortcut commands
//Cannot grab ctrl+n in chrome 4 or higher :(
$.ctrl = function(key, callback, args) {
    $(document).keydown(function(e) {
        if(!args) args=[];
        if(e.keyCode == key.charCodeAt(0) && e.ctrlKey) {
            callback.apply(this, args);
            return false;
        }
    });
};

//Render contents of editor
function renderPreview()
{
    var previewFrame = document.getElementById('output');
    var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
    preview.open();
    //Lets user write pure js into the editor, fudges in the script tags for rendering
    if($langMode == 'javascript'){
        preview.write('<script>'+editor.getValue()+'</script>');
    }else{
        preview.write(editor.getValue());
    }
    preview.close();
}

$(document).ready(function()
{
    var $textarea = $('#col-left');
    var $output = $('#col-right');
    var $iframe = $('#output');
    var $CM = $('.CodeMirror-scroll');
    $textarea.height($window.height()-60);
    $output.height($window.height()-60);
    $iframe.height($output.height());
    $CM.height($textarea.height());
    renderPreview();
});

//Menu Button Functions
//File Menu Options
//New file (empty)
$('#new').click(function ()
{
    if($prompt == true){
        if (confirm('All unsaved work will be lost. Are you sure?')) {
            editor.setValue('');
            renderPreview();
        }
    }else{
        editor.setValue('');
        renderPreview();
    }
});

//New HTML Template file
$('#new-html').click(function ()
{
    if($prompt == true){
        if (confirm('All unsaved work will be lost. Are you sure?')) {
            editor.setValue('<html>\n<head>\n\t<title></title>\n</head>\n<body>\n\tSkeleton File\n</body>\n</html>');
            $langMode = 'text/html';
            editor.setOption("mode", $langMode);
    
            $htmlIcon.addClass("icon-ok");
            $svgIcon.removeClass("icon-ok");
            $jsIcon.removeClass("icon-ok");
            CodeMirror.autoLoadMode(editor, $langMode);
            renderPreview();
        }
    }else{
        editor.setValue('<html>\n<head>\n\t<title></title>\n</head>\n<body>\n\tSkeleton File\n</body>\n</html>');
        $langMode = 'text/html';
        editor.setOption("mode", $langMode);
    
        $htmlIcon.addClass("icon-ok");
        $svgIcon.removeClass("icon-ok");
        $jsIcon.removeClass("icon-ok");
        CodeMirror.autoLoadMode(editor, $langMode);
        renderPreview();
        
    }
//console.log($langMode);
});

//New SVG Template file
$('#new-svg').click(function ()
{
    if($prompt == true){
        if (confirm('All unsaved work will be lost. Are you sure?')) {
            editor.setValue('<svg xmlns="http://www.w3.org/2000/svg" version="1.1">\n\n</svg>');
            $langMode = 'xml';
            editor.setOption("mode", $langMode);

            $htmlIcon.removeClass("icon-ok");
            $svgIcon.addClass("icon-ok");
            $jsIcon.removeClass("icon-ok");
            CodeMirror.autoLoadMode(editor, $langMode);
            renderPreview();
        }
    }else{
        editor.setValue('<svg xmlns="http://www.w3.org/2000/svg" version="1.1">\n\n</svg>');
        $langMode = 'xml';
        editor.setOption("mode", $langMode);

        $htmlIcon.removeClass("icon-ok");
        $svgIcon.addClass("icon-ok");
        $jsIcon.removeClass("icon-ok");
        CodeMirror.autoLoadMode(editor, $langMode);
        renderPreview();
    }
//console.log($langMode);
});

//New JS Template file
$('#new-js').click(function ()
{
    if($prompt == true){
        if (confirm('All unsaved work will be lost. Are you sure?')) {
            editor.setValue('\/\/Author: <yourname>\n\/\/Date: <date>\nfunction myScript(){\nreturn 100;\n}\n');
            $langMode = 'javascript';
            editor.setOption("mode", $langMode);
    
            $htmlIcon.removeClass("icon-ok");
            $svgIcon.removeClass("icon-ok");
            $jsIcon.addClass("icon-ok");
            CodeMirror.autoLoadMode(editor, $langMode);
            renderPreview();
        }
    }else{
        editor.setValue('\/\/Author: <yourname>\n\/\/Date: <date>\n\nfunction myScript(){\n\treturn 100;\n}\n');
        $langMode = 'javascript';
        editor.setOption("mode", $langMode);
    
        $htmlIcon.removeClass("icon-ok");
        $svgIcon.removeClass("icon-ok");
        $jsIcon.addClass("icon-ok");
        CodeMirror.autoLoadMode(editor, $langMode);
        renderPreview();
    }
//console.log($langMode);
});

//Open file dialog
$('#open').click(function() {
    if($prompt == true){
        if (confirm('All unsaved work will be lost. Are you sure?')) {
            toggleOpenFile();
        }
    }else{
        editor.setValue('');
        toggleOpenFile();
    }
});

//Save file dialog
$('#save').click(function() {
    toggleSaveFile();
});

//Reload file
$('#reload').click(function ()
{
    renderPreview();
});

//Languages Options
var $htmlIcon = $('#html-icon');
var $svgIcon = $('#svg-icon');
var $jsIcon = $('#js-icon');

//Set HTML Mode
$('#toggle-html').click(function()
{
    $langMode = 'text/html';
    editor.setOption("mode", $langMode);
    
    $htmlIcon.addClass("icon-ok");
    $svgIcon.removeClass("icon-ok");
    $jsIcon.removeClass("icon-ok");
    CodeMirror.autoLoadMode(editor, $langMode);
    renderPreview();
    
});
//Set SVG Mode
$('#toggle-svg').click(function()
{
    $langMode = 'xml';
    editor.setOption("mode", $langMode);

    $htmlIcon.removeClass("icon-ok");
    $svgIcon.addClass("icon-ok");
    $jsIcon.removeClass("icon-ok");
    CodeMirror.autoLoadMode(editor, $langMode);
    renderPreview();
});
//Set Javascript Mode
$('#toggle-js').click(function()
{
    $langMode = 'javascript';
    editor.setOption("mode", $langMode);
    
    $htmlIcon.removeClass("icon-ok");
    $svgIcon.removeClass("icon-ok");
    $jsIcon.addClass("icon-ok");
    CodeMirror.autoLoadMode(editor, $langMode);
    renderPreview();
});
//Settings Menu Options

//Toggle Auto Render
$("#toggle-render").click(function ()
{
    var $renderIcon = $('#render-icon');
    if($render == true){
        $render = false;
        //alert("Render is off");
        $renderIcon.removeClass("icon-ok");

    }else{
        $render = true;
        //alert("Render is on");
        $renderIcon.addClass("icon-ok");
    }
});
//Toggle Auto Indent
$("#toggle-indent").click(function ()
{
    var $indentIcon = $('#indent-icon');
    if($indent == true){
        $indent = false;
        $indentIcon.removeClass("icon-ok");
        editor.setOption("smartIndent", "false");
    }else{
        $indent = true;
        $indentIcon.addClass("icon-ok");
        editor.setOption("smartIndent", "true");
    }
});

//Keyboard shortcuts
//New file:     Ctrl-N *Will not work in Chrome :(
$.ctrl('N', function() {
    if($prompt == true){
        if (confirm('All unsaved work will be lost. Are you sure?')) {
            editor.setValue('');
            renderPreview();
        }
    }else{
        editor.setValue('');
        renderPreview();
    }
});

//Open file:    Ctrl-O *Doesn't completely override in Firefox
$.ctrl('O', function() {
    if($prompt == true){
        if (confirm('All unsaved work will be lost. Are you sure?')) {
            toggleOpenFile();
        }
    }else{
        toggleOpenFile();
    }
});

//Save file:    Ctrl-S
$.ctrl('S', function() {
    toggleSaveFile();
});

//Reload file:  Ctrl-R
$.ctrl('R', function() {
    renderPreview();
});

//File Handler functions
function toggleOpenFile(){
    $('.upload_toggle').toggle()
}

function openFile(){
    $('#upload_message').html('Uploading...');
    document.open_file_form.submit();
    return false;
}

function openFileComplete(){
    $('#upload_message').html('Upload Complete');
    editor.setValue($('#upload_iframe').contents().find('#the_file').val());
    renderPreview();
	
    $('.upload_toggle').animate({
        opacity: 0
    }, 500, function() {
        $('.upload_toggle').hide()
        $('#modal_overlay').css({
            opacity: 1
        });
        $('#bg_fader').css({
            opacity: 0.8
        });
    });
}

function toggleSaveFile(){
    $('.save_toggle').toggle();
}

function saveFile(){
    $prompt = false;
    var fileContents=editor.getValue();
    var fileName=$('#save_file_name').val();
    $.form('php/save_file.php', {
        fileContents: fileContents, 
        fileName: fileName
    }, 'POST').submit();
	
    $('.save_toggle').animate({
        opacity: 0
    }, 500, function() {
        $('.save_toggle').hide()
        $('#modal_overlay_save').css({
            opacity: 1
        });
        $('#bg_fader').css({
            opacity: 0.8
        });
    });
}

//Prompt user before refreshing/leaving editor window
$(window).bind('beforeunload', function(){
    if($prompt == true){
        return "All unsaved work will be lost.";
    }
    else{
        return null
    }
});

