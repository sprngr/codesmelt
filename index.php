<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Codesmelt</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Styles -->
        <link href="css/core.css" rel="stylesheet">

        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
          <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

        <link rel="shortcut icon" href="img/favicon.ico">
    </head>

    <body>

        <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container">
                    <div class=" btn-toolbar">
                        <a class="brand" href="#">Codesmelt</a>
                        <div class="btn-group">
                            <a class="btn" href="#"><i class="icon-file"></i> File</a>
                            <a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a id="new"><i class="icon-pencil"></i> New File</a></li>
                                <li><a id="open"><i class="icon-folder-open"></i> Open File</a></li>
                                <li><a id="save"><i class="icon-download-alt"></i> Save File</a></li>
                                <li class="divider"></li>
                                <li><a id="new-html" href="#"><i class="icon-file"></i> New HTML Template</a></li>
                                <li><a id="new-svg" href="#"><i class="icon-file"></i> New SVG Template</a></li>
                                <li><a id="new-js" href="#"><i class="icon-file"></i> New JS Template</a></li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <a class="btn" href="#"><i class="icon-list-alt"></i> Language Mode</a>
                            <a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a id="toggle-html"><i id="html-icon" class="icon-ok"></i> HTML/JS Mixed</a></li>
                                <li class="divider"></li>
                                <li><a id="toggle-svg"><i id="svg-icon"></i> SVG</a></li>
                                <li><a id="toggle-js"><i id="js-icon"></i> JavaScript</a></li>
                            </ul>
                        </div>
<!--                        <div class="btn-group">
                            <a class="btn" href="#"><i class="icon-list"></i> Demo Files</a>
                            <a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a id="load-html"><i class="icon-file"></i> Codesmelt Doc (HTML)</a></li>
                                <li><a id="load-svg"><i class="icon-file"></i> SVG File</a></li>
                                <li><a id="load-js"><i class="icon-file"></i> JS File</a></li>
                            </ul>
                        </div>-->
                        <div class="btn-group">
                            <a class="btn" href="#"><i class="icon-cog"></i> Settings</a>
                            <a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <!--<li><a id="toggle-lineNum"><i id="lineNum-icon" class="icon-ok"></i> Line Numbers</a></li>-->
                                <li><a id="toggle-render"><i id="render-icon" class="icon-ok"></i> Auto Render</a></li>
                                <li><a id="toggle-indent"><i id="indent-icon"></i> Auto Indent</a></li>
                            </ul>
                        </div>                        
                        <div class="btn-group">
                            <a id="reload" class="btn"><i class="icon-refresh"></i> Reload File</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="wrapper">
            <div id="col-left">
                <textarea id="editor" spellcheck="false">
<?php include('assets/doc.html');?>
                </textarea>
            </div>
            <div id="col-right">
                <iframe id="output">

                </iframe>
            </div>
        </div> <!-- /container -->

        <div id='modal_overlay' class='modal upload_toggle'>
            <div onClick="toggleOpenFile();" class="close">Close</div>
            <div class="modal-header">
                Select File to Open
            </div>
            <div class="modal-body">
                <form id="open_file_form" name="open_file_form" class="modal-form" action="php/open_file.php" onSubmit="openFile();return false;" enctype="multipart/form-data" method="post" target="upload_iframe">
                    <div><input type="file" id="users_file" name="users_file"></div>
                    <div><input type="submit" value="Open File"></div>
                </form>
                <div id="upload_message"></div>
            </div>
            <iframe id="upload_iframe" name="upload_iframe" width="0" height="0" scrolling="no" frameborder="0"></iframe>
        </div>

        <div id='modal_overlay_save' class='modal save_toggle'>
            <div onClick="toggleSaveFile();" class="close">Close</div>
            <div class="modal-header">
                Save your file
            </div>
            <div class="modal-body">
                <div>File Name:</div>
                <div><input type="text" id="save_file_name"></div>
                <div><input type="button" value="Save File" onClick="saveFile();"></div>
            </div>
        </div>

        <div id='bg_fader' class='upload_toggle save_toggle'></div>

        <!-- Javascript: Placed at the end of the document so the pages load faster -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/jquery-1.7.1.min.js"><\/script>')</script>
        <!-- Load CodeMirror Syntax Highlighter -->
        <script src="js/lib/codemirror.js"></script>
        <script src="js/lib/util/loadmode.js"></script>
        <!-- Load Syntax Mode Parser files -->
        <script src="js/mode/xml.js"></script>
        <script src="js/mode/javascript.js"></script>
        <script src="js/mode/css.js"></script>
        <script src="js/mode/htmlmixed.js"></script>
        <!-- Load Codesmelt control & UI scripts -->
        <script src="js/controls.js"></script>
        <script src="js/hiddenForm.js"></script>
        <!-- Load bootstrap script for UI framework -->
        <script src="js/bootstrap.min.js"></script>
		
        <script src="js/mouse.js"></script>

    </body>
</html>
