



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 (function(){(function(){function c(a){this.t={};this.tick=function(a,b,c){b=void 0!=c?c:(new Date).getTime();this.t[a]=b;if(void 0==c)try{window.console.timeStamp("CSI/"+a)}catch(d){}};this.tick("start",null,a)}var a;window.performance&&(a=window.performance.timing);var b=a?new c(a.responseStart):new c;window.jstiming={Timer:c,load:b};a&&(b=a.navigationStart,a=a.responseStart,0<b&&a>=b&&(window.jstiming.srt=a-b));try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT)),null==a&&
window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT),a&&(window.jstiming.pt=a)}catch(d){}})();})();

 
 
 
 
 var codesite_token = null;
 
 
 var CS_env = {"projectHomeUrl": "/p/openappengine", "token": null, "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/8599073060794244502", "profileUrl": null, "domainName": null, "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "relativeBaseUrl": "", "loggedInUserEmail": null, "projectName": "openappengine"};
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
 
 
 <title>jqxnumberinput.js - 
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
 | <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxnumberinput.js%3Fr%3D607&amp;followup=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxnumberinput.js%3Fr%3D607" onclick="_CS_click('/gb/ph/signin');"><u>Sign in</u></a>
 
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
 <span id="crumb_links" class="ifClosed"><a href="/p/openappengine/source/browse/branches/?r=607">branches</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/?r=607">grails</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/?r=607">openappengine</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/web-app/?r=607">web-app</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/?r=607">js</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/?r=607">jqwidgets</a><span class="sp">/&nbsp;</span>jqxnumberinput.js</span>
 
 


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

><td class="source">(function(a){a.jqx.jqxWidget(&quot;jqxNumberInput&quot;,&quot;&quot;,{});a.jqx.textInput={};a.extend(a.jqx.textInput,{addHandler:function(b){a(b).data(&quot;lastValue&quot;,a(b).val());a(b).bind(&quot;keyup.textchange&quot;,a.jqx.textInput.handler);a(b).bind(&quot;cut.textchange paste.textchange input.textchange&quot;,a.jqx.textInput.delayedHandler)},removeHandler:function(b){a(b).unbind(&quot;.textchange&quot;)},handler:function(b){a.jqx.textInput.triggerIfChanged(a(this))},delayedHandler:function(c){var b=a(this);setTimeout(function(){a.jqx.textInput.triggerIfChanged(b)},25)},triggerIfChanged:function(d){var e=d.val();var c=d.data(&quot;lastValue&quot;);if(e!==d.data(&quot;lastValue&quot;)){d.trigger(&quot;textchange&quot;,[d.data(&quot;lastValue&quot;)]);var b=false;if(d.val()===&quot;&quot;&amp;&amp;d.val()!=c){b=true;d.data(&quot;emptyValue&quot;,true)}else{b=false;d.data(&quot;emptyValue&quot;,false)}d.trigger(&quot;showPlaceHolder&quot;,b);d.data(&quot;lastValue&quot;,e)}}});a.extend(a.jqx._jqxNumberInput.prototype,{defineInstance:function(){this.value=null;this.decimal=0;this.min=0;this.max=99999999;this.width=null;this.validationMessage=&quot;Invalid value&quot;;this.height=50;this.textAlign=&quot;right&quot;;this.readOnly=false;this.promptChar=&quot;_&quot;;this.decimalDigits=2;this.decimalSeparator=&quot;.&quot;;this.groupSeparator=&quot;,&quot;;this.groupSize=3;this.symbol=&quot;&quot;;this.symbolPosition=&quot;left&quot;;this.digits=8;this.negative=false;this.negativeSymbol=&quot;-&quot;;this.disabled=false;this.inputMode=&quot;advanced&quot;;this.spinButtons=false;this.spinButtonsWidth=18;this.spinButtonsStep=1;this.spinMode=&quot;advanced&quot;;this.events=[&quot;valuechanged&quot;,&quot;textchanged&quot;,&quot;mousedown&quot;,&quot;mouseup&quot;,&quot;keydown&quot;,&quot;keyup&quot;,&quot;keypress&quot;,];this.invalidArgumentExceptions=[&quot;invalid argument exception&quot;]},createInstance:function(g){this.host.attr({role:&quot;numberInput&quot;});this.tooltip=null;this.host.addClass(this.toThemeProperty(&quot;jqx-input&quot;));this.host.addClass(this.toThemeProperty(&quot;jqx-rc-all&quot;));this.host.addClass(this.toThemeProperty(&quot;jqx-widget&quot;));this.host.addClass(this.toThemeProperty(&quot;jqx-widget-content&quot;));if(this.spinButtons){this._spinButtons()}else{this.numberInput=a(&quot;&lt;input autocomplete=&#39;off&#39; type=&#39;textarea&#39;/&gt;&quot;).appendTo(this.host);this.numberInput.addClass(this.toThemeProperty(&quot;jqx-input-content&quot;));this.numberInput.addClass(this.toThemeProperty(&quot;jqx-widget-content&quot;))}var f=a.data(this.host[0],&quot;jqxNumberInput&quot;);f.jqxNumberInput=this;var h=this;this.addHandler(this.host,&quot;loadContent&quot;,function(q){h._render()});if(this.host.parents(&quot;form&quot;).length&gt;0){this.host.parents(&quot;form&quot;).bind(&quot;reset&quot;,function(){setTimeout(function(){h.setDecimal(0)},10)})}if(this.host.jqxTooltip){var l=this.host.append(a(&quot;&lt;div&gt;&lt;/div&gt;&quot;));var b=l.jqxTooltip();this.tooltip=a.data(b[0],&quot;jqxTooltip&quot;).instance;this.tooltip.disabled=true}this.propertyChangeMap.disabled=function(q,s,r,u){if(o.disabled){o.numberInput.addClass(o.toThemeProperty(&quot;jqx-input-disabled&quot;));o.numberInput.attr(&quot;disabled&quot;,true)}else{o.host.removeClass(o.toThemeProperty(&quot;jqx-input-disabled&quot;));o.numberInput.attr(&quot;disabled&quot;,false)}if(o.spinButtons&amp;&amp;o.host.jqxRepeatButton){o.upbutton.jqxRepeatButton({disabled:o.disabled});o.downbutton.jqxRepeatButton({disabled:o.disabled})}};if(this.disabled){this.numberInput.addClass(this.toThemeProperty(&quot;jqx-input-disabled&quot;));this.numberInput.attr(&quot;disabled&quot;,true);this.host.addClass(this.toThemeProperty(&quot;jqx-fill-state-disabled&quot;))}this.selectedText=&quot;&quot;;this.decimalSeparatorPosition=-1;var c=this.element.id;var d=this.element;var o=this;this.oldValue=this._value();this.items=new Array();var n=this.value;var e=this.decimal;this._initializeLiterals();this._render();this.setDecimal(e);var h=this;setTimeout(function(){h._render()},100);if(a.jqx.mobile.isChromeMobileBrowser()){this.addHandler(this.numberInput,&quot;input&quot;,function(q){window.setTimeout(function(){var s=h._selection();if(s.start&lt;h.numberInput.val().length){h._setSelectionStart(s.start+1)}else{var r=h.numberInput.val();h.numberInput.val(r+&quot;0&quot;);h._setSelectionStart(s.start+1)}h._handleBackspace()},10);return false})}this._addHandlers()},refresh:function(b){if(!b){this._render()}},wheel:function(d,c){var e=0;if(!d){d=window.event}if(d.originalEvent&amp;&amp;d.originalEvent.wheelDelta){d.wheelDelta=d.originalEvent.wheelDelta}if(d.wheelDelta){e=d.wheelDelta/120}else{if(d.detail){e=-d.detail/3}}if(e){var b=c._handleDelta(e);if(d.preventDefault){d.preventDefault()}if(d.originalEvent!=null){d.originalEvent.mouseHandled=true}if(d.stopPropagation!=undefined){d.stopPropagation()}if(b){b=false;d.returnValue=b;return b}else{return false}}if(d.preventDefault){d.preventDefault()}d.returnValue=false},_handleDelta:function(b){if(b&lt;0){this.spinDown()}else{this.spinUp()}return true},_addHandlers:function(){var b=this;this.addHandler(this.numberInput,&quot;mousedown&quot;,function(e){return b._raiseEvent(2,e)});this._mousewheelfunc=this._mousewheelfunc||function(e){if(!b.editcell){b.wheel(e,b);return false}};this.removeHandler(this.host,&quot;mousewheel&quot;,this._mousewheelfunc);this.addHandler(this.host,&quot;mousewheel&quot;,this._mousewheelfunc);var d=a.jqx.mobile.isOperaMiniMobileBrowser();if(d){this.inputMode=&quot;simple&quot;;var c=a.jqx.mobile.isOperaMiniBrowser();if(c){b.numberInput.attr(&quot;readonly&quot;,true)}this.addHandler(a(document),&quot;click.&quot;+this.element.id,b._exitSimpleInputMode,b)}this.addHandler(this.numberInput,&quot;focus&quot;,function(e){if(b.inputMode==&quot;simple&quot;){}a.data(b.numberInput,&quot;selectionstart&quot;,b._selection().start);b.host.addClass(b.toThemeProperty(&quot;jqx-fill-state-focus&quot;))});this.addHandler(this.numberInput,&quot;blur&quot;,function(e){if(b.inputMode==&quot;simple&quot;){b._exitSimpleInputMode(e,b,false)}b.host.removeClass(b.toThemeProperty(&quot;jqx-fill-state-focus&quot;))});this.addHandler(this.numberInput,&quot;mouseup&quot;,function(e){return b._raiseEvent(3,e)});this.addHandler(this.numberInput,&quot;keydown&quot;,function(e){return b._raiseEvent(4,e)});this.addHandler(this.numberInput,&quot;keyup&quot;,function(e){return b._raiseEvent(5,e)});this.addHandler(this.numberInput,&quot;keypress&quot;,function(e){return b._raiseEvent(6,e)})},_removeHandlers:function(){var b=this;this.removeHandler(this.numberInput,&quot;mousedown&quot;);var c=a.jqx.mobile.isOperaMiniMobileBrowser();if(c){this.removeHandler(a(document),&quot;click.&quot;+this.element.id,b._exitSimpleInputMode,b)}this.removeHandler(this.numberInput,&quot;focus&quot;);this.removeHandler(this.numberInput,&quot;blur&quot;);this.removeHandler(this.numberInput,&quot;mouseup&quot;);this.removeHandler(this.numberInput,&quot;keydown&quot;);this.removeHandler(this.numberInput,&quot;keyup&quot;);this.removeHandler(this.numberInput,&quot;keypress&quot;)},_spinButtons:function(){if(this.host.jqxRepeatButton){this.numberInput=a(&quot;&lt;input autocomplete=&#39;off&#39; style=&#39;float: left;&#39; type=&#39;textarea&#39;/&gt;&quot;);this.numberInput.appendTo(this.host);this.numberInput.addClass(this.toThemeProperty(&quot;jqx-input-content&quot;));this.numberInput.addClass(this.toThemeProperty(&quot;jqx-widget-content&quot;));this.spincontainer=a(&#39;&lt;div style=&quot;float: left; height: 100%; overflow: hidden; position: relative;&quot;&gt;&lt;/div&gt;&#39;);this.host.append(this.spincontainer);this.upbutton=a(&#39;&lt;div style=&quot;padding: 0px; margin-left: -1px; position: relative;&quot;&gt;&lt;div style=&quot;width: 100%; height: 100%;&quot;&gt;&lt;/div&gt;&lt;/div&gt;&#39;);this.spincontainer.append(this.upbutton);this.upbutton.jqxRepeatButton({overrideTheme:true,disabled:this.disabled,roundedCorners:&quot;top-right&quot;});this.downbutton=a(&#39;&lt;div style=&quot;padding: 0px; margin-left: -1px; position: relative;&quot;&gt;&lt;div style=&quot;width: 100%; height: 100%;&quot;&gt;&lt;/div&gt;&lt;/div&gt;&#39;);this.spincontainer.append(this.downbutton);this.downbutton.jqxRepeatButton({overrideTheme:true,disabled:this.disabled,roundedCorners:&quot;bottom-right&quot;});var b=this;this.downbutton.addClass(this.toThemeProperty(&quot;jqx-fill-state-normal&quot;));this.upbutton.addClass(this.toThemeProperty(&quot;jqx-fill-state-normal&quot;));this.addHandler(this.downbutton,&quot;mouseup&quot;,function(c){if(!b.disabled){b.downbutton.removeClass(b.toThemeProperty(&quot;jqx-fill-state-pressed&quot;));b._downArrow.removeClass(b.toThemeProperty(&quot;icon-arrow-down-selected&quot;))}});this.addHandler(this.upbutton,&quot;mouseup&quot;,function(c){if(!b.disabled){b.upbutton.removeClass(b.toThemeProperty(&quot;jqx-fill-state-pressed&quot;));b._upArrow.removeClass(b.toThemeProperty(&quot;icon-arrow-up-selected&quot;))}});this.addHandler(this.downbutton,&quot;mousedown&quot;,function(c){if(!b.disabled){b.downbutton.addClass(b.toThemeProperty(&quot;jqx-fill-state-pressed&quot;));b._downArrow.addClass(b.toThemeProperty(&quot;icon-arrow-down-selected&quot;));return false}});this.addHandler(this.upbutton,&quot;mousedown&quot;,function(c){if(!b.disabled){b.upbutton.addClass(b.toThemeProperty(&quot;jqx-fill-state-pressed&quot;));b._upArrow.addClass(b.toThemeProperty(&quot;icon-arrow-up-selected&quot;));return false}});this.upbutton.hover(function(){if(!b.disabled){b.upbutton.addClass(b.toThemeProperty(&quot;jqx-fill-state-hover&quot;))}},function(){b.upbutton.removeClass(b.toThemeProperty(&quot;jqx-fill-state-hover&quot;));b._upArrow.removeClass(b.toThemeProperty(&quot;icon-arrow-up-hover&quot;))});this.downbutton.hover(function(){if(!b.disabled){b.downbutton.addClass(b.toThemeProperty(&quot;jqx-fill-state-hover&quot;))}},function(){b.downbutton.removeClass(b.toThemeProperty(&quot;jqx-fill-state-hover&quot;));b._downArrow.removeClass(b.toThemeProperty(&quot;icon-arrow-down-hover&quot;))});this.upbutton.css(&quot;border-width&quot;,&quot;0px&quot;);this.downbutton.css(&quot;border-width&quot;,&quot;0px&quot;);if(this.disabled){this.upbutton[0].disabled=true;this.downbutton[0].disabled=true}else{this.upbutton[0].disabled=false;this.downbutton[0].disabled=false}this.spincontainer.addClass(this.toThemeProperty(&quot;jqx-input&quot;));this.spincontainer.css(&quot;border-width&quot;,&quot;0px&quot;);this.spincontainer.css(&quot;border-left-width&quot;,&quot;1px&quot;);this._upArrow=this.upbutton.find(&quot;div&quot;);this._downArrow=this.downbutton.find(&quot;div&quot;);this._upArrow.addClass(this.toThemeProperty(&quot;icon-arrow-up&quot;));this._downArrow.addClass(this.toThemeProperty(&quot;icon-arrow-down&quot;));var b=this;this._upArrow.hover(function(){if(!b.disabled){b._upArrow.addClass(b.toThemeProperty(&quot;icon-arrow-up-hover&quot;))}},function(){b._upArrow.removeClass(b.toThemeProperty(&quot;icon-arrow-up-hover&quot;))});this._downArrow.hover(function(){if(!b.disabled){b._downArrow.addClass(b.toThemeProperty(&quot;icon-arrow-down-hover&quot;))}},function(){b._downArrow.removeClass(b.toThemeProperty(&quot;icon-arrow-down-hover&quot;))});this.addHandler(this.downbutton,&quot;click&quot;,function(){if(b._selection().start==0){b._setSelectionStart(b.numberInput.val().length)}b.spinDown()});this.addHandler(this.upbutton,&quot;click&quot;,function(){if(b._selection().start==0){b._setSelectionStart(b.numberInput.val().length)}b.spinUp()})}},spinDown:function(){var l=this;if(!l.disabled){var n=l.decimal;var o=this._selection();var g=parseFloat(l.decimal);if(l.spinButtonsStep&lt;0){l.spinButtonsStep=1}var c=parseInt(l.decimal)+l.spinButtonsStep;c=c.toString().length;var e=c&lt;=l.digits;if(l.spinMode!=&quot;advanced&quot;){if(g&gt;0&amp;&amp;g+l.spinButtonsStep&lt;=l.max&amp;&amp;e){var s=1;for(i=0;i&lt;l.decimalDigits;i++){s=s*10}var d=(s*g)-(s*l.spinButtonsStep);d=d/s;if(d&lt;0){d=0}d=this._parseDecimalValueToEditorValue(d);l._setDecimal(d)}}else{var q=this._getspindecimal();var h=this._getSeparatorPosition();var g=parseFloat(q.decimal);if(l.spinButtonsStep&lt;0){l.spinButtonsStep=1}var c=parseInt(g)+l.spinButtonsStep;c=c.toString().length;var e=c&lt;=l.digits;var s=1;var b=q.decimal.indexOf(&quot;.&quot;);if(b!=-1){var f=q.decimal.length-b-1;var s=1;for(i=0;i&lt;f;i++){s=s*10}g-=new Number(l.spinButtonsStep/s);if(g&lt;0){g=0}g=g.toFixed(f);var b=g.toString().indexOf(&quot;.&quot;);if(b==-1){g=g.toString()+&quot;.&quot;}var r=g.toString()+q.afterdecimal;r=new Number(r);r=r.toFixed(l.decimalDigits);r=this._parseDecimalValueToEditorValue(r);l._setDecimal(r)}else{if(g&gt;0&amp;&amp;g+l.spinButtonsStep&lt;=l.max&amp;&amp;e){var d=(s*g)-(s*l.spinButtonsStep);d=d/s;var r=d.toString()+q.afterdecimal;if(r&lt;0){r=0}r=this._parseDecimalValueToEditorValue(r);l._setDecimal(r)}}}if(r==undefined||this.inputMode!=&quot;simple&quot;){this._setSelectionStart(o.start);return}if(r!=undefined&amp;&amp;(n==undefined||n.toString().length==r.length)){this._setSelectionStart(o.start)}else{this._setSelectionStart(o.start-1)}}},_getspindecimal:function(){var g=this._selection();var l=&quot;&quot;;var f=this._getSeparatorPosition();var o=this._getVisibleItems();var b=this._getHiddenPrefixCount();var n=this.numberInput.val();if(this.numberInput.val().length==g.start&amp;&amp;g.length==0){this._setSelection(g.start,g.start+1);g=this._selection()}var e=this.inputMode!=&quot;advanced&quot;;for(i=0;i&lt;g.start;i++){if(e){var h=n.substring(i,i+1);var d=(!isNaN(parseInt(h)));if(d){l+=h}if(h==this.decimalSeparator){l+=h}continue}if(o[i].canEdit&amp;&amp;o[i].character!=this.promptChar){l+=o[i].character}else{if(!o[i].canEdit&amp;&amp;this.decimalSeparatorPosition!=-1&amp;&amp;o[i]==o[this.decimalSeparatorPosition-b]){if(l.length==0){l=&quot;0&quot;}l+=o[i].character}}}var c=&quot;&quot;;for(i=g.start;i&lt;o.length;i++){if(e){var h=n.substring(i,i+1);var d=(!isNaN(parseInt(h)));if(d){c+=h}if(h==this.decimalSeparator){c+=h}continue}if(o[i].canEdit&amp;&amp;o[i].character!=this.promptChar){c+=o[i].character}else{if(!o[i].canEdit&amp;&amp;this.decimalSeparatorPosition!=-1&amp;&amp;o[i]==o[this.decimalSeparatorPosition-b]){c+=o[i].character}}}return{decimal:this._parseDecimalValue(l),afterdecimal:this._parseDecimalValue(c)}},_parseDecimalValue:function(c){if(this.decimalSeparator!=&quot;.&quot;){var d=c.toString().indexOf(this.decimalSeparator);if(d&gt;=0){var b=c.toString().substring(0,d)+&quot;.&quot;+c.toString().substring(d+1);return b}}return c},_parseDecimalValueToEditorValue:function(c){if(this.decimalSeparator!=&quot;.&quot;){var d=c.toString().indexOf(&quot;.&quot;);if(d&gt;=0){var b=c.toString().substring(0,d)+this.decimalSeparator+c.toString().substring(d+1);return b}}return c},spinUp:function(){var n=this;if(!n.disabled){var q=this._selection();var o=n.decimal;var h=parseFloat(n.decimal);if(n.spinButtonsStep&lt;0){n.spinButtonsStep=1}var c=parseInt(n.decimal)+n.spinButtonsStep;c=c.toString().length;var f=c&lt;=n.digits;if(n.spinMode!=&quot;advanced&quot;){if(h+n.spinButtonsStep&lt;=n.max&amp;&amp;f){var u=1;for(i=0;i&lt;n.decimalDigits;i++){u=u*10}var e=(u*h)+(u*n.spinButtonsStep);e=e/u;e=this._parseDecimalValueToEditorValue(e);n._setDecimal(e)}}else{var r=this._getspindecimal();var l=this._getSeparatorPosition();var h=parseFloat(r.decimal);if(n.spinButtonsStep&lt;0){n.spinButtonsStep=1}var c=parseInt(h)+n.spinButtonsStep;c=c.toString().length;var f=c&lt;=n.digits;var u=1;var b=r.decimal.indexOf(&quot;.&quot;);if(b!=-1){var g=r.decimal.length-b-1;var u=1;for(i=0;i&lt;g;i++){u=u*10}h+=new Number(n.spinButtonsStep/u);h=h.toFixed(g);var b=h.toString().indexOf(&quot;.&quot;);if(b==-1){h=h.toString()+&quot;.&quot;}var s=h.toString()+r.afterdecimal;s=new Number(s);s=s.toFixed(n.decimalDigits);var d=new Number(s).toFixed(n.decimalDigits);if(d&lt;=n.max){s=this._parseDecimalValueToEditorValue(s);n._setDecimal(s)}else{s=undefined}}else{if(h+n.spinButtonsStep&lt;=n.max&amp;&amp;f){var e=(u*h)+(u*n.spinButtonsStep);e=e/u;var s=e.toString()+r.afterdecimal;var d=new Number(s).toFixed(n.decimalDigits);if(d&lt;=n.max){s=this._parseDecimalValueToEditorValue(s);n._setDecimal(s)}else{s=undefined}}}}if(s==undefined||this.inputMode!=&quot;simple&quot;){this._setSelectionStart(q.start);return}if(s!=undefined&amp;&amp;(o==undefined||o.toString().length==s.length)){this._setSelectionStart(q.start)}else{this._setSelectionStart(1+q.start)}}},_exitSimpleInputMode:function(b,n,g){if(n==undefined){n=b.data}if(n==null){return}if(g==undefined){if(b.target!=null&amp;&amp;n.element!=null){if((b.target.id!=undefined&amp;&amp;b.target.id.toString().length&gt;0&amp;&amp;n.host.find(&quot;#&quot;+b.target.id).length&gt;0)||b.target==n.element){return}}var e=n.host.offset();var d=e.left;var f=e.top;var c=n.host.width();var l=n.host.height();var o=a(b.target).offset();if(o.left&gt;=d&amp;&amp;o.left&lt;=d+c){if(o.top&gt;=f&amp;&amp;o.top&lt;=f+l){return}}}if(a.jqx.mobile.isOperaMiniBrowser()){n.numberInput.attr(&quot;readonly&quot;,true)}if(n.disabled||n.readOnly){return}var h=a.data(n.numberInput,&quot;simpleInputMode&quot;);if(h==null){return}a.data(n.numberInput,&quot;simpleInputMode&quot;,null);this._parseDecimalInSimpleMode();return false},_parseDecimalInSimpleMode:function(){var e=this;var c=e.getvalue(&quot;negative&quot;);var b=this.ValueString;if(b==undefined){b=this.GetValueString(this.numberInput.val(),this.decimalSeparator,this.decimalSeparator!=&quot;&quot;)}var f=c?&quot;-&quot;:&quot;&quot;;if(this.symbolPosition==&quot;left&quot;){f+=this.symbol}var d=this.digits%this.groupSize;if(d==0){d=this.groupSize}var g=b.toString();f+=g;if(this.symbolPosition==&quot;right&quot;){f+=this.symbol}e.numberInput.val(f)},_enterSimpleInputMode:function(f,d){if(d==undefined){d=f.data}var e=this._selection();if(d==null){return}var c=d.getvalue(&quot;negative&quot;);var b=d.decimal;if(c){if(b&gt;0){b=-b}}d.numberInput.val(b);a.data(d.numberInput,&quot;simpleInputMode&quot;,true);if(a.jqx.mobile.isOperaMiniBrowser()){d.numberInput.attr(&quot;readonly&quot;,false)}this._parseDecimalInSimpleMode();this._setSelectionStart(e.start)},setvalue:function(b,c){if(this[b]!=undefined){if(b==&quot;decimal&quot;){this._setDecimal(c)}else{this[b]=c;this.propertyChangedHandler(this,b,c,c)}}},getvalue:function(b){if(b==&quot;decimal&quot;){if(this.negative!=undefined&amp;&amp;this.negative==true){return -Math.abs(this[b])}}if(b in this){return this[b]}return null},_getString:function(){var b=&quot;&quot;;for(i=0;i&lt;this.items.length;i++){var c=this.items[i].character;b+=c}return b},_literal:function(d,b,c,e){return{character:d,regex:b,canEdit:c,isSeparator:e}},_initializeLiterals:function(){var f=0;var d=this.negativeSymbol.length;for(i=0;i&lt;d;i++){var e=this.negativeSymbol.substring(i,i+1);var l=&quot;&quot;;var b=false;var n=null;if(this.negative){n=this._literal(e,l,b,false)}else{n=this._literal(&quot;&quot;,l,b,false)}this.items[f]=n;f++}var c=this.symbol.length;if(this.symbolPosition==&quot;left&quot;){for(i=0;i&lt;c;i++){var e=this.symbol.substring(i,i+1);var l=&quot;&quot;;var b=false;var n=this._literal(e,l,b,false);this.items[f]=n;f++}}var g=this.digits%this.groupSize;if(g==0){g=this.groupSize}for(i=0;i&lt;this.digits;i++){var e=this.promptChar;var l=&quot;\\d&quot;;var b=true;var n=this._literal(e,l,b,false);this.items[f]=n;f++;if(i&lt;this.digits-1&amp;&amp;this.groupSeparator!=undefined&amp;&amp;this.groupSeparator.length&gt;0){g--;if(g==0){g=this.groupSize;var h=this._literal(this.groupSeparator,&quot;&quot;,false,false);this.items[f]=h;f++}}else{if(i==this.digits-1){n.character=0}}}this.decimalSeparatorPosition=-1;if(this.decimalDigits!=undefined&amp;&amp;this.decimalDigits&gt;0){var e=this.decimalSeparator;if(e.length==0){e=&quot;.&quot;}var n=this._literal(e,&quot;&quot;,false,true);this.items[f]=n;this.decimalSeparatorPosition=f;f++;for(i=0;i&lt;this.decimalDigits;i++){var q=0;var l=&quot;\\d&quot;;var o=this._literal(q,l,true,false);this.items[f]=o;f++}}if(this.symbolPosition==&quot;right&quot;){for(i=0;i&lt;c;i++){var e=this.symbol.substring(i,i+1);var l=&quot;&quot;;var b=false;var n=this._literal(e,l,b);this.items[f]=n;f++}}},_match:function(c,b){var d=new RegExp(b,&quot;i&quot;);return d.test(c)},_raiseEvent:function(r,d){var o=this.events[r];var b={};b.owner=this;if(this.host.css(&quot;display&quot;)==&quot;none&quot;){return true}var z=d.charCode?d.charCode:d.keyCode?d.keyCode:0;var g=true;var l=this.readOnly;var x=this;if(r==3||r==2){if(!this.disabled){if(this.inputMode!=&quot;simple&quot;){this._handleMouse(d);if(a.jqx.mobile.isChromeMobileBrowser()){a.data(this.numberInput,&quot;selectionstart&quot;,this._selection().start)}}else{return true}}}if(r==0){if(this.tooltip!=null&amp;&amp;this.tooltip!=undefined&amp;&amp;this.validationMessage.length&gt;0){var h=this.getvalue(&quot;decimal&quot;);if((this.max&lt;h)||(this.min&gt;h)){this.host.addClass(this.toThemeProperty(&quot;jqx-input-invalid&quot;));var s=a.data(this.numberInput[0],&quot;Tooltip&quot;);if(!this.tooltip.isOpen){this.tooltip.location=&quot;relative&quot;;this.tooltip.disabled=false;this.tooltip.open(this.numberInput,this.validationMessage);s=a.data(this.numberInput[0],&quot;Tooltip&quot;);var f=a.data(this.numberInput[0],&quot;TooltipBounds&quot;);s.css({top:parseInt(f.position.top)+parseInt(f.elementHeight)+3,left:parseInt(f.position.left)+parseInt(f.elementWidth)-parseInt(f.width)})}var c=a(s).find(&quot;.jqx-tooltip-content&quot;,true)[0];if(c!=null){c.className=this.toThemeProperty(&quot;jqx-tooltip-content-invalid&quot;)}}else{var s=a.data(this.numberInput[0],&quot;Tooltip&quot;);if(s!=null){this.tooltip.events.closed=function(){var e=a(s).find(&quot;.jqx-tooltip-content-invalid&quot;,true)[0];if(e!=null){e.className=this.toThemeProperty(&quot;jqx-tooltip-content&quot;)}}}this.tooltip.close(this.numberInput[0]);this.host.removeClass(this.toThemeProperty(&quot;jqx-input-invalid&quot;));this.host.addClass(this.toThemeProperty(&quot;jqx-input&quot;));this.host.addClass(this.toThemeProperty(&quot;jqx-rc-all&quot;));this.tooltip.disabled=true}}}var u=new jQuery.Event(o);u.owner=this;b.value=this.getvalue(&quot;decimal&quot;);b.text=this.numberInput.val();u.args=b;g=this.host.trigger(u);var x=this;if(this.inputMode!=&quot;simple&quot;){if(r==4){if(l||this.disabled){return false}if(a.jqx.mobile.isChromeMobileBrowser()){var A=x._selection();window.setTimeout(function(){var e=a.data(x.numberInput,&quot;selectionstart&quot;);if(e!=null&amp;&amp;e!=A.start){a.data(x.numberInput,&quot;selectionstart&quot;,A.start)}g=x._handleKeyDown(d,z)},25)}else{g=x._handleKeyDown(d,z)}}else{if(r==5){if(l||this.disabled){g=false}}else{if(r==6){if(l||this.disabled){return false}g=x._handleKeyPress(d,z)}}}}else{if(r==4||r==5||r==6){if(l||this.disabled){return false}var y=String.fromCharCode(z);var q=parseInt(y);var v=true;if(!d.ctrlKey&amp;&amp;!d.shiftKey){if(z&gt;=65&amp;&amp;z&lt;=90){v=false}}if(r==6&amp;&amp;a.browser.opera!=undefined){if(z==8){return false}}if(v){if(r==4){v=x._handleSimpleKeyDown(d,z)}if(!a.browser.msie){var w=d;if((w.ctrlKey&amp;&amp;z==99)||(w.ctrlKey&amp;&amp;z==67)||(w.ctrlKey&amp;&amp;z==122)||(w.ctrlKey&amp;&amp;z==90)||(w.ctrlKey&amp;&amp;z==118)||(w.ctrlKey&amp;&amp;z==86)||(w.shiftKey&amp;&amp;z==45)){if(r==6&amp;&amp;a.browser.webkit){x._handleSimpleKeyDown(d,z)}return false}}if((d.ctrlKey&amp;&amp;z==97)||(d.ctrlKey&amp;&amp;z==65)){return true}if(r==6&amp;&amp;v){var n=this._isSpecialKey(z);return n}}return v}}return g},GetSelectionInValue:function(h,g,f,e){var c=0;for(i=0;i&lt;g.length;i++){if(i&gt;=h){break}var d=g.substring(i,i+1);var b=(!isNaN(parseInt(d)));if(b||(e&amp;&amp;g[i].toString()==f)){c++}}return c},GetSelectionLengthInValue:function(g,h,f,e){var c=0;for(i=0;i&lt;f.length;i++){if(i&gt;=g+h){break}var d=f.substring(i,i+1);var b=(!isNaN(parseInt(d)));if(h&gt;0&amp;&amp;i&gt;=g&amp;&amp;b||(i&gt;=g&amp;&amp;f[i].toString()==e)){c++}}return c},GetInsertTypeByPositionInValue:function(e,g,h,f){var c=&quot;before&quot;;var b=this.GetValueString(h,g,f);var d=this.GetDigitsToSeparator(0,b);if(e&gt;d){c=&quot;after&quot;}return c},RemoveRange:function(f,e,q,g,w,b){var h=this.digits;var r=f;var x=e;var c=0;var s=this.decimal;var B=this._selection();var q=this.numberInput.val();var g=this.decimalSeparator;var l=g!=&quot;&quot;;if(x==0&amp;&amp;this.ValueString.length&lt;this.decimalPossibleChars-1){return c}var y=this.GetSeparatorPositionInText(g,q);if(!w){y=this.GetSeparatorPositionInText(&quot;.&quot;,q)}if(y&lt;0&amp;&amp;!l&amp;&amp;q.length&gt;1){y=q.length}if(y==-1){y=q.length}var d=l?1:0;if(e&lt;2&amp;&amp;b==true){var A=this.ValueString.length-this.decimalDigits-d;if((A)==h&amp;&amp;f+e&lt;y){x++}}var n=&quot;&quot;;for(i=0;i&lt;q.length;i++){if(i&lt;r||i&gt;=r+x){n+=q.substring(i,i+1);continue}else{if(q[i].toString()==g){n+=g;continue}else{var v=q.substring(i,i+1);if(i&gt;y){n+=&quot;0&quot;;continue}}}var v=q.substring(i,i+1);var u=(!isNaN(parseInt(v)));if(u){c++}}if(n.length==0){n=&quot;0&quot;}if(w){this.numberInput.val(n)}else{this.ValueString=n}var o=n.substring(0,1);if(o==g&amp;&amp;isNaN(parseInt(o))){var z=&quot;0&quot;+n;n=z}this.ValueString=this.GetValueString(n,g,l);this.decimal=this.ValueString;this._parseDecimalInSimpleMode();this._setSelectionStart(r);return c},InsertDigit:function(w,C){if(typeof this.digits!=&quot;number&quot;){this.digits=parseInt(this.digits)}if(typeof this.decimalDigits!=&quot;number&quot;){this.decimalDigits=parseInt(this.decimalDigits)}var l=1+this.digits;var D=this._selection();var q=this.getvalue(&quot;negative&quot;);var d=false;if(D.start==0&amp;&amp;this.symbol!=&quot;&quot;&amp;&amp;this.symbolPosition==&quot;left&quot;){this._setSelectionStart(D.start+1);D=this._selection();d=true}if((q&amp;&amp;d)||(q&amp;&amp;!d&amp;&amp;D.start==0)){this._setSelectionStart(D.start+1);D=this._selection()}var A=this.numberInput.val().substring(D.start,D.start+1);var s=this.numberInput.val();var g=this.decimalSeparator;var n=g!=&quot;&quot;&amp;&amp;this.decimalDigits&gt;0;if(A==this.symbol&amp;&amp;this.symbolPosition==&quot;right&quot;){if(this.decimalDigits==0){this.ValueString=this.GetValueString(s,g,n);if(this.ValueString.length&gt;=l){return}}else{return}}this.ValueString=this.GetValueString(s,g,n);var z=this.ValueString;if(this.decimalDigits&gt;0&amp;&amp;C&gt;=z.length){C=z.length-1}var u=&quot;&quot;;if(C&lt;z.length){u=z.substring(C,C+1)}var h=false;var B=false;var e=this.GetInsertTypeByPositionInValue(C,g,s,n);if(e==&quot;after&quot;){h=true}var b=n?1:0;if(u!=&quot;.&quot;&amp;&amp;(this.ValueString.length-this.decimalDigits-b)&gt;=l-1){h=true}var v=false;var x=n?1:0;if(!h&amp;&amp;this.ValueString&amp;&amp;this.ValueString.length&gt;=this.digits+this.decimalDigits+x){return}if(h&amp;&amp;u!=&quot;.&quot;){if(v){C++}var r=z.substring(0,C);if(r.length==z.length){if(this.ValueString.length&gt;=this.digits+this.decimalDigits+x){return}}var y=w;var c=&quot;&quot;;if(C+1&lt;z.length){c=z.substring(C+1)}var o=r+y+c;this.ValueString=o}else{var r=z.substring(0,C);var y=w;var c=z.substring(C);var o=r+y+c;if(z.substring(0,1)==&quot;0&quot;){o=y+z.substring(1);if(u==&quot;.&quot;){this._setSelectionStart(D.start-1);D=this._selection()}}this.ValueString=o}if(q){this.decimal=-this.ValueString}else{this.decimal=this.ValueString}this._parseDecimalInSimpleMode();var f=D.start;f+=1;this._setSelectionStart(f);this.value=this.decimal;this._raiseEvent(0,this.value);this._raiseEvent(1,this.numberInput.val())},GetStringToSeparator:function(h,f,e){var d=&quot;&quot;;var b=f;var g=this.GetSeparatorPositionInText(f,h);var c=h.subString(0,g);d=this.GetValueString(c,f,e);return d},GetSeparatorPositionInText:function(c,d){var b=-1;for(i=0;i&lt;d.length;i++){if(d[i].toString()==c){b=i;break}}return b},GetValueString:function(g,f,e){var c=&quot;&quot;;for(i=0;i&lt;g.length;i++){var d=g.substring(i,i+1);var b=(!isNaN(parseInt(d)));if(b){c+=d}if(d==f){c+=f}}return c},Backspace:function(){var d=this._selection();var e=this._selection();var f=this.numberInput.val();if(d.start==0&amp;&amp;d.length==0){return}this.isBackSpace=true;var c=f.substring[d.start,d.start+1];var b=(!isNaN(parseInt(c)));if(d.start&gt;0&amp;&amp;d.length==0){this._setSelectionStart(d.start-1);var d=this._selection()}this.Delete();this._setSelectionStart(e.start-1);this.isBackSpace=false},Delete:function(c){var e=this._selection();var g=this.numberInput.val();var f=e.start;var h=e.length;h=Math.max(h,1);this.ValueString=this.GetValueString(g,this.decimalSeparator,this.decimalSeparator!=&quot;&quot;);this.RemoveRange(e.start,h,this.ValueString,&quot;.&quot;,false);var d=this.ValueString.substring(0,1);var b=(!isNaN(parseInt(d)));if(!b){this.ValueString=&quot;0&quot;+this.ValueString}this.decimal=this.ValueString;this._parseDecimalInSimpleMode();this._setSelectionStart(f);this.value=this.decimal;this._raiseEvent(0,this.value);this._raiseEvent(1,this.numberInput.val())},insertsimple:function(d){var l=this._selection();var n=this.numberInput.val();if(l.start==n.length&amp;&amp;this.decimalDigits&gt;0){return}var b=this.decimal;var g=this.decimalSeparator;this.ValueString=this.GetValueString(n,g,g!=&quot;&quot;);var h=this.GetSelectionInValue(l.start,n,g,g!=&quot;&quot;);var e=this.GetSelectionLengthInValue(l.start,l.length,n,g);var f=this.GetDigitsToSeparator(0,this.ValueString);var c=false;if(this.decimalDigits&gt;0&amp;&amp;h&gt;=this.ValueString.length){h--}this.RemoveRange(l.start,e,this.ValueString,g,false,true);this.InsertDigit(d,h,l)},GetDigitsToSeparator:function(c,b){if(b.indexOf(&quot;.&quot;)&lt;0){return b.length}for(i=0;i&lt;b.length;i++){if(b.substring(i,i+1)==&quot;.&quot;){c=i;break}}return c},_handleSimpleKeyDown:function(h,u){var s=this._selection();if(s.start&gt;=0&amp;&amp;s.start&lt;this.items.length){var c=String.fromCharCode(u)}if(u==8){this.Backspace();return false}if(u==190||u==110){var g=this.GetSeparatorPositionInText(&quot;.&quot;,this.numberInput.val());this._setSelectionStart(g+1);return false}if(u==188){var r=this.numberInput.val();for(f=s.start;f&lt;r.length;f++){if(r[f]==this.groupSeparator){this._setSelectionStart(1+f);break}}return false}if((h.ctrlKey&amp;&amp;u==99)||(h.ctrlKey&amp;&amp;u==67)){var s=this._selection();var v=&quot;&quot;;var q=this.numberInput.val();if(s.start&gt;0||s.length&gt;0){for(var f=s.start;f&lt;s.end;f++){v+=q.substring(f,f+1)}}if(a.browser.msie){window.clipboardData.setData(&quot;Text&quot;,v)}this.savedText=v;return false}if((h.ctrlKey&amp;&amp;u==122)||(h.ctrlKey&amp;&amp;u==90)){return false}if((h.ctrlKey&amp;&amp;u==118)||(h.ctrlKey&amp;&amp;u==86)||(h.shiftKey&amp;&amp;u==45)){if(this.savedText!=null&amp;&amp;this.savedText.length&gt;0){for(var f=0;f&lt;this.savedText.length;f++){var n=parseInt(this.savedText.substring(f,f+1));if(!isNaN(n)){this.insertsimple(n)}}}return false}var c=String.fromCharCode(u);var n=parseInt(c);if(u&gt;=96&amp;&amp;u&lt;=105){n=u-96;u=u-48}if(!isNaN(n)){var l=this;this.insertsimple(n);return false}if(u==46){this.Delete();return false}if(u==189||u==45){var b=this.getvalue(&quot;negative&quot;);if(b==false){this.setvalue(&quot;negative&quot;,true)}else{this.setvalue(&quot;negative&quot;,false)}this._parseDecimalInSimpleMode();this._setSelectionStart(s.start)}if(u==37||u==39){if(a.jqx.mobile.isChromeMobileBrowser()){var d=u==37?-1:1;a.data(this.numberInput,&quot;selectionstart&quot;,this._selection().start+d)}}if(u==38){this.spinUp();return false}else{if(u==40){this.spinDown();return false}}var o=this._isSpecialKey(u);if(!a.browser.mozilla){return true}return o},_getEditRange:function(){var c=0;var b=0;for(i=0;i&lt;this.items.length;i++){if(this.items[i].canEdit){c=i;break}}for(i=this.items.length-1;i&gt;=0;i--){if(this.items[i].canEdit){b=i;break}}return{start:c,end:b}},_getVisibleItems:function(){var b=new Array();var c=0;for(i=0;i&lt;this.items.length;i++){if(this.items[i].character.toString().length&gt;0){b[c]=this.items[i];c++}}return b},_hasEmptyVisibleItems:function(){var b=this._getVisibleItems();for(i=0;i&lt;b.length;i++){if(b[i].canEdit&amp;&amp;b[i].character==this.promptChar){return true}}return false},_getFirstVisibleNonEmptyIndex:function(){var b=this._getVisibleItems();for(i=0;i&lt;b.length;i++){if(b[i].canEdit&amp;&amp;b[i].character!=this.promptChar){return i}}},_handleMouse:function(f,b){var d=this._selection();if(d.length&lt;=1){var c=this._getFirstVisibleNonEmptyIndex();if(d.start&lt;c){this._setSelectionStart(c)}}},_insertKey:function(n){this.numberInput[0].focus();var d=String.fromCharCode(n);var e=parseInt(d);if(isNaN(e)){return}var r=0;for(i=0;i&lt;this.items.length;i++){if(this.items[i].character.length==0){r++}}var l=this._selection();if(a.jqx.mobile.isChromeMobileBrowser()){var f=a.data(this.numberInput,&quot;selectionstart&quot;);if(f!=null){l.start=f;l.end=f}}var b=this;if(l.start&gt;=0&amp;&amp;l.start&lt;=this.items.length){var g=false;var h=this._getFirstVisibleNonEmptyIndex();if(l.start&lt;h&amp;&amp;l.length==0){if(!isNaN(d)||d==&quot; &quot;){this._setSelectionStart(h);l=this._selection()}}var c=this._getFirstEditableItemIndex();var q=this._getLastEditableItemIndex();var o=this._getVisibleItems();a.each(o,function(z,D){if(l.start&gt;z&amp;&amp;z!=o.length-1){return}var G=o[z];if(z&gt;q){G=o[q]}if(isNaN(d)||d==&quot; &quot;){return}if(!G.canEdit){return}var C=b._getSeparatorPosition();if(b._match(d,G.regex)){if(!g&amp;&amp;l.length&gt;0){for(j=l.start+r;j&lt;l.end+r;j++){if(b.items[j].canEdit){if(j&gt;C){b.items[j].character=&quot;0&quot;}else{b.items[j].character=b.promptChar}}}var F=b._getString();g=true}var C=b._getSeparatorPosition();var A=b._hasEmptyVisibleItems();if(l.start&lt;=C&amp;&amp;A){var x=z;if(b.decimalSeparatorPosition==-1&amp;&amp;l.start==C){x=z+1}var w=&quot;&quot;;for(p=0;p&lt;x;p++){if(o[p].canEdit&amp;&amp;o[p].character!=b.promptChar){w+=o[p].character}}w+=d;var y=b.decimal&lt;1?1:0;if(l.start==C&amp;&amp;b.decimalSeparatorPosition!=-1){w+=b.decimalSeparator;y=0}for(p=x+y;p&lt;o.length;p++){if(o[p].character==b.decimalSeparator&amp;&amp;o[p].isSeparator){w+=o[p].character}else{if(o[p].canEdit&amp;&amp;o[p].character!=b.promptChar){w+=o[p].character}}}if(b.decimalSeparator!=&quot;.&quot;){w=b._parseDecimalValue(w)}w=parseFloat(w).toString();w=new Number(w);w=w.toFixed(b.decimalDigits);if(b.decimalSeparator!=&quot;.&quot;){w=b._parseDecimalValueToEditorValue(w)}b.setvalue(&quot;decimal&quot;,w);var F=b._getString();if(l.end&lt;C){b._setSelectionStart(l.end+y)}else{b._setSelectionStart(l.end)}if(l.length&gt;=1){b._setSelectionStart(l.end)}if(l.length==b.numberInput.val().length){var s=b._moveCaretToDecimalSeparator();var E=b.decimalSeparatorPosition&gt;=0?1:0;b._setSelectionStart(s-E)}}else{if(l.start&lt;C||l.start&gt;C){if(b.numberInput.val().length==l.start&amp;&amp;b.decimalSeparatorPosition!=-1){return false}else{if(b.numberInput.val().length==l.start&amp;&amp;b.decimalSeparatorPosition==-1&amp;&amp;!A){return false}}var w=&quot;&quot;;var u=false;for(p=0;p&lt;z;p++){if(o[p].canEdit&amp;&amp;o[p].character!=b.promptChar){w+=o[p].character}if(o[p].character==b.decimalSeparator&amp;&amp;o[p].isSeparator){w+=o[p].character;u=true}}w+=d;var y=b.decimal&lt;1?1:0;if(!u&amp;&amp;l.start==C-1){w+=b.decimalSeparator;u=true}for(p=z+1;p&lt;o.length;p++){if(!u&amp;&amp;o[p].character==b.decimalSeparator&amp;&amp;o[p].isSeparator){w+=o[p].character}else{if(o[p].canEdit&amp;&amp;o[p].character!=b.promptChar){w+=o[p].character}}}b.setvalue(&quot;decimal&quot;,w);var F=b._getString();if(b.decimalSeparatorPosition&lt;0&amp;&amp;G==o[q]){b._setSelectionStart(z);return false}var B=F.indexOf(b.symbol);var v=!b.getvalue(&quot;negative&quot;)?0:1;if(B&lt;=v){B=F.length}if(l.start&lt;B){b._setSelectionStart(z+1)}else{b._setSelectionStart(z)}if(l.length&gt;=1){}if(l.length==b.numberInput.val().length){var s=b._moveCaretToDecimalSeparator();b._setSelectionStart(s-1)}}}return false}})}},_handleKeyPress:function(h,d){var f=this._selection();var b=this;if((h.ctrlKey&amp;&amp;d==97)||(h.ctrlKey&amp;&amp;d==65)){return true}if(d==8){if(f.start&gt;0){b._setSelectionStart(f.start)}return false}if(d==46){if(f.start&lt;this.items.length){b._setSelectionStart(f.start)}return false}if(d==45){var c=this.getvalue(&quot;negative&quot;);if(c==false){this.setvalue(&quot;negative&quot;,true)}else{this.setvalue(&quot;negative&quot;,false)}}if(a.browser.msie){this._insertKey(d)}var g=this._isSpecialKey(d);return g},_deleteSelectedText:function(){var d=this._selection();var c=&quot;&quot;;var f=this._getSeparatorPosition();var b=this._getVisibleItems();var e=this._getHiddenPrefixCount();if(this.numberInput.val().length==d.start&amp;&amp;d.length==0){this._setSelection(d.start,d.start+1);d=this._selection()}for(i=0;i&lt;d.start;i++){if(b[i].canEdit&amp;&amp;b[i].character!=this.promptChar){c+=b[i].character}else{if(!b[i].canEdit&amp;&amp;this.decimalSeparatorPosition!=-1&amp;&amp;b[i]==b[this.decimalSeparatorPosition-e]){if(c.length==0){c=&quot;0&quot;}c+=b[i].character}}}for(i=d.start;i&lt;d.end;i++){if(i&gt;f&amp;&amp;this.decimalSeparatorPosition!=-1){if(b[i].canEdit&amp;&amp;b[i].character!=this.promptChar){c+=&quot;0&quot;}}else{if(!b[i].canEdit&amp;&amp;this.decimalSeparatorPosition!=-1&amp;&amp;b[i]==b[this.decimalSeparatorPosition-e]){if(c.length==0){c=&quot;0&quot;}c+=b[i].character}}}for(i=d.end;i&lt;b.length;i++){if(b[i].canEdit&amp;&amp;b[i].character!=this.promptChar){c+=b[i].character}else{if(!b[i].canEdit&amp;&amp;this.decimalSeparatorPosition!=-1&amp;&amp;b[i]==b[this.decimalSeparatorPosition-e]){if(c.length==0){c=&quot;0&quot;}c+=b[i].character}}}this.setvalue(&quot;decimal&quot;,c);return d.length&gt;0},_restoreInitialState:function(){var b=parseInt(this.decimalDigits);if(b&gt;0){b+=2}for(k=this.items.length-1;k&gt;this.items.length-1-b;k--){if(this.items[k].canEdit&amp;&amp;this.items[k].character==this.promptChar){this.items[k].character=0}}},clearDecimal:function(){for(i=0;i&lt;this.items.length;i++){if(this.items[i].canEdit){this.items[i].character=this.promptChar}}this._restoreInitialState()},_saveSelectedText:function(){var c=this._selection();var d=&quot;&quot;;var b=this._getVisibleItems();if(c.start&gt;0||c.length&gt;0){for(i=c.start;i&lt;c.end;i++){if(b[i].canEdit&amp;&amp;b[i].character!=this.promptChar){d+=b[i].character}else{if(b[i].isSeparator){d+=b[i].character}}}}if(a.browser.msie){window.clipboardData.setData(&quot;Text&quot;,d)}return d},_pasteSelectedText:function(){var f=this._selection();var l=&quot;&quot;;var e=0;var d=window.clipboardData.getData(&quot;Text&quot;);if(d!=this.selectedText&amp;&amp;d.length&gt;0){this.selectedText=window.clipboardData.getData(&quot;Text&quot;);if(this.selectedText==null||this.selectedText==undefined){return}}var c=f.start;var b=this._getVisibleItems();for(t=0;t&lt;this.selectedText.length;t++){var g=parseInt(this.selectedText[t]);if(!isNaN(g)){var h=48+g;this._insertKey(h)}}},_getHiddenPrefixCount:function(){var b=0;if(!this.negative){b++}if(this.symbolPosition==&quot;left&quot;){for(i=0;i&lt;this.symbol.length;i++){if(this.symbol.substring(i,i+1)==&quot;&quot;){b++}}}return b},_getEditableItem:function(){var b=this._selection();for(i=0;i&lt;this.items.length;i++){if(i&lt;b.start){if(this.items[i].canEdit&amp;&amp;this.items[i].character!=this.promptChar){return this.items[i]}}}return null},_getEditableItems:function(){var c=new Array();var b=0;for(i=0;i&lt;this.items.length;i++){if(this.items[i].canEdit){c[b]=this.items[i];b++}}return c},_getValidSelectionStart:function(b){for(i=this.items.length-1;i&gt;=0;i--){if(this.items[i].canEdit&amp;&amp;this.items[i].character!=this.promptChar){return i}}return -1},_getEditableItemIndex:function(c){var e=this._selection();var f=this._getHiddenPrefixCount();var b=this._getVisibleItems();var d=e.start;var g=-1;for(i=0;i&lt;d;i++){if(i&lt;b.length&amp;&amp;b[i].canEdit){g=i+f}}if(g==-1&amp;&amp;e.length&gt;0){d=e.end;for(i=0;i&lt;d;i++){if(i&lt;b.length&amp;&amp;b[i].canEdit){g=i+f;break}}}return g},_getEditableItemByIndex:function(b){for(k=0;k&lt;this.items.length;k++){if(k&gt;b){if(this.items[k].canEdit&amp;&amp;this.items[k].character!=this.promptChar){return k}}}return -1},_getFirstEditableItemIndex:function(){var b=this._getVisibleItems();for(m=0;m&lt;b.length;m++){if(b[m].character!=this.promptChar&amp;&amp;b[m].canEdit&amp;&amp;b[m].character!=&quot;0&quot;){return m}}return -1},_getLastEditableItemIndex:function(){var b=this._getVisibleItems();for(m=b.length-1;m&gt;=0;m--){if(b[m].character!=this.promptChar&amp;&amp;b[m].canEdit){return m}}return -1},_moveCaretToDecimalSeparator:function(){for(i=this.items.length-1;i&gt;=0;i--){if(this.items[i].character==this.decimalSeparator&amp;&amp;this.items[i].isSeparator){if(!this.negative){this._setSelectionStart(i);return i}else{this._setSelectionStart(i+1);return i}break}}return this.numberInput.val().length},_handleBackspace:function(){var e=this._selection();var f=this._getHiddenPrefixCount();var b=this._getEditableItemIndex()-f;if(b&gt;=0){if(e.length==0&amp;&amp;b!=-1){this._setSelection(b,b+1)}var g=e.start&gt;this._getSeparatorPosition()+1&amp;&amp;this.decimalSeparatorPosition&gt;0;if(g){e=this._selection()}var d=this._deleteSelectedText();if(e.length&lt;1||g){this._setSelectionStart(e.start)}else{if(e.length&gt;=1){this._setSelectionStart(e.end)}}if(e.length==this.numberInput.val().length){var c=this._moveCaretToDecimalSeparator();this._setSelectionStart(c-1)}}else{this._setSelectionStart(e.start)}},_handleKeyDown:function(d,o){var n=this._selection();if((d.ctrlKey&amp;&amp;o==97)||(d.ctrlKey&amp;&amp;o==65)){return true}if((d.ctrlKey&amp;&amp;o==120)||(d.ctrlKey&amp;&amp;o==88)){this.selectedText=this._saveSelectedText(d);this._handleBackspace();return false}if((d.ctrlKey&amp;&amp;o==99)||(d.ctrlKey&amp;&amp;o==67)){this.selectedText=this._saveSelectedText(d);return false}if((d.ctrlKey&amp;&amp;o==122)||(d.ctrlKey&amp;&amp;o==90)){return false}if((d.ctrlKey&amp;&amp;o==118)||(d.ctrlKey&amp;&amp;o==86)||(d.shiftKey&amp;&amp;o==45)){this._pasteSelectedText();return false}if(n.start&gt;=0&amp;&amp;n.start&lt;this.items.length){var b=String.fromCharCode(o);var r=this.items[n.start]}if(o==8){this._handleBackspace();return false}if(o==190||o==110){this._moveCaretToDecimalSeparator();return false}if(o==188){var l=this.numberInput.val();for(i=n.start;i&lt;l.length;i++){if(l[i]==this.groupSeparator){this._setSelectionStart(1+i);break}}return false}if(a.browser.msie==null){var b=String.fromCharCode(o);var g=parseInt(b);if(o&gt;=96&amp;&amp;o&lt;=105){g=o-96;o=o-48}if(!isNaN(g)){var f=this;f._insertKey(o);return false}}if(o==46){var q=this._getVisibleItems();if(n.start&lt;q.length){var c=q[n.start].canEdit==false?2:1;if(n.length==0){this._setSelection(n.start+c,n.start+c+n.length)}this._handleBackspace();if(new Number(this.decimal)&lt;1||n.start&gt;this._getSeparatorPosition()){this._setSelectionStart(n.end+c)}else{if(n.start+1&lt;this.decimalSeparatorPosition){this._setSelectionStart(n.end+c)}}}return false}if(o==37||o==39){if(a.jqx.mobile.isChromeMobileBrowser()){var c=o==37?-1:1;a.data(this.numberInput,&quot;selectionstart&quot;,this._selection().start+c)}}if(o==38){this.spinUp();return false}else{if(o==40){this.spinDown();return false}}var h=this._isSpecialKey(o);if(!a.browser.mozilla){return true}return h},_isSpecialKey:function(b){if(b!=8&amp;&amp;b!=9&amp;&amp;b!=13&amp;&amp;b!=35&amp;&amp;b!=36&amp;&amp;b!=37&amp;&amp;b!=39&amp;&amp;b!=27&amp;&amp;b!=46){return false}return true},_selection:function(){if(&quot;selectionStart&quot; in this.numberInput[0]){var f=this.numberInput[0];var g=f.selectionEnd-f.selectionStart;return{start:f.selectionStart,end:f.selectionEnd,length:g,text:f.value}}else{var c=document.selection.createRange();if(c==null){return{start:0,end:f.value.length,length:0}}var b=this.numberInput[0].createTextRange();var d=b.duplicate();b.moveToBookmark(c.getBookmark());d.setEndPoint(&quot;EndToStart&quot;,b);var g=c.text.length;return{start:d.text.length,end:d.text.length+c.text.length,length:g,text:c.text}}},_setSelection:function(d,b){if(&quot;selectionStart&quot; in this.numberInput[0]){this.numberInput[0].focus();this.numberInput[0].setSelectionRange(d,b)}else{var c=this.numberInput[0].createTextRange();c.collapse(true);c.moveEnd(&quot;character&quot;,b);c.moveStart(&quot;character&quot;,d);c.select()}},_setSelectionStart:function(b){this._setSelection(b,b);a.data(this.numberInput,&quot;selectionstart&quot;,b)},_render:function(){var c=parseInt(this.host.css(&quot;border-left-width&quot;));var g=parseInt(this.host.css(&quot;border-left-width&quot;));var f=parseInt(this.host.css(&quot;border-left-width&quot;));var d=parseInt(this.host.css(&quot;border-left-width&quot;));var l=parseInt(this.host.css(&quot;height&quot;))-f-d;var e=parseInt(this.host.css(&quot;width&quot;))-c-g;if(this.width!=null&amp;&amp;this.width.toString().indexOf(&quot;px&quot;)!=-1){e=this.width}else{if(this.width!=undefined&amp;&amp;!isNaN(this.width)){e=this.width}}if(this.height!=null&amp;&amp;this.height.toString().indexOf(&quot;px&quot;)!=-1){l=this.height}else{if(this.height!=undefined&amp;&amp;!isNaN(this.height)){l=this.height}}e=parseInt(e);l=parseInt(l);this.numberInput.css({&quot;border-left-width&quot;:0,&quot;border-right-width&quot;:0,&quot;border-bottom-width&quot;:0,&quot;border-top-width&quot;:0});this.numberInput.css(&quot;text-align&quot;,this.textAlign);var n=this.numberInput.css(&quot;font-size&quot;);if(!isNaN(l)){this.numberInput.css(&quot;height&quot;,parseInt(n)+4+&quot;px&quot;)}if(!isNaN(e)){this.numberInput.css(&quot;width&quot;,e-2)}var h=l-2*f-2*d-parseInt(n);if(isNaN(h)){h=0}if(!isNaN(l)){this.host.height(l)}if(!isNaN(e)){this.host.width(e)}if(this.spinButtons){e-=parseInt(this.spinButtonsWidth-2);this.spincontainer.width(this.spinButtonsWidth);this.upbutton.width(this.spinButtonsWidth+2);this.downbutton.width(this.spinButtonsWidth+2);this.upbutton.height(Math.round(l/2));this.downbutton.height(Math.round(l/2));this.spincontainer.width(this.spinButtonsWidth);this.numberInput.css(&quot;width&quot;,e-5);this.numberInput.css(&quot;margin-right&quot;,&quot;2px&quot;)}var b=h/2;if(a.browser.msie&amp;&amp;a.browser.version&lt;8){b=h/4}this.numberInput.css(&quot;padding-left&quot;,&quot;0px&quot;);this.numberInput.css(&quot;padding-right&quot;,&quot;0px&quot;);this.numberInput.css(&quot;padding-top&quot;,b);this.numberInput.css(&quot;padding-bottom&quot;,h/2);this.numberInput.val(this._getString());if(this.inputMode!=&quot;advanced&quot;){this._parseDecimalInSimpleMode()}},destroy:function(){this._removeHandlers();this.host.remove()},inputValue:function(b){if(b===undefined){return this._value()}this.propertyChangedHandler(this,&quot;value&quot;,this._value,b);this._refreshValue();return this},_value:function(){var b=this.numberInput.val();return b},val:function(b){if(b!=undefined&amp;&amp;typeof b!=&quot;object&quot;){this.setDecimal(b)}else{return this.getDecimal()}},getDecimal:function(){if(this.inputMode==&quot;simple&quot;){this._parseDecimalInSimpleMode()}var b=this.getvalue(&quot;negative&quot;);if(b&amp;&amp;this.decimal&gt;0){return -this.decimal}return this.decimal},setDecimal:function(b){if(b&lt;0){this.setvalue(&quot;negative&quot;,true)}else{this.setvalue(&quot;negative&quot;,false)}this._setDecimal(Math.abs(b))},_setDecimal:function(l){if(l==null||l==undefined){l=0}if(l.toString().indexOf(&quot;e&quot;)!=-1){l=0}this.clearDecimal();var n=l.toString();var o=&quot;&quot;;var b=&quot;&quot;;var c=true;if(n.length==0){n=&quot;0&quot;}for(var e=0;e&lt;n.length;e++){if(n.substring(e,e+1)==this.decimalSeparator){c=false;continue}if(c){o+=n.substring(e,e+1)}else{b+=n.substring(e,e+1)}}if(o.length&gt;0){o=parseFloat(o).toString()}var g=this.digits;if(g&lt;o.length){o=o.substr(0,g)}var d=0;var h=this._getSeparatorPosition();var f=this._getHiddenPrefixCount();h=h+f;for(e=h;e&gt;=0;e--){if(e&lt;this.items.length&amp;&amp;this.items[e].canEdit){if(d&lt;o.length){this.items[e].character=o.substring(o.length-d-1,o.length-d);d++}}}d=0;for(e=h;e&lt;this.items.length;e++){if(this.items[e].canEdit){if(d&lt;b.length){this.items[e].character=b.substring(d,d+1);d++}}}this._refreshValue();this.ValueString=new Number(l).toFixed(this.decimalDigits);if(this.inputMode==&quot;simple&quot;){this._parseDecimalInSimpleMode();this._raiseEvent(1,this.ValueString)}},_getSeparatorPosition:function(){var b=this._getHiddenPrefixCount();if(this.decimalSeparatorPosition&gt;0){return this.decimalSeparatorPosition-b}return this.items.length-b},_setTheme:function(){this.host.removeClass();this.host.addClass(this.toThemeProperty(&quot;jqx-input&quot;));this.host.addClass(this.toThemeProperty(&quot;jqx-rc-all&quot;));this.host.addClass(this.toThemeProperty(&quot;jqx-widget&quot;));this.host.addClass(this.toThemeProperty(&quot;jqx-widget-content&quot;));if(this.spinButtons){this.downbutton.removeClass();this.upbutton.removeClass();this.downbutton.addClass(this.toThemeProperty(&quot;jqx-scrollbar-button-state-normal&quot;));this.upbutton.addClass(this.toThemeProperty(&quot;jqx-scrollbar-button-state-normal&quot;));this._upArrow.removeClass();this._downArrow.removeClass();this._upArrow.addClass(this.toThemeProperty(&quot;icon-arrow-up&quot;));this._downArrow.addClass(this.toThemeProperty(&quot;icon-arrow-down&quot;))}this.numberInput.removeClass();this.numberInput.addClass(this.toThemeProperty(&quot;jqx-input-content&quot;))},propertyChangedHandler:function(c,d,g,f){if(d==&quot;digits&quot;||d==&quot;groupSize&quot;||d==&quot;decimalDigits&quot;){if(f&lt;0){throw new Exception(this.invalidArgumentExceptions[0])}}if(d===&quot;theme&quot;){a.jqx.utilities.setTheme(g,f,c.host)}if(d==&quot;digits&quot;){if(f!=g){c.digits=parseInt(f)}}if(d==&quot;decimalDigits&quot;){if(f!=g){c.decimalDigits=parseInt(f)}}if(d==&quot;digits&quot;||d==&quot;symbol&quot;||d==&quot;symbolPosition&quot;||d==&quot;groupSize&quot;||d==&quot;groupSeparator&quot;||d==&quot;decimalDigits&quot;||d==&quot;negativeSymbol&quot;){var b=c.decimal;if(g!=f){var e=c._selection();c.items=new Array();c._initializeLiterals();c.value=c._getString();c._refreshValue();c._setSelection(e.start,e.end);c._setDecimal(b)}}if(d==&quot;spinButtons&quot;){if(!f){c.spincontainer.css(&quot;display&quot;,&quot;none&quot;)}else{c.spincontainer.css(&quot;display&quot;,&quot;block&quot;)}c._render()}if(d==&quot;negative&quot;&amp;&amp;c.inputMode==&quot;advanced&quot;){var e=c._selection();var h=0;if(f){c.items[0].character=c.negativeSymbol[0];h=1}else{c.items[0].character=&quot;&quot;;h=-1}c._refreshValue();c._setSelection(e.start+h,e.end+h)}if(d==&quot;decimal&quot;){c.setDecimal(f)}if(d===&quot;value&quot;){c.value=f;c.setDecimal(f);c._raiseEvent(1,f)}if(d==&quot;textAlign&quot;){c.textAlign=f;c._render()}if(d==&quot;disabled&quot;){c.numberInput.attr(&quot;disabled&quot;,f);if(c.disabled){c.host.addClass(c.toThemeProperty(&quot;jqx-fill-state-disabled&quot;))}else{c.host.removeClass(c.toThemeProperty(&quot;jqx-fill-state-disabled&quot;))}}if(d==&quot;readOnly&quot;){c.readOnly=f}if(d==&quot;promptChar&quot;){for(i=0;i&lt;c.items.length;i++){if(c.items[i].character==c.promptChar){c.items[i].character=f}}c.promptChar=f}if(d==&quot;width&quot;){c.width=f;c._render()}else{if(d==&quot;height&quot;){c.height=f;c._render()}}},_value:function(){var b=this.value;return b},_refreshValue:function(){var e=this.value;var b=0;this.value=this._getString();e=this.value;var d=&quot;&quot;;for(i=0;i&lt;this.items.length;i++){if(this.items[i].canEdit&amp;&amp;this.items[i].character!=this.promptChar){d+=this.items[i].character}if(i==this.decimalSeparatorPosition){d+=&quot;.&quot;}}this.decimal=d;var c=false;if(this.oldValue!==e){this.oldValue=e;this._raiseEvent(0,e);c=true}if(this.inputMode!=&quot;simple&quot;){this.numberInput.val(e);if(c){this._raiseEvent(1,e)}}}})})(jQuery);<br></td></tr
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
 &nbsp; <a href="/p/openappengine/source/diff?spec=svn607&r=598&amp;format=side&amp;path=/branches/grails/openappengine/web-app/js/jqwidgets/jqxnumberinput.js&amp;old_path=/branches/grails/openappengine/web-app/js/jqwidgets/jqxnumberinput.js&amp;old=">Diff</a>
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
 
 var selected_path = '/branches/grails/openappengine/web-app/js/jqwidgets/jqxnumberinput.js';
 
 
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
 selected="selected"
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
 <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxnumberinput.js%3Fr%3D607&amp;followup=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxnumberinput.js%3Fr%3D607"
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
 
 <a href="/p/openappengine/source/list?path=/branches/grails/openappengine/web-app/js/jqwidgets/jqxnumberinput.js&start=598">All revisions of this file</a>
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
 
 <div>Size: 46640 bytes,
 7 lines</div>
 
 <div><a href="//openappengine.googlecode.com/svn-history/r607/branches/grails/openappengine/web-app/js/jqwidgets/jqxnumberinput.js">View raw file</a></div>
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
 var paths = {'svn607': '/branches/grails/openappengine/web-app/js/jqwidgets/jqxnumberinput.js'}
 codereviews = CR_controller.setup(
 {"projectHomeUrl": "/p/openappengine", "token": null, "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/8599073060794244502", "profileUrl": null, "domainName": null, "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "relativeBaseUrl": "", "loggedInUserEmail": null, "projectName": "openappengine"}, '', 'svn607', paths,
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

 
 


 
 
 <script type="text/javascript">_CS_reportToCsi();</script>
 
 </body>
</html>

