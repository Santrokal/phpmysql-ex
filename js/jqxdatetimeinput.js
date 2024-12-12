



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = null;
 
 
 var CS_env = {"loggedInUserEmail": null, "projectName": "openappengine", "domainName": null, "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "relativeBaseUrl": "", "projectHomeUrl": "/p/openappengine", "token": null, "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/8599073060794244502", "profileUrl": null};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>jqxdatetimeinput.js - 
 openappengine -
 
 
 Open Apps Engine API - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/8599073060794244502/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/8599073060794244502/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/8599073060794244502/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/8599073060794244502/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 <a href="#" id="projects-dropdown" onclick="return false;"><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxdatetimeinput.js%3Fr%3D607&amp;followup=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxdatetimeinput.js%3Fr%3D607" onclick="_CS_click('/gb/ph/signin');"><u>Sign in</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 
 
 <td id="plogo">
 <link itemprop="url" href="/p/openappengine">
 <a href="/p/openappengine/">
 
 
 <img src="/p/openappengine/logo?cct=1341303817"
 alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/openappengine/"><span itemprop="name">openappengine</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/openappengine/"><span itemprop="description">Open Apps Engine API</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/openappengine/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/openappengine/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 <a href="/p/openappengine/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/openappengine/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/openappengine/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 
 <a href="https://code.google.com/export-to-github/export?project=openappengine">
 <button>Export to GitHub</button>
 
 </a>
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/p/openappengine/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/openappengine/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/openappengine/source/list">Changes</a></span> &nbsp;
 
 
 
 
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/openappengine/source/browse/?r=607">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/openappengine/source/browse/branches/?r=607">branches</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/?r=607">grails</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/?r=607">openappengine</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/web-app/?r=607">web-app</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/?r=607">js</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/?r=607">jqwidgets</a><span class="sp">/&nbsp;</span>jqxdatetimeinput.js</span>
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper"><b>r607</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(https://ssl.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn607_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn607_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn607_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn607_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn607_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn607_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn607_7"

><td id="7"><a href="#7">7</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn607_1

><td class="source">/*<br></td></tr
><tr
id=sl_svn607_2

><td class="source">jQWidgets v2.1.0 (2012-May-04)<br></td></tr
><tr
id=sl_svn607_3

><td class="source">Copyright (c) 2011-2012 jQWidgets.<br></td></tr
><tr
id=sl_svn607_4

><td class="source">License: http://jqwidgets.com/license/<br></td></tr
><tr
id=sl_svn607_5

><td class="source">*/<br></td></tr
><tr
id=sl_svn607_6

><td class="source"><br></td></tr
><tr
id=sl_svn607_7

><td class="source">(function(a){a.jqx.jqxWidget(&quot;jqxDateTimeInput&quot;,&quot;&quot;,{});a.extend(a.jqx._jqxDateTimeInput.prototype,{defineInstance:function(){if(this.value==undefined){this.value=a.jqx._jqxDateTimeInput.getDateTime(new Date())}if(this.minDate==undefined){this.minDate=a.jqx._jqxDateTimeInput.getDateTime(new Date());this.minDate._setYear(1900);this.minDate._setMonth(1);this.minDate._setDay(1);this.minDate._setHours(1);this.minDate._setMinutes(1);this.minDate._setSeconds(1);this.minDate._setMilliseconds(1)}if(this.maxDate==undefined){this.maxDate=a.jqx._jqxDateTimeInput.getDateTime(new Date());this.maxDate._setYear(2100);this.maxDate._setMonth(1);this.maxDate._setDay(1);this.maxDate._setHours(1);this.maxDate._setMinutes(1);this.maxDate._setSeconds(1);this.maxDate._setMilliseconds(1)}this.cookies=false;this.cookieoptions=null;if(this.formatString==undefined){this.formatString=&quot;dd/MM/yyyy&quot;}if(this.width==undefined){this.width=null}if(this.height==undefined){this.height=null}if(this.textAlign==undefined){this.textAlign=&quot;left&quot;}if(this.readonly==undefined){this.readonly=false}if(this.culture==undefined){this.culture=&quot;default&quot;}this.activeEditor=this.activeEditor||null;if(this.showCalendarButton==undefined){this.showCalendarButton=true}if(this.showDelay==undefined){this.showDelay=350}if(this.hideDelay==undefined){this.hideDelay=400}if(this.closeCalendarAfterSelection==undefined){this.closeCalendarAfterSelection=true}this.isEditing=false;this.enableBrowserBoundsDetection=false;this.enableAbsoluteSelection=false;this.disabled=false;this.buttonSize=18;this.animationType=&quot;default&quot;;this.dropDownWidth=&quot;200px&quot;;this.dropDownHeight=&quot;200px&quot;;this.events=[&quot;valuechanged&quot;,&quot;textchanged&quot;,&quot;mousedown&quot;,&quot;mouseup&quot;,&quot;keydown&quot;,&quot;keyup&quot;,&quot;keypress&quot;,&quot;show&quot;,&quot;hide&quot;]},createInstance:function(l){this.element.innerHTML=&quot;&quot;;this.host.attr({role:&quot;dateTimeInput&quot;});input=this;this.element.innerHTML=&quot;&quot;;var d=this.createID();var j=this.createID();var b=a(&quot;&lt;div style=&#39;overflow: hidden; border: 0px;&#39;&gt;&lt;div id=&#39;dateTimeWrapper&#39; style=&#39;float: none; position: relative; width: 100%; height: 100%;&#39;&gt;&lt;div id=&#39;dateTimeContent&quot;+d+&quot;&#39; style=&#39;position: relative; overflow: hidden; float: left;&#39;/&gt;&lt;div id=&#39;dateTimeButton&quot;+j+&quot;&#39; style=&#39;position: relative; float: right;&#39;/&gt;&lt;/div&gt;&lt;/div&gt;&quot;);this._setSize();if(this.width==null){this.width=this.host.width();this.host.width(this.width)}this.host.append(b);this.dateTimeWrapper=this.host.find(&quot;#dateTimeWrapper&quot;);this.inputElement=this.host.find(&quot;#dateTimeContent&quot;+d);this.calendarElement=this.host.find(&quot;#dateTimeButton&quot;+j);this.dateTimeInput=a(&quot;&lt;input autocomplete=&#39;off&#39; style=&#39;position: relative; border: none; margin: 0; padding: 0;&#39; id=&#39;inputElement&#39; class=&#39;jqx-input-content&#39; type=&#39;textarea&#39;/&gt;&quot;).appendTo(this.inputElement);this.dateTimeInput.removeClass(this.toThemeProperty(&quot;jqx-input-content&quot;));this.dateTimeInput.addClass(this.toThemeProperty(&quot;jqx-input-content&quot;));this.dateTimeInput.addClass(this.toThemeProperty(&quot;jqx-widget-content&quot;));this.inputElement.addClass(this.toThemeProperty(&quot;jqx-input&quot;));this.inputElement.addClass(this.toThemeProperty(&quot;jqx-widget-content&quot;));this.inputElement.addClass(this.toThemeProperty(&quot;jqx-rc-all&quot;));this.inputElement.height(this.host.height());this.calendarButton=a(&quot;&lt;div style=&#39;padding: 0px; margin: 0px; top: 0; font-size: 3px; position: relative;&#39; class=&#39;jqx-input-button-header&#39;&gt;&lt;div style=&#39;position: relative; font-size: 3px;&#39; class=&#39;jqx-input-button-innerheader&#39;&gt;&lt;/div&gt;&lt;/div&gt;&lt;div style=&#39;padding: 0px; margin: 0px; top: 0; position: relative;&#39; class=&#39;jqx-input-button-content&#39;/&gt;&quot;).appendTo(this.calendarElement);this.calendarButtonContent=this.host.find(&quot;.jqx-input-button-content&quot;);this.calendarButtonHeader=this.host.find(&quot;.jqx-input-button-header&quot;);this.calendarButtonInnerHeader=this.host.find(&quot;.jqx-input-button-innerheader&quot;);this.calendarButtonContent.removeClass(this.toThemeProperty(&quot;jqx-input-button-content&quot;));this.calendarButtonContent.addClass(this.toThemeProperty(&quot;jqx-input-button-content&quot;));this.calendarButtonContent.removeClass(this.toThemeProperty(&quot;jqx-widget-content&quot;));this.calendarButtonContent.addClass(this.toThemeProperty(&quot;jqx-widget-content&quot;));this.calendarButtonHeader.removeClass(this.toThemeProperty(&quot;jqx-input-button-header&quot;));this.calendarButtonHeader.addClass(this.toThemeProperty(&quot;jqx-input-button-header&quot;));this.calendarButtonHeader.removeClass(this.toThemeProperty(&quot;jqx-widget-header&quot;));this.calendarButtonHeader.addClass(this.toThemeProperty(&quot;jqx-widget-header&quot;));this.calendarButtonInnerHeader.removeClass(this.toThemeProperty(&quot;jqx-input-button-innerHeader&quot;));this.calendarButtonInnerHeader.addClass(this.toThemeProperty(&quot;jqx-input-button-innerHeader&quot;));var m=this;this._arrange();this.addHandler(this.host,&quot;loadContent&quot;,function(e){m._arrange()});if(this.showCalendarButton){this.calendarButton.css(&quot;display&quot;,&quot;block&quot;)}else{this.calendarButton.css(&quot;display&quot;,&quot;none&quot;)}if(a.jqx._jqxCalendar!=null&amp;&amp;a.jqx._jqxCalendar!=undefined){try{var h=&quot;calendar&quot;+this.element.id;var g=a(a.find(&quot;#&quot;+h));if(g.length&gt;0){g.remove()}var c=a(&quot;&lt;div style=&#39;overflow: hidden; background: transparent; position: absolute;&#39; id=&#39;calendar&quot;+this.element.id+&quot;&#39;&gt;&lt;div id=&#39;innerCalendar&quot;+this.element.id+&quot;&#39;&gt;&lt;/div&gt;&lt;/div&gt;&quot;);c.appendTo(document.body);this.container=c;this.calendarContainer=a(a.find(&quot;#innerCalendar&quot;+this.element.id)).jqxCalendar({width:this.dropDownWidth,height:this.dropDownHeight,theme:this.theme});this.calendarContainer.css({position:&quot;absolute&quot;,zIndex:100000,top:0,left:0});this.calendar=a.data(this.calendarContainer[0],&quot;jqxCalendar&quot;).instance;this.calendar.render();c.height(parseInt(this.calendarContainer.height())+25);c.width(parseInt(this.calendarContainer.width())+25);if(this.animationType==&quot;none&quot;){this.container.css(&quot;display&quot;,&quot;none&quot;)}else{this.container.hide()}}catch(k){}}if(a.global==null||a.global==undefined){throw&quot;jquery.global.js is not loaded.&quot;}a.global.preferCulture(this.culture);this.selectedText=&quot;&quot;;this._addHandlers();this.self=this;this.oldValue=this.getDate();this.items=new Array();this.editors=new Array();if(this.value==null){this.value=a.jqx._jqxDateTimeInput.getDateTime(new Date())}this.calendarButtonContent.html(&quot;&lt;div style=&#39;line-height: 16px;  color: inherit; background: transparent; margin: 0; border: 0; padding: 0px; text-align: center; vertical-align: middle;&#39;&gt;&lt;b style=&#39;border: 0; padding: 0px; margin: 0px; background: transparent;&#39;&gt;&quot;+this.value.day+&quot;&lt;/b&gt;&lt;/div&gt;&quot;);this._loadItems();this._applyArrayExtension();this.editorText=&quot;&quot;;if(this.readonly==true){this.dateTimeInput.css(&quot;readonly&quot;,this.readonly)}this.dateTimeInput.css(&quot;text-align&quot;,this.textAlign);this.host.addClass(this.toThemeProperty(&quot;jqx-widget&quot;));this.host.addClass(this.toThemeProperty(&quot;jqx-widget-content&quot;));this.propertyChangeMap.disabled=function(e,p,o,q){if(m.disabled){m.host.addClass(m.toThemeProperty(&quot;jqx-input-disabled&quot;));m.dateTimeInput.addClass(m.toThemeProperty(&quot;jqx-input-disabled&quot;))}else{m.host.removeClass(m.toThemeProperty(&quot;jqx-input-disabled&quot;));m.dateTimeInput.removeClass(m.toThemeProperty(&quot;jqx-input-disabled&quot;))}};if(this.disabled){this.host.addClass(this.toThemeProperty(&quot;jqx-input-disabled&quot;));this.dateTimeInput.addClass(this.toThemeProperty(&quot;jqx-input-disabled&quot;))}if(this.host.parents(&quot;form&quot;).length&gt;0){this.host.parents(&quot;form&quot;).bind(&quot;reset&quot;,function(){setTimeout(function(){m.setDate(new Date())},10)})}if(this.cookies){var f=a.jqx.cookie.cookie(&quot;jqxDateTimeInput&quot;+this.element.id);if(f!=null){this.setDate(new Date(f))}}if(a.browser.msie&amp;&amp;a.browser.version&lt;8){if(this.host.parents(&quot;.jqx-window&quot;).length&gt;0){var n=this.host.parents(&quot;.jqx-window&quot;).css(&quot;z-index&quot;);c.css(&quot;z-index&quot;,n+10);this.calendarContainer.css(&quot;z-index&quot;,n+10)}}},_setSize:function(){if(this.width!=null&amp;&amp;this.width.toString().indexOf(&quot;px&quot;)!=-1){this.host.width(this.width)}else{if(this.width!=undefined&amp;&amp;!isNaN(this.width)){this.host.width(this.width)}}if(this.height!=null&amp;&amp;this.height.toString().indexOf(&quot;px&quot;)!=-1){this.host.height(this.height)}else{if(this.height!=undefined&amp;&amp;!isNaN(this.height)){this.host.height(this.height)}}var e=false;if(this.width!=null&amp;&amp;this.width.toString().indexOf(&quot;%&quot;)!=-1){e=true;this.host.width(this.width)}if(this.height!=null&amp;&amp;this.height.toString().indexOf(&quot;%&quot;)!=-1){e=true;this.host.height(this.height)}if(e){var c=this;if(this.calendarContainer){this.refresh(false);var b=this.host.width();if(this.dropDownWidth!=&quot;auto&quot;){b=this.dropDownWidth}this.calendarContainer.jqxCalendar({width:b});this.container.width(parseInt(b)+25)}var d=function(){if(c.calendarContainer){c._arrange();if(c.dropDownWidth==&quot;auto&quot;){var f=c.host.width();c.calendarContainer.jqxCalendar({width:f});c.container.width(parseInt(f)+25)}}};a(window).resize(function(){d()});setInterval(function(){var g=c.host.width();var f=c.host.height();if(c._lastWidth!=g||c._lastHeight!=f){d()}c._lastWidth=g;c._lastHeight=f},100)}},_arrange:function(){var c=parseInt(this.host.width());var k=parseInt(this.host.height());var h=this.buttonSize;var e=3;this.calendarButtonHeader.width(h);this.calendarButtonContent.height(h-e);this.calendarButtonContent.width(h);var g=parseInt(this.inputElement.outerHeight())-parseInt(this.inputElement.height());g=0;var b=c-parseInt(this.calendarButton.outerWidth())-1*e;if(b&gt;0){this.inputElement.width(b+&quot;px&quot;)}this.dateTimeInput.width(b-e+&quot;px&quot;);this.dateTimeInput.css(&quot;left&quot;,0);this.dateTimeInput.css(&quot;top&quot;,0);this.inputElement.css(&quot;left&quot;,0);this.inputElement.css(&quot;top&quot;,0);var j=parseInt(this.calendarButtonHeader.outerWidth())/2-parseInt(this.calendarButtonInnerHeader.outerWidth())/2;this.calendarButtonInnerHeader.css(&quot;left&quot;,j);var l=parseInt(this.calendarButtonContent.outerHeight())+parseInt(this.calendarButtonHeader.outerHeight());var f=parseInt(this.inputElement.outerHeight())/2-l/2;this.calendarElement.css(&quot;top&quot;,parseInt(f)+&quot;px&quot;);var d=parseInt(this.inputElement.height())/2-parseInt(this.dateTimeInput.outerHeight())/2;this.dateTimeInput.css(&quot;margin&quot;,&quot;0px&quot;);this.dateTimeInput.css(&quot;padding&quot;,&quot;0px&quot;);this.dateTimeInput.css(&quot;top&quot;,parseInt(d))},_removeHandlers:function(){var b=this;this.removeHandler(a(document),&quot;mousedown.&quot;+this.element.id);this.removeHandler(this.dateTimeInput,&quot;keydown.&quot;+this.element.id);this.removeHandler(this.dateTimeInput,&quot;blur&quot;);this.removeHandler(this.dateTimeInput,&quot;focus&quot;);this.removeHandler(this.calendarButton,&quot;mousedown&quot;);this.removeHandler(this.dateTimeInput,&quot;mousedown&quot;);this.removeHandler(this.dateTimeInput,&quot;mouseup&quot;);this.removeHandler(this.dateTimeInput,&quot;keydown&quot;);this.removeHandler(this.dateTimeInput,&quot;keyup&quot;);this.removeHandler(this.dateTimeInput,&quot;keypress&quot;);if(this.calendarContainer!=null){this.removeHandler(this.calendarContainer,&quot;cellSelected&quot;);this.removeHandler(this.calendarContainer,&quot;cellMouseDown&quot;)}},isOpened:function(){var c=this;var b=a.data(document.body,&quot;openedJQXCalendar&quot;);if(b!=null&amp;&amp;b==c.calendarContainer){return true}return false},wheel:function(d,c){var e=0;if(!d){d=window.event}if(d.originalEvent&amp;&amp;d.originalEvent.wheelDelta){d.wheelDelta=d.originalEvent.wheelDelta}if(d.wheelDelta){e=d.wheelDelta/120}else{if(d.detail){e=-d.detail/3}}if(e){var b=c._handleDelta(e);if(!b){if(d.preventDefault){d.preventDefault()}d.returnValue=false;return b}else{return false}}if(d.preventDefault){d.preventDefault()}d.returnValue=false},_handleDelta:function(b){if(b&lt;0){this.spinDown()}else{this.spinUp()}return false},_addHandlers:function(){var e=this.element.id;var c=this.element;var d=this;this.addHandler(this.host,&quot;mousewheel&quot;,function(f){d.wheel(f,d)});this.addHandler(a(document),&quot;mousedown.&quot;+this.element.id,this._closeOpenedCalendar);if(window.frameElement){if(window.top!=null){var b=function(f){if(d.container.css(&quot;display&quot;)!=&quot;none&quot;){}};if(window.top.document.addEventListener){window.top.document.addEventListener(&quot;mousedown&quot;,b,false)}else{if(window.top.document.attachEvent){window.top.document.attachEvent(&quot;onmousedown&quot;,b)}}}}this.addHandler(this.dateTimeInput,&quot;keydown.&quot;+this.element.id,function(h){var g=a.data(document.body,&quot;openedJQXCalendar&quot;);if(g!=null&amp;&amp;g==d.calendarContainer){var f=d.handleCalendarKey(h);return f}});if(this.calendarContainer!=null){this.addHandler(this.calendarContainer,&quot;keydown&quot;,function(f){if(f.keyCode==13){d.hideCalendar(&quot;selected&quot;);d.dateTimeInput.focus();return true}else{if(f.keyCode==27){d.hideCalendar();d.dateTimeInput.focus();return true}}if(f.keyCode==115){if(d.isOpened()){d.hideCalendar();d.dateTimeInput.focus();return false}else{if(!d.isOpened()){d.showCalendar();d.dateTimeInput.focus();return false}}}if(f.altKey){if(f.keyCode==38){if(d.isOpened()){d.hideCalendar();d.dateTimeInput.focus();return false}}else{if(f.keyCode==40){if(!d.isOpened()){d.showCalendar();d.dateTimeInput.focus();return false}}}}});this.addHandler(this.calendarContainer,&quot;cellSelected&quot;,function(g){if(d.closeCalendarAfterSelection){var f=a.data(document.body,&quot;openedJQXCalendarValue&quot;);if(g.args.selectionType==&quot;mouse&quot;){d.hideCalendar(&quot;selected&quot;)}}});this.addHandler(this.calendarContainer,&quot;cellMouseDown&quot;,function(f){if(d.closeCalendarAfterSelection){a.data(document.body,&quot;openedJQXCalendarValue&quot;,new a.jqx._jqxDateTimeInput.getDateTime(d.calendar.value.dateTime))}})}this.addHandler(this.dateTimeInput,&quot;blur&quot;,function(){if(d.value!=null){d.isEditing=false;d._validateValue();d._updateText();d.inputElement.removeClass(d.toThemeProperty(&quot;jqx-fill-state-focus&quot;))}});this.addHandler(this.dateTimeInput,&quot;focus&quot;,function(){if(d.value!=null){var f=d._selection();d.isEditing=true;d._validateValue();d._updateText();d._setSelectionStart(f.start);d._selectGroup(-1);d.inputElement.addClass(d.toThemeProperty(&quot;jqx-fill-state-focus&quot;))}});this.addHandler(this.calendarButton,&quot;mousedown&quot;,function(g){var h=d.container;var f=h.css(&quot;display&quot;)==&quot;block&quot;;if(!d.disabled){if(f){d.hideCalendar()}else{d.showCalendar()}return false}});this.addHandler(this.dateTimeInput,&quot;mousedown&quot;,function(f){return d._raiseEvent(2,f)});this.addHandler(this.dateTimeInput,&quot;mouseup&quot;,function(f){return d._raiseEvent(3,f)});this.addHandler(this.dateTimeInput,&quot;keydown&quot;,function(f){return d._raiseEvent(4,f)});this.addHandler(this.dateTimeInput,&quot;keyup&quot;,function(f){return d._raiseEvent(5,f)});this.addHandler(this.dateTimeInput,&quot;keypress&quot;,function(f){return d._raiseEvent(6,f)})},createID:function(){var b=Math.random()+&quot;&quot;;b=b.replace(&quot;.&quot;,&quot;&quot;);b=&quot;99&quot;+b;b=b/1;return&quot;dateTimeInput&quot;+b},setMaxDate:function(b){if(b==null){return}this.maxDate=a.jqx._jqxDateTimeInput.getDateTime(b);if(this.calendar!=null){this.calendar.setMaxDate(b)}},getMaxDate:function(){if(this.maxDate!=null&amp;&amp;this.maxDate!=undefined){return this.maxDate.dateTime}return null},setMinDate:function(b){if(b==null){return}this.minDate=a.jqx._jqxDateTimeInput.getDateTime(b);if(this.calendar!=null){this.calendar.setMinDate(b)}},getMinDate:function(){if(this.minDate!=null&amp;&amp;this.minDate!=undefined){return this.minDate.dateTime}return null},propertyChangedHandler:function(b,c,e,d){if(this.isInitialized==undefined||this.isInitialized==false){return}if(c==&quot;culture&quot;){this._loadItems();if(this.calendar!=null){this.calendar.culture=d;this.calendar.render()}}else{if(c==&quot;formatString&quot;){this._loadItems()}}if(c==&quot;theme&quot;){if(this.dateTimeInput){this.host.removeClass();this.host.addClass(this.toThemeProperty(&quot;jqx-widget&quot;));this.dateTimeInput.removeClass();this.dateTimeInput.addClass(this.toThemeProperty(&quot;jqx-input-content&quot;));this.dateTimeInput.addClass(this.toThemeProperty(&quot;jqx-widget-content&quot;));this.inputElement.removeClass();this.inputElement.addClass(this.toThemeProperty(&quot;jqx-input&quot;));this.inputElement.addClass(this.toThemeProperty(&quot;jqx-widget-content&quot;));this.inputElement.addClass(this.toThemeProperty(&quot;jqx-rc-all&quot;));this.calendarButtonContent.removeClass();this.calendarButtonContent.addClass(this.toThemeProperty(&quot;jqx-input-button-content&quot;));this.calendarButtonContent.addClass(this.toThemeProperty(&quot;jqx-widget-content&quot;));this.calendarButtonHeader.removeClass();this.calendarButtonHeader.addClass(this.toThemeProperty(&quot;jqx-input-button-header&quot;));this.calendarButtonHeader.addClass(this.toThemeProperty(&quot;jqx-widget-header&quot;));this.calendarButtonInnerHeader.removeClass();this.calendarButtonInnerHeader.addClass(this.toThemeProperty(&quot;jqx-input-button-innerHeader&quot;));this.calendarContainer.jqxCalendar({theme:d})}}if(c==&quot;width&quot;||c==&quot;height&quot;){if(this.width!=null&amp;&amp;this.width.toString().indexOf(&quot;px&quot;)!=-1){this.host.width(this.width)}else{if(this.width!=undefined&amp;&amp;!isNaN(this.width)){this.host.width(this.width)}}if(this.height!=null&amp;&amp;this.height.toString().indexOf(&quot;px&quot;)!=-1){this.host.height(this.height)}else{if(this.height!=undefined&amp;&amp;!isNaN(this.height)){this.host.height(this.height)}}this._arrange()}this._setOption(c,d);if(c==&quot;dropDownWidth&quot;||c==&quot;dropDownHeight&quot;){this.calendarContainer.jqxCalendar({width:this.dropDownWidth,height:this.dropDownHeight});this.calendar.render();this.container.height(this.calendarContainer.height());this.container.width(this.calendarContainer.width())}},setDate:function(b){if(b==null||b==&quot;null&quot;||b==&quot;undefined&quot;){this.value=null;this._refreshValue();return}if(b&lt;this.getMinDate()||b&gt;this.getMaxDate()){return}if(this.value==null){this.value=new a.jqx._jqxDateTimeInput.getDateTime(new Date());this.value._setHours(0);this.value._setMinutes(0);this.value._setSeconds(0);this.value._setMilliseconds(0)}this.value._setYear(b.getFullYear());this.value._setDay(b.getDate());this.value._setMonth(b.getMonth()+1);this.value._setHours(b.getHours());this.value._setMinutes(b.getMinutes());this.value._setSeconds(b.getSeconds());this.value._setMilliseconds(b.getMilliseconds());this._refreshValue();if(this.cookies){if(this.value!=null){a.jqx.cookie.cookie(&quot;jqxDateTimeInput&quot;+this.element.id,this.value.dateTime.toString(),this.cookieoptions)}}this._raiseEvent(&quot;0&quot;,b)},getDate:function(){if(this.value==undefined){return new Date()}return this.value.dateTime},_validateValue:function(){var b=false;for(i=0;i&lt;this.items.length;i++){var c=this.editors[i].value;switch(this.items[i].type){case&quot;FORMAT_AMPM&quot;:if(c&lt;0){c=0}else{if(c&gt;1){c=1}}break;case&quot;Character&quot;:break;case&quot;Day&quot;:if(c&lt;1){c=1}else{if(c&gt;31){c=31}}break;case&quot;FORMAT_hh&quot;:case&quot;FORMAT_HH&quot;:if(c&lt;0){c=0}else{if(c&gt;23){c=23}}break;case&quot;Millisecond&quot;:if(c&lt;0){c=0}else{if(c&gt;99){c=99}}break;case&quot;Minute&quot;:if(c&lt;0){c=0}else{if(c&gt;59){c=59}}break;case&quot;Month&quot;:if(c&lt;1){c=1}else{if(c&gt;12){c=12}}break;case&quot;ReadOnly&quot;:break;case&quot;Second&quot;:if(c&lt;0){c=0}else{if(c&gt;59){c=59}}break;case&quot;Year&quot;:if(c&lt;this.minDate.year){c=this.minDate.year}else{if(c&gt;this.maxDate.year){c=this.maxDate.year}}break}if(this.editors[i].value!=c){this.editors[i].value=c;b=true}}this.updateValue();if(this.value!=null){if(this.value.dateTime&gt;this.maxDate.dateTime){this._internalSetValue(this.maxDate);this._updateEditorsValue()}else{if(this.value.dateTime&lt;this.minDate.dateTime){this._internalSetValue(this.minDate);this._updateEditorsValue()}}}},spinUp:function(){var d=this.value;if(d==null){return}if(this.activeEditor!=null){var b=this.editors.indexOf(this.activeEditor);if(this.items[b].type==&quot;Day&quot;){if(this.value!=null){this.activeEditor.maxValue=this.value._daysInMonth(this.value.year,this.value.month)}}var c=this.activeEditor.positions;this.activeEditor.increaseValue(this.enableAbsoluteSelection);this.activeEditor.positions=c}if(this.isEditing){this.isEditing=false}this.updateValue();this.isEditing=true;this._updateText();var e=this.editors.indexOf(this.activeEditor);if(e&gt;=0){this._selectGroup(e)}},spinDown:function(){var d=this.value;if(d==null){return}if(this.activeEditor!=null){var b=this.editors.indexOf(this.activeEditor);if(this.items[b].type==&quot;Day&quot;){if(this.value!=null){this.activeEditor.maxValue=this.value._daysInMonth(this.value.year,this.value.month)}}var c=this.activeEditor.positions;this.activeEditor.decreaseValue(this.enableAbsoluteSelection);this.activeEditor.positions=c}if(this.isEditing){this.isEditing=false}this.updateValue();this.isEditing=true;this._updateText();var e=this.editors.indexOf(this.activeEditor);if(e&gt;=0){this._selectGroup(e)}},_passKeyToCalendar:function(c){if(c.keyCode==13){this.hideCalendar(&quot;selected&quot;);return true}else{if(c.keyCode==27){var e=this.calendarContainer;var d=this.calendar;var f=this.closeCalendarAfterSelection;this.closeCalendarAfterSelection=false;d.setDate(this.value.dateTime);d.selectDate(this.value.dateTime);this.closeCalendarAfterSelection=f;this.hideCalendar()}}var f=this.closeCalendarAfterSelection;this.closeCalendarAfterSelection=false;var b=this.calendar._handleKey(c);this.closeCalendarAfterSelection=f;return b},handleCalendarKey:function(j){var c=a(j.target);var e=a.data(document.body,&quot;openedJQXCalendar&quot;);if(e!=null){if(e.length&gt;0){var h=e[0].id.toString();var d=h.toString().substring(13);var g=a(document).find(&quot;#&quot;+d);var f=a.data(g[0],&quot;jqxDateTimeInput&quot;).instance;var b=f._passKeyToCalendar(j);return b}}return true},_findPos:function(c){if(c==null){return}while(c&amp;&amp;(c.type==&quot;hidden&quot;||c.nodeType!=1||a.expr.filters.hidden(c))){c=c.nextSibling}var b=a(c).offset();return[b.left,b.top]},testOffset:function(d,h,f){var g=d.outerWidth();var c=d.outerHeight();var e=document.documentElement.clientWidth+a(window).scrollLeft();var b=document.documentElement.clientHeight+a(window).scrollTop();h.left-=0;h.left-=0;h.top-=0;h.left-=Math.min(h.left,(h.left+g&gt;e&amp;&amp;e&gt;g)?Math.abs(h.left+g-e):0);h.top-=Math.min(h.top,(h.top+c&gt;b&amp;&amp;b&gt;c)?Math.abs(c+f):0);return h},show:function(){this.showCalendar()},hide:function(b){this.hideCalendar()},showCalendar:function(){var f=this.calendarContainer;var j=this.calendar;var b=this.container;var l=a(window).scrollTop();var e=a(window).scrollLeft();var k=parseInt(this._findPos(this.inputElement[0])[1])+parseInt(this.inputElement.outerHeight())-1+&quot;px&quot;;var d=parseInt(this.host.offset().left)+&quot;px&quot;;var o=a.jqx.mobile.isSafariMobileBrowser();if(o!=null&amp;&amp;o){d=a.jqx.mobile.getLeftPos(this.element);k=a.jqx.mobile.getTopPos(this.element)+parseInt(this.inputElement.outerHeight())}this.container.css(&quot;left&quot;,d);this.container.css(&quot;top&quot;,k);var c=this.closeCalendarAfterSelection;this.closeCalendarAfterSelection=false;this.isEditing=false;this._validateValue();this._updateText();var m=this.value!=null?this.value.dateTime:new Date();j.setDate(m);j.selectDate(m);this.closeCalendarAfterSelection=c;if(this.enableBrowserBoundsDetection){var g=this.testOffset(f,{left:parseInt(this.container.css(&quot;left&quot;)),top:parseInt(k)},parseInt(this.inputElement.outerHeight()));this.container.css(&quot;top&quot;,g.top)}this._raiseEvent(7,f);if(this.animationType==&quot;default&quot;){a.data(document.body,&quot;openedJQXCalendar&quot;,f);this.container.css(&quot;display&quot;,&quot;block&quot;);var n=f.outerHeight();f.css(&quot;margin-top&quot;,-n);var h=this;f.animate({&quot;margin-top&quot;:0},this.showDelay,function(){var p=a(window).scrollTop();var t=a(window).scrollLeft();var s=parseInt(h._findPos(h.inputElement[0])[1])+parseInt(h.inputElement.outerHeight())-1+&quot;px&quot;;var r=parseInt(h.host.offset().left)+&quot;px&quot;;var q=a.jqx.mobile.isSafariMobileBrowser();if(q!=null&amp;&amp;q){r=a.jqx.mobile.getLeftPos(h.element);s=a.jqx.mobile.getTopPos(h.element)+parseInt(h.inputElement.outerHeight())}if(parseInt(h.container.css(&quot;top&quot;))!=parseInt(s)){h.container.css(&quot;top&quot;,s)}})}else{this.container.css(&quot;display&quot;,&quot;block&quot;);a.data(document.body,&quot;openedJQXCalendar&quot;,f)}this.calendarContainer.focus()},hideCalendar:function(e){var d=this.calendarContainer;var c=this.container;a.data(document.body,&quot;openedJQXCalendar&quot;,null);if(this.animationType==&quot;default&quot;){var b=d.outerHeight();d.css(&quot;margin-top&quot;,0);d.animate({&quot;margin-top&quot;:-b},this.hideDelay,function(){c.css(&quot;display&quot;,&quot;none&quot;)})}else{c.css(&quot;display&quot;,&quot;none&quot;)}if(e!=undefined){this._updateSelectedDate()}this._raiseEvent(8,d)},_updateSelectedDate:function(){var f=this.value;if(f==null){f=new a.jqx._jqxDateTimeInput.getDateTime(new Date());f._setHours(0);f._setMinutes(0);f._setSeconds(0);f._setMilliseconds(0)}var b=f.hour;var g=f.minute;var e=f.second;var c=f.millisecond;var d=new a.jqx._jqxDateTimeInput.getDateTime(this.calendar.value.dateTime);d._setHours(b);d._setMinutes(g);d._setSeconds(e);d._setMilliseconds(c);this.setDate(d.dateTime)},_closeOpenedCalendar:function(j){var b=a(j.target);var d=a.data(document.body,&quot;openedJQXCalendar&quot;);var h=false;a.each(b.parents(),function(){if(this.className.indexOf(&quot;jqx-calendar&quot;)!=-1){h=true;return false}if(this.className.indexOf(&quot;jqx-input&quot;)!=-1){h=true;return false}});if(d!=null&amp;&amp;!h){if(d.length&gt;0){var g=d[0].id.toString();var c=g.toString().substring(13);var f=a(document).find(&quot;#&quot;+c);var e=a.data(f[0],&quot;jqxDateTimeInput&quot;).instance;e.hideCalendar();a.data(document.body,&quot;openedJQXCalendar&quot;,null)}}},_applyArrayExtension:function(){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c){var b=this.length;var d=Number(arguments[1])||0;d=(d&lt;0)?Math.ceil(d):Math.floor(d);if(d&lt;0){d+=b}for(;d&lt;b;d++){if(d in this&amp;&amp;this[d]===c){return d}}return -1}}},_loadItems:function(){if(this.value!=null){this.items=new Array();var c=this._getFormatValue(this.formatString);this.items=this._parseFormatValue(c);this.editors=new Array();for(i=0;i&lt;this.items.length;i++){var b=this.items[i].getDateTimeEditorByItemType(this.value);this.editors[i]=b}}this._updateEditorsValue();this._updateText()},_updateText:function(){var c=&quot;&quot;;if(this.value!=null){if(this.items.length&gt;=1){c=this.format(this.value,0,this.items.length)}var b=this.dateTimeInput.val();if(b!=c){this._raiseEvent(1,this.value)}}this.dateTimeInput.val(c)},format:function(f,g,e){var b=&quot;&quot;;for(i=g;i&lt;e;++i){var c=this.items[i].dateParser(f);if(this.isEditing&amp;&amp;this.items[i].type!=&quot;ReadOnly&quot;){var d=this.items[i].type==&quot;Day&quot;&amp;&amp;this.items[i].format.length&gt;2;if(this.items[i].type==&quot;FORMAT_AMPM&quot;){d=true}if(!d){c=this.items[i].dateParserInEditMode(new Number(this.editors[i].value),&quot;d&quot;+this.editors[i].maxEditPositions);while(c.length&lt;this.editors[i].maxEditPositions){c=&quot;0&quot;+c}}}b+=c}return b},_getFormatValueGroupLength:function(b){for(i=1;i&lt;b.toString().length;++i){if(b.substring(i,i+1)!=b.substring(0,1)){return i}}return b.length},_parseFormatValue:function(h){var c=new Array();var f=h.toString();var e=0;while(f.length&gt;0){var d=this._getFormatValueGroupLength(f);var g=null;switch(f.substring(0,1)){case&quot;:&quot;:case&quot;/&quot;:d=1;g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,1),&quot;ReadOnly&quot;,this.culture);break;case&#39;&quot;&#39;:case&quot;&#39;&quot;:var b=f.indexOf(f[0],1);g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(1,1+Math.max(1,b-1)),&quot;ReadOnly&quot;,this.culture);d=Math.max(1,b+1);break;case&quot;\\&quot;:if(f.length&gt;=2){g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(1,1),&quot;ReadOnly&quot;,this.culture);d=2}break;case&quot;d&quot;:case&quot;D&quot;:if(d&gt;2){g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,d),&quot;Day&quot;,this.culture)}else{g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,d),&quot;Day&quot;,this.culture)}break;case&quot;f&quot;:case&quot;F&quot;:if(d&gt;7){d=7}if(d&gt;3){g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,d),&quot;ReadOnly&quot;,this.culture)}else{g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,d),&quot;Millisecond&quot;,this.culture)}break;case&quot;g&quot;:g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,d),&quot;ReadOnly&quot;,this.culture);break;case&quot;h&quot;:g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,d),&quot;FORMAT_hh&quot;,this.culture);break;case&quot;H&quot;:g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,d),&quot;FORMAT_HH&quot;,this.culture);break;case&quot;m&quot;:g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,d),&quot;Minute&quot;,this.culture);break;case&quot;M&quot;:if(d&gt;4){d=4}g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,d),&quot;Month&quot;,this.culture);break;case&quot;s&quot;:case&quot;S&quot;:g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,d),&quot;Second&quot;,this.culture);break;case&quot;t&quot;:case&quot;T&quot;:g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,d),&quot;FORMAT_AMPM&quot;,this.culture);break;case&quot;y&quot;:case&quot;Y&quot;:if(d&gt;1){g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,d),&quot;Year&quot;,this.culture)}else{d=1;g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,1),dateTimeFormatInfo,&quot;ReadOnly&quot;,this.culture)}break;case&quot;z&quot;:g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,d),&quot;ReadOnly&quot;,this.culture);break;default:d=1;g=a.jqx._jqxDateTimeInput.DateTimeFormatItem._create(f.substring(0,1),&quot;ReadOnly&quot;,this.culture);break}c[e]=a.extend(true,{},g);f=f.substring(d);e++}return c},_getFormatValue:function(b){if(b==null||b.length==0){b=&quot;d&quot;}if(b.length==1){switch(b.substring(0,1)){case&quot;d&quot;:return a.global.culture.calendar.patterns.d;case&quot;D&quot;:return a.global.culture.calendar.patterns.D;case&quot;t&quot;:return a.global.culture.calendar.patterns.t;case&quot;T&quot;:return a.global.culture.calendar.patterns.T;case&quot;f&quot;:return a.global.culture.calendar.patterns.f;case&quot;F&quot;:return a.global.culture.calendar.patterns.F;case&quot;M&quot;:return a.global.culture.calendar.patterns.M;case&quot;Y&quot;:return a.global.culture.calendar.patterns.Y;case&quot;S&quot;:return a.global.culture.calendar.patterns.S}}if(b.length==2&amp;&amp;b.substring(0,1)==&quot;%&quot;){b=b.substring(1)}return b},_updateEditorsValue:function(){var g=this.value;if(g==null){return}var e=g.year;var c=g.day;var b=g.hour;var f=g.millisecond;var d=g.second;var j=g.minute;var h=g.month;if(this.items==null){return}for(i=0;i&lt;this.items.length;i++){switch(this.items[i].type){case&quot;FORMAT_AMPM&quot;:this.editors[i].value=0;break;case&quot;Day&quot;:this.editors[i].value=c;break;case&quot;FORMAT_hh&quot;:this.editors[i].value=b;break;case&quot;FORMAT_HH&quot;:this.editors[i].value=b;break;case&quot;Millisecond&quot;:this.editors[i].value=f;break;case&quot;Minute&quot;:this.editors[i].value=j;break;case&quot;Month&quot;:this.editors[i].value=h;break;case&quot;Second&quot;:this.editors[i].value=d;break;case&quot;Year&quot;:this.editors[i].value=e;break}}},updateValue:function(){if(this.isEditing){return}var j=0;var n=1;var u=1;var g=0;var b=0;var B=0;var p=0;var A=1;var e=0;var h=false;var m=false;var v=false;var o=new Array();var c=null;var s=0;for(i=0;i&lt;this.items.length;i++){switch(this.items[i].type){case&quot;FORMAT_AMPM&quot;:e=this.editors[i].value;c=this.editors[i];break;case&quot;Character&quot;:break;case&quot;Day&quot;:if(this.items[i].format.length&lt;4){u=this.editors[i].value;o[s++]=this.editors[i];if(u==0){u=1}v=true}break;case&quot;FORMAT_hh&quot;:var x=this.editors[i];g=x.value;break;case&quot;FORMAT_HH&quot;:g=this.editors[i].value;break;case&quot;Millisecond&quot;:b=this.editors[i].value;break;case&quot;Minute&quot;:p=this.editors[i].value;break;case&quot;Month&quot;:A=this.editors[i].value;m=true;if(A==0){A=1}break;case&quot;ReadOnly&quot;:break;case&quot;Second&quot;:B=this.editors[i].value;break;case&quot;Year&quot;:h=true;n=this.editors[i].value;var z=this.editors[i].getDateTimeItem().format;if(z.length&lt;3){var r=&quot;1900&quot;;if(r.Length==4){var q=&quot;&quot;+r[0]+r[1];var w;w=parseInt(q);n=n+(w*100)}}if(n==0){n=1}break}}var y=this.value!=null?new Date(this.value.dateTime):null;if(n&gt;0&amp;&amp;A&gt;0&amp;&amp;u&gt;0&amp;&amp;p&gt;=0&amp;&amp;g&gt;=0&amp;&amp;B&gt;=0&amp;&amp;b&gt;=0){var C=this.value;if(!h){n=C.year}if(!m){A=C.month}if(!v){u=C.day}try{if(A&gt;12){A=12}if(A&lt;1){A=1}if(C._daysInMonth(n,A)&lt;=u){u=C._daysInMonth(n,A);if(o!=null&amp;&amp;o.length&gt;0){for(i=0;i&lt;o.length;i++){o[i].value=u}}}if(c!=null){c.value=g&lt;12?0:1}this.value._setYear(parseInt(n));this.value._setDay(u);this.value._setMonth(A);this.value._setHours(g);this.value._setMinutes(p);this.value._setSeconds(B);this.value._setMilliseconds(b)}catch(f){this.value=C}if(y!=null){var t=this.value.dateTime.getFullYear()==y.getFullYear()&amp;&amp;this.value.dateTime.getDate()==y.getDate()&amp;&amp;this.value.dateTime.getMonth()==y.getMonth()&amp;&amp;this.value.dateTime.getHours()==y.getHours()&amp;&amp;this.value.dateTime.getMinutes()==y.getMinutes()&amp;&amp;this.value.dateTime.getSeconds()==y.getSeconds();if(!t){this._raiseEvent(&quot;0&quot;,this.value.dateTime);if(this.cookies){if(this.value!=null){a.jqx.cookie.cookie(&quot;jqxDateTimeInput&quot;+this.element.id,this.value.dateTime.toString(),this.cookieoptions)}}}this.calendarButtonContent.html(&quot;&lt;div style=&#39;line-height: 16px; background: transparent; margin: 0; border: 0; padding: 0px; text-align: center; vertical-align: middle;&#39;&gt;&lt;b style=&#39;border: 0; padding: 0px; margin: 0px; background: transparent;&#39;&gt;&quot;+this.value.day+&quot;&lt;/b&gt;&lt;/div&gt;&quot;)}else{this.calendarButtonContent.html(&quot;&lt;div style=&#39;line-height: 16px; background: transparent; margin: 0; border: 0; padding: 0px; text-align: center; vertical-align: middle;&#39;&gt;&lt;b style=&#39;border: 0; padding: 0px; margin: 0px; background: transparent;&#39;&gt;&lt;/b&gt;&lt;/div&gt;&quot;)}}var d=this.editors.indexOf(this.activeEditor);var l=this.items[d]},_internalSetValue:function(b){this.value._setYear(parseInt(b.year));this.value._setDay(b.day);this.value._setMonth(b.month);this.value._setHours(b.hour);this.value._setMinutes(b.minute);this.value._setSeconds(b.second);this.value._setMilliseconds(b.milisecond)},_raiseEvent:function(c,j){var h=this.events[c];var d={};d.owner=this;if(j==null){j=new Date()}var g=j.charCode?j.charCode:j.keyCode?j.keyCode:0;var k=true;var f=this.readonly;var b=new jQuery.Event(h);b.owner=this;b.args=d;b.args.date=this.getDate();if(this.host.css(&quot;display&quot;)==&quot;none&quot;){return true}if(c!=2&amp;&amp;c!=3){k=this.host.trigger(b)}var e=this;if(!f){if(c==2&amp;&amp;!this.disabled){setTimeout(function(){e.isEditing=true;e._selectGroup(-1)},25)}}if(c==4){if(f||this.disabled){return false}k=this._handleKeyDown(j,g)}else{if(c==5){if(f||this.disabled){return false}}else{if(c==6){if(f||this.disabled){return false}k=this._handleKeyPress(j,g)}}}return k},_doLeftKey:function(){if(this.activeEditor!=null){if(!this.isEditing){this.isEditing=true}var b=this.activeEditor;var d=false;var e=this.editors.indexOf(this.activeEditor);var c=e;if(this.enableAbsoluteSelection){if(e&gt;=0&amp;&amp;this.activeEditor.positions&gt;0){this.activeEditor.positions--;this._selectGroup(e);return}}while(e&gt;0){this.activeEditor=this.editors[--e];this._selectGroup(e);if(this.items[e].type!=&quot;ReadOnly&quot;){d=true;break}}if(!d){if(c&gt;=0){this.activeEditor=this.editors[c]}}if(this.activeEditor!=null&amp;&amp;b!=this.activeEditor){if(this.items[e].type!=&quot;ReadOnly&quot;){if(this.enableAbsoluteSelection){this.activeEditor.positions=this.activeEditor.maxEditPositions-1}else{this.activeEditor.positions=0}}}if(this.activeEditor!=b){this._validateValue();this._updateText();this._selectGroup(this.editors.indexOf(this.activeEditor))}}},_doRightKey:function(){if(this.activeEditor!=null){if(!this.isEditing){this.isEditing=true}var b=this.activeEditor;var d=false;var e=this.editors.indexOf(this.activeEditor);var c=e;if(this.enableAbsoluteSelection){if(e&gt;=0&amp;&amp;this.activeEditor.positions&lt;this.activeEditor.maxEditPositions-1){this.activeEditor.positions++;this._selectGroup(e);return}}while(e&lt;=this.editors.length-2){this.activeEditor=this.editors[++e];this._selectGroup(e);if(this.items[e].type!=&quot;ReadOnly&quot;){if(this.items[e].type==&quot;Day&quot;&amp;&amp;this.items[e].format.length&gt;2){break}if(this.items[e].type==&quot;FORMAT_AMPM&quot;){break}d=true;break}}if(!d){if(c&gt;=0){this.activeEditor=this.editors[c]}}if(this.activeEditor!=null&amp;&amp;this.activeEditor!=b){if(this.items[e].type!=&quot;ReadOnly&quot;){this.activeEditor.positions=0}}if(this.activeEditor!=b){this._validateValue();this._updateText();this._selectGroup(this.editors.indexOf(this.activeEditor))}}},_saveSelectedText:function(){var b=this._selection();var d=&quot;&quot;;var c=this.dateTimeInput.val();if(b.start&gt;0||b.length&gt;0){for(i=b.start;i&lt;b.end;i++){d+=c[i]}}window.clipboardData.setData(&quot;Text&quot;,d);return d},_selectWithAdvancePattern:function(){var f=this.editors.indexOf(this.activeEditor);var g=false;if(this.items[f].type!=&quot;ReadOnly&quot;&amp;&amp;this.items[f].type!=&quot;Format_AMPM&quot;){g=true}if(!g){return}var d=this.activeEditor;if(d!=null){var e=d.positions==d.maxEditPositions;if(e){this.editorText=&quot;&quot;;var c=d.value;var b=false;switch(this.items[f].type){case&quot;FORMAT_AMPM&quot;:if(c&lt;0){c=0}else{if(c&gt;1){c=1}}break;case&quot;Character&quot;:break;case&quot;Day&quot;:if(c&lt;1){c=1}else{if(c&gt;31){c=31}}break;case&quot;FORMAT_hh&quot;:case&quot;FORMAT_HH&quot;:if(c&lt;0){c=0}else{if(c&gt;23){c=23}}break;case&quot;Millisecond&quot;:if(c&lt;0){c=0}else{if(c&gt;99){c=99}}break;case&quot;Minute&quot;:if(c&lt;0){c=0}else{if(c&gt;59){c=59}}break;case&quot;Month&quot;:if(c&lt;1){c=1}else{if(c&gt;12){c=12}}break;case&quot;ReadOnly&quot;:break;case&quot;Second&quot;:if(c&lt;0){c=0}else{if(c&gt;59){c=59}}break;case&quot;Year&quot;:if(c&lt;this.minDate.year){c=this.minDate.year}else{if(c&gt;this.maxDate.year){c=this.maxDate.year}}break}if(d.value!=c){b=true}if(!b){this.isEditing=false;this._validateValue();this._updateText();this.isEditing=true;this._doRightKey();return true}return false}}},_handleKeyPress:function(j,n){var m=this._selection();var b=this;if((j.ctrlKey&amp;&amp;n==97)||(j.ctrlKey&amp;&amp;n==65)){return true}if(n==8){if(m.start&gt;0){b._setSelectionStart(m.start)}return false}if(n==46){if(m.start&lt;this.items.length){b._setSelectionStart(m.start)}return false}if(m.start&gt;=0){var d=String.fromCharCode(n);var k=parseInt(d);if(!isNaN(k)){if(this.container.css(&quot;display&quot;)==&quot;block&quot;){this.hideCalendar()}this.updateValue();this._updateText();var g=false;var h=this.editors.indexOf(this.activeEditor);var c=null;this.isEditing=true;if(h.type!=&quot;ReadOnly&quot;&amp;&amp;h.type!=&quot;FORMAT_AMPM&quot;){c=this.activeEditor}if(c!=null&amp;&amp;c.positions==0){this.editorText=&quot;&quot;}if(this.activeEditor==null){this.activeEditor=this.editors[0]}this.activeEditor.insert(d);if(c!=null&amp;&amp;this.editorText.length&gt;=c.maxEditPositions){this.editorText=&quot;&quot;}this.editorText+=d;var o=this._selectWithAdvancePattern();if(this.activeEditor.positions==this.activeEditor.maxEditPositions){var f=this._getLastEditableEditorIndex();if(this.editors.indexOf(this.activeEditor)==f&amp;&amp;o&amp;&amp;this.enableAbsoluteSelection){this.activeEditor.positions=this.activeEditor.maxEditPositions-1}else{this.activeEditor.positions=0}}g=true;this.updateValue();this._updateText();this._selectGroup(this.editors.indexOf(this.activeEditor));return false}}var l=this._isSpecialKey(n);return l},_getLastEditableEditorIndex:function(){var b=0;var c=this;for(itemIndex=this.items.length-1;itemIndex&gt;=0;itemIndex--){if(this.items[itemIndex].type!=&quot;ReadOnly&quot;){return itemIndex}}return -1},_handleKeyDown:function(h,b){if(h.keyCode==115){if(this.isOpened()){this.hideCalendar();return false}else{if(!this.isOpened()){this.showCalendar();return false}}}if(h.altKey){if(h.keyCode==38){if(this.isOpened()){this.hideCalendar();return false}}else{if(h.keyCode==40){if(!this.isOpened()){this.showCalendar();return false}}}}if(this.isOpened()){return}var f=this._selection();if((h.ctrlKey&amp;&amp;b==99)||(h.ctrlKey&amp;&amp;b==67)){this._saveSelectedText(h);return false}if((h.ctrlKey&amp;&amp;b==122)||(h.ctrlKey&amp;&amp;b==90)){return false}if((h.ctrlKey&amp;&amp;b==118)||(h.ctrlKey&amp;&amp;b==86)||(h.shiftKey&amp;&amp;b==45)){return false}if(b==8||b==46){if(this.activeEditor!=null){var j=this.editors.indexOf(this.activeEditor);if(this.activeEditor.positions&gt;=0){var d=a.global.format(Number(this.activeEditor.value),&quot;d&quot;+this.activeEditor.maxEditPositions,this.culture);tmp=d;tmp=tmp.substring(0,this.activeEditor.positions)+&quot;0&quot;+tmp.substring(this.activeEditor.positions+1);if(parseInt(tmp)&lt;this.activeEditor.minValue){tmp=a.global.format(Number(this.activeEditor.minValue),&quot;d&quot;+this.activeEditor.maxEditPositions,this.culture)}if(this.enableAbsoluteSelection){this.activeEditor.value=tmp}else{this.activeEditor.value=this.activeEditor.minValue}this._validateValue();this._updateText();if(b==8){var c=this;if(this.enableAbsoluteSelection&amp;&amp;this.activeEditor.positions&gt;0){setTimeout(function(){c.activeEditor.positions=c.activeEditor.positions-1;c._selectGroup(j)},10)}else{setTimeout(function(){c._doLeftKey()},10)}}else{this._selectGroup(j)}}else{this._doLeftKey()}}return false}if(b==38){this.spinUp();return false}else{if(b==40){this.spinDown();return false}}if(b==37){this._doLeftKey();return false}else{if(b==39){this._doRightKey();return false}}var g=this._isSpecialKey(b);if(!a.browser.mozilla){return true}return g},_isSpecialKey:function(b){if(b!=8&amp;&amp;b!=9&amp;&amp;b!=13&amp;&amp;b!=35&amp;&amp;b!=36&amp;&amp;b!=37&amp;&amp;b!=39&amp;&amp;b!=27&amp;&amp;b!=46){return false}return true},_selection:function(){if(&quot;selectionStart&quot; in this.dateTimeInput[0]){var f=this.dateTimeInput[0];var g=f.selectionEnd-f.selectionStart;return{start:f.selectionStart,end:f.selectionEnd,length:g,text:f.value}}else{var c=document.selection.createRange();if(c==null){return{start:0,end:f.value.length,length:0}}var b=this.dateTimeInput[0].createTextRange();var d=b.duplicate();b.moveToBookmark(c.getBookmark());d.setEndPoint(&quot;EndToStart&quot;,b);var g=c.text.length;return{start:d.text.length,end:d.text.length+c.text.length,length:g,text:c.text}}},_selectGroup:function(j){if(this.host.css(&quot;display&quot;)==&quot;none&quot;){return}var l=this._selection();var e=&quot;&quot;;var b=&quot;&quot;;var c=null;for(i=0;i&lt;this.items.length;i++){b=this.items[i].dateParser(this.value);if(this.isEditing&amp;&amp;this.items[i].type!=&quot;ReadOnly&quot;){var h=this.items[i].type==&quot;Day&quot;&amp;&amp;this.items[i].format.length&gt;2;if(this.items[i].type==&quot;FORMAT_AMPM&quot;){h=true}if(!h){b=this.items[i].dateParserInEditMode(new Number(this.editors[i].value),&quot;d&quot;+this.editors[i].maxEditPositions);while(b.length&lt;this.editors[i].maxEditPositions){b=&quot;0&quot;+b}}}e+=b;if(this.items[i].type==&quot;ReadOnly&quot;){continue}if(this.items[i].type==&quot;Day&quot;&amp;&amp;this.items[i].format.length&gt;2){continue}if(this.items[i].type==&quot;FORMAT_AMPM&quot;){continue}if(j!=undefined&amp;&amp;j!=-1){if(i&gt;=j){var k=e.length-b.length;var d=b.length;if(this.enableAbsoluteSelection){if(!isNaN(parseInt(b))&amp;&amp;this.isEditing&amp;&amp;j!=-1){d=1;k+=this.editors[i].positions}}if(k==this.dateTimeInput.val().length){k--}this._setSelection(k,k+d);c=this.editors[i];this.activeEditor=c;break}}else{if(e.length&gt;=l.start){c=this.editors[i];this.activeEditor=c;var k=e.length-b.length;var d=1;if(this.enableAbsoluteSelection){if(!isNaN(parseInt(b))&amp;&amp;this.isEditing&amp;&amp;j!=-1){d=1;k+=this.editors[i].positions}}else{d=b.length}this._setSelection(k,k+d);break}}}if(i&lt;this.items.length&amp;&amp;j==-1){if(this.items[i].type!=&quot;ReadOnly&quot;){this.activeEditor.positions=0}}var g=this._selection();if(g.length==0){if(g.start&gt;0){var f=this._getLastEditableEditorIndex();if(f&gt;=0){this._selectGroup(f)}}}},_getLastEditableEditorIndex:function(){var b=-1;for(i=0;i&lt;this.editors.length;i++){if(this.items[i].type==&quot;ReadOnly&quot;){continue}if(this.items[i].type==&quot;Day&quot;&amp;&amp;this.items[i].format.length&gt;2){continue}if(this.items[i].type==&quot;FORMAT_AMPM&quot;){continue}b=i}return b},_setSelection:function(d,b){if(&quot;selectionStart&quot; in this.dateTimeInput[0]){this.dateTimeInput[0].setSelectionRange(d,b)}else{var c=this.dateTimeInput[0].createTextRange();c.collapse(true);c.moveEnd(&quot;character&quot;,b);c.moveStart(&quot;character&quot;,d);c.select()}},_setSelectionStart:function(b){this._setSelection(b,b)},destroy:function(){this.host.removeClass(&quot;jqx-rc-all&quot;);this._removeHandlers();this.dateTimeInput.remove();this.host.remove()},refresh:function(b){if(!b){this._arrange()}},_setOption:function(b,c){if(b===&quot;value&quot;){if(c==null){this.value=c;this._refreshValue()}else{if(!this.value._equalDate(c.dateTime)){this.value=c;this._refreshValue()}}}if(b==&quot;maxDate&quot;){this.calendar.maxDate=c}if(b==&quot;minDate&quot;){this.calendar.minDate=c}if(b==&quot;showCalendarButton&quot;){if(c){this.calendarButton.css(&quot;display&quot;,&quot;block&quot;)}else{this.calendarButton.css(&quot;display&quot;,&quot;none&quot;)}}if(b==&quot;disabled&quot;){this.dateTimeInput.attr(&quot;disabled&quot;,c)}if(b==&quot;readonly&quot;){this.readonly=c;this.dateTimeInput.css(&quot;readonly&quot;,c)}if(b==&quot;textAlign&quot;){this.dateTimeInput.css(&quot;text-align&quot;,c);this.textAlign=c}if(b==&quot;width&quot;){this.width=c;this.width=parseInt(this.width);this._arrange()}else{if(b==&quot;height&quot;){this.height=c;this.height=parseInt(this.height);this._arrange()}}},_refreshValue:function(){this._updateEditorsValue();this.updateValue();this._validateValue();this._updateText()}})})(jQuery);(function(a){a.jqx._jqxDateTimeInput.DateTimeFormatItem={};a.extend(a.jqx._jqxDateTimeInput.DateTimeFormatItem,{_create:function(d,c,b){this.format=d;this.type=c;this.culture=b;return this},_itemValue:function(){switch(this.format.length){case 1:return 9;case 2:return 99;case 3:default:return 999}},_maximumValue:function(){switch(this.format.length){case 1:return 9;case 2:return 99;case 3:default:return 999}},dateParser:function(b){if(b==null){return&quot;&quot;}var c=a.global.format(b.dateTime,this.format.length==1?&quot;%&quot;+this.format:this.format,this.culture);return c},dateParserInEditMode:function(d,c){if(d==null){return&quot;&quot;}var b=a.global.format(d.toString(),c.length==1?&quot;%&quot;+c:c,this.culture);return b},getDateTimeEditorByItemType:function(q){switch(this.type){case&quot;FORMAT_AMPM&quot;:var h=a.jqx._jqxDateTimeInput.AmPmEditor._createAmPmEditor(this.format,q.hour/12,a.global.culture.calendar.AM[0],a.global.culture.calendar.PM[0],this);var o=a.extend({},h);return o;case&quot;Character&quot;:return null;case&quot;Day&quot;:var p=q.year;var n=q.month;var c;if(this.format.length==3){c=a.global.culture.calendar.days.namesAbbr}else{if(this.format.length&gt;3){c=a.global.culture.calendar.days.names}else{c=null}}var e=q.day;if(c!=null){e=q.dayOfWeek+1}var d=a.jqx._jqxDateTimeInput.DateEditor._createDayEditor(q,q.day,1,q._daysInMonth(p,n),this.format.length==1?1:2,2,c,this);var o=a.extend({},d);return o;case&quot;FORMAT_hh&quot;:var s=q.hour%12;if(s==0){s=12}var l=a.jqx._jqxDateTimeInput.NumberEditor._createNumberEditor(s,0,23,this.format.length==1?1:2,2,this);var o=a.extend({},l);return o;case&quot;FORMAT_HH&quot;:var r=a.jqx._jqxDateTimeInput.NumberEditor._createNumberEditor(q.hour,0,23,this.format.length==1?1:2,2,this);var o=a.extend({},r);return o;case&quot;Millisecond&quot;:var m=a.jqx._jqxDateTimeInput.NumberEditor._createNumberEditor(q.millisecond/this._itemValue(),0,this._maximumValue(),this.format.length,this.format.length,this);var o=a.extend({},m);return o;case&quot;Minute&quot;:var g=a.jqx._jqxDateTimeInput.NumberEditor._createNumberEditor(q.minute,0,59,this.format.length==1?1:2,2,this);var o=a.extend({},g);return o;case&quot;Month&quot;:var j;if(this.format.length==3){j=a.global.culture.calendar.months.namesAbbr}else{if(this.format.length&gt;3){j=a.global.culture.calendar.months.names}else{j=null}}var b=a.jqx._jqxDateTimeInput.DateEditor._createMonthEditor(q.month,this.format.length==2?2:1,j,this);var o=a.extend({},b);return o;case&quot;ReadOnly&quot;:return a.jqx._jqxDateTimeInput.DisabledEditor._create(this.format.length,q.day,this);case&quot;Second&quot;:var f=a.jqx._jqxDateTimeInput.NumberEditor._createNumberEditor(q.second,0,59,this.format.length==1?1:2,2,this);var o=a.extend({},f);return o;case&quot;Year&quot;:var k=a.jqx._jqxDateTimeInput.DateEditor._createYearEditor(q.year,this.format.length,this);var o=a.extend({},k);return o}return null},getDateTimeWithOffset:function(e,k){if(e==null||k==null){throw&quot;Invalid arguments&quot;}var h=k.hour;var d=k.minute;var j=k.second;var l=k.day();var c=k.month();var f=k.year();var m=k;var b=k;switch(this.type){case&quot;FORMAT_AMPM&quot;:h=12*(e-h/12);break;case&quot;Day&quot;:l=e-l;if(l!=e){if(e==29&amp;&amp;c==2){b=m;while(!DateTime._isLeapYear(b.year)){b=b._addYears(1)}b=b._addDays(e-b.day)}else{b=m._addMonths(1-m.month);b=b._addDays(e-m.day)}}break;case&quot;FORMAT_hh&quot;:var g=e==12?0:e;m=m._addHours(g-(m.hour%12));break;case&quot;FORMAT_HH&quot;:m=m._addHours(e-m.hour);break;case&quot;Millisecond&quot;:m=m._addMilliseconds(e*this._itemValue()-m.millisecond);break;case&quot;Minute&quot;:m=m._addMinutes(e-m.minute);break;case&quot;Month&quot;:b=m._addMonths(e-m.month);if(e==2&amp;&amp;m.day==29&amp;&amp;m.day!=b.day){b=m;while(!m.IsLeapYear(b.year)){b=b._addYears(1)}b=b._addMonths(e-b.month)}m=b;break;case&quot;ReadOnly&quot;:break;case&quot;Second&quot;:m=m._addSeconds(e-m.second);break;case&quot;Year&quot;:if(e==0){e=1}m=m._addYears(e-k.year);break}return m}})})(jQuery);(function(a){a.jqx._jqxDateTimeInput.DateEditor=a.extend(a.jqx._jqxDateTimeInput.DateEditor,{formatValueLength:0,handleYears:false,handleDays:false,handleMonths:false,positions:0,value:0,minEditPositions:0,maxEditPositions:0,minValue:0,maxValue:0,item:null,dateTimeFormatInfo:null,days:null,dateTimeMonths:null,lastDayInput:null,minPositions:function(){if(this.handleYears){if(this.formatValueLength==4){if(this.positions&lt;=1){return 1}else{if(this.positions&gt;=4){return 4}}return this.positions}else{return this.minEditPositions}}return this.minEditPositions},initializeFields:function(e,f,b,d,c){this.minValue=e;this.maxValue=f;this.minEditPositions=b;this.maxEditPositions=d;this.updateActiveEditor(e);this.item=c},_createYearEditor:function(d,c,b){a.jqx._jqxDateTimeInput.DateEditor=a.extend(true,{},this);this.initializeFields(c&lt;=4?0:0,c&lt;4?99:9999,(c==2)?2:1,c&gt;3?4:2,b);this.initializeYearEditor(d,c,b.culture);this.handleYears=true;return this},initializeYearEditor:function(d,c,e){this.formatValueLength=c;this.dateTimeFormatInfo=e;var b=d;b=Math.min(b,9999);b=Math.max(b,1);b=this.formatValueLength&lt;4?b%100:b;this.updateActiveEditor(b);this.value=b},updateActiveEditor:function(b){this.value=b;this.positions=0},_createDayEditor:function(h,b,f,g,j,d,c,e){a.jqx._jqxDateTimeInput.DateEditor=a.extend(true,{},this);this.initializeFields(f,g,1,d,e);this.currentValue=h;this.value=b;this.days=c;this.handleDays=true;return this},getDayOfWeek:function(b){if(typeof this.currentValue==a.jqx._jqxDateTimeInput.DateTime){this.currentValue.dayOfWeek()}return b},defaultTextValue:function(){var d=this.value;var e=this.minEditPositions;var b=e;var c=a.global.format(this.value,&quot;d&quot;+b,&quot;&quot;);return c},textValue:function(){if(this.handleDays){if(this.days==null){return this.defaultTextValue()}else{var b=(this.value%7)+1;b=this.getDayOfWeek(b);return this.days[b]}}else{if(this.handleMonths){if(this.dateTimeMonths==null||this.value&lt;1||this.value&gt;12){return this.defaultTextValue()}else{return this.dateTimeMonths[this.value-1]}}}return this.defaultTextValue()},defaultInsertString:function(c){if(c==null){return this.deleteValue()}if(c.length==0){return this.deleteValue()}var g=c.substring(0,1);if(isNaN(g)){return}var e=true;var d;var b=1;var f=a.global.format(Number(this.value),&quot;d&quot;+this.maxEditPositions,this.culture);d=f;if(this.positions&gt;=this.maxEditPositions){this.positions=0}d=d.substring(0,this.positions)+g+d.substring(this.positions+1);d=this.setValueByString(d,b);return true},setValueByString:function(d,b){d=this.fixValueString(d);var c=new Number(d);this.value=c;this.positions+=b;return d},fixValueString:function(b){if(b.length&gt;this.maxEditPositions){b=b.substring(b.length-this.maxEditPositions)}return b},initializeValueString:function(c){var b;b=&quot;&quot;;if(this.hasDigits()){b=c}return b},deleteValue:function(){if(this.value==this.minValue&amp;&amp;this.hasDigits()==false){return false}this.updateActiveEditor(this.minValue);return true},hasDigits:function(){return this.positions&gt;0},insert:function(b){if(this.handleDays){if(this.days!=null){var c=false;c=this.insertLongString(b,c);if(c){return c}c=this.insertShortString(b,c);if(c){return c}}if(this.value==1&amp;&amp;this.lastDayInput!=null&amp;&amp;this.lastDayInput.toString().length&gt;0&amp;&amp;this.lastDayInput.toString()==&quot;0&quot;){this.value=0}this.lastDayInput=b;return this.defaultInsertString(b)}else{if(this.handleMonths){if(this.dateTimeMonths!=null){var c=false;c=this.insertLongString2(b,c);if(c){return c}c=this.insertShortString2(b,c);if(c){return c}}}}return this.defaultInsertString(b)},insertShortString:function(d,e){if(d.length==1){for(i=0;i&lt;6;++i){var c=(this.value+i)%7+1;var b=this.days[c-1];if(b.substring(0,1)==d){this.updateActiveEditor(c);e=true;return e}}}return e},insertLongString:function(c,d){if(c.length&gt;0){for(i=0;i&lt;6;++i){var b=(this.value+i)%7+1;if(this.days[b-1]==c){this.updateActiveEditor(b);d=true;return d}}}return d},_createMonthEditor:function(d,c,b,e){a.jqx._jqxDateTimeInput.DateEditor=a.extend(true,{},this);this.initializeFields(1,12,c,2,e);this.dateTimeMonths=b;this.value=d;if(this.dateTimeMonths!=null&amp;&amp;this.dateTimeMonths[12]!=null&amp;&amp;this.dateTimeMonths[12].length&gt;0){this.dateTimeMonths=null}this.handleMonths=true;return this},insertLongString2:function(b,c){if(b.length&gt;0){for(i=0;i&lt;11;++i){month=(this.value+i)%12+1;if(this.dateTimeMonths[month-1]==b){this.updateActiveEditor(month);c=true;return c}}}return c},insertShortString2:function(c,d){if(c.length==1){for(i=0;i&lt;11;++i){var e=(this.value+i)%12+1;var b=this.dateTimeMonths[e-1];if(b.substring(0,1)==c){this.updateActiveEditor(e);d=true;return d}}}return d},correctMaximumValue:function(b){if(b&gt;this.maxValue){b=this.minValue}return b},correctMinimumValue:function(b){if(b&lt;this.minValue){b=this.maxValue}return b},increaseValue:function(e){var c=a.global.format(Number(this.value),&quot;d&quot;+this.maxEditPositions,this.culture);var f=c.toString()[this.positions];f=parseInt(f)+1;if(f&gt;9){f=0}if(!e){var b=this.value+1;b=this.correctMaximumValue(b);this.updateActiveEditor(b);return true}var d=c.substring(0,this.positions)+f+c.substring(this.positions+1);if(d!=this.value||this.hasDigits()){this.updateActiveEditor(d);return true}else{return false}},decreaseValue:function(e){var c=a.global.format(Number(this.value),&quot;d&quot;+this.maxEditPositions,this.culture);var f=c.toString()[this.positions];f=parseInt(f)-1;if(f&lt;0){f=9}if(!e){var b=this.value-1;b=this.correctMinimumValue(b);this.updateActiveEditor(b);return true}var d=c.substring(0,this.positions)+f+c.substring(this.positions+1);if(d!=this.value||this.hasDigits()){this.updateActiveEditor(d);return true}else{return false}},getDateTimeItem:function(){return this.item}})})(jQuery);(function(a){a.jqx._jqxDateTimeInput.NumberEditor={};a.extend(a.jqx._jqxDateTimeInput.NumberEditor,{formatValueLength:0,positions:0,value:0,minEditPositions:0,maxEditPositions:0,minValue:0,maxValue:0,item:null,minPositions:function(){if(this.handleYears){if(this.formatValueLength==4){if(this.positions&lt;=1){return 1}else{if(this.positions&gt;=4){return 4}}return this.positions}else{return this.minEditPositions}}return this.minEditPositions},_createNumberEditor:function(f,e,g,b,d,c){a.jqx._jqxDateTimeInput.NumberEditor=a.extend(true,{},this);this.initializeFields(e,g,b,d,c);return this},initializeFields:function(e,f,b,d,c){this.minValue=e;this.maxValue=f;this.minEditPositions=b;this.maxEditPositions=d;this.updateActiveEditor(e);this.item=c},updateActiveEditor:function(b){this.value=b;this.positions=0},getDayOfWeek:function(b){if(typeof this.currentValue==a.jqx._jqxDateTimeInput.DateTime){this.currentValue.dayOfWeek()}return b},textValue:function(){var d=this.value;var e=this.minEditPositions;var b=e;var c=a.global.format(this.value,&quot;d&quot;+b,&quot;&quot;);return c},insert:function(c){if(c==null){return this.deleteValue()}if(c.length==0){return this.deleteValue()}var g=c.substring(0,1);if(isNaN(g)){return}var e=true;var d;var b=1;var f=a.global.format(Number(this.value),&quot;d&quot;+this.maxEditPositions,this.culture);d=f;if(this.positions&gt;=this.maxEditPositions){this.positions=0}d=d.substring(0,this.positions)+g+d.substring(this.positions+1);d=this.setValueByString(d,b);return true},setValueByString:function(d,b){d=this.fixValueString(d);var c=new Number(d);this.value=c;this.positions+=b;return d},fixValueString:function(b){if(b.length&gt;this.maxEditPositions){b=b.substring(b.length-this.maxEditPositions)}return b},initializeValueString:function(c){var b;b=&quot;&quot;;if(this.hasDigits()){b=c}return b},deleteValue:function(){if(this.value==this.minValue&amp;&amp;this.hasDigits()==false){return false}this.updateActiveEditor(this.minValue);return true},hasDigits:function(){return this.positions&gt;0},correctMaximumValue:function(b){if(b&gt;this.maxValue){b=this.minValue}return b},correctMinimumValue:function(b){if(b&lt;this.minValue){b=this.maxValue}return b},increaseValue:function(e){var c=a.global.format(Number(this.value),&quot;d&quot;+this.maxEditPositions,this.culture);var f=c.toString()[this.positions];f=parseInt(f)+1;if(f&gt;9){f=0}if(!e){var b=this.value+1;b=this.correctMaximumValue(b);this.updateActiveEditor(b);return true}var d=c.substring(0,this.positions)+f+c.substring(this.positions+1);if(d!=this.value||this.hasDigits()){this.updateActiveEditor(d);return true}else{return false}},decreaseValue:function(e){var c=a.global.format(Number(this.value),&quot;d&quot;+this.maxEditPositions,this.culture);var f=c.toString()[this.positions];f=parseInt(f)-1;if(f&lt;0){f=9}if(!e){var b=this.value-1;b=this.correctMinimumValue(b);this.updateActiveEditor(b);return true}var d=c.substring(0,this.positions)+f+c.substring(this.positions+1);if(d!=this.value||this.hasDigits()){this.updateActiveEditor(d);return true}else{return false}},getDateTimeItem:function(){return this.item}})})(jQuery);(function(a){a.jqx._jqxDateTimeInput.DisabledEditor={};a.extend(a.jqx._jqxDateTimeInput.DisabledEditor,{_create:function(f,c,e,b,d){this.format=f;this.value=-1;this.item=d;return this},textValue:function(){return&quot;&quot;},insert:function(b){return false},deleteValue:function(){return false},increaseValue:function(){return false},decreaseValue:function(){return false},getDateTimeItem:function(){return this.item}})})(jQuery);(function(a){a.jqx._jqxDateTimeInput.AmPmEditor={};a.extend(a.jqx._jqxDateTimeInput.AmPmEditor,{_createAmPmEditor:function(f,c,e,b,d){this.format=f;this.value=c;this.amString=e;this.pmString=b;this.item=d;if(e==b){this.amString=&quot;&lt;&quot;+e;this.pmString=&quot;&gt;&quot;+b}return this},textValue:function(){var b=this.amString;if(this.value!=0){b=this.pmString}if(this.format.length==1&amp;&amp;b.length&gt;1){b=b.substring(0,1)}return b},insert:function(f){var d=f.toString();if(d.Length==0){return this.deleteValue()}var c=false;if(this.amString.Length&gt;0&amp;&amp;this.pmString.Length&gt;0){var g=amString[0];var b=d[0];var e=pmString[0];if(g.toString()==b.toString()){this.value=0;c=true}else{if(e.toString()==b.toString()){this.value=1;c=true}}}else{if(this.pmString.Length&gt;0){this.value=1;c=true}else{if(this.amString.Length&gt;0){this.value=0;c=true}}}return c},deleteValue:function(){var b=true;if(this.amString.Length==0&amp;&amp;this.pmString.Length!=0){if(this.value==0){return false}this.value=0}else{if(this.value==1){return false}this.value=1}return b},increaseValue:function(){this.value=1-this.value;return true},decreaseValue:function(){this.increaseValue();return true},getDateTimeItem:function(){return this.item}})})(jQuery);(function(a){a.jqx._jqxDateTimeInput.getDateTime=function(c){var b={dateTime:new Date(c),daysPer4Years:1461,daysPerYear:365,daysToMonth365:{0:0,1:31,2:59,3:90,4:120,5:151,6:181,7:212,8:243,9:273,10:304,11:334,12:365},daysToMonth366:{0:0,1:31,2:60,3:91,4:121,5:152,6:182,7:213,8:244,9:274,10:305,11:335,12:366},maxValue:3155378976000000000,millisPerDay:86400000,millisPerHour:3600000,millisPerMinute:60000,millisPerSecond:1000,minTicks:0,minValue:0,ticksPerDay:864000000000,ticksPerHour:36000000000,ticksPerMillisecond:10000,ticksPerMinute:600000000,ticksPerSecond:10000000,hour:c.getHours(),minute:c.getMinutes(),day:c.getDate(),second:c.getSeconds(),month:1+c.getMonth(),year:c.getFullYear(),millisecond:c.getMilliseconds(),dayOfWeek:c.getDay(),isWeekend:function(d){if(d==undefined||d==null){d=this.dateTime}var e=d.getDay()%6==0;return e},dayOfYear:function(e){if(e==undefined||e==null){e=this.dateTime}var d=new Date(e.getFullYear(),0,1);return Math.ceil((e-d)/86400000)},_setDay:function(d){if(d==undefined||d==null){d=0}this.dateTime.setDate(d);this.day=this.dateTime.getDate()},_setMonth:function(d){if(d==undefined||d==null){d=0}this.dateTime.setMonth(d-1);this.month=1+this.dateTime.getMonth()},_setYear:function(d){if(d==undefined||d==null){d=0}this.dateTime.setFullYear(d);this.year=this.dateTime.getFullYear()},_setHours:function(d){if(d==undefined||d==null){d=0}this.dateTime.setHours(d);this.hour=this.dateTime.getHours()},_setMinutes:function(d){if(d==undefined||d==null){d=0}this.dateTime.setMinutes(d);this.minute=this.dateTime.getMinutes()},_setSeconds:function(d){if(d==undefined||d==null){d=0}this.dateTime.setSeconds(d);this.second=this.dateTime.getSeconds()},_setMilliseconds:function(d){if(d==undefined||d==null){d=0}this.dateTime.setMilliseconds(d);this.millisecond=this.dateTime.getMilliseconds()},_addDays:function(e){var d=this.dateTime;d.setDate(d.getDate()+e);return d},_addWeeks:function(e){var d=this.dateTime;d.setDate(d.getDate()+7*e);return d},_addMonths:function(e){var d=this.dateTime;d.setMonth(d.getMonth()+e);return d},_addYears:function(e){var d=this.dateTime;d.setFullYear(d.getFullYear()+e);return d},_addHours:function(e){var d=this.dateTime;d.setHours(d.getHours()+e);return d},_addMinutes:function(e){var d=this.dateTime;d.setMinutes(d.getMinutes()+e);return d},_addSeconds:function(e){var d=this.dateTime;d.setSeconds(d.getSeconds()+e);return d},_addMilliseconds:function(e){var d=this.dateTime;d.setMilliseconds(d.getMilliseconds()+e);return d},_isLeapYear:function(d){if((d&lt;1)||(d&gt;9999)){throw&quot;invalid year&quot;}if((d%4)!=0){return false}if((d%100)==0){return((d%400)==0)}return true},_dateToTicks:function(f,h,e){if(((f&gt;=1)&amp;&amp;(f&lt;=9999))&amp;&amp;((h&gt;=1)&amp;&amp;(h&lt;=12))){var d=this._isLeapYear(f)?this.daysToMonth366:this.daysToMonth365;if((e&gt;=1)&amp;&amp;(e&lt;=(d[h]-d[h-1]))){var f=f-1;var g=((((((f*365)+(f/4))-(f/100))+(f/400))+d[h-1])+e)-1;return(g*864000000000)}}},_daysInMonth:function(e,f){if((f&lt;1)||(f&gt;12)){throw (&quot;Invalid month.&quot;)}var d=this._isLeapYear(e)?this.daysToMonth366:this.daysToMonth365;return(d[f]-d[f-1])},_timeToTicks:function(d,g,e){var f=((d*3600)+(g*60))+e;return(f*10000000)},_equalDate:function(d){if(this.year==d.getFullYear()&amp;&amp;this.day==d.getDate()&amp;&amp;this.month==d.getMonth()+1){return true}return false}};return b}})(jQuery);<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn607_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn607_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/openappengine/source/detail?spec=svn607&amp;r=598">r598</a>
 by hrishi2323
 on May 20, 2012
 &nbsp; <a href="/p/openappengine/source/diff?spec=svn607&r=598&amp;format=side&amp;path=/branches/grails/openappengine/web-app/js/jqwidgets/jqxdatetimeinput.js&amp;old_path=/branches/grails/openappengine/web-app/js/jqwidgets/jqxdatetimeinput.js&amp;old=">Diff</a>
 </div>
 <pre>Party Manager - Address Tab.
jqxwidgets added.</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/openappengine/source/detail?r=598&spec=svn607';
 var publish_url = '/p/openappengine/source/detail?r=598&spec=svn607#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/branches/grails/openappengine/grails-app/conf/DataSource.groovy');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/conf/DataSource.groovy?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/grails-app/controllers/com/openappengine/model/party/AddressController.groovy');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/controllers/com/openappengine/model/party/AddressController.groovy?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/grails-app/controllers/com/openappengine/model/party/PersonController.groovy');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/controllers/com/openappengine/model/party/PersonController.groovy?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/grails-app/views/address');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/address?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/grails-app/views/address/_form.gsp');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/address/_form.gsp?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/grails-app/views/address/create.gsp');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/address/create.gsp?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/grails-app/views/address/edit.gsp');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/address/edit.gsp?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/grails-app/views/address/list.gsp');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/address/list.gsp?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/grails-app/views/address/show.gsp');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/address/show.gsp?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/grails-app/views/layouts/main.gsp');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/layouts/main.gsp?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/grails-app/views/party/show.gsp');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/party/show.gsp?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/grails-app/views/person/_form.gsp');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/person/_form.gsp?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/grails-app/views/person/create.gsp');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/person/create.gsp?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/grails-app/views/person/list.gsp');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/person/list.gsp?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/grails-app/views/person/show.gsp');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/person/show.gsp?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/test/unit/com/openappengine/model/party/AddressControllerTests.groovy');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/test/unit/com/openappengine/model/party/AddressControllerTests.groovy?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/ajax_load.gif');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/ajax_load.gif?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/arrow_bottom.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/arrow_bottom.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/arrow_left.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/arrow_left.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/arrow_right.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/arrow_right.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/arrow_top.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/arrow_top.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/backImage.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/backImage.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/backgroundTop.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/backgroundTop.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/bar-hue.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bar-hue.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/bar-saturation.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bar-saturation.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_black.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_black.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_black2.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_black2.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_black_horizontal.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_black_horizontal.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blackhover.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blackhover.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blackhover_horizontal.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blackhover_horizontal.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blackpressed.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blackpressed.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blackpressed_horizontal.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blackpressed_horizontal.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blueenergy.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blueenergy.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_darkblue.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_darkblue.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_darkbluehover.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_darkbluehover.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_darkbluepressed.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_darkbluepressed.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/blackbackground.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/blackbackground.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/check_black.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/check_black.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/check_disabled.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/check_disabled.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/check_indeterminate_black.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/check_indeterminate_black.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/check_indeterminate_disabled.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/check_indeterminate_disabled.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/check_indeterminate_white.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/check_indeterminate_white.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/check_white.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/check_white.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/close.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/close.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/close_white.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/close_white.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/crosshair-white.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/crosshair-white.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/crosshair.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/crosshair.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-down - Copy.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-down - Copy.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-down-white.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-down-white.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-down.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-down.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-left-white.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-left-white.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-left.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-left.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-right-white.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-right-white.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-right.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-right.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-up-white.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-up-white.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-up.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-up.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/map-hue.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/map-hue.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/map-saturation-overlay.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/map-saturation-overlay.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/map-saturation.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/map-saturation.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/multi-arrow.gif');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/multi-arrow.gif?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/nav-arrow-down.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/nav-arrow-down.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/nav-arrow-left.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/nav-arrow-left.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/nav-arrow-right.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/nav-arrow-right.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/nav-arrow-up.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/nav-arrow-up.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/pointer.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/pointer.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/rangebar_classic.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/rangebar_classic.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/rangebar_darkblue.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/rangebar_darkblue.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/rangebar_shinyblack.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/rangebar_shinyblack.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/rangebar_summer.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/rangebar_summer.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_check_black.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_check_black.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_check_disabled.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_check_disabled.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_check_indeterminate.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_check_indeterminate.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_check_white.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_check_white.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_classic_hover.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_classic_hover.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_classic_normal.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_classic_normal.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_disabled.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_disabled.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/star.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/star.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/star_disabled.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/star_disabled.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/star_hover.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/star_hover.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/tick.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/tick.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/track_classic.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/track_classic.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/track_darkblue.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/track_darkblue.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/track_shinyblack.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/track_shinyblack.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/images/track_summer.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/track_summer.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/jqx.base.css');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/jqx.base.css?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/jqx.classic.css');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/jqx.classic.css?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/jqx.darkblue.css');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/jqx.darkblue.css?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/jqx.energyblue.css');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/jqx.energyblue.css?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/jqx.shinyblack.css');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/jqx.shinyblack.css?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqwidgets/jqx.summer.css');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/jqx.summer.css?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqx.apireference.css');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqx.apireference.css?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/jqxmenustyle.css');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqxmenustyle.css?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/main.css');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/main.css?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/qunit-git.css');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/qunit-git.css?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/css/site.css');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/site.css?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/images/address.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/images/address.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/format.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/format.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/gettheme.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/gettheme.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/globalization');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.cs-CZ.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.cs-CZ.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.de-DE.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.de-DE.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.en-CA.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.en-CA.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.en-US.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.en-US.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.fr-FR.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.fr-FR.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.he-IL.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.he-IL.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.hr.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.hr.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.it-IT.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.it-IT.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.ja-JP.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.ja-JP.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.ru-RU.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.ru-RU.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.sa-IN.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.sa-IN.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.global.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.global.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jquery-1.7.2.min.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jquery-1.7.2.min.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqx-all.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqx-all.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxbuttons.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxbuttons.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxcalendar.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxcalendar.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxchart.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxchart.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxcheckbox.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxcheckbox.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxcolorpicker.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxcolorpicker.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxcombobox.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxcombobox.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxcore.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxcore.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxdata.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxdata.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxdatetimeinput.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxdatetimeinput.js?r\x3d598\x26spec\x3dsvn607');
 
 var selected_path = '/branches/grails/openappengine/web-app/js/jqwidgets/jqxdatetimeinput.js';
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxdocking.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxdocking.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxdockpanel.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxdockpanel.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxdragdrop.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxdragdrop.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxdropdownbutton.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxdropdownbutton.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxdropdownlist.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxdropdownlist.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxexpander.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxexpander.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.columnsresize.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.columnsresize.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.edit.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.edit.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.filter.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.filter.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.grouping.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.grouping.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.pager.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.pager.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.selection.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.selection.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.sort.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.sort.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxlistbox.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxlistbox.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxmaskedinput.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxmaskedinput.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxmenu.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxmenu.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxnavigationbar.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxnavigationbar.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxnumberinput.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxnumberinput.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxpanel.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxpanel.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxpopup.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxpopup.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxprogressbar.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxprogressbar.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxradiobutton.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxradiobutton.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxrating.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxrating.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxscrollbar.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxscrollbar.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxslider.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxslider.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxsplitter.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxsplitter.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxswitchbutton.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxswitchbutton.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxtabs.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxtabs.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxtooltip.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxtooltip.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxtree.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxtree.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxvalidator.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxvalidator.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/jqxwindow.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxwindow.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/knockout-2.0.0.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/knockout-2.0.0.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/qunit-git.js');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/qunit-git.js?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/resources');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/resources/drag.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/drag.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/resources/dragcancel.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/dragcancel.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/resources/filter_dark.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/filter_dark.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/resources/filter_large_.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/filter_large_.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/resources/loader.gif');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/loader.gif?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/resources/menubutton.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/menubutton.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/resources/red_arrow_down.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/red_arrow_down.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/resources/red_arrow_up.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/red_arrow_up.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortasc.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortasc.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortascbutton.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortascbutton.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortdesc.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortdesc.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortdescbutton.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortdescbutton.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortremove.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortremove.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/arrow_bottom.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/arrow_bottom.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/arrow_left.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/arrow_left.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/arrow_right.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/arrow_right.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/arrow_top.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/arrow_top.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/backImage.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/backImage.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/backgroundTop.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/backgroundTop.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bar-hue.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bar-hue.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bar-saturation.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bar-saturation.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_black.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_black.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_black2.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_black2.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_black_horizontal.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_black_horizontal.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blackhover.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blackhover.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blackhover_horizontal.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blackhover_horizontal.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blackpressed.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blackpressed.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blackpressed_horizontal.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blackpressed_horizontal.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blueenergy.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blueenergy.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_darkblue.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_darkblue.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_darkbluehover.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_darkbluehover.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_darkbluepressed.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_darkbluepressed.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/blackbackground.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/blackbackground.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/check_black.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/check_black.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/check_disabled.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/check_disabled.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/check_indeterminate_black.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/check_indeterminate_black.png?r\x3d598\x26spec\x3dsvn607');
 
 
 changed_paths.push('/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/check_indeterminate_disabled.png');
 changed_urls.push('/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/check_indeterminate_disabled.png?r\x3d598\x26spec\x3dsvn607');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/conf/DataSource.groovy?r=598&amp;spec=svn607"
 
 >...rails-app/conf/DataSource.groovy</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/controllers/com/openappengine/model/party/AddressController.groovy?r=598&amp;spec=svn607"
 
 >...l/party/AddressController.groovy</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/controllers/com/openappengine/model/party/PersonController.groovy?r=598&amp;spec=svn607"
 
 >...el/party/PersonController.groovy</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/address?r=598&amp;spec=svn607"
 
 >...pengine/grails-app/views/address</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/address/_form.gsp?r=598&amp;spec=svn607"
 
 >...ails-app/views/address/_form.gsp</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/address/create.gsp?r=598&amp;spec=svn607"
 
 >...ils-app/views/address/create.gsp</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/address/edit.gsp?r=598&amp;spec=svn607"
 
 >...rails-app/views/address/edit.gsp</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/address/list.gsp?r=598&amp;spec=svn607"
 
 >...rails-app/views/address/list.gsp</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/address/show.gsp?r=598&amp;spec=svn607"
 
 >...rails-app/views/address/show.gsp</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/layouts/main.gsp?r=598&amp;spec=svn607"
 
 >...rails-app/views/layouts/main.gsp</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/party/show.gsp?r=598&amp;spec=svn607"
 
 >.../grails-app/views/party/show.gsp</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/person/_form.gsp?r=598&amp;spec=svn607"
 
 >...rails-app/views/person/_form.gsp</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/person/create.gsp?r=598&amp;spec=svn607"
 
 >...ails-app/views/person/create.gsp</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/person/list.gsp?r=598&amp;spec=svn607"
 
 >...grails-app/views/person/list.gsp</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/grails-app/views/person/show.gsp?r=598&amp;spec=svn607"
 
 >...grails-app/views/person/show.gsp</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/test/unit/com/openappengine/model/party/AddressControllerTests.groovy?r=598&amp;spec=svn607"
 
 >...ty/AddressControllerTests.groovy</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/ajax_load.gif?r=598&amp;spec=svn607"
 
 >...engine/web-app/css/ajax_load.gif</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets?r=598&amp;spec=svn607"
 
 >...nappengine/web-app/css/jqwidgets</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images?r=598&amp;spec=svn607"
 
 >...ine/web-app/css/jqwidgets/images</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/arrow_bottom.png?r=598&amp;spec=svn607"
 
 >...qwidgets/images/arrow_bottom.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/arrow_left.png?r=598&amp;spec=svn607"
 
 >.../jqwidgets/images/arrow_left.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/arrow_right.png?r=598&amp;spec=svn607"
 
 >...jqwidgets/images/arrow_right.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/arrow_top.png?r=598&amp;spec=svn607"
 
 >...s/jqwidgets/images/arrow_top.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/backImage.png?r=598&amp;spec=svn607"
 
 >...s/jqwidgets/images/backImage.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/backgroundTop.png?r=598&amp;spec=svn607"
 
 >...widgets/images/backgroundTop.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bar-hue.png?r=598&amp;spec=svn607"
 
 >...css/jqwidgets/images/bar-hue.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bar-saturation.png?r=598&amp;spec=svn607"
 
 >...idgets/images/bar-saturation.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_black.png?r=598&amp;spec=svn607"
 
 >...ss/jqwidgets/images/bg_black.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_black2.png?r=598&amp;spec=svn607"
 
 >...s/jqwidgets/images/bg_black2.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_black_horizontal.png?r=598&amp;spec=svn607"
 
 >...s/images/bg_black_horizontal.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blackhover.png?r=598&amp;spec=svn607"
 
 >...widgets/images/bg_blackhover.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blackhover_horizontal.png?r=598&amp;spec=svn607"
 
 >...ges/bg_blackhover_horizontal.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blackpressed.png?r=598&amp;spec=svn607"
 
 >...dgets/images/bg_blackpressed.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blackpressed_horizontal.png?r=598&amp;spec=svn607"
 
 >...s/bg_blackpressed_horizontal.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_blueenergy.png?r=598&amp;spec=svn607"
 
 >...widgets/images/bg_blueenergy.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_darkblue.png?r=598&amp;spec=svn607"
 
 >...jqwidgets/images/bg_darkblue.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_darkbluehover.png?r=598&amp;spec=svn607"
 
 >...gets/images/bg_darkbluehover.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/bg_darkbluepressed.png?r=598&amp;spec=svn607"
 
 >...ts/images/bg_darkbluepressed.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/blackbackground.png?r=598&amp;spec=svn607"
 
 >...dgets/images/blackbackground.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/check_black.png?r=598&amp;spec=svn607"
 
 >...jqwidgets/images/check_black.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/check_disabled.png?r=598&amp;spec=svn607"
 
 >...idgets/images/check_disabled.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/check_indeterminate_black.png?r=598&amp;spec=svn607"
 
 >...es/check_indeterminate_black.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/check_indeterminate_disabled.png?r=598&amp;spec=svn607"
 
 >...check_indeterminate_disabled.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/check_indeterminate_white.png?r=598&amp;spec=svn607"
 
 >...es/check_indeterminate_white.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/check_white.png?r=598&amp;spec=svn607"
 
 >...jqwidgets/images/check_white.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/close.png?r=598&amp;spec=svn607"
 
 >...p/css/jqwidgets/images/close.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/close_white.png?r=598&amp;spec=svn607"
 
 >...jqwidgets/images/close_white.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/crosshair-white.png?r=598&amp;spec=svn607"
 
 >...dgets/images/crosshair-white.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/crosshair.png?r=598&amp;spec=svn607"
 
 >...s/jqwidgets/images/crosshair.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-down - Copy.png?r=598&amp;spec=svn607"
 
 >...gets/images/icon-down - Copy.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-down-white.png?r=598&amp;spec=svn607"
 
 >...dgets/images/icon-down-white.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-down.png?r=598&amp;spec=svn607"
 
 >...s/jqwidgets/images/icon-down.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-left-white.png?r=598&amp;spec=svn607"
 
 >...dgets/images/icon-left-white.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-left.png?r=598&amp;spec=svn607"
 
 >...s/jqwidgets/images/icon-left.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-right-white.png?r=598&amp;spec=svn607"
 
 >...gets/images/icon-right-white.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-right.png?r=598&amp;spec=svn607"
 
 >.../jqwidgets/images/icon-right.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-up-white.png?r=598&amp;spec=svn607"
 
 >...widgets/images/icon-up-white.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/icon-up.png?r=598&amp;spec=svn607"
 
 >...css/jqwidgets/images/icon-up.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/map-hue.png?r=598&amp;spec=svn607"
 
 >...css/jqwidgets/images/map-hue.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/map-saturation-overlay.png?r=598&amp;spec=svn607"
 
 >...mages/map-saturation-overlay.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/map-saturation.png?r=598&amp;spec=svn607"
 
 >...idgets/images/map-saturation.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/multi-arrow.gif?r=598&amp;spec=svn607"
 
 >...jqwidgets/images/multi-arrow.gif</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/nav-arrow-down.png?r=598&amp;spec=svn607"
 
 >...idgets/images/nav-arrow-down.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/nav-arrow-left.png?r=598&amp;spec=svn607"
 
 >...idgets/images/nav-arrow-left.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/nav-arrow-right.png?r=598&amp;spec=svn607"
 
 >...dgets/images/nav-arrow-right.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/nav-arrow-up.png?r=598&amp;spec=svn607"
 
 >...qwidgets/images/nav-arrow-up.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/pointer.png?r=598&amp;spec=svn607"
 
 >...css/jqwidgets/images/pointer.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/rangebar_classic.png?r=598&amp;spec=svn607"
 
 >...gets/images/rangebar_classic.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/rangebar_darkblue.png?r=598&amp;spec=svn607"
 
 >...ets/images/rangebar_darkblue.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/rangebar_shinyblack.png?r=598&amp;spec=svn607"
 
 >...s/images/rangebar_shinyblack.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/rangebar_summer.png?r=598&amp;spec=svn607"
 
 >...dgets/images/rangebar_summer.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_check_black.png?r=598&amp;spec=svn607"
 
 >...s/images/roundbg_check_black.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_check_disabled.png?r=598&amp;spec=svn607"
 
 >...mages/roundbg_check_disabled.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_check_indeterminate.png?r=598&amp;spec=svn607"
 
 >.../roundbg_check_indeterminate.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_check_white.png?r=598&amp;spec=svn607"
 
 >...s/images/roundbg_check_white.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_classic_hover.png?r=598&amp;spec=svn607"
 
 >...images/roundbg_classic_hover.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_classic_normal.png?r=598&amp;spec=svn607"
 
 >...mages/roundbg_classic_normal.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/roundbg_disabled.png?r=598&amp;spec=svn607"
 
 >...gets/images/roundbg_disabled.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/star.png?r=598&amp;spec=svn607"
 
 >...pp/css/jqwidgets/images/star.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/star_disabled.png?r=598&amp;spec=svn607"
 
 >...widgets/images/star_disabled.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/star_hover.png?r=598&amp;spec=svn607"
 
 >.../jqwidgets/images/star_hover.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/tick.png?r=598&amp;spec=svn607"
 
 >...pp/css/jqwidgets/images/tick.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/track_classic.png?r=598&amp;spec=svn607"
 
 >...widgets/images/track_classic.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/track_darkblue.png?r=598&amp;spec=svn607"
 
 >...idgets/images/track_darkblue.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/track_shinyblack.png?r=598&amp;spec=svn607"
 
 >...gets/images/track_shinyblack.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/images/track_summer.png?r=598&amp;spec=svn607"
 
 >...qwidgets/images/track_summer.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/jqx.base.css?r=598&amp;spec=svn607"
 
 >...b-app/css/jqwidgets/jqx.base.css</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/jqx.classic.css?r=598&amp;spec=svn607"
 
 >...pp/css/jqwidgets/jqx.classic.css</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/jqx.darkblue.css?r=598&amp;spec=svn607"
 
 >...p/css/jqwidgets/jqx.darkblue.css</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/jqx.energyblue.css?r=598&amp;spec=svn607"
 
 >...css/jqwidgets/jqx.energyblue.css</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/jqx.shinyblack.css?r=598&amp;spec=svn607"
 
 >...css/jqwidgets/jqx.shinyblack.css</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqwidgets/jqx.summer.css?r=598&amp;spec=svn607"
 
 >...app/css/jqwidgets/jqx.summer.css</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqx.apireference.css?r=598&amp;spec=svn607"
 
 >...web-app/css/jqx.apireference.css</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/jqxmenustyle.css?r=598&amp;spec=svn607"
 
 >...ine/web-app/css/jqxmenustyle.css</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/main.css?r=598&amp;spec=svn607"
 
 >...enappengine/web-app/css/main.css</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/qunit-git.css?r=598&amp;spec=svn607"
 
 >...engine/web-app/css/qunit-git.css</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/css/site.css?r=598&amp;spec=svn607"
 
 >...enappengine/web-app/css/site.css</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/images/address.png?r=598&amp;spec=svn607"
 
 >...ngine/web-app/images/address.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets?r=598&amp;spec=svn607"
 
 >...enappengine/web-app/js/jqwidgets</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/format.js?r=598&amp;spec=svn607"
 
 >...e/web-app/js/jqwidgets/format.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/gettheme.js?r=598&amp;spec=svn607"
 
 >...web-app/js/jqwidgets/gettheme.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization?r=598&amp;spec=svn607"
 
 >...b-app/js/jqwidgets/globalization</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.cs-CZ.js?r=598&amp;spec=svn607"
 
 >...obalization/jquery.glob.cs-CZ.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.de-DE.js?r=598&amp;spec=svn607"
 
 >...obalization/jquery.glob.de-DE.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.en-CA.js?r=598&amp;spec=svn607"
 
 >...obalization/jquery.glob.en-CA.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.en-US.js?r=598&amp;spec=svn607"
 
 >...obalization/jquery.glob.en-US.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.fr-FR.js?r=598&amp;spec=svn607"
 
 >...obalization/jquery.glob.fr-FR.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.he-IL.js?r=598&amp;spec=svn607"
 
 >...obalization/jquery.glob.he-IL.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.hr.js?r=598&amp;spec=svn607"
 
 >.../globalization/jquery.glob.hr.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.it-IT.js?r=598&amp;spec=svn607"
 
 >...obalization/jquery.glob.it-IT.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.ja-JP.js?r=598&amp;spec=svn607"
 
 >...obalization/jquery.glob.ja-JP.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.ru-RU.js?r=598&amp;spec=svn607"
 
 >...obalization/jquery.glob.ru-RU.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.glob.sa-IN.js?r=598&amp;spec=svn607"
 
 >...obalization/jquery.glob.sa-IN.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/globalization/jquery.global.js?r=598&amp;spec=svn607"
 
 >...s/globalization/jquery.global.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jquery-1.7.2.min.js?r=598&amp;spec=svn607"
 
 >...js/jqwidgets/jquery-1.7.2.min.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqx-all.js?r=598&amp;spec=svn607"
 
 >.../web-app/js/jqwidgets/jqx-all.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxbuttons.js?r=598&amp;spec=svn607"
 
 >...b-app/js/jqwidgets/jqxbuttons.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxcalendar.js?r=598&amp;spec=svn607"
 
 >...-app/js/jqwidgets/jqxcalendar.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxchart.js?r=598&amp;spec=svn607"
 
 >...web-app/js/jqwidgets/jqxchart.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxcheckbox.js?r=598&amp;spec=svn607"
 
 >...-app/js/jqwidgets/jqxcheckbox.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxcolorpicker.js?r=598&amp;spec=svn607"
 
 >...p/js/jqwidgets/jqxcolorpicker.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxcombobox.js?r=598&amp;spec=svn607"
 
 >...-app/js/jqwidgets/jqxcombobox.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxcore.js?r=598&amp;spec=svn607"
 
 >.../web-app/js/jqwidgets/jqxcore.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxdata.js?r=598&amp;spec=svn607"
 
 >.../web-app/js/jqwidgets/jqxdata.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxdatetimeinput.js?r=598&amp;spec=svn607"
 selected="selected"
 >...js/jqwidgets/jqxdatetimeinput.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxdocking.js?r=598&amp;spec=svn607"
 
 >...b-app/js/jqwidgets/jqxdocking.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxdockpanel.js?r=598&amp;spec=svn607"
 
 >...app/js/jqwidgets/jqxdockpanel.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxdragdrop.js?r=598&amp;spec=svn607"
 
 >...-app/js/jqwidgets/jqxdragdrop.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxdropdownbutton.js?r=598&amp;spec=svn607"
 
 >...s/jqwidgets/jqxdropdownbutton.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxdropdownlist.js?r=598&amp;spec=svn607"
 
 >.../js/jqwidgets/jqxdropdownlist.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxexpander.js?r=598&amp;spec=svn607"
 
 >...-app/js/jqwidgets/jqxexpander.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.columnsresize.js?r=598&amp;spec=svn607"
 
 >...widgets/jqxgrid.columnsresize.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.edit.js?r=598&amp;spec=svn607"
 
 >...app/js/jqwidgets/jqxgrid.edit.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.filter.js?r=598&amp;spec=svn607"
 
 >...p/js/jqwidgets/jqxgrid.filter.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.grouping.js?r=598&amp;spec=svn607"
 
 >...js/jqwidgets/jqxgrid.grouping.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.js?r=598&amp;spec=svn607"
 
 >.../web-app/js/jqwidgets/jqxgrid.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.pager.js?r=598&amp;spec=svn607"
 
 >...pp/js/jqwidgets/jqxgrid.pager.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.selection.js?r=598&amp;spec=svn607"
 
 >...s/jqwidgets/jqxgrid.selection.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxgrid.sort.js?r=598&amp;spec=svn607"
 
 >...app/js/jqwidgets/jqxgrid.sort.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxlistbox.js?r=598&amp;spec=svn607"
 
 >...b-app/js/jqwidgets/jqxlistbox.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxmaskedinput.js?r=598&amp;spec=svn607"
 
 >...p/js/jqwidgets/jqxmaskedinput.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxmenu.js?r=598&amp;spec=svn607"
 
 >.../web-app/js/jqwidgets/jqxmenu.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxnavigationbar.js?r=598&amp;spec=svn607"
 
 >...js/jqwidgets/jqxnavigationbar.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxnumberinput.js?r=598&amp;spec=svn607"
 
 >...p/js/jqwidgets/jqxnumberinput.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxpanel.js?r=598&amp;spec=svn607"
 
 >...web-app/js/jqwidgets/jqxpanel.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxpopup.js?r=598&amp;spec=svn607"
 
 >...web-app/js/jqwidgets/jqxpopup.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxprogressbar.js?r=598&amp;spec=svn607"
 
 >...p/js/jqwidgets/jqxprogressbar.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxradiobutton.js?r=598&amp;spec=svn607"
 
 >...p/js/jqwidgets/jqxradiobutton.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxrating.js?r=598&amp;spec=svn607"
 
 >...eb-app/js/jqwidgets/jqxrating.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxscrollbar.js?r=598&amp;spec=svn607"
 
 >...app/js/jqwidgets/jqxscrollbar.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxslider.js?r=598&amp;spec=svn607"
 
 >...eb-app/js/jqwidgets/jqxslider.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxsplitter.js?r=598&amp;spec=svn607"
 
 >...-app/js/jqwidgets/jqxsplitter.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxswitchbutton.js?r=598&amp;spec=svn607"
 
 >.../js/jqwidgets/jqxswitchbutton.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxtabs.js?r=598&amp;spec=svn607"
 
 >.../web-app/js/jqwidgets/jqxtabs.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxtooltip.js?r=598&amp;spec=svn607"
 
 >...b-app/js/jqwidgets/jqxtooltip.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxtree.js?r=598&amp;spec=svn607"
 
 >.../web-app/js/jqwidgets/jqxtree.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxvalidator.js?r=598&amp;spec=svn607"
 
 >...app/js/jqwidgets/jqxvalidator.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxwindow.js?r=598&amp;spec=svn607"
 
 >...eb-app/js/jqwidgets/jqxwindow.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/knockout-2.0.0.js?r=598&amp;spec=svn607"
 
 >...p/js/jqwidgets/knockout-2.0.0.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/qunit-git.js?r=598&amp;spec=svn607"
 
 >...eb-app/js/jqwidgets/qunit-git.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources?r=598&amp;spec=svn607"
 
 >...e/web-app/js/jqwidgets/resources</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/drag.png?r=598&amp;spec=svn607"
 
 >.../js/jqwidgets/resources/drag.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/dragcancel.png?r=598&amp;spec=svn607"
 
 >...widgets/resources/dragcancel.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/filter_dark.png?r=598&amp;spec=svn607"
 
 >...idgets/resources/filter_dark.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/filter_large_.png?r=598&amp;spec=svn607"
 
 >...gets/resources/filter_large_.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/loader.gif?r=598&amp;spec=svn607"
 
 >...s/jqwidgets/resources/loader.gif</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/menubutton.png?r=598&amp;spec=svn607"
 
 >...widgets/resources/menubutton.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/red_arrow_down.png?r=598&amp;spec=svn607"
 
 >...ets/resources/red_arrow_down.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/red_arrow_up.png?r=598&amp;spec=svn607"
 
 >...dgets/resources/red_arrow_up.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortasc.png?r=598&amp;spec=svn607"
 
 >.../jqwidgets/resources/sortasc.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortascbutton.png?r=598&amp;spec=svn607"
 
 >...gets/resources/sortascbutton.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortdesc.png?r=598&amp;spec=svn607"
 
 >...jqwidgets/resources/sortdesc.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortdescbutton.png?r=598&amp;spec=svn607"
 
 >...ets/resources/sortdescbutton.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/resources/sortremove.png?r=598&amp;spec=svn607"
 
 >...widgets/resources/sortremove.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles?r=598&amp;spec=svn607"
 
 >...gine/web-app/js/jqwidgets/styles</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images?r=598&amp;spec=svn607"
 
 >...b-app/js/jqwidgets/styles/images</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/arrow_bottom.png?r=598&amp;spec=svn607"
 
 >...s/styles/images/arrow_bottom.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/arrow_left.png?r=598&amp;spec=svn607"
 
 >...ets/styles/images/arrow_left.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/arrow_right.png?r=598&amp;spec=svn607"
 
 >...ts/styles/images/arrow_right.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/arrow_top.png?r=598&amp;spec=svn607"
 
 >...gets/styles/images/arrow_top.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/backImage.png?r=598&amp;spec=svn607"
 
 >...gets/styles/images/backImage.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/backgroundTop.png?r=598&amp;spec=svn607"
 
 >.../styles/images/backgroundTop.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bar-hue.png?r=598&amp;spec=svn607"
 
 >...idgets/styles/images/bar-hue.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bar-saturation.png?r=598&amp;spec=svn607"
 
 >...styles/images/bar-saturation.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_black.png?r=598&amp;spec=svn607"
 
 >...dgets/styles/images/bg_black.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_black2.png?r=598&amp;spec=svn607"
 
 >...gets/styles/images/bg_black2.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_black_horizontal.png?r=598&amp;spec=svn607"
 
 >...s/images/bg_black_horizontal.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blackhover.png?r=598&amp;spec=svn607"
 
 >.../styles/images/bg_blackhover.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blackhover_horizontal.png?r=598&amp;spec=svn607"
 
 >...ges/bg_blackhover_horizontal.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blackpressed.png?r=598&amp;spec=svn607"
 
 >...tyles/images/bg_blackpressed.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blackpressed_horizontal.png?r=598&amp;spec=svn607"
 
 >...s/bg_blackpressed_horizontal.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_blueenergy.png?r=598&amp;spec=svn607"
 
 >.../styles/images/bg_blueenergy.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_darkblue.png?r=598&amp;spec=svn607"
 
 >...ts/styles/images/bg_darkblue.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_darkbluehover.png?r=598&amp;spec=svn607"
 
 >...yles/images/bg_darkbluehover.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/bg_darkbluepressed.png?r=598&amp;spec=svn607"
 
 >...es/images/bg_darkbluepressed.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/blackbackground.png?r=598&amp;spec=svn607"
 
 >...tyles/images/blackbackground.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/check_black.png?r=598&amp;spec=svn607"
 
 >...ts/styles/images/check_black.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/check_disabled.png?r=598&amp;spec=svn607"
 
 >...styles/images/check_disabled.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/check_indeterminate_black.png?r=598&amp;spec=svn607"
 
 >...es/check_indeterminate_black.png</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/styles/images/check_indeterminate_disabled.png?r=598&amp;spec=svn607"
 
 >...check_indeterminate_disabled.png</option>
 
 </select>
 </td></tr></table>
 
 
 



 <div style="white-space:nowrap">
 Project members,
 <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxdatetimeinput.js%3Fr%3D607&amp;followup=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxdatetimeinput.js%3Fr%3D607"
 >sign in</a> to write a code review</div>


 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 <a href="/p/openappengine/source/list?path=/branches/grails/openappengine/web-app/js/jqwidgets/jqxdatetimeinput.js&start=598">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 60392 bytes,
 7 lines</div>
 
 <div><a href="//openappengine.googlecode.com/svn-history/r607/branches/grails/openappengine/web-app/js/jqwidgets/jqxdatetimeinput.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="https://ssl.gstatic.com/codesite/ph/8599073060794244502/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="https://ssl.gstatic.com/codesite/ph/8599073060794244502/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/8599073060794244502/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="https://ssl.gstatic.com/codesite/ph/8599073060794244502/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn607': '/branches/grails/openappengine/web-app/js/jqwidgets/jqxdatetimeinput.js'}
 codereviews = CR_controller.setup(
 {"loggedInUserEmail": null, "projectName": "openappengine", "domainName": null, "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "relativeBaseUrl": "", "projectHomeUrl": "/p/openappengine", "token": null, "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/8599073060794244502", "profileUrl": null}, '', 'svn607', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/8599073060794244502/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/8599073060794244502/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

