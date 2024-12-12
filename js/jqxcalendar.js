



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = null;
 
 
 var CS_env = {"projectHomeUrl": "/p/openappengine", "relativeBaseUrl": "", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "loggedInUserEmail": null, "profileUrl": null, "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/8599073060794244502", "domainName": null, "projectName": "openappengine", "token": null};
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
 
 
 <title>jqxcalendar.js - 
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
 | <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxcalendar.js%3Fr%3D607&amp;followup=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxcalendar.js%3Fr%3D607" onclick="_CS_click('/gb/ph/signin');"><u>Sign in</u></a>
 
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
 <span id="crumb_links" class="ifClosed"><a href="/p/openappengine/source/browse/branches/?r=607">branches</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/?r=607">grails</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/?r=607">openappengine</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/web-app/?r=607">web-app</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/?r=607">js</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/?r=607">jqwidgets</a><span class="sp">/&nbsp;</span>jqxcalendar.js</span>
 
 


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

><td class="source">(function(a){a.jqx.jqxWidget(&quot;jqxCalendar&quot;,&quot;&quot;,{});a.extend(a.jqx._jqxCalendar.prototype,{defineInstance:function(){if(this.disabled==undefined){this.disabled=false}if(this.multipleMonthRows==undefined){this.multipleMonthRows=1}if(this.multipleMonthColumns==undefined){this.multipleMonthColumns=1}if(this.minDate==undefined){this.minDate=a.jqx._jqxDateTimeInput.getDateTime(new Date());this.minDate._setYear(1900);this.minDate._setMonth(1);this.minDate._setDay(1);this.minDate._setHours(1);this.minDate._setMinutes(1);this.minDate._setSeconds(1);this.minDate._setMilliseconds(1)}if(this.maxDate==undefined){this.maxDate=a.jqx._jqxDateTimeInput.getDateTime(new Date());this.maxDate._setYear(2100);this.maxDate._setMonth(1);this.maxDate._setDay(1);this.maxDate._setHours(1);this.maxDate._setMinutes(1);this.maxDate._setSeconds(1);this.maxDate._setMilliseconds(1)}if(this.stepMonths==undefined){this.stepMonths=1}if(this.width==undefined){this.width=null}if(this.height==undefined){this.height=null}if(this.value==undefined){this.value=a.jqx._jqxDateTimeInput.getDateTime(new Date());this.value._setHours(1);this.value._setMinutes(1);this.value._setSeconds(1);this.value._setMilliseconds(1)}if(this.firstDayOfWeek==undefined){this.firstDayOfWeek=0}if(this.showWeekNumbers==undefined){this.showWeekNumbers=false}if(this.showDayNames==undefined){this.showDayNames=true}if(this.enableWeekend==undefined){this.enableWeekend=false}if(this.enableOtherMonthDays==undefined){this.enableOtherMonthDays=true}if(this.showOtherMonthDays==undefined){this.showOtherMonthDays=true}if(this.rowHeaderWidth==undefined){this.rowHeaderWidth=25}if(this.columnHeaderHeight==undefined){this.columnHeaderHeight=20}if(this.titleHeight==undefined){this.titleHeight=25}if(this.dayNameFormat==undefined){this.dayNameFormat=&quot;firstTwoLetters&quot;}if(this.titleFormat==undefined){this.titleFormat=&quot;MMMM yyyy&quot;}if(this.readOnly==undefined){this.readOnly=false}if(this.culture==undefined){this.culture=&quot;default&quot;}if(this.enableFastNavigation==undefined){this.enableFastNavigation=true}if(this.enableHover==undefined){this.enableHover=true}if(this.enableAutoNavigation==undefined){this.enableAutoNavigation=true}if(this.enableTooltips==undefined){this.enableTooltips=false}if(this.backText==undefined){this.backText=&quot;Back&quot;}if(this.forwardText==undefined){this.forwardText=&quot;Forward&quot;}if(this.specialDates==undefined){this.specialDates=new Array()}this.height=null;this.events=[&quot;backButtonClick&quot;,&quot;nextButtonClick&quot;,&quot;valuechanged&quot;,&quot;cellMouseDown&quot;,&quot;cellMouseUp&quot;,&quot;cellSelected&quot;,&quot;cellUnselected&quot;]},createInstance:function(d){this.setCalendarSize();var h=this.element.id;var g=this;this.propertyChangeMap.width=function(k,m,l,n){g.setCalendarSize()};this.propertyChangeMap.height=function(k,m,l,n){g.setCalendarSize()};this.host.attr(&quot;tabIndex&quot;,0);this.host.css(&quot;outline&quot;,&quot;none&quot;);this.host.addClass(this.toThemeProperty(&quot;jqx-calendar&quot;));this.host.addClass(this.toThemeProperty(&quot;jqx-widget&quot;));this.host.addClass(this.toThemeProperty(&quot;jqx-widget-content&quot;));this.host.addClass(this.toThemeProperty(&quot;jqx-rc-all&quot;));this.addHandler(a(a(this.element)[0]),&quot;keydown&quot;,function(l){var k=true;if(g._handleKey!=undefined){k=g._handleKey(l)}return k});var c=false;var f=this;this.render();var b=false;if(g.width!=null&amp;&amp;g.width.toString().indexOf(&quot;%&quot;)!=-1){b=true}if(g.height!=null&amp;&amp;g.height.toString().indexOf(&quot;%&quot;)!=-1){b=true}a(window).bind(&quot;resize.calendar&quot;+this.element.id,function(){var k=f.host.find(&quot;#View1&quot;+g.element.id);if(!c){c=true;f.render()}else{f.refreshTitle(k)}if(b){if(g.refreshTimer){clearTimeout(g.refreshTimer)}g.refreshTimer=setTimeout(function(){g.refresh()},1)}});if(b){setInterval(function(){var l=g.host.width();var k=g.host.height();if(g._lastWidth!=l||g._lastHeight!=k){g.refresh()}g._lastWidth=l;g._lastHeight=k},100)}var e=&quot;View1&quot;;this.propertyChangeMap.disabled=function(k,m,l,n){if(n){k.host.addClass(g.toThemeProperty(&quot;jqx-fill-state-disabled&quot;))}else{k.host.removeClass(g.toThemeProperty(&quot;jqx-fill-state-disabled&quot;))}g.refreshControl()}},setCalendarSize:function(){if(this.width!=null&amp;&amp;this.width.toString().indexOf(&quot;px&quot;)!=-1){this.host.width(this.width)}else{if(this.width!=undefined&amp;&amp;!isNaN(this.width)){this.host.width(this.width)}}if(this.width!=null&amp;&amp;this.width.toString().indexOf(&quot;%&quot;)!=-1){this.host.width(this.width)}if(this.height!=null&amp;&amp;this.height.toString().indexOf(&quot;px&quot;)!=-1){this.host.height(this.height)}else{if(this.height!=undefined&amp;&amp;!isNaN(this.height)){this.host.height(this.height)}}if(this.height!=null&amp;&amp;this.height.toString().indexOf(&quot;%&quot;)!=-1){this.host.height(this.height)}},_handleKey:function(b){if(this.readOnly){return true}var m=b.keyCode;var g=this.getSelectedDate();if(g==undefined){return true}if(b.altKey){return true}var d=new a.jqx._jqxDateTimeInput.getDateTime(g);var c=this.getViewStart();var f=this.getViewEnd();var k=a.data(this.element,&quot;View1&quot;+this.element.id);if(k==undefined||k==null){return true}if(m==38){d._addDays(-7);if(d.dateTime&lt;c){var h=this.navigateBackward();if(!h){return false}}this.selectDate(d.dateTime,&quot;key&quot;);for(i=0;i&lt;k.cells.length;i++){var l=k.cells[i];var e=l.dateTime.dateTime;if(l.isOtherMonth&amp;&amp;l.isSelected&amp;&amp;e&lt;=d.dateTime){this.navigateBackward();this.selectDate(d.dateTime,&quot;key&quot;);break}}return false}else{if(m==40){d._addDays(7);if(d.dateTime&gt;f){var h=this.navigateForward();if(!h){return false}}this.selectDate(d.dateTime,&quot;key&quot;);for(i=0;i&lt;k.cells.length;i++){var l=k.cells[i];var e=l.dateTime.dateTime;if(l.isOtherMonth&amp;&amp;l.isSelected&amp;&amp;e&gt;=d.dateTime){this.navigateForward();this.selectDate(d.dateTime,&quot;key&quot;);break}}return false}}if(m==37){d._addDays(-1);if(d.dateTime&lt;c){var h=this.navigateBackward();if(!h){return false}}this.selectDate(d.dateTime,&quot;key&quot;);for(i=0;i&lt;k.cells.length;i++){var l=k.cells[i];var e=l.dateTime.dateTime;if(l.isOtherMonth&amp;&amp;l.isSelected&amp;&amp;e&lt;=d.dateTime){if(d.dateTime&lt;this.getMinDate()||d.dateTime&gt;this.getMaxDate()){return}this.navigateBackward();this.selectDate(d.dateTime,&quot;key&quot;);break}}return false}else{if(m==39){d._addDays(1);if(d.dateTime&gt;f){var h=this.navigateForward();if(!h){return false}}this.selectDate(d.dateTime,&quot;key&quot;);for(i=0;i&lt;k.cells.length;i++){var l=k.cells[i];var e=l.dateTime.dateTime;if(l.isOtherMonth&amp;&amp;l.isSelected&amp;&amp;e&gt;=d.dateTime){if(d.dateTime&lt;this.getMinDate()||d.dateTime&gt;this.getMaxDate()){return}this.navigateForward();this.selectDate(d.dateTime,&quot;key&quot;);break}}return false}}return true},render:function(){if(this.multipleMonthRows==1&amp;&amp;this.multipleMonthColumns==1){var b=this._renderSingleCalendar(&quot;View1&quot;+this.element.id);this.host.append(b)}else{}},addSpecialDate:function(b,c,d){if(this.multipleMonthRows==1&amp;&amp;this.multipleMonthColumns==1){var e=this.specialDates.length;this.specialDates[e]={Date:b,Class:c,Tooltip:d};this.refreshControl()}},refresh:function(b){if(!b){this.render()}},refreshControl:function(){if(this.multipleMonthRows==1&amp;&amp;this.multipleMonthColumns==1){this.refreshSingleCalendar(&quot;View1&quot;+this.element.id,null)}},getViewStart:function(){var c=this.getVisibleDate();var b=this.getFirstDayOfWeek(c);return b.dateTime},getViewEnd:function(){var c=this.getViewStart();var b=new a.jqx._jqxDateTimeInput.getDateTime(c);b._addDays(41);return b.dateTime},refreshSingleCalendar:function(e,d){var f=this.host.find(&quot;#&quot;+e);var c=this.getVisibleDate();var b=this.getFirstDayOfWeek(c);this.refreshTitle(f);this.refreshCalendarCells(f,b,e);this.refreshRowHeader(f,e)},refreshRowHeader:function(l,g){if(!this.showWeekNumbers){return}var h=this.getVisibleDate();var c=this.getFirstDayOfWeek(h);var f=c.dayOfWeek;var r=this.getWeekOfYear(c);var m=l.find(&quot;#rowHeader&quot;);m.width(this.rowHeaderWidth);var d=c;var q=new Array();for(i=0;i&lt;6;i++){var e=r.toString();var p=new a.jqx._jqxCalendar.cell(d.dateTime);var k=i+1;var o=m.find(&quot;#headerCell&quot;+k);p.element=o;p.row=i;p.column=0;var b=o.find(&quot;#headerCellContent&quot;+k);b.addClass(this.toThemeProperty(&quot;jqx-calendar-row-cell&quot;));b[0].innerHTML=r;q[i]=p;d=new a.jqx._jqxDateTimeInput.getDateTime(new Date(d._addWeeks(1)));r=this.getWeekOfYear(d)}var n=a.data(this.element,l[0].id);n.rowCells=q;this._refreshOtherMonthRows(n,g)},_refreshOtherMonthRows:function(e,d){if(this.showOtherMonthDays){return}this._displayLastRow(true,d);this._displayFirstRow(true,d);var c=false;var f=false;for(i=0;i&lt;e.cells.length;i++){var b=e.cells[i];if(b.isVisible&amp;&amp;i&lt;7){c=true}else{if(b.isVisible&amp;&amp;i&gt;=e.cells.length-7){f=true}}}if(!c){this._displayFirstRow(false,d)}if(!f){this._displayLastRow(false,d)}},_displayLastRow:function(b,c){var g=this.host.find(&quot;#&quot;+c);var f=g.find(&quot;#calendarRowHeader&quot;+g[0].id);var d=f.find(&quot;#headerCellContent6&quot;);var e=g.find(&quot;#cellsTable&quot;+g[0].id).find(&quot;#row6&quot;);if(b){d.css(&quot;display&quot;,&quot;block&quot;);e.css(&quot;display&quot;,&quot;table-row&quot;)}else{d.css(&quot;display&quot;,&quot;none&quot;);e.css(&quot;display&quot;,&quot;none&quot;)}},_displayFirstRow:function(b,c){var e=this.host.find(&quot;#&quot;+c);var d=e.find(&quot;#calendarRowHeader&quot;+e[0].id);var f=d.find(&quot;#headerCellContent1&quot;);var g=e.find(&quot;#cellsTable&quot;+e[0].id).find(&quot;#row1&quot;);if(b){f.css(&quot;display&quot;,&quot;block&quot;);g.css(&quot;display&quot;,&quot;table-row&quot;)}else{f.css(&quot;display&quot;,&quot;none&quot;);g.css(&quot;display&quot;,&quot;none&quot;)}},_renderSingleCalendar:function(h,r){var o=this.host.find(&quot;#&quot;+h.toString());if(o!=null){o.remove()}var n=a(&quot;&lt;div id=&#39;&quot;+h.toString()+&quot;&#39;&gt;&lt;/div&gt;&quot;);var k=this.getVisibleDate();var d=this.getFirstDayOfWeek(k);var f=new a.jqx._jqxDateTimeInput.getDateTime(d.dateTime);f._addMonths(1);var q=a.jqx._jqxCalendar.monthView(d,f,null,null,null,n);if(r==undefined||r==null){this.host.append(n);if(this.height!=undefined&amp;&amp;!isNaN(this.height)){n.height(this.height)}else{if(this.height!=null&amp;&amp;this.height.toString().indexOf(&quot;px&quot;)!=-1){n.height(this.height)}}if(this.width!=undefined&amp;&amp;!isNaN(this.width)){n.width(this.width)}else{if(this.width!=null&amp;&amp;this.width.toString().indexOf(&quot;px&quot;)!=-1){n.width(this.width)}}if(this.width!=null&amp;&amp;this.width.toString().indexOf(&quot;%&quot;)!=-1){n.width(&quot;100%&quot;)}if(this.height!=null&amp;&amp;this.height.toString().indexOf(&quot;%&quot;)!=-1){n.height(&quot;100%&quot;)}}else{r.append(n)}a.data(this.element,h,q);var p=this.host.height()-this.titleHeight-this.columnHeaderHeight;if(!this.showDayNames){p=this.host.height()-this.titleHeight}if(this.rowHeaderWidth&lt;0){this.rowHeaderWidth=0}if(this.columnHeaderHeight&lt;0){this.columnHeaderHeight=0}if(this.titleHeight&lt;0){this.titleHeight=0}var c=this.rowHeaderWidth;var e=this.columnHeaderHeight;if(!this.showWeekNumbers){c=0}if(!this.showDayNames){e=0}var s=a(&quot;&lt;table style=&#39;border-collapse: collapse; margin: 0; padding: 0; width: 100%; height: 100%;&#39; cellspacing=&#39;0&#39; cellpadding=&#39;0&#39;&gt;&lt;tr id=&#39;calendarTitle&#39; width=&#39;100%&#39; height=&#39;&quot;+this.titleHeight+&quot;&#39;&gt;&lt;td NOWRAP id=&#39;leftNavigationArrow&#39;&gt;&lt;/td&gt;&lt;td align=&#39;center&#39; NOWRAP id=&#39;calendarTitleHeader&#39;&gt;&lt;/td&gt;&lt;td NOWRAP id=&#39;rightNavigationArrow&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr id=&#39;calendarHeader&#39; height=&#39;&quot;+e+&quot;&#39;&gt;&lt;td id=&#39;selectCell&#39; width=&#39;&quot;+c+&quot;&#39;&gt;&lt;/td&gt;&lt;td colspan=&#39;2&#39; style=&#39;padding-left: 2px; padding-right: 2px&#39; id=&#39;calendarColumnHeader&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr id=&#39;calendarContent&#39;&gt;&lt;td id=&#39;calendarRowHeader&#39; valign=&#39;top&#39; height=&#39;&quot;+p+&quot;&#39; width=&#39;&quot;+c+&quot;&#39;&gt;&lt;/td&gt;&lt;td valign=&#39;top&#39; colspan=&#39;2&#39; style=&#39;padding-left: 2px; padding-right: 2px&#39; id=&#39;cellsTable&#39; height=&#39;&quot;+p+&quot;&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=&#39;display: none;&#39; id=&#39;calendarFooter&#39;&gt;&lt;td style=&#39;display: none;&#39; id=&#39;todayButton&#39;&gt;&lt;/td&gt;&lt;td style=&#39;display: none;&#39; colspan=&#39;2&#39; id=doneButton&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;);n.append(s);n.find(&quot;#calendarTitle&quot;)[0].id=&quot;calendarTitle&quot;+h;n.find(&quot;#leftNavigationArrow&quot;)[0].id=&quot;leftNavigationArrow&quot;+h;n.find(&quot;#calendarTitleHeader&quot;)[0].id=&quot;calendarTitleHeader&quot;+h;n.find(&quot;#rightNavigationArrow&quot;)[0].id=&quot;rightNavigationArrow&quot;+h;n.find(&quot;#cellsTable&quot;)[0].id=&quot;cellsTable&quot;+h;n.find(&quot;#calendarRowHeader&quot;)[0].id=&quot;calendarRowHeader&quot;+h;n.find(&quot;#calendarFooter&quot;)[0].id=&quot;calendarFooter&quot;+h;n.find(&quot;#todayButton&quot;)[0].id=&quot;todayButton&quot;+h;n.find(&quot;#doneButton&quot;)[0].id=&quot;doneButton&quot;+h;n.find(&quot;#selectCell&quot;)[0].id=&quot;selectCell&quot;+h;n.find(&quot;#calendarColumnHeader&quot;)[0].id=&quot;calendarColumnHeader&quot;+h;n.find(&quot;table&quot;).css({padding:0,margin:0,border:&quot;none&quot;});n.find(&quot;td&quot;).css({padding:0,margin:0,border:&quot;none&quot;});n.find(&quot;tr&quot;).addClass(this.toThemeProperty(&quot;jqx-reset&quot;));n.addClass(this.toThemeProperty(&quot;jqx-widget-content&quot;));var b=n.find(&quot;#selectCell&quot;+h);b.addClass(this.toThemeProperty(&quot;jqx-reset&quot;));b.addClass(this.toThemeProperty(&quot;jqx-calendar-top-left-header&quot;));if(this.showWeekNumbers){this._renderRowHeader(n)}else{var g=n.find(&quot;#cellsTable&quot;+h);g[0].colSpan=3;var l=n.find(&quot;#calendarColumnHeader&quot;+h);l[0].colSpan=3;var m=n.find(&quot;#calendarRowHeader&quot;+h);m.css(&quot;display&quot;,&quot;none&quot;);var b=n.find(&quot;#selectCell&quot;+h);b.css(&quot;display&quot;,&quot;none&quot;)}if(this.showDayNames){this.renderColumnHeader(n)}if(r==undefined||r==null){this.renderTitle(n)}this.renderCalendarCells(n,d,h);this._refreshOtherMonthRows(q,h);n.find(&quot;tbody&quot;).css({border:&quot;none&quot;,background:&quot;transparent&quot;});return n},renderTitle:function(m){if(a.global==null||a.global==undefined){throw&quot;jquery.global.js is not loaded.&quot;}a.global.preferCulture(this.culture);var b=a(&quot;&lt;div style=&#39;background-color: transparent; margin: 0; padding: 0; border: none; float: left;&#39; &gt;&lt;/div&gt;&quot;);var h=a(&quot;&lt;div style=&#39;background-color: transparent; margin: 0; padding: 0; border: none; float: right;&#39;&gt;&lt;/div&gt;&quot;);var g=m.find(&quot;#calendarTitle&quot;+m[0].id);g.addClass(this.toThemeProperty(&quot;jqx-reset&quot;));g.addClass(this.toThemeProperty(&quot;jqx-widget-header&quot;));g.addClass(this.toThemeProperty(&quot;jqx-calendar-title-header&quot;));if(a.browser.msie&amp;&amp;a.browser.version&lt;8){if(g.find(&quot;td&quot;).css(&quot;background-color&quot;)!=&quot;transparent&quot;){var r=g.css(&quot;background-color&quot;);g.find(&quot;td&quot;).css(&quot;background-color&quot;,r)}if(g.find(&quot;td&quot;).css(&quot;background-image&quot;)!=&quot;transparent&quot;){var p=g.css(&quot;background-image&quot;);var n=g.css(&quot;background-repeat&quot;);var t=g.css(&quot;background-position&quot;);g.find(&quot;td&quot;).css(&quot;background-image&quot;,p);g.find(&quot;td&quot;).css(&quot;background-repeat&quot;,n);g.find(&quot;td&quot;).css(&quot;background-position&quot;,&quot;left center scroll&quot;)}}else{g.find(&quot;td&quot;).css(&quot;background-color&quot;,&quot;transparent&quot;)}if(this.disabled){g.addClass(this.toThemeProperty(&quot;jqx-calendar-title-header-disabled&quot;))}b.addClass(this.toThemeProperty(&quot;jqx-calendar-title-navigation&quot;));b.addClass(this.toThemeProperty(&quot;icon-arrow-left&quot;));var k=m.find(&quot;#leftNavigationArrow&quot;+m[0].id).append(b);b.height(this.titleHeight);h.addClass(this.toThemeProperty(&quot;jqx-calendar-title-navigation&quot;));h.addClass(this.toThemeProperty(&quot;icon-arrow-right&quot;));var e=m.find(&quot;#rightNavigationArrow&quot;+m[0].id).append(h);h.height(this.titleHeight);if(this.rowHeaderWidth&gt;=25){h.width(this.rowHeaderWidth);b.width(this.rowHeaderWidth)}else{h.width(25);b.width(25)}if(this.enableTooltips&amp;&amp;this.tooltip!=null){this.tooltip.theme=this.theme;this.tooltip.add(k,this.backText);this.tooltip.add(e,this.forwardText)}var c=m.find(&quot;#calendarTitleHeader&quot;+m[0].id);var q=a.global.format(this.value.dateTime,this.titleFormat,this.culture);var l=a(&quot;&lt;div style=&#39;background: transparent; margin: 0; padding: 0; border: none;&#39; id=&#39;titleContent&#39;&gt;&quot;+q+&quot;&lt;/div&gt;&quot;);c.append(l);l.addClass(this.toThemeProperty(&quot;jqx-calendar-title-navigation&quot;));var f=parseInt(b.width());var s=m.width()-2*f;var o=c.find(&quot;#titleContent&quot;).width(s);a.data(b,&quot;navigateLeft&quot;,this);a.data(h,&quot;navigateRight&quot;,this);var d=a.jqx.mobile.isTouchDevice();if(!this.disabled){this.addHandler(b,&quot;mousedown&quot;,function(v){a.data(b,&quot;navigateLeftRepeat&quot;,true);var u=a.data(b,&quot;navigateLeft&quot;);if(u.enableFastNavigation&amp;&amp;!d){u.startRepeat(u,b,true,250)}u.navigateBackward();return u._raiseEvent(0,v)});this.addHandler(b,&quot;mouseup&quot;,function(u){a.data(b,&quot;navigateLeftRepeat&quot;,false)});this.addHandler(b,&quot;mouseleave&quot;,function(u){a.data(b,&quot;navigateLeftRepeat&quot;,false)});this.addHandler(h,&quot;mousedown&quot;,function(v){a.data(h,&quot;navigateRightRepeat&quot;,true);var u=a.data(h,&quot;navigateRight&quot;);if(u.enableFastNavigation&amp;&amp;!d){u.startRepeat(u,h,false,250)}u.navigateForward();return u._raiseEvent(1,v)});this.addHandler(h,&quot;mouseup&quot;,function(u){a.data(h,&quot;navigateRightRepeat&quot;,false)});this.addHandler(h,&quot;mouseleave&quot;,function(u){a.data(h,&quot;navigateRightRepeat&quot;,false)})}},refreshTitle:function(f){if(a.global==null||a.global==undefined){throw&quot;jquery.global.js is not loaded.&quot;}a.global.preferCulture(this.culture);var k=a.global.format(this.value.dateTime,this.titleFormat,this.culture);var c=f.find(&quot;#calendarTitleHeader&quot;+f[0].id);var g=c.find(&quot;#titleContent&quot;);var e=a(&quot;&lt;div style=&#39;background: transparent; margin: 0; padding: 0; border: none;&#39; id=&#39;titleContent&#39;&gt;&quot;+k+&quot;&lt;/div&gt;&quot;);c.append(e);e.addClass(this.toThemeProperty(&quot;jqx-calendar-title-navigation&quot;));if(g!=null){g.remove()}var b=this.host.find(&quot;.jqx-calendar-title-navigation&quot;);var d=parseInt(b.width());var l=f.width()-2*d;var h=c.find(&quot;#titleContent&quot;).width(l)},startRepeat:function(d,b,f,e){var c=window.setTimeout(function(){var g=a.data(b,&quot;navigateLeftRepeat&quot;);if(!f){g=a.data(b,&quot;navigateRightRepeat&quot;)}if(g){if(e&lt;25){e=25}if(f){d.navigateBackward();d.startRepeat(d,b,true,e-25)}else{d.navigateForward();c=d.startRepeat(d,b,false,e-25)}}else{window.clearTimeout(c);return}},e)},navigateForward:function(d){if(d==undefined||d==null){d=this.stepMonths}var b=this.value.day;var e=this.value.month;if(e+d&lt;=12){var c=this.value._daysInMonth(this.value.year,this.value.month+d);if(b&gt;c){b=c}}return this.setDate(new Date(this.value.year,this.value.month-1+d,b))},navigateBackward:function(e){if(e==undefined||e==null){e=this.stepMonths}var b=this.value.day;var f=this.value.month;if(f-e&gt;=1){var d=this.value._daysInMonth(this.value.year,this.value.month-e);if(b&gt;d){b=d}}var c=new Date(this.value.year,this.value.month-1-e,b);return this.setDate(c)},refreshCalendarCells:function(n,d,f){var c=n.find(&quot;#cellsTable&quot;+n[0].id);var h=c.find(&quot;#cellTable&quot;+f.toString());var e=d;var t=new Array();var g=0;var o=new a.jqx._jqxDateTimeInput.getDateTime(new Date());for(i=0;i&lt;6;i++){for(j=0;j&lt;7;j++){var p=i+1;var m=j+1;var l=&quot;#cell&quot;+p+m;var s=new a.jqx._jqxCalendar.cell(e.dateTime);var r=h.find(l);s.element=r;s.row=i;s.column=j;s.isVisible=true;s.isOtherMonth=false;s.isToday=false;s.isWeekend=false;s.isHighlighted=false;s.isSelected=false;if(e.month!=this.value.month){s.isOtherMonth=true;s.isVisible=this.showOtherMonthDays}if(e.month==o.month&amp;&amp;e.day==o.day&amp;&amp;e.year==o.year){s.isToday=true}if(e.isWeekend()){s.isWeekend=true}a.data(this.element,&quot;cellContent&quot;+l.substring(1),s);t[g]=s;g++;var b=r.find(&quot;#cellContent&quot;+l.substring(1));if(this.specialDates.length&gt;0){if(this.tooltip!=null){if(this.tooltip.hasTooltip(b)){this.tooltip.remove(b)}}}b[0].innerHTML=e.day;this.applyCellStyle(s,r,b);e=new a.jqx._jqxDateTimeInput.getDateTime(new Date(e._addDays(1)))}}var q=a.data(this.element,n[0].id);if(q!=undefined&amp;&amp;q!=null){q.cells=t}},renderCalendarCells:function(x,m,p){var s=a(&quot;&lt;table style=&#39;width: 100%; height: 100%;&#39; cellspacing=&#39;0&#39; cellpadding=&#39;1&#39; id=cellTable&quot;+p.toString()+&quot;&gt;&lt;tr id=&#39;row1&#39;&gt;&lt;td id=&#39;cell11&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell12&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell13&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell14&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell15&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell16&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell17&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr id=&#39;row2&#39;&gt;&lt;td id=&#39;cell21&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell22&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell23&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell24&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell25&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell26&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell27&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr id=&#39;row3&#39;&gt;&lt;td id=&#39;cell31&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell32&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell33&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell34&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell35&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell36&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell37&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr id=&#39;row4&#39;&gt;&lt;td id=&#39;cell41&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell42&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell43&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell44&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell45&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell46&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell47&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr id=&#39;row5&#39;&gt;&lt;td id=&#39;cell51&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell52&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell53&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell54&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell55&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell56&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell57&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr id=&#39;row6&#39;&gt;&lt;td id=&#39;cell61&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell62&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell63&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell64&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell65&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell66&#39;&gt;&lt;/td&gt;&lt;td id=&#39;cell67&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;);var t=x.find(&quot;#cellsTable&quot;+x[0].id);s.find(&quot;table&quot;).css({background:&quot;none&quot;,padding:0,margin:0,border:0});s.find(&quot;td&quot;).css({background:&quot;none&quot;,padding:1,margin:0,border:0});s.find(&quot;tr&quot;).css({background:&quot;none&quot;,padding:0,margin:0,border:0});var h=t.find(&quot;#cellTable&quot;+p.toString());if(h!=null){h.remove()}t.append(s);s.addClass(this.toThemeProperty(&quot;jqx-calendar-view&quot;));var l=m;var b=this.showDayNames?1:0;var g=this.showWeekNumbers?1:0;var e=new Array();var q=0;var r=(x.width()-this.rowHeaderWidth-2)/7;if(!this.showWeekNumbers){r=(x.width()-2)/7}var v=new a.jqx._jqxDateTimeInput.getDateTime(new Date());for(i=0;i&lt;6;i++){for(j=0;j&lt;7;j++){var f=i+1;var u=j+1;var o=&quot;#cell&quot;+f+u;var c=new a.jqx._jqxCalendar.cell(l.dateTime);var n=s.find(o);c.isVisible=true;if(l.month!=this.value.month){c.isOtherMonth=true;c.isVisible=this.showOtherMonthDays}if(l.month==v.month&amp;&amp;l.day==v.day&amp;&amp;l.year==v.year){c.isToday=true}if(l.isWeekend()){c.isWeekend=true}c.element=n;c.row=b;c.column=g;if(c.isVisible){var d=&quot;&lt;div id=&#39;cellContent&quot;+o.substring(1)+&quot;&#39;&gt;&quot;+l.day+&quot;&lt;/div&gt;&quot;;n.append(d);n.width(r)}else{var d=&quot;&lt;div id=&#39;cellContent&quot;+o.substring(1)+&quot;&#39;&gt;&quot;+l.day+&quot;&lt;/div&gt;&quot;;n.append(d);n.width(r)}l=new a.jqx._jqxDateTimeInput.getDateTime(new Date(l._addDays(1)));a.data(n,o,this);a.data(this.element,&quot;cellContent&quot;+o.substring(1),c);var y=this;this.addHandler(n,&quot;mousedown&quot;,function(C){var A=a.data(n,o);if(!A.readOnly&amp;&amp;!y.disabled){var B=a(C.target);var z=a.data(y.element,B[0].id);var k=A._raiseEvent(3,C);if(z!=null&amp;&amp;z!=undefined){A.selectDate(z.dateTime.dateTime,&quot;mouse&quot;);if(z.isOtherMonth&amp;&amp;A.enableAutoNavigation){if(z.row&lt;2){A.navigateBackward()}else{A.navigateForward()}A.selectDate(z.dateTime.dateTime,&quot;mouse&quot;)}}return k}});if(!y.disabled){this.addHandler(n,&quot;mouseup&quot;,function(z){var k=a.data(n,o);if(!k.readOnly){return k._raiseEvent(4,z)}});this.addHandler(n,&quot;mouseover&quot;,function(B){var z=a.data(n,o);if(!z.readOnly){var A=a(B.target);var k=a.data(y.element,A[0].id);if(k!=null&amp;&amp;k!=undefined){k.isHighlighted=true;z.applyCellStyle(k,k.element,A)}}});this.addHandler(n,&quot;mouseout&quot;,function(B){var z=a.data(n,o);if(!z.readOnly){var A=a(B.target);var k=a.data(y.element,A[0].id);if(k!=null&amp;&amp;k!=undefined){k.isHighlighted=false;z.applyCellStyle(k,k.element,A)}}})}g++;e[q]=c;q++}g=0;b++}var w=a.data(this.element,x[0].id);if(w!=undefined&amp;&amp;w!=null){w.cells=e}this.applyCellStyles()},setMaxDate:function(b){this.maxDate=a.jqx._jqxDateTimeInput.getDateTime(b)},getMaxDate:function(){if(this.maxDate!=null&amp;&amp;this.maxDate!=undefined){return this.maxDate.dateTime}return null},setMinDate:function(b){this.minDate=a.jqx._jqxDateTimeInput.getDateTime(b)},getMinDate:function(){if(this.minDate!=null&amp;&amp;this.minDate!=undefined){return this.minDate.dateTime}return null},setDate:function(b){if(b&lt;this.getMinDate()||b&gt;this.getMaxDate()){return false}this.value._setYear(b.getFullYear());this.value._setDay(b.getDate());this.value._setMonth(b.getMonth()+1);this.refreshControl();this._raiseEvent(&quot;2&quot;);return true},getDate:function(){if(this.value==undefined){return new Date()}return this.value.dateTime},selectDate:function(c,d){if(d==null||d==undefined){d=&quot;none&quot;}var e=a.data(this.element,&quot;View1&quot;+this.element.id);if(e==undefined||e==null){return}var b=this;a.each(e.cells,function(){var f=this;var g=f.dateTime;if(g.day==c.getDate()&amp;&amp;g.month==(1+c.getMonth())&amp;&amp;g.year==c.getFullYear()&amp;&amp;f.isSelected){return}if(f.isSelected){b._raiseEvent(&quot;6&quot;,{selectionType:d})}f.isSelected=false;if(g.day==c.getDate()&amp;&amp;g.month==(1+c.getMonth())&amp;&amp;g.year==c.getFullYear()){f.isSelected=true;f.element.focus();if(!f.isOtherMonth){b.value._setMonth(c.getMonth()+1);b.value._setDay(c.getDate());b.value._setYear(c.getFullYear());b._raiseEvent(&quot;2&quot;);b._raiseEvent(&quot;5&quot;,{selectionType:d})}}});this.applyCellStyles()},getSelectedDate:function(){var c=a.data(this.element,&quot;View1&quot;+this.element.id);if(c==undefined||c==null){return}for(i=0;i&lt;c.cells.length;i++){var b=c.cells[i];var d=b.dateTime.dateTime;if(b.isSelected){return d}}},getSelectedCell:function(){var c=a.data(this.element,&quot;View1&quot;+this.element.id);if(c==undefined||c==null){return}for(i=0;i&lt;c.cells.length;i++){var b=c.cells[i];var d=b.dateTime.dateTime;if(b.isSelected){return b}}},applyCellStyle:function(b,c,e){var d=this;e.removeClass(this.toThemeProperty(&quot;jqx-fill-state-hover&quot;));e.removeClass(this.toThemeProperty(&quot;jqx-fill-state-disabled&quot;));e.removeClass(this.toThemeProperty(&quot;jqx-fill-state-pressed&quot;));e.removeClass(this.toThemeProperty(&quot;jqx-calendar-cell&quot;));e.removeClass(this.toThemeProperty(&quot;jqx-calendar-cell-othermonth&quot;));e.removeClass(this.toThemeProperty(&quot;jqx-calendar-cell-weekend&quot;));e.removeClass(this.toThemeProperty(&quot;jqx-calendar-cell-hidden&quot;));e.removeClass(this.toThemeProperty(&quot;jqx-calendar-cell-today&quot;));e.removeClass(this.toThemeProperty(&quot;jqx-calendar-cell-hover&quot;));e.removeClass(this.toThemeProperty(&quot;jqx-calendar-cell-selected&quot;));e.removeClass(this.toThemeProperty(&quot;jqx-calendar-cell-disabled&quot;));e.removeClass(this.toThemeProperty(&quot;jqx-rc-all&quot;));e.addClass(this.toThemeProperty(&quot;jqx-rc-all&quot;));if(this.disabled){e.addClass(this.toThemeProperty(&quot;jqx-calendar-cell-disabled&quot;));e.addClass(this.toThemeProperty(&quot;jqx-fill-state-disabled&quot;))}if(b.isOtherMonth&amp;&amp;this.enableOtherMonthDays&amp;&amp;b.isVisible){e.addClass(this.toThemeProperty(&quot;jqx-calendar-cell-othermonth&quot;))}if(b.isWeekend&amp;&amp;this.enableWeekend&amp;&amp;b.isVisible&amp;&amp;b.isVisible){e.addClass(this.toThemeProperty(&quot;jqx-calendar-cell-weekend&quot;))}if(!b.isVisible){e.addClass(this.toThemeProperty(&quot;jqx-calendar-cell-hidden&quot;))}else{e.addClass(this.toThemeProperty(&quot;jqx-calendar-cell&quot;))}if(b.isSelected&amp;&amp;b.isVisible){e.addClass(this.toThemeProperty(&quot;jqx-calendar-cell-selected&quot;));e.addClass(this.toThemeProperty(&quot;jqx-fill-state-pressed&quot;))}if(b.isHighlighted&amp;&amp;b.isVisible&amp;&amp;this.enableHover){e.addClass(this.toThemeProperty(&quot;jqx-calendar-cell-hover&quot;));e.addClass(this.toThemeProperty(&quot;jqx-fill-state-hover&quot;))}if(b.isToday&amp;&amp;b.isVisible){e.addClass(this.toThemeProperty(&quot;jqx-calendar-cell-today&quot;))}if(this.specialDates.length&gt;0){var f=this;a.each(this.specialDates,function(){if(this.Class!=undefined&amp;&amp;this.Class!=null&amp;&amp;this.Class!=&quot;&quot;){e.removeClass(this.Class)}else{e.removeClass(d.toThemeProperty(&quot;jqx-calendar-cell-specialDate&quot;))}if(b.dateTime._equalDate(this.Date)){if(b.tooltip==null&amp;&amp;this.Tooltip!=null&amp;&amp;f.tooltip!=null){b.tooltip=this.Tooltip;f.tooltip.remove(e);f.tooltip.theme=f.theme;f.tooltip.add(e,this.Tooltip)}e.removeClass(d.toThemeProperty(&quot;jqx-calendar-cell-othermonth&quot;));e.removeClass(d.toThemeProperty(&quot;jqx-calendar-cell-weekend&quot;));if(this.Class==undefined||this.Class==&quot;&quot;){e.addClass(d.toThemeProperty(&quot;jqx-calendar-cell-specialDate&quot;));return false}else{e.addClass(this.Class);return false}}})}},applyCellStyles:function(){var e=a.data(this.element,&quot;View1&quot;+this.element.id);if(e==undefined||e==null){return}for(i=0;i&lt;e.cells.length;i++){var b=e.cells[i];var c=a(b.element);var d=c.find(&quot;#cellContent&quot;+c[0].id);this.applyCellStyle(b,c,d)}},getWeekOfYear:function(c){var b=c.dayOfYear(c.dateTime)-1;var d=c.dayOfWeek-(b%7);var e=((d-this.firstDayOfWeek)+14)%7;return Math.ceil((((b+e)/7)+1))},renderColumnHeader:function(x){if(!this.showDayNames){return}var d=this.getVisibleDate();var k=this.getFirstDayOfWeek(d);var o=k.dayOfWeek;var y=this.getWeekOfYear(k);if(a.global==null||a.global==undefined){throw&quot;jquery.global.js is not loaded.&quot;}a.global.preferCulture(this.culture);var s=this.firstDayOfWeek;var w=a.global.culture.calendar.days.names;var t=a(&quot;&lt;table style=&#39;border-collapse: collapse; width: 100%; height: 100%;&#39; cellspacing=&#39;0&#39; cellpadding=&#39;1&#39; id=&#39;columnHeader&#39;&gt;&lt;tr id=&#39;columnHeader&#39;&gt;&lt;td id=&#39;columnCell1&#39;&gt;&lt;/td&gt;&lt;td id=&#39;columnCell2&#39;&gt;&lt;/td&gt;&lt;td id=&#39;columnCell3&#39;&gt;&lt;/td&gt;&lt;td id=&#39;columnCell4&#39;&gt;&lt;/td&gt;&lt;td id=&#39;columnCell5&#39;&gt;&lt;/td&gt;&lt;td id=&#39;columnCell6&#39;&gt;&lt;/td&gt;&lt;td id=&#39;columnCell7&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;);t.find(&quot;table&quot;).addClass(this.toThemeProperty(&quot;jqx-reset&quot;));t.find(&quot;tr&quot;).addClass(this.toThemeProperty(&quot;jqx-reset&quot;));t.find(&quot;td&quot;).css({background:&quot;transparent&quot;,padding:1,margin:0,border:&quot;none&quot;});t.addClass(this.toThemeProperty(&quot;jqx-reset&quot;));t.addClass(this.toThemeProperty(&quot;jqx-calendar-column-header&quot;));var g=x.find(&quot;#calendarColumnHeader&quot;+x[0].id);var m=g.find(&quot;#columnHeader&quot;);if(m!=null){m.remove()}g.append(t);var p=new Array();var h=k;var q=(x.width()-this.rowHeaderWidth-2)/7;if(!this.showWeekNumbers){q=(x.width()-2)/7}if(a.jqx._jqxTooltip!=null&amp;&amp;a.jqx._jqxTooltip!=undefined){var u=g.jqxTooltip();this.tooltip=a.data(u[0],&quot;jqxTooltip&quot;).instance;this.tooltip.location=&quot;relative&quot;;this.tooltip.verticalOffset=30}for(i=0;i&lt;7;i++){var f=w[s];switch(this.dayNameFormat){case&quot;default&quot;:f=a.global.culture.calendar.days.namesAbbr[s];break;case&quot;shortest&quot;:f=a.global.culture.calendar.days.namesShort[s];break;case&quot;firstTwoLetters&quot;:f=f.substring(0,2);break;case&quot;firstLetter&quot;:f=f.substring(0,1);break}var b=new a.jqx._jqxCalendar.cell(h.dateTime);var n=i+1;var l=t.find(&quot;#columnCell&quot;+n);var r=i;if(this.enableTooltips&amp;&amp;this.tooltip!=null){this.tooltip.add(l,w[s])}if(s&gt;=6){s=0}else{s++}i=r;b.element=l;b.row=0;b.column=i+1;var e=this._textwidth(f);var c=&quot;&lt;div style=&#39;padding: 0; margin: 0; border: none; background: transparent;&#39; id=&#39;columnCell&quot;+n+&quot;&#39;&gt;&quot;+f+&quot;&lt;/div&gt;&quot;;l.append(c);l.find(&quot;#columnCell&quot;+n).addClass(this.toThemeProperty(&quot;jqx-calendar-column-cell&quot;));l.width(q);if(this.disabled){l.find(&quot;#columnCell&quot;+n).addClass(this.toThemeProperty(&quot;jqx-calendar-column-cell-disabled&quot;))}if(e&gt;0&amp;&amp;q&gt;0){while(e&gt;l.width()){if(f.length==0){break}f=f.substring(0,f.length-1);l.find(&quot;#columnCell&quot;+n).html(f);e=this._textwidth(f)}}p[i]=b;h=new a.jqx._jqxDateTimeInput.getDateTime(new Date(h._addDays(1)))}if(parseInt(g.width())&gt;parseInt(this.host.width())){g.width(this.host.width())}var v=a.data(this.element,x[0].id);v.columnCells=p},_textwidth:function(d){var c=a(&quot;&lt;span&gt;&quot;+d+&quot;&lt;/span&gt;&quot;);c.addClass(this.toThemeProperty(&quot;jqx-calendar-column-cell&quot;));a(this.host).append(c);var b=c.width();c.remove();return b},_textheight:function(d){var c=a(&quot;&lt;span&gt;&quot;+d+&quot;&lt;/span&gt;&quot;);a(this.host).append(c);var b=c.height();c.remove();return b},_renderRowHeader:function(l){var g=this.getVisibleDate();var c=this.getFirstDayOfWeek(g);var f=c.dayOfWeek;var r=this.getWeekOfYear(c);var m=a(&quot;&lt;table style=&#39;overflow: hidden; width: 100%; height: 100%;&#39; cellspacing=&#39;0&#39; cellpadding=&#39;1&#39; id=&#39;rowHeader&#39;&gt;&lt;tr id=&#39;rowHeader1&#39;&gt;&lt;td id=&#39;headerCell1&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr id=&#39;rowHeader2&#39;&gt;&lt;td id=&#39;headerCell2&#39;/&gt;&lt;/tr&gt;&lt;tr id=&#39;rowHeader3&#39;&gt;&lt;td id=&#39;headerCell3&#39;/&gt;&lt;/tr&gt;&lt;tr id=&#39;rowHeader4&#39;&gt;&lt;td id=&#39;headerCell4&#39;/&gt;&lt;/tr&gt;&lt;tr id=&#39;rowHeader5&#39;&gt;&lt;td id=&#39;headerCell5&#39;/&gt;&lt;/tr&gt;&lt;tr id=&#39;rowHeader6&#39;&gt;&lt;td id=&#39;headerCell6&#39;/&gt;&lt;/tr&gt;&lt;/table&gt;&quot;);m.find(&quot;table&quot;).addClass(this.toThemeProperty(&quot;jqx-reset&quot;));m.find(&quot;td&quot;).addClass(this.toThemeProperty(&quot;jqx-reset&quot;));m.find(&quot;tr&quot;).addClass(this.toThemeProperty(&quot;jqx-reset&quot;));m.addClass(this.toThemeProperty(&quot;jqx-calendar-row-header&quot;));m.width(this.rowHeaderWidth);var h=l.find(&quot;#rowHeader&quot;);if(h!=null){h.remove()}l.find(&quot;#calendarRowHeader&quot;+l[0].id).append(m);var d=c;var q=new Array();for(i=0;i&lt;6;i++){var e=r.toString();var p=new a.jqx._jqxCalendar.cell(d.dateTime);var k=i+1;var o=m.find(&quot;#headerCell&quot;+k);p.element=o;p.row=i;p.column=0;var b=&quot;&lt;div style=&#39;background: transparent; border: none; padding: 0; margin: 0;&#39; id =&#39;headerCellContent&quot;+k+&quot;&#39;&gt;&quot;+e+&quot;&lt;/div&gt;&quot;;o.append(b);o.find(&quot;#headerCellContent&quot;+k).addClass(this.toThemeProperty(&quot;jqx-calendar-row-cell&quot;));q[i]=p;d=new a.jqx._jqxDateTimeInput.getDateTime(new Date(d._addWeeks(1)));r=this.getWeekOfYear(d)}var n=a.data(this.element,l[0].id);n.rowCells=q},getFirstDayOfWeek:function(e){var d=e;if(this.firstDayOfWeek&lt;0||this.firstDayOfWeek&gt;6){this.firstDayOfWeek=6}var c=d.dayOfWeek-this.firstDayOfWeek;if(c&lt;=0){c+=7}var b=a.jqx._jqxDateTimeInput.getDateTime(d._addDays(-c));return b},getVisibleDate:function(){var c=new a.jqx._jqxDateTimeInput.getDateTime(new Date(this.value.dateTime));if(c&lt;this.minDate){c=this.minDate}if(c&gt;this.maxDate){this.visibleDate=this.maxDate}var d=c.day;var b=a.jqx._jqxDateTimeInput.getDateTime(c._addDays(-d+1));c=b;return c},destroy:function(){this.host.removeClass()},_raiseEvent:function(g,c){if(c==undefined){c={owner:null}}var d=this.events[g];var e=c?c:{};e.owner=this;var f=new jQuery.Event(d);f.owner=this;f.args=e;if(g==0||g==1||g==2||g==3||g==4||g==5||g==6){f.args.date=this.getDate();f.args.selectedDate=this.getSelectedDate()}var b=this.host.trigger(f);if(g==0||g==1){b=false}return b},propertyChangedHandler:function(b,c,h,f){if(this.isInitialized==undefined||this.isInitialized==false){return}if(c==&quot;width&quot;||c==&quot;height&quot;){var g=this.host.find(&quot;#View1&quot;+this.element.id);if(g.length&gt;0){this.setCalendarSize();if(this.height!=undefined&amp;&amp;!isNaN(this.height)){g.height(this.height)}else{if(this.height!=null&amp;&amp;this.height.toString().indexOf(&quot;px&quot;)!=-1){g.height(this.height)}}if(this.width!=undefined&amp;&amp;!isNaN(this.width)){g.width(this.width)}else{if(this.width!=null&amp;&amp;this.width.toString().indexOf(&quot;px&quot;)!=-1){g.width(this.width)}}var e=this.host.height()-this.titleHeight-this.columnHeaderHeight;var d=&quot;View1&quot;+this.element.id;g.find(&quot;#cellsTable&quot;+d).height(e);g.find(&quot;#calendarRowHeader&quot;+d).height(e);this.refreshControl()}return}else{if(c==&quot;theme&quot;){a.jqx.utilities.setTheme(h,f,this.host)}else{this.render()}}}})})(jQuery);(function(a){a.jqx._jqxCalendar.cell=function(c){var b={dateTime:new a.jqx._jqxDateTimeInput.getDateTime(c),isToday:false,isWeekend:false,isOtherMonth:false,isVisible:true,isSelected:false,isHighlighted:false,element:null,row:-1,column:-1,tooltip:null};return b};a.jqx._jqxCalendar.monthView=function(c,h,d,b,f,e){var g={start:c,end:h,cells:d,rowCells:b,columnCells:f,element:e};return g}})(jQuery);<br></td></tr
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
 &nbsp; <a href="/p/openappengine/source/diff?spec=svn607&r=598&amp;format=side&amp;path=/branches/grails/openappengine/web-app/js/jqwidgets/jqxcalendar.js&amp;old_path=/branches/grails/openappengine/web-app/js/jqwidgets/jqxcalendar.js&amp;old=">Diff</a>
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
 
 var selected_path = '/branches/grails/openappengine/web-app/js/jqwidgets/jqxcalendar.js';
 
 
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
 selected="selected"
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
 <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxcalendar.js%3Fr%3D607&amp;followup=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxcalendar.js%3Fr%3D607"
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
 
 <a href="/p/openappengine/source/list?path=/branches/grails/openappengine/web-app/js/jqwidgets/jqxcalendar.js&start=598">All revisions of this file</a>
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
 
 <div>Size: 33172 bytes,
 7 lines</div>
 
 <div><a href="//openappengine.googlecode.com/svn-history/r607/branches/grails/openappengine/web-app/js/jqwidgets/jqxcalendar.js">View raw file</a></div>
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
 var paths = {'svn607': '/branches/grails/openappengine/web-app/js/jqwidgets/jqxcalendar.js'}
 codereviews = CR_controller.setup(
 {"projectHomeUrl": "/p/openappengine", "relativeBaseUrl": "", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "loggedInUserEmail": null, "profileUrl": null, "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/8599073060794244502", "domainName": null, "projectName": "openappengine", "token": null}, '', 'svn607', paths,
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

