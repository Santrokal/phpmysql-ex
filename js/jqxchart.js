



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = null;
 
 
 var CS_env = {"relativeBaseUrl": "", "projectName": "openappengine", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/8599073060794244502", "domainName": null, "profileUrl": null, "projectHomeUrl": "/p/openappengine", "loggedInUserEmail": null, "token": null};
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
 
 
 <title>jqxchart.js - 
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
 | <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxchart.js%3Fr%3D607&amp;followup=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxchart.js%3Fr%3D607" onclick="_CS_click('/gb/ph/signin');"><u>Sign in</u></a>
 
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
 <span id="crumb_links" class="ifClosed"><a href="/p/openappengine/source/browse/branches/?r=607">branches</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/?r=607">grails</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/?r=607">openappengine</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/web-app/?r=607">web-app</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/?r=607">js</a><span class="sp">/&nbsp;</span><a href="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/?r=607">jqwidgets</a><span class="sp">/&nbsp;</span>jqxchart.js</span>
 
 


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

><td class="source">(function(a){a.jqx.jqxWidget(&quot;jqxChart&quot;,&quot;&quot;,{});a.extend(a.jqx._jqxChart.prototype,{createInstance:function(d){if(!a.jqx.dataAdapter){throw&quot;jqxdata.js is not loaded&quot;;return}this._refreshOnDownloadComlete();this._internalRefresh();var c=this;this.host.bind(&quot;mousemove&quot;,function(f){if(this.enabled==false){return}f.preventDefault();var e=f.pageX||f.clientX||f.screenX;var h=f.pageY||f.clientY||f.screenY;var g=c.host.position();e-=g.left;h-=g.top;c.onmousemove(e,h)});if(this.element.style){var b=false;if(this.element.style.width!=null){b|=this.element.style.width.toString().indexOf(&quot;%&quot;)!=-1}if(this.element.style.height!=null){b|=this.element.style.height.toString().indexOf(&quot;%&quot;)!=-1}if(b){a(window).resize(function(){if(c.timer){clearTimeout(c.timer)}var e=a.browser.msie?200:1;c.timer=setTimeout(function(){var f=c.enableAnimations;c.enableAnimations=false;c.refresh();c.enableAnimations=f},e)})}}},_refreshOnDownloadComlete:function(){if(this.source instanceof a.jqx.dataAdapter){var c=this;var d=this.source._options;if(d==undefined||(d!=undefined&amp;&amp;!d.autoBind)){this.source.autoSync=false;this.source.dataBind()}if(this.source.records.length==0){var b=function(){if(c.ready){c.ready()}c.refresh()};this.source.unbindDownloadComplete(this.element.id);this.source.bindDownloadComplete(this.element.id,b)}else{if(c.ready){c.ready()}}this.source.unbindBindingUpdate(this.element.id);this.source.bindBindingUpdate(this.element.id,function(){c.refresh()})}},defineInstance:function(){this.source=new Array();this.seriesGroups=new Array();this.categoryAxis={}},propertyChangedHandler:function(b,c,e,d){if(this.isInitialized==undefined||this.isInitialized==false){return}if(c==&quot;source&quot;){this._refreshOnDownloadComlete()}this.refresh()},_internalRefresh:function(){this.host.empty();this._renderData=new Array();var c=null;if(document.createElementNS){c=new a.jqx.svgRenderer()}else{c=new a.jqx.vmlRenderer();this._isVML=true}if(!c.init(this.host)){return}this.renderer=c;var b=this.renderer.getRect();this._render({x:1,y:1,width:b.width,height:b.height})},refresh:function(){this._internalRefresh()},_seriesTypes:[&quot;line&quot;,&quot;stackedline&quot;,&quot;stackedline100&quot;,&quot;spline&quot;,&quot;stackedspline&quot;,&quot;stackedspline100&quot;,&quot;stepline&quot;,&quot;stackedstepline&quot;,&quot;stackedstepline100&quot;,&quot;area&quot;,&quot;stackedarea&quot;,&quot;stackedarea100&quot;,&quot;splinearea&quot;,&quot;stackedsplinearea&quot;,&quot;stackedsplinearea100&quot;,&quot;steparea&quot;,&quot;stackedsteparea&quot;,&quot;stackedsteparea100&quot;,&quot;column&quot;,&quot;stackedcolumn&quot;,&quot;stackedcolumn100&quot;,&quot;pie&quot;,&quot;scatter&quot;,&quot;bubble&quot;],_render:function(e){this.renderer.clear();if(this._getDataLen()==0){return}this._buildStats();var u=this.padding||{left:5,top:5,right:5,bottom:5};var l=this.renderer.rect(e.x,e.y,e.width-1,e.height-1);this.renderer.setAttr(l,&quot;fill&quot;,this.background||&quot;white&quot;);this.renderer.setAttrs(l,{&quot;stroke-width&quot;:1,stroke:this.borderColor||&quot;#888888&quot;});var I={x:u.left,y:u.top,width:e.width-u.left-u.right,height:e.height-u.top-u.bottom};this._paddedRect=I;var b=this.titlePadding||{left:2,top:2,right:2,bottom:2};if(this.title&amp;&amp;this.title.length&gt;0){var J=this.toThemeProperty(&quot;jqx-chart-title-text&quot;,null);var v=this.renderer.measureText(this.title,0,{&quot;class&quot;:J});this.renderer.text(this.title,I.x+b.left,I.y+b.top,I.width-(b.left+b.right),v.height,0,{&quot;class&quot;:J},true,&quot;center&quot;,&quot;center&quot;);I.y+=v.height;I.height-=v.height}if(this.description&amp;&amp;this.description.length&gt;0){var j=this.toThemeProperty(&quot;jqx-chart-title-description&quot;,null);var v=this.renderer.measureText(this.description,0,{&quot;class&quot;:j});this.renderer.text(this.description,I.x+b.left,I.y+b.top,I.width-(b.left+b.right),v.height,0,{&quot;class&quot;:j},true,&quot;center&quot;,&quot;center&quot;);I.y+=v.height;I.height-=v.height}if(this.title||this.description){I.y+=(b.bottom+b.top);I.height-=(b.bottom+b.top)}var q={x:I.x,y:I.y,width:I.width,height:I.height};var f=0;var m=[];for(var D=0;D&lt;this.seriesGroups.length;D++){var A=this.seriesGroups[D].valueAxis;if(!A){if(this.seriesGroups[D].type==&quot;pie&quot;){m.push(0);continue}throw&quot;seriesGroup[&quot;+D+&quot;] is missing valueAxis definition&quot;}var s=A.axisSize;if(!s||s==&quot;auto&quot;){s=this._renderValueAxis(D,{x:0,y:q.y,width:q.width,height:q.height},true).width}if(D&gt;0&amp;&amp;s&gt;0){f+=5}m.push(s);f+=s}this._plotRect=q;var n=this.categoryAxis.axisSize;if(!n||n==&quot;auto&quot;){var t=this._renderCategoryAxis({x:0,y:0,width:10000000,height:0},true);n=t.height}var G=(this.showLegend!=false);var z=!G||this.legendLayout?{width:0,height:0}:this._renderLegend(I,true);if(I.height&lt;n+z.height||I.width&lt;f){return}q.height-=n+z.height;q.x+=f;q.width-=f;var C=this._isPieOnlySeries();if(!C){var d=this.categoryAxis.tickMarksColor||&quot;#888888&quot;;if(f==0){var p=a.jqx._ptrnd(q.x);var k=this.renderer.line(p,a.jqx._ptrnd(q.y),p,a.jqx._ptrnd(q.y+q.height+5),{stroke:d,&quot;stroke-width&quot;:1})}this._renderCategoryAxis({x:q.x,y:q.y+q.height,width:q.width,height:n},false,q)}if(G){var p=q.x+a.jqx._ptrnd((q.width-z.width)/2);var o=q.y+q.height+n;var s=q.width;var E=z.height;if(this.legendLayout){p=this.legendLayout.left||p;o=this.legendLayout.top||o;s=this.legendLayout.width||s;E=this.legendLayout.height||E}if(p+s&gt;I.x+I.width){s=I.x+I.width-p}if(o+E&gt;I.y+I.height){E=I.y+I.height-o}this._renderLegend({x:p,y:o,width:s,height:E})}this._hasHorizontalLines=false;if(!C){var L=q.x-f;for(var D=0;D&lt;this.seriesGroups.length;D++){var s=m[D];if(D&gt;0&amp;&amp;s&gt;0){L+=5}this._renderValueAxis(D,{x:L,y:q.y,width:s,height:q.height},false);this._hasHorizontalLines=this._hasHorizontalLines||this._renderHorizontalGridLines(D,q);L+=s}}if(q.width&lt;=0||q.height&lt;=0){return}this._plotRect={x:q.x,y:q.y,width:q.width,height:q.height};var F=this.renderer.beginGroup();var H=this.renderer.createClipRect({x:q.x,y:q.y,width:q.width,height:q.height});this.renderer.setClip(F,H);for(var D=0;D&lt;this.seriesGroups.length;D++){var K=this.seriesGroups[D];var B=false;for(var r in this._seriesTypes){if(this._seriesTypes[r]==K.type){B=true;break}}if(!B){throw&#39;jqxChart: invalid series type &quot;&#39;+K.type+&#39;&quot;&#39;;continue}if(K.type.indexOf(&quot;column&quot;)!=-1){this._renderColumnSeries(D,q)}else{if(K.type.indexOf(&quot;pie&quot;)!=-1){this._renderPieSeries(D,q)}else{if(K.type.indexOf(&quot;line&quot;)!=-1||K.type.indexOf(&quot;area&quot;)!=-1){this._renderLineSeries(D,q)}else{if(K.type==&quot;scatter&quot;||K.type==&quot;bubble&quot;){this._renderScatterSeries(D,q)}}}}}this.renderer.endGroup();this._plotGroup=this.renderer._activeParent();if(this.enabled==false){var c=this.renderer.rect(e.x,e.y,e.width,e.height);this.renderer.setAttrs(c,{fill:&quot;#777777&quot;,opacity:0.5,stroke:&quot;#00FFFFFF&quot;})}},_isPieOnlySeries:function(){if(this.seriesGroups.length==0){return false}for(var b=0;b&lt;this.seriesGroups.length;b++){if(this.seriesGroups[b].type!=&quot;pie&quot;){return false}}return true},_renderChartLegend:function(v,c,d,e){var n={x:c.x+3,y:c.y+3,width:c.width-6,height:c.height-6};var j={width:n.width,height:0};var h=0,g=0;var f=20;var b=0;var o=10;var u=10;var s=0;for(var q=0;q&lt;v.length;q++){var k=v[q].css;if(!k){k=this.toThemeProperty(&quot;jqx-chart-legend-text&quot;,null)}var l=v[q].text;var m=this.renderer.measureText(l,0,{&quot;class&quot;:k});if(m.height&gt;f){f=m.height}if(m.width&gt;s){s=m.width}if(e){if(q!=0){g+=f}if(g&gt;n.height){g=0;h+=s+u;s=m.width;j.width=h+s}}else{if(h!=0){h+=u}if(h+2*o+m.width&gt;n.width&amp;&amp;m.width&lt;n.width){h=0;g+=f;f=20;b=n.width;j.heigh=g+f}}if(!d){var p=v[q].color;var t=this.renderer.rect(n.x+h,n.y+g+o/2,o,o);this.renderer.setAttrs(t,{fill:p,stroke:p,&quot;stroke-width&quot;:1});this.renderer.text(l,n.x+h+1.5*o,n.y+g,m.width,f,0,{&quot;class&quot;:k},false,&quot;center&quot;,&quot;center&quot;)}if(e){}else{h+=m.width+2*o;if(b&lt;h){b=h}}}if(d){j.height=a.jqx._ptrnd(g+f);j.width=a.jqx._ptrnd(b);return j}},_renderLegend:function(l,j){var b=[];for(var o=0;o&lt;this.seriesGroups.length;o++){var f=this.seriesGroups[o];for(var m=0;m&lt;f.series.length;m++){var p=f.series[m];if(f.type==&quot;pie&quot;){var k=p.colorScheme||f.colorScheme||this.colorScheme;var c=this._getDataLen(o);for(var e=0;e&lt;c;e++){var h=this._getDataValue(e,p.displayText,o);if(!h){h=this._getFormattedValue(o,m,e)}var d=this._getColor(k,m*c+e);b.push({text:h,css:p.displayTextClass,color:d})}continue}var n=p.displayText||p.dataField||&quot;&quot;;var d=this._getSeriesColor(o,m);b.push({text:n,css:p.displayTextClass,color:d})}}return this._renderChartLegend(b,l,j,(this.legendLayout&amp;&amp;this.legendLayout.flow==&quot;vertical&quot;))},_renderCategoryAxis:function(d,f,g){var r={width:0,height:0};var e=this.categoryAxis;if(!e){return r}var t=e.text;if(!f){var o=a.jqx._ptrnd(d.y);var z=this.renderer.line(a.jqx._ptrnd(d.x),o,a.jqx._ptrnd(d.x+d.width+1),o,{stroke:B,&quot;stroke-width&quot;:1})}var s=e[&quot;class&quot;];if(!s){s=this.toThemeProperty(&quot;jqx-chart-axis-text&quot;,null)}var E=e.textRotationAngle||0;var k=this._calculateXOffsets(undefined,d);var h=k.itemWidth;var v=e.unitInterval;if(isNaN(v)){v=Math.max(1,Math.round(k.rangeLength/10))}var p=0;var H=this.categoryAxis.horizontalTextAlignment;var G=this._isPointSeriesOnly();if(G){p=-h*v/2;H=&quot;left&quot;}var j=this.renderer.getRect();var b=j.width-d.x-d.width;var q=0;var A=k.customRange!=false;var l=v;for(var C=k.min;C&lt;=k.max;C+=l,q+=l*h){if(A){value=C}else{value=this._getDataValue(C,this.categoryAxis.dataField)}var t=this._formatValue(value,this.categoryAxis.formatSettings,this.categoryAxis.formatFunction);if(t==undefined){t=!A?value.toString():(C).toString()}var u;if(f||C==k.max||G){u=this.renderer.measureText(t,E,{&quot;class&quot;:s});if(u.height&gt;r.height){r.height=u.height}}var w=G?-u.width/2:p;if(this.categoryAxis.textInsideIntervals==true){w=0;H=&quot;center&quot;}if(!f&amp;&amp;(!u||q+u.width+w&lt;d.width+b)){this.renderer.text(t,d.x+q+w,d.y+0,(G&amp;&amp;this.categoryAxis.textInsideIntervals!=true)?u.width:h*v,d.height,E,{&quot;class&quot;:s},true,H,this.categoryAxis.verticalTextAlignment)}if(C+l&gt;k.max){l=k.max-C;if(l==0){break}}}if(!f){var c=e.showGridLines!=false;var D=e.gridLinesColor||&quot;#888888&quot;;var F=e.gridLinesInterval||e.unitInterval;if(isNaN(F)){F=v}for(var C=0;C&lt;k.rangeLength+F;C+=F){if(C&gt;k.rangeLength){C=k.rangeLength}var z=a.jqx._ptrnd(d.x+C*h);if(z&lt;d.x||z&gt;d.x+d.width){continue}if(c||(C==k.rangeLength&amp;&amp;this._hasHorizontalLines)){this.renderer.line(z,a.jqx._ptrnd(g.y),z,a.jqx._ptrnd(g.y+g.height),{stroke:D,&quot;stroke-width&quot;:1})}}}var m=e.showTickMarks!=false;if(!f&amp;&amp;m){var B=e.tickMarksColor||&quot;#888888&quot;;var n=e.tickMarksInterval||e.unitInterval;if(isNaN(n)){n=v}for(var C=0;C&lt;k.rangeLength+n;C+=n){var z=a.jqx._ptrnd(d.x+C*h);if(z&lt;d.x||z&gt;d.x+d.width){continue}this.renderer.line(z,d.y,z,d.y+4,{stroke:B,&quot;stroke-width&quot;:1})}}r.width=a.jqx._rup(r.width);r.height=a.jqx._rup(r.height+5);return r},_renderValueAxis:function(j,c,h){var F=this.seriesGroups[j];var d=F.valueAxis;var s={width:0,height:0};if(this._isPieOnlySeries()){if(h){return s}return}var o=this._stats.seriesGroups[j];if(!o||!o.isValid||false==d.displayValueAxis){if(h){return s}return}var k=d.tickMarksColor||&quot;#888888&quot;;var e=F.type.indexOf(&quot;stacked&quot;)!=-1&amp;&amp;F.type.indexOf(&quot;100&quot;)!=-1;var m=d.showTickMarks;if(m==undefined){m=true}var q=c.x+c.width;q=a.jqx._ptrnd(q);if(m&amp;&amp;!h){this.renderer.line(q,c.y,q,c.y+c.height+5,{stroke:k,&quot;stroke-width&quot;:1})}if(d.description){var l=d.descriptionClass;if(!l){l=this.toThemeProperty(&quot;jqx-chart-axis-description&quot;,null)}var v=this.renderer.measureText(d.description,-90,{&quot;class&quot;:l});if(h){s.width+=v.width+5}else{this.renderer.text(d.description,c.x+2,c.y,c.width-5,c.height,-90,{&quot;class&quot;:l},true,&quot;left&quot;,&quot;center&quot;);c.x+=v.width+5;c.width-=v.width+5}}var b=d.dataField;var u=o.intervals;var C=o.min;var z=o.mu;var w=c.height/u;var r=d.itemsClass;if(!r){r=this.toThemeProperty(&quot;jqx-chart-axis-text&quot;,null)}var n=c.y+c.height-w;var E=d.formatSettings;if(e&amp;&amp;!E){E={sufix:&quot;%&quot;}}var f=0;var G=d.textRotationAngle||0;for(var D=0;D&lt;=u;D++){var A=C+D*z;var t=this._formatNumber(A,E);if(h){var v=this.renderer.measureText(t,G,{&quot;class&quot;:r});if(f&lt;v.width){f=v.width}}else{var H=this.renderer.text(t,c.x,n+w/2,c.width-4,w,G,{&quot;class&quot;:r},false,&quot;center&quot;,&quot;center&quot;)}n-=w}if(h){s.width+=f+5+(m?3:0);s.height=a.jqx._rup(c.height);s.width=a.jqx._rup(s.width);return s}if(m==undefined||m){var B=c.height/o.tickMarksIntervals;n=c.y;while(n&lt;c.y+c.height){var p=a.jqx._ptrnd(n);this.renderer.line(q-3,p,q,p,{stroke:k,&quot;stroke-width&quot;:1});n+=B}}},_renderHorizontalGridLines:function(k,j){var d=this.seriesGroups[k].valueAxis;if(!d||d.showGridLines==false){return false}var b=d.gridLinesColor||d.tickMarksColor||&quot;#888888&quot;;var f=this._stats.seriesGroups[k];if(!f||!f.isValid||false==d.displayValueAxis||false==d.showGridLines){return false}var g=f.gridLinesIntervals;var h=j.height/g;var e=j.y;var c=h;while(e&lt;j.y+j.height+1){var i=a.jqx._ptrnd(e);this.renderer.line(a.jqx._ptrnd(j.x),i,a.jqx._ptrnd(j.x+j.width),i,{stroke:b,&quot;stroke-width&quot;:1});if(e+c&gt;j.y+j.height){c=j.y+j.height-e}if(c==0){break}e+=c}return true},_buildStats:function(){var E={seriesGroups:new Array()};this._stats=E;for(var A=0;A&lt;this.seriesGroups.length;A++){var n=this.seriesGroups[A];E.seriesGroups[A]={};var d=E.seriesGroups[A];d.isValid=true;var b=n.valueAxis!=undefined;var o=-1!=n.type.indexOf(&quot;stacked&quot;);var f=o&amp;&amp;-1!=n.type.indexOf(&quot;100&quot;);if(f){d.psums=new Array();d.nsums=new Array()}var c=NaN,e=NaN;var C=NaN,F=NaN;var B=n.baselineValue||0;var z=this._getDataLen(A);var l=0;for(var y=0;y&lt;z&amp;&amp;d.isValid;y++){var v=b?n.valueAxis.minValue:0;var x=b?n.valueAxis.maxValue:0;var j=0,k=0;if(typeof(v)!=&quot;number&quot;){v=NaN}if(typeof(x)!=&quot;number&quot;){x=NaN}for(var t=0;t&lt;n.series.length;t++){var G=this._getDataValueAsNumber(y,n.series[t].dataField,A);if(isNaN(G)){throw&quot;jqxChart: Data source contains invalid value at Index: &quot;+y+&quot;, DataField: &quot;+n.series[t].dataField;d.isValid=false;break}if((G&gt;x||isNaN(x))&amp;&amp;((!b||isNaN(n.valueAxis.maxValue))?true:G&lt;=n.valueAxis.maxValue)){x=G}if((G&lt;v||isNaN(v))&amp;&amp;((!b||isNaN(n.valueAxis.minValue))?true:G&gt;=n.valueAxis.minValue)){v=G}if(G&gt;B){j+=G}else{if(G&lt;B){k+=G}}}var r=j-k;if(l&lt;r){l=r}if(f){d.psums[y]=j;d.nsums[y]=k}if(x&gt;e||isNaN(e)){e=x}if(v&lt;c||isNaN(c)){c=v}if(j&gt;C||isNaN(C)){C=j}if(k&lt;F||isNaN(F)){F=k}}if(f){C=C==0?0:Math.max(C,-F);F=F==0?0:Math.min(F,-C)}var u=b?n.valueAxis.unitInterval:0;if(!u){u=o?(C-F)/10:(e-c)/10}var m=b?n.valueAxis.tickMarksInterval||u:0;var D=b?n.valueAxis.gridLinesInterval||u:0;if(c&lt;F){F=c}if(e&gt;C){C=e}var w=a.jqx._rnd(o?F:c,u,false);var q=a.jqx._rnd(o?C:e,u,true);if(f){q=(q&gt;0)?100:0;w=(w&lt;0)?-100:0;u=b?n.valueAxis.unitInterval:10;if(u&lt;=0||u&gt;=100){u=10}if(m&lt;=0||m&gt;=100){m=10}if(D&lt;=0||D&gt;=100){D=10}}if(isNaN(q)||isNaN(w)||isNaN(u)){continue}var h=(q-w)/(u==0?1:u);if(h&lt;1){continue}var p=q-w;d.rmax=o?C:e;d.rmin=o?F:c;d.min=w;d.max=q;d.mu=u;d.maxRange=l;d.intervals=h;d.tickMarksInterval=m;d.tickMarksIntervals=m==0?0:p/m;d.gridLinesInterval=D;d.gridLinesIntervals=D==0?0:p/D;if(p==0){p=1}d.scale=o?(C-F)/p:(e-c)/p}},_getDataLen:function(c){var b=this.source;if(c!=undefined&amp;&amp;c!=-1&amp;&amp;this.seriesGroups[c].source){b=this.seriesGroups[c].source}if(b instanceof a.jqx.dataAdapter){b=b.records}if(b){return b.length}return 0},_getDataValue:function(b,e,d){var c=this.source;if(d!=undefined&amp;&amp;d!=-1){c=this.seriesGroups[d].source||c}if(c instanceof a.jqx.dataAdapter){c=c.records}if(!c||b&lt;0||b&gt;c.length-1){return NaN}return(e&amp;&amp;e!=&quot;&quot;)?c[b][e]:c[b]},_getDataValueAsNumber:function(b,e,c){var d=this._getDataValue(b,e,c);if(this._isDate(d)){return d.valueOf()}if(typeof(d)!=&quot;number&quot;){d=parseFloat(d)}if(typeof(d)!=&quot;number&quot;){d=undefined}return d},_renderPieSeries:function(c,D){var m=this._getDataLen(c);var q=this.seriesGroups[c];for(var f=0;f&lt;q.series.length;f++){var J=q.series[f];var p=J.colorScheme||q.colorScheme||this.colorScheme;var g=J.initialAngle||0;var M=g;var K=J.radius||Math.min(D.width,D.height)*0.4;var d=J.centerOffset||0;var I=J.offsetX||D.width/2;var G=J.offsetX||D.height/2;var E=this._getAnimProps(c,f);var v=E.enabled&amp;&amp;m&lt;5000&amp;&amp;this._isVML!=true?E.duration:0;var l=0;var n=0;for(var O=0;O&lt;m;O++){var A=this._getDataValueAsNumber(O,J.dataField,c);if(typeof(A)!=&quot;number&quot;){continue}if(A&gt;0){l+=A}else{n+=A}}var k=l-n;if(k==0){k=1}for(var O=0;O&lt;m;O++){var A=this._getDataValueAsNumber(O,J.dataField,c);if(typeof(A)!=&quot;number&quot;){continue}var o=Math.round(Math.abs(A)/k*360);if(O+1==m){o=360+g-M}var H=D.x+I;var F=D.y+G;var L=this.renderer.pieslice(H,F,K,M,v&gt;0?M:M+o,d);if(v&gt;0){var r={x:H,y:F,r:K,fromAngle:M,toAngle:M+o,centerOffset:d};var j=this;this._animate(L,undefined,v,function(x,i,y){var s=i.fromAngle+y*(i.toAngle-i.fromAngle);var Q=j.renderer._getPieSlicePath(i.x,i.y,i.r,i.fromAngle,s,i.centerOffset);j.renderer.setAttrs(x,{d:Q})},r)}var B=this._getColor(p,f*m+O);this.renderer.setAttrs(L,{fill:B,stroke:B,&quot;stroke-width&quot;:1});var t=M,N=M+o;var z=Math.abs(t-N);var P=z&gt;180?1:0;if(z&gt;360){t=0;N=360}var e=t*Math.PI*2/360;var u=N*Math.PI*2/360;var C=z/2+t;var b=C*Math.PI*2/360;var h=this._showLabel(c,f,O,{x:0,y:0,width:0,height:0},&quot;left&quot;,&quot;top&quot;,true);var w=J.labelRadius||K+Math.max(h.width,h.height);w+=d;var H=D.x+I+w*Math.cos(b)-h.width/2;var F=D.y+G-w*Math.sin(b)-h.height/2;this._showLabel(c,f,O,{x:H,y:F,width:h.width,height:h.height},&quot;left&quot;,&quot;top&quot;);this._installHandlers(L,c,f,O);M+=o}}},_renderColumnSeries:function(e,c){var p=this.seriesGroups[e];if(!p.series||p.series.length==0){return}var q=p.type.indexOf(&quot;stacked&quot;)!=-1;var d=q&amp;&amp;p.type.indexOf(&quot;100&quot;)!=-1;var o=this._getDataLen(e);var K=p.columnsGapPercent;if(isNaN(K)||K&lt;0||K&gt;100){K=25}var z=p.seriesGapPercent;if(isNaN(z)||z&lt;0||z&gt;100){z=10}var w=this._calcGroupOffsets(e,c);if(!w||w.xoffsets.length==0){return}for(var A=0;A&lt;p.series.length;A++){var v=p.series[A];var C=v.dataField;var t=this._getColors(e,A,undefined,this._getGroupGradientType(e));var f=v.opacity||p.opacity;if(!f||f&lt;0||f&gt;1){f=1}var B=this._getAnimProps(e,A);var b=B.enabled&amp;&amp;w.xoffsets.length&lt;100?B.duration:0;for(var D=w.xoffsets.first;D&lt;=w.xoffsets.last;D++){var L=this._getDataValueAsNumber(D,C,e);if(typeof(L)!=&quot;number&quot;){continue}var G=w.xoffsets.data[D];var F=G+w.xoffsets.itemWidth;var l=(F-G+1);var J=(F-G+1)/(1+K/100);var n=(!q&amp;&amp;p.series.length&gt;1)?(J*z/100)/(p.series.length-1):0;var I=(J-n*(p.series.length-1));if(J&lt;1){J=1}var j=0;if(!q&amp;&amp;p.series.length&gt;1){I/=p.series.length;j=A}var u=G+(l-J)/2+j*(n+I);if(j==p.series.length){I=l-G+J-u}var r=w.offsets[A][D].to;var k=w.offsets[A][D].from;var g=w.baseOffset;var E=k-r;if(Math.abs(E)&lt;1){continue}var m={x:c.x+u,y:E&gt;0?r:k,width:I,height:Math.abs(E)};var H;if(!q){if(b==0){H=this.renderer.rect(m.x,m.y,m.width,m.height)}else{H=this.renderer.rect(m.x,m.y+m.height,m.width,0);if(E&gt;0){this._animate(H,[{key:&quot;y&quot;,type:&quot;point&quot;,from:m.y+m.height,to:m.y},{key:&quot;height&quot;,type:&quot;point&quot;,from:0,to:m.height}],b,undefined,undefined)}else{this.renderer.setAttrs(H,{y:m.y});this._animate(H,[{key:&quot;height&quot;,type:&quot;point&quot;,from:0,to:-E}],b)}}}else{if(b==0){H=this.renderer.rect(m.x,m.y,I,m.height)}else{H=this.renderer.rect(m.x,m.y,0,m.height);this._animate(H,[{key:&quot;width&quot;,type:&quot;point&quot;,from:0,to:I}],b)}}this.renderer.setAttrs(H,{fill:t.fillColor,&quot;fill-opacity&quot;:f,stroke:t.lineColor,&quot;stroke-width&quot;:1});this._installHandlers(H,e,A,D);this._showLabel(e,A,D,m)}}},_renderScatterSeries:function(e,d){var j=this.seriesGroups[e];if(!j.series||j.series.length==0){return}var c=j.type==&quot;bubble&quot;;var t=this._calcGroupOffsets(e,d);if(!t||t.xoffsets.length==0){return}for(var v=0;v&lt;j.series.length;v++){var m=this._getColors(e,v,undefined,this._getGroupGradientType(e));var o=j.series[v];var A=o.dataField;var f=o.opacity||j.opacity;if(!f||f&lt;0||f&gt;1){f=1}var w=NaN,B=NaN;if(c){for(var C=t.xoffsets.first;C&lt;=t.xoffsets.last;C++){var H=this._getDataValueAsNumber(C,o.radiusDataField,e);if(typeof(H)!=&quot;number&quot;){throw&quot;Invalid radiusDataField value at [&quot;+C+&quot;]&quot;}if(isNaN(w)||H&lt;w){w=H}if(isNaN(B)||H&gt;B){B=H}}}var k=o.minRadius;if(isNaN(k)){k=5}var h=o.maxRadius;if(isNaN(h)){k=30}if(k&gt;h){throw&quot;Invalid settings: minRadius must be less than or equal to maxRadius&quot;}var g=o.radius||5;var z=this._getAnimProps(e,v);var b=z.enabled&amp;&amp;t.xoffsets.length&lt;5000?z.duration:0;for(var C=t.xoffsets.first;C&lt;=t.xoffsets.last;C++){var H=this._getDataValueAsNumber(C,A,e);if(typeof(H)!=&quot;number&quot;){continue}var E=t.xoffsets.data[C];var D=E+t.xoffsets.itemWidth;var n=E+(D-E)/2;n=a.jqx._ptrnd(d.x+n);var l=t.offsets[v][C].to;var p=g;if(c){var G=this._getDataValueAsNumber(C,o.radiusDataField,e);if(typeof(G)!=&quot;number&quot;){continue}p=k+(h-k)*(G-w)/Math.max(1,B-w)}var F=this.renderer.circle(n,l,b==0?p:0);this.renderer.setAttrs(F,{fill:m.fillColor,&quot;fill-opacity&quot;:f,stroke:m.lineColor,&quot;stroke-width&quot;:1});var u={from:0,to:p};var q=this;if(b&gt;0){this._animate(F,undefined,b,function(r,i,s){q._animR(r,i,s)},u)}this._installHandlers(F,e,v,C)}}},_animR:function(c,b,e){var d=Math.round((b.to-b.from)*e+b.from);if(this._isVML){this.renderer.updateCircle(c,undefined,undefined,d)}else{this.renderer.setAttrs(c,{r:d})}},_showToolTip:function(n,m,r,o,i){if(this.showToolTips==false){return}if(this._toolTipElement&amp;&amp;r==this._toolTipElement.gidx&amp;&amp;o==this._toolTipElement.sidx&amp;&amp;i==this._toolTipElement.iidx){return}this._hideToolTip();if(this._pointMarker){n=parseInt(this.renderer.getAttr(this._pointMarker,&quot;cx&quot;))+5;m=parseInt(this.renderer.getAttr(this._pointMarker,&quot;cy&quot;))-5}var p=this.seriesGroups[r];var j=p.series[o];var b=this._getColors(r,o,i);var q=this._getFormattedValue(r,o,i);var f=this._getDataValue(i,this.categoryAxis.dataField,r);var c=this._formatValue(f,this.categoryAxis.formatSettings,this.categoryAxis.formatFunction);if(p.type!=&quot;pie&quot;){q=(j.displayText||j.dataField||&quot;&quot;)+&quot;, &quot;+c+&quot;: &quot;+q}else{q=this._getDataValue(i,j.displayText||j.dataField)+&quot;: &quot;+q}var e=j.toolTipClass||p.toolTipClass||this.toThemeProperty(&quot;jqx-chart-tooltip-text&quot;,null);var d=j.toolTipBackground||p.toolTipBackground||&quot;#FFFFFF&quot;;var h=j.toolTipLineColor||p.toolTipLineColor||b.lineColor;var l=this.renderer.measureText(q,0,{&quot;class&quot;:e});l.width=l.width+5;l.height=l.height+6;rect=this.renderer.getRect();n=Math.max(n-5,rect.x);m=Math.max(m-l.height,rect.y);if(l.width&gt;rect.width||l.height&gt;rect.height){return}if(n+l.width&gt;rect.x+rect.width){n=rect.x+rect.width-l.width-2}if(m+l.height&gt;rect.y+rect.height){m=rect.y+rect.height-l.height-2}var k=this.renderer.rect(n,m,l.width,l.height);this.renderer.setAttrs(k,{fill:d,&quot;fill-opacity&quot;:0,stroke:h,rx:2,ry:2,&quot;stroke-width&quot;:1});var g=this.renderer.text(q,n,m,l.width,l.height,0,{&quot;class&quot;:e,opacity:0},true,&quot;center&quot;,&quot;center&quot;);this._toolTipElement={box:k,txt:g,sidx:o,gidx:r,iidx:i};this._animate(k,[{key:&quot;fill-opacity&quot;,from:0,to:0.8}],200);this._animate(g,[{key:&quot;opacity&quot;,from:0,to:1}],500)},_hideToolTip:function(){if(!this._toolTipElement){return}this.renderer.removeElement(this._toolTipElement.box);this.renderer.removeElement(this._toolTipElement.txt);this._toolTipElement=undefined},_showLabel:function(r,n,c,j,f,k,g){var p=this.seriesGroups[r];var b=p.series[n];var i={width:0,height:0};if(!b.showLabels&amp;&amp;!p.showLabels){return i}if(j.width&lt;0||j.height&lt;0){return i}var m=b.labelsAngle||p.labelsAngle||0;var o=b.labelOffset||p.labelAngle||{x:0,y:0};var e=b.labelClass||p.labelClass||this.toThemeProperty(&quot;jqx-chart-label-text&quot;,null);f=f||&quot;center&quot;;k=k||&quot;center&quot;;var q=this._getFormattedValue(r,n,c);var l=j.width;var d=j.height;if(l==0||d==0||g){i=this.renderer.measureText(q,m,{&quot;class&quot;:e});if(g){return i}l=i.width;d=i.height}var s=this.renderer.text(q,j.x+o.x,j.y+o.y,l,d,m,{},m!=0,f,k);this.renderer.setAttrs(s,{&quot;class&quot;:e});if(this._isVML){this.renderer.removeElement(s);this.renderer.getContainer()[0].appendChild(s)}},_getAnimProps:function(j,f){var e=this.seriesGroups[j];var c=e.series[f];var b=this.enableAnimations==true;if(e.enableAnimations){b=e.enableAnimations==true}if(c.enableAnimations){b=c.enableAnimations==true}var i=this.animationDuration;if(isNaN(i)){i=1000}var d=e.animationDuration;if(!isNaN(d)){i=d}var h=c.animationDuration;if(!isNaN(h)){i=h}if(i&gt;5000){i=1000}return{enabled:b,duration:i}},_renderLineSeries:function(e,A){var r=this.seriesGroups[e];if(!r.series||r.series.length==0){return}var l=r.type.indexOf(&quot;area&quot;)!=-1;var w=r.type.indexOf(&quot;stacked&quot;)!=-1;var b=w&amp;&amp;r.type.indexOf(&quot;100&quot;)!=-1;var M=r.type.indexOf(&quot;spline&quot;)!=-1;var m=r.type.indexOf(&quot;step&quot;)!=-1;if(m&amp;&amp;M){return}var n=this._getDataLen(e);var K=A.width/n;var q=Math.round(A.width/K);var d=Math.round(n/q);var o=this._calcGroupOffsets(e,A);if(!o||o.xoffsets.length==0){return}var O=this._isPointSeriesOnly();for(var G=r.series.length-1;G&gt;=0;G--){var H=this._getColors(e,G,undefined,this._getGroupGradientType(e));var N=r.series[G].opacity||r.opacity;if(!N||N&lt;0||N&gt;1){N=1}var t=r.series[G].lineWidth||r.lineWidth;if(!t||t==&quot;auto&quot;||isNaN(t)||t&lt;1||t&gt;15){t=l?2:3}var E=[];var z=-1;var j=0;var B=NaN;var p=NaN;var P=NaN;if(o.xoffsets.length&lt;1){continue}var C=this._getAnimProps(e,G);var y=C.enabled&amp;&amp;o.xoffsets.length&lt;5000&amp;&amp;this._isVML!=true?C.duration:0;var D=o.xoffsets.itemWidth/2;if(O){D=0}for(var L=o.xoffsets.first;L&lt;=o.xoffsets.last;L++){var F=o.xoffsets.data[L]+D;if(F==undefined){continue}var h=o.offsets[G][L].to;if(!l&amp;&amp;b){if(h&lt;=A.y){h=A.y+1}if(h&gt;=A.y+A.height){h=A.y+A.height-1}}F=Math.max(F,1);j=F;if(m&amp;&amp;!isNaN(B)&amp;&amp;!isNaN(p)){if(p!=h){E.push({x:a.jqx._ptrnd(A.x+j),y:a.jqx._ptrnd(p)})}}E.push({x:a.jqx._ptrnd(A.x+j),y:a.jqx._ptrnd(h)});B=j;p=h;if(isNaN(P)){P=h}this._showLabel(e,G,L,{x:a.jqx._ptrnd(A.x+j),y:a.jqx._ptrnd(h),width:0,height:0})}var f=o.xoffsets.data[o.xoffsets.first];if(f&gt;0){f+=o.xoffsets.itemWidth/2}var I=o.xoffsets.data[o.xoffsets.last];if(Math.abs(I+o.xoffsets.itemWidth-A.width)&lt;2){I=A.width}else{I+=o.xoffsets.itemWidth/2}f=a.jqx._ptrnd(A.x+f);I=a.jqx._ptrnd(A.x+I);var g=o.baseOffset;P=a.jqx._ptrnd(P);var c=a.jqx._ptrnd(h);var v=this._calculateLine(E,g,y==0?1:0,l);v=this._buildLineCmd(v,f,I,P,c,g,l,M&amp;&amp;E.length&gt;3);var J=this.renderer.path(v,{&quot;stroke-width&quot;:t,stroke:H.lineColor,&quot;fill-opacity&quot;:N,fill:l?H.fillColor:&quot;none&quot;});this._installHandlers(J,e,G);if(y&gt;0){var u={pointsArray:E,left:f,right:I,pyStart:P,pyEnd:c,yBase:g,isArea:l,isSpline:M};var k=this;this._animate(J,undefined,y,function(x,i,Q){var R=k._calculateLine(i.pointsArray,i.yBase,Q,i.isArea);var s=i.pointsArray.length;if(!i.isArea){s=Math.round(s*Q)}R=k._buildLineCmd(R,i.left,i.right,i.pyStart,i.pyEnd,i.yBase,i.isArea,s&gt;3&amp;&amp;i.isSpline);k.renderer.setAttrs(x,{d:R})},u)}}},_calculateLine:function(h,d,e,g){var f=&quot;&quot;;var c=h.length;if(!g){c=Math.round(c*e)}for(var b=0;b&lt;c;b++){if(b&gt;0){f+=&quot; &quot;}var j=h[b].y;if(g){j=a.jqx._ptrnd((j-d)*e+d)}f+=h[b].x+&quot;,&quot;+j}return f},_buildLineCmd:function(k,g,o,n,b,p,m,d){var f=k;if(d){f=this._getBezierPoints(k)}var l=f.split(&quot; &quot;);var j=l[0].replace(&quot;C&quot;,&quot;&quot;);if(m){var e=g+&quot;,&quot;+n;var h=o+&quot;,&quot;+b;var c=g+&quot;,&quot;+p;var i=o+&quot;,&quot;+p;f=&quot;M &quot;+c+&quot; L &quot;+j+(d?&quot;&quot;:(&quot;L &quot;+j+&quot; &quot;))+f+(d?(&quot; L&quot;+i+&quot; M &quot;+i):(&quot; &quot;+i+&quot; &quot;+c))}else{if(d){f=&quot;M &quot;+j+&quot; &quot;+f}else{f=&quot;M &quot;+j+&quot; L &quot;+j+&quot; &quot;+f}}return f},_getColors:function(n,k,h,e){var l=this.seriesGroups[n];if(l.type!=&quot;pie&quot;){h=undefined}var i=l.series[k].useGradient||l.useGradient;if(i==undefined){i=true}var g;if(!isNaN(h)){var d=this._getDataLen(n);g=this._getColor(l.series[k].colorScheme||l.colorScheme||this.colorScheme,k*d+h)}else{g=this._getSeriesColor(n,k)}var m=a.jqx._adjustColor(g,1.1);var j=a.jqx._adjustColor(g,0.9);var f=a.jqx._adjustColor(m,0.9);var b=g;var c=m;if(i){if(e==&quot;verticalLinearGradient&quot;){b=this.renderer._toLinearGradient(g,true,[[0,1],[100,1.5]]);c=this.renderer._toLinearGradient(m,true,[[0,1],[100,1.5]])}else{if(e==&quot;horizontalLinearGradient&quot;){b=this.renderer._toLinearGradient(g,false,[[0,1],[25,1.1],[50,1.5],[100,1]]);c=this.renderer._toLinearGradient(m,false,[[0,1],[25,1.1],[50,1.5],[100,1]])}}}return{baseColor:g,fillColor:b,lineColor:j,fillSelected:c,lineSelected:f}},_installHandlers:function(d,j,i,c){var b=this;var h=this.seriesGroups[j];var e=this.seriesGroups[j].series[i];var f=h.type.indexOf(&quot;line&quot;)!=-1||h.type.indexOf(&quot;area&quot;)!=-1;if(!f){this.renderer.addHandler(d,&quot;mousemove&quot;,function(g){g.preventDefault();b._startTooltipTimer(j,i,c)})}this.renderer.addHandler(d,&quot;mouseover&quot;,function(g){g.preventDefault();b._select(d,j,i,c);if(f){return}if(isNaN(c)){return}b._raiseEvent(&quot;mouseover&quot;,h,e,c)});this.renderer.addHandler(d,&quot;mouseout&quot;,function(g){g.preventDefault();if(c!=undefined){b._cancelTooltipTimer()}if(f){return}b._unselect();if(isNaN(c)){return}b._raiseEvent(&quot;mouseout&quot;,h,e,c)});this.renderer.addHandler(d,&quot;click&quot;,function(g){g.preventDefault();if(f){return}if(h.type.indexOf(&quot;column&quot;)!=-1){b._unselect()}if(isNaN(c)){return}b._raiseEvent(&quot;click&quot;,h,e,c)})},_getHorizontalOffset:function(n,k,h){var j=this._plotRect;var e=this._getDataLen(n);if(e==0){return{index:undefined,x:k}}var m=this._calcGroupOffsets(n,this._plotRect);if(m.xoffsets.length==0){return{index:undefined,x:undefined}}k-=j.x;var b=m.xoffsets.itemWidth/2;if(this._isPointSeriesOnly()){b=0}var g=m.xoffsets.first;var l=m.xoffsets.last;if(k&lt;=m.xoffsets.data[g]){return{index:g,x:m.xoffsets.data[g]+b}}if(k&gt;=m.xoffsets.data[l]){return{index:l,x:m.xoffsets.data[l]+b}}for(var f=g;f&lt;l;f++){var d=m.xoffsets.data[f];var c=m.xoffsets.data[f+1];if(k&gt;d&amp;&amp;k&lt;d+(c-d)/2){return{index:f,x:d+b}}if(k&gt;d+(c-d)/2&amp;&amp;k&lt;c){return{index:Math.min(f+1,l),x:c+b}}}return{index:undefined,x:undefined}},onmousemove:function(l,j){this._mouseX=l;this._mouseY=j;this._hideToolTip();if(!this._selected){return}var k=this._plotRect;var b=this._paddedRect;if(l&lt;b.x||l&gt;b.x+b.width||j&lt;b.y||j&gt;b.y+b.height){this._unselect();return}var n=this._selected.group;var f=this.seriesGroups[n];var p=f.series[this._selected.series];var h=this.seriesGroups[n].type;var k=this._plotRect;if(h.indexOf(&quot;line&quot;)!=-1||h.indexOf(&quot;area&quot;)!=-1){var d=this._getHorizontalOffset(n,l,j);var e=d.index;if(e==undefined){return}if(this._selected.item!=e){if(this._selected.item){this._raiseEvent(&quot;mouseout&quot;,f,p,this._selected.item)}this._selected.item=e;this._raiseEvent(&quot;mouseover&quot;,f,p,e)}var m=this._calcGroupOffsets(n,k);j=m.offsets[this._selected.series][e].to;l=d.x;j=a.jqx._ptrnd(j);l=a.jqx._ptrnd(k.x+l);if(l&lt;b.x||l&gt;b.x+b.width&amp;&amp;this._pointMarker){this.renderer.removeElement(this._pointMarker);this._pointMarker=undefined;return}l+=1;j-=1;if(!this._pointMarker){this._pointMarker=this.renderer.circle(l,j,4);this._plotGroup.appendChild(this._pointMarker)}var c=this._getSeriesColor(this._selected.group,this._selected.series);var o=a.jqx._adjustColor(c,0.7);this.renderer.setAttrs(this._pointMarker,{fill:c,stroke:o,opacity:1});this.renderer.setAttrs(this._pointMarker,{cx:l,cy:j});this._startTooltipTimer(n,this._selected.series,e)}},_startTooltipTimer:function(h,f,d){this._cancelTooltipTimer();var b=this;var e=b.seriesGroups[h];var c=this.toolTipDelay;if(isNaN(c)||c&gt;10000||c&lt;0){c=500}this._tttimer=setTimeout(function(){b._showToolTip(b._mouseX,b._mouseY-3,h,f,d);b._tttimer=setTimeout(function(){b._hideToolTip()},4000)},c)},_cancelTooltipTimer:function(){clearTimeout(this._tttimer)},_getGroupGradientType:function(c){var b=this.seriesGroups[c];if(b.type.indexOf(&quot;area&quot;)!=-1){return&quot;verticalLinearGradient&quot;}else{if(b.type.indexOf(&quot;column&quot;)!=-1){return&quot;horizontalLinearGradient&quot;}else{if(b.type.indexOf(&quot;scatter&quot;)!=-1||b.type.indexOf(&quot;bubble&quot;)!=-1){return&quot;radialGradient&quot;}}}return undefined},_select:function(d,h,f,c){if(this._selected&amp;&amp;this._selected.element!=d){this._unselect()}this._selected={element:d,group:h,series:f,item:c};var e=this.seriesGroups[h];var b=this._getColors(h,f,c,this._getGroupGradientType(h));if(e.type.indexOf(&quot;line&quot;)!=-1&amp;&amp;e.type.indexOf(&quot;area&quot;)==-1){b.fillSelected=&quot;none&quot;}this.renderer.setAttrs(d,{stroke:b.lineSelected,fill:b.fillSelected})},_unselect:function(){if(this._selected){var h=this._selected.group;var f=this._selected.series;var c=this._selected.item;var e=this.seriesGroups[h];var d=e.series[f];var b=this._getColors(h,f,c,this._getGroupGradientType(h));if(e.type.indexOf(&quot;line&quot;)!=-1&amp;&amp;e.type.indexOf(&quot;area&quot;)==-1){b.fillColor=&quot;none&quot;}this.renderer.setAttrs(this._selected.element,{stroke:b.lineColor,fill:b.fillColor});if(e.type.indexOf(&quot;line&quot;)!=-1||e.type.indexOf(&quot;area&quot;)!=-1&amp;&amp;!isNaN(c)){this._raiseEvent(&quot;mouseout&quot;,e,d,c)}this._selected=undefined}if(this._pointMarker){this.renderer.removeElement(this._pointMarker);this._pointMarker=undefined}},_raiseEvent:function(e,f,d,b){var c=d[e]||f[e];var g=0;for(;g&lt;this.seriesGroups.length;g++){if(this.seriesGroups[g]==f){break}}if(g==this.seriesGroups.length){return}if(c&amp;&amp;a.isFunction(c)){c({event:e,seriesGroup:f,serie:d,elementIndex:b,elementValue:this._getDataValue(b,d.dataField,g)})}},_calcGroupOffsets:function(f,b){var n=this.seriesGroups[f];if(!n.series||n.series.length==0){return}if(!this._renderData){this._renderData=new Array()}while(this._renderData.length&lt;f+1){this._renderData.push(null)}if(this._renderData[f]!=null){return this._renderData[f]}var z=new Array();var o=n.type.indexOf(&quot;stacked&quot;)!=-1;var d=o&amp;&amp;n.type.indexOf(&quot;100&quot;)!=-1;var l=this._getDataLen(f);var B=n.baselineValue||0;var C=this._stats.seriesGroups[f];if(!C||!C.isValid){return}if(B&gt;C.max){B=C.max}if(B&lt;C.min){B=C.min}var u=d?C.maxRange:C.max-C.min;var D=b.height/u;var e=0;if(d){if(C.min*C.max&lt;0){u/=2;e=b.y+b.height-(u+B)*D}else{e=b.y+b.height-B*D}}else{e=b.y+b.height-(B-C.min)*D}var s=new Array();var c=new Array();e=a.jqx._ptrnd(e);var g=(C.min*C.max&lt;0)?b.height/2:b.height;for(var w=0;w&lt;n.series.length;w++){z.push(new Array());for(var x=0;x&lt;l;x++){var E=this._getDataValueAsNumber(x,n.series[w].dataField,f);if(isNaN(E)){continue}if(E&gt;C.rmax){E=C.rmax}if(E&lt;C.rmin){E=C.rmin}var m=(E&gt;B)?s:c;var A=D*(E-B);var r=e;if(o){if(d){var p=(C.psums[x]-C.nsums[x]);if(E&gt;B){A=(C.psums[x]/p)*g;if(C.psums[x]!=0){A*=E/C.psums[x]}}else{A=(C.nsums[x]/p)*g;if(C.nsums[x]!=0){A*=E/C.nsums[x]}}}if(isNaN(m[x])){m[x]=e}r=m[x]}A=Math.abs(A);A=this._isVML?Math.round(A):a.jqx._rup(A);if(w==n.series.length-1&amp;&amp;d){var q=0;for(var v=0;v&lt;w;v++){q+=Math.abs(z[v][x].to-z[v][x].from)}q+=A;if(q&lt;g){if(A&gt;0.5){A=a.jqx._ptrnd(A+g-q)}else{var v=w-1;while(v&gt;=0){var t=Math.abs(z[v][x].to-z[v][x].from);if(t&gt;1){if(z[v][x].from&gt;z[v][x].to){z[v][x].from+=g-q}break}v--}}}}if(E&lt;B){m[x]+=A;z[w].push({from:r+1,to:r+A})}else{m[x]-=A;z[w].push({from:r,to:r-A})}}}var A=D*Math.max(C.min,B);this._renderData[f]={baseOffset:e,offsets:z};this._renderData[f].xoffsets=this._calculateXOffsets(f,b);return this._renderData[f]},_isPointSeriesOnly:function(){for(var b=0;b&lt;this.seriesGroups.length;b++){var c=this.seriesGroups[b];if(c.type.indexOf(&quot;line&quot;)==-1&amp;&amp;c.type.indexOf(&quot;area&quot;)==-1){return false}}return true},_calculateXOffsets:function(s,o){var d=this._getCategoryAxis(s);var l=new Array();var c=this._getDataLen(s);var m=this._castAsNumber(d.minValue);var b=this._castAsNumber(d.maxValue);var f=m,n=b;if(isNaN(f)||isNaN(n)){for(var g=0;g&lt;c;g++){var q=this._getDataValue(g,d.dataField,s);q=this._castAsNumber(q);if(isNaN(q)){continue}if(q&lt;f||isNaN(f)){f=q}if(q&gt;n||isNaN(n)){n=q}}}f=m||f;n=b||n;var e=(d.maxValue!=undefined)||(d.minValue!=undefined);if(e&amp;&amp;(isNaN(n)||isNaN(f))){e=false;throw&quot;Invalid min/max category values&quot;}if(!e){f=0;n=c}var j=e?n-f+1:n-f;if(this._isPointSeriesOnly()){j--}if(j==0){j=1}var k=this._plotRect.width/j;var h=-1,r=-1;for(var g=0;g&lt;c;g++){if(!e){l.push(a.jqx._ptrnd((g-f)/j*o.width));if(h==-1){h=g}if(r==-1||r&lt;g){r=g}continue}var q=this._getDataValue(g,d.dataField,s);q=this._castAsNumber(q);if(isNaN(q)||q&lt;f||q&gt;n){l.push(-1);continue}var p=a.jqx._ptrnd((q-f)/j*this._plotRect.width);l.push(p);if(h==-1){h=g}if(r==-1||r&lt;g){r=g}}return{data:l,first:h,last:r,length:r==-1?0:r-h+1,itemWidth:k,rangeLength:j,min:f,max:n,customRange:e}},_getCategoryAxis:function(b){if(b==undefined||this.seriesGroups.length&lt;=b){return this.categoryAxis}return this.seriesGroups[b].categoryAxis||this.categoryAxis},_getSeriesColor:function(l,c){var e=this.seriesGroups[l];var m=e.series[c];if(m.color){return m.color}var k=0;for(var d=0;d&lt;=l;d++){for(var b in this.seriesGroups[d].series){if(d==l&amp;&amp;b==c){break}else{k++}}}var h=this.colorScheme;if(e.colorScheme){h=e.colorScheme;sidex=c}if(h){for(var d=0;d&lt;this.colorSchemes.length;d++){var f=this.colorSchemes[d];if(f.name==h){while(k&gt;f.colors.length){k-=f.colors.length;if(++d&gt;=this.colorSchemes.length){d=0}f=this.colorSchemes[d]}return f.colors[k%f.colors.length]}}}return&quot;#222222&quot;},_getColor:function(c,e){for(var f=0;f&lt;this.colorSchemes.length;f++){if(c==this.colorSchemes[f].name){break}}var d=0;while(d&lt;=e){if(f==this.colorSchemes.length){f=0}var b=this.colorSchemes[f].colors.length;if(d+b&lt;=e){d+=b;f++}else{return this.colorSchemes[f].colors[e-d]}}},colorSchemes:[{name:&quot;scheme01&quot;,colors:[&quot;#4572A7&quot;,&quot;#AA4643&quot;,&quot;#89A54E&quot;,&quot;#71588F&quot;,&quot;#4198AF&quot;]},{name:&quot;scheme02&quot;,colors:[&quot;#7FD13B&quot;,&quot;#EA157A&quot;,&quot;#FEB80A&quot;,&quot;#00ADDC&quot;,&quot;#738AC8&quot;]},{name:&quot;scheme03&quot;,colors:[&quot;#E8601A&quot;,&quot;#FF9639&quot;,&quot;#F5BD6A&quot;,&quot;#599994&quot;,&quot;#115D6E&quot;]},{name:&quot;scheme04&quot;,colors:[&quot;#D02841&quot;,&quot;#FF7C41&quot;,&quot;#FFC051&quot;,&quot;#5B5F4D&quot;,&quot;#364651&quot;]},{name:&quot;scheme05&quot;,colors:[&quot;#25A0DA&quot;,&quot;#309B46&quot;,&quot;#8EBC00&quot;,&quot;#FF7515&quot;,&quot;#FFAE00&quot;]},{name:&quot;scheme06&quot;,colors:[&quot;#0A3A4A&quot;,&quot;#196674&quot;,&quot;#33A6B2&quot;,&quot;#9AC836&quot;,&quot;#D0E64B&quot;]},{name:&quot;scheme07&quot;,colors:[&quot;#CC6B32&quot;,&quot;#FFAB48&quot;,&quot;#FFE7AD&quot;,&quot;#A7C9AE&quot;,&quot;#888A63&quot;]},{name:&quot;scheme08&quot;,colors:[&quot;#2F2933&quot;,&quot;#01A2A6&quot;,&quot;#29D9C2&quot;,&quot;#BDF271&quot;,&quot;#FFFFA6&quot;]},{name:&quot;scheme09&quot;,colors:[&quot;#1B2B32&quot;,&quot;#37646F&quot;,&quot;#A3ABAF&quot;,&quot;#E1E7E8&quot;,&quot;#B22E2F&quot;]},{name:&quot;scheme10&quot;,colors:[&quot;#5A4B53&quot;,&quot;#9C3C58&quot;,&quot;#DE2B5B&quot;,&quot;#D86A41&quot;,&quot;#D2A825&quot;]},{name:&quot;scheme11&quot;,colors:[&quot;#993144&quot;,&quot;#FFA257&quot;,&quot;#CCA56A&quot;,&quot;#ADA072&quot;,&quot;#949681&quot;]}],_formatValue:function(c,f,b){if(c==undefined){return&quot;&quot;}if(this._isObject(c)&amp;&amp;!b){return&quot;&quot;}if(b){if(!a.isFunction(b)){return c.toString()}try{return b(c)}catch(d){return d.message}}if(this._isNumber(c)){return this._formatNumber(c,f)}if(this._isDate(c)){return this._formatDate(c,f)}return c.toString()},_getFormattedValue:function(k,e,b,c,d){var h=this.seriesGroups[k];var m=h.series[e];var l=&quot;&quot;;var f=c,i=d;if(!i){i=m.formatFunction||h.formatFunction}if(!f){f=m.formatSettings||h.formatSettings}if(!m.formatFunction&amp;&amp;m.formatSettings){i=undefined}var j=this._getDataValue(b,m.dataField,k);if(j){l=this._formatValue(j,f,i)}return l||&quot;&quot;},_castAsNumber:function(c){if(c instanceof Date&amp;&amp;!isNaN(c)){return c.valueOf()}if(typeof(c)==&quot;string&quot;){var b=new Date(c);if(b instanceof Date&amp;&amp;!isNaN(b)){c=b.valueOf()}else{c=parseFloat(c)}}return c},_isNumber:function(b){if(typeof(b)==&quot;string&quot;){if(b.indexOf(&quot;:&quot;)!=-1||b.indexOf(&quot;/&quot;)!=-1||b.indexOf(&quot;-&quot;)&gt;0){return false}b=parseFloat(b)}return typeof b===&quot;number&quot;&amp;&amp;isFinite(b)},_isDate:function(b){return b instanceof Date},_isBoolean:function(b){return typeof b===&quot;boolean&quot;},_isObject:function(b){return(b&amp;&amp;(typeof b===&quot;object&quot;||a.isFunction(b)))||false},_formatDate:function(c,b){return c.toString()},_formatNumber:function(n,e){if(!this._isNumber(n)){return n}e=e||{};var q=e.decimalSeparator||&quot;.&quot;;var o=e.thousandsSeparator||&quot;&quot;;var m=e.prefix||&quot;&quot;;var p=e.sufix||&quot;&quot;;var h=e.decimalPlaces||((n*100!=parseInt(n)*100)?2:0);var l=e.negativeWithBrackets||false;var g=(n&lt;0);if(g&amp;&amp;l){n*=-1}var d=n.toString();var b;var k=Math.pow(10,h);d=(Math.round(n*k)/k).toString();if(isNaN(d)){d=&quot;&quot;}b=d.lastIndexOf(&quot;.&quot;);if(h&gt;0){if(b&lt;0){d+=q;b=d.length-1}else{if(q!==&quot;.&quot;){d=d.replace(&quot;.&quot;,q)}}while((d.length-1-b)&lt;h){d+=&quot;0&quot;}}b=d.lastIndexOf(q);b=(b&gt;-1)?b:d.length;var f=d.substring(b);var c=0;for(var j=b;j&gt;0;j--,c++){if((c%3===0)&amp;&amp;(j!==b)&amp;&amp;(!g||(j&gt;1)||(g&amp;&amp;l))){f=o+f}f=d.charAt(j-1)+f}d=f;if(g&amp;&amp;l){d=&quot;(&quot;+d+&quot;)&quot;}return m+d+p},_defaultNumberFormat:{prefix:&quot;&quot;,sufix:&quot;&quot;,decimalSeparator:&quot;.&quot;,thousandsSeparator:&quot;,&quot;,decimalPlaces:2,negativeWithBrackets:false},_getBezierPoints:function(e){var h=[];var f=e.split(&quot; &quot;);for(var d=0;d&lt;f.length;d++){var j=f[d].split(&quot;,&quot;);h.push({x:parseFloat(j[0]),y:parseFloat(j[1])})}var k=&quot;&quot;;for(var d=0;d&lt;h.length-1;d++){var b=[];if(0==d){b.push(h[d]);b.push(h[d]);b.push(h[d+1]);b.push(h[d+2])}else{if(h.length-2==d){b.push(h[d-1]);b.push(h[d]);b.push(h[d+1]);b.push(h[d+1])}else{b.push(h[d-1]);b.push(h[d]);b.push(h[d+1]);b.push(h[d+2])}}var c=[];var g=9;c.push({x:b[1].x,y:b[1].y});c.push({x:((-b[0].x+g*b[1].x+b[2].x)/g),y:((-b[0].y+g*b[1].y+b[2].y)/g)});c.push({x:((b[1].x+g*b[2].x-b[3].x)/g),y:((b[1].y+g*b[2].y-b[3].y)/g)});c.push({x:b[2].x,y:b[2].y});k+=&quot;C&quot;+a.jqx._ptrnd(c[1].x)+&quot;,&quot;+a.jqx._ptrnd(c[1].y)+&quot; &quot;+a.jqx._ptrnd(c[2].x)+&quot;,&quot;+a.jqx._ptrnd(c[2].y)+&quot; &quot;+a.jqx._ptrnd(c[3].x)+&quot;,&quot;+a.jqx._ptrnd(c[3].y)+&quot; &quot;}return k},_animTickInt:50,_animate:function(d,c,f,e,b,h){if(!this._animList){this._animList=[];this._animTicks=0}var g=this._animTicks+Math.round(f/this._animTickInt);if(h==undefined){h=&quot;easeInOutSine&quot;}this._animList.push({key:d,properties:c,startTick:this._animTicks,endTick:g,fn:e,context:b,easing:h});this._enableAnimTimer()},_enableAnimTimer:function(){if(!this._animtimer){var b=this;this._animtimer=setTimeout(function(){b._runAnimation()},this._animTickInt)}},_runAnimation:function(){if(this._animList){this._animTicks++;var m=[];for(var k=0;k&lt;this._animList.length;k++){var n=this._animList[k];if(n.endTick&gt;this._animTicks){m.push(n)}var b=(this._animTicks-n.startTick)*this._animTickInt;var e=(n.endTick-n.startTick)*this._animTickInt;var l=b/e;var d=l;if(n.easing){d=jQuery.easing[n.easing](l,b,0,1,e)}if(l&gt;1){l=1}if(n.fn){n.fn(n.key,n.context,d);continue}var g={};for(var h=0;h&lt;n.properties.length;h++){var c=n.properties[h];var f=0;if(l==1){f=c.to}else{f=d*(c.to-c.from)+c.from}g[c.key]=f}this.renderer.setAttrs(n.key,g)}this._animList=m}this._animtimer=null;this._enableAnimTimer()}});a.jqx._adjustColor=function(d,b){var e=a.jqx.cssToRgb(d);var d=&quot;#&quot;;for(var f=0;f&lt;3;f++){var g=Math.round(b*e[f]);if(g&gt;255){g=255}else{if(g&lt;=0){g=0}}g=a.jqx.decToHex(g);if(g.toString().length==1){d+=&quot;0&quot;}d+=g}return d.toUpperCase()};a.jqx.decToHex=function(b){return b.toString(16)},a.jqx.hexToDec=function(b){return parseInt(b,16)};a.jqx.rgbToHex=function(e,d,c){return[a.jqx.decToHex(e),a.jqx.decToHex(d),a.jqx.decToHex(c)]};a.jqx.hexToRgb=function(c,d,b){return[a.jqx.hexToDec(c),a.jqx.hexToDec(d),a.jqx.hexToDec(b)]};a.jqx.cssToRgb=function(b){if(b.indexOf(&quot;rgb&quot;)&lt;=-1){return a.jqx.hexToRgb(b.substring(1,3),b.substring(3,5),b.substring(5,7))}return b.substring(4,b.length-1).split(&quot;,&quot;)};a.jqx._ptrnd=function(c){if(!document.createElementNS){if(Math.round(c)==c){return c}return a.jqx._rnd(c,1,false)}if(Math.abs(Math.round(c)-c)==0.5){return c}var b=a.jqx._rnd(c,1,false);return b-0.5;var b=a.jqx._rnd(c,1,false);if(!document.createElementNS){return b}return b-0.5};a.jqx._rup=function(c){var b=Math.round(c);if(c&gt;b){b++}return b};a.jqx._rnd=function(c,e,d){if(isNaN(c)){return c}var b=c-c%e;if(c==b){return b}if(d){if(c&gt;b){b+=e}}else{if(b&gt;c){b-=e}}return b};a.jqx.svgRenderer=function(){};a.jqx.svgRenderer.prototype={_svgns:&quot;http://www.w3.org/2000/svg&quot;,init:function(f){var d=&quot;&lt;table id=tblChart cellspacing=&#39;0&#39; cellpadding=&#39;0&#39; border=&#39;0&#39; align=&#39;left&#39; valign=&#39;top&#39;&gt;&lt;tr&gt;&lt;td colspan=2 id=tdTop&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td id=tdLeft&gt;&lt;/td&gt;&lt;td class=&#39;chartContainer&#39;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;;f.append(d);this.host=f;var b=f.find(&quot;.chartContainer&quot;);b[0].style.width=f.width()+&quot;px&quot;;b[0].style.height=f.height()+&quot;px&quot;;var h;try{var c=document.createElementNS(this._svgns,&quot;svg&quot;);c.setAttribute(&quot;id&quot;,&quot;svgChart&quot;);c.setAttribute(&quot;version&quot;,&quot;1.1&quot;);c.setAttribute(&quot;width&quot;,&quot;100%&quot;);c.setAttribute(&quot;height&quot;,&quot;100%&quot;);b[0].appendChild(c);this.canvas=c}catch(g){return false}this._id=new Date().getTime();this.clear();this._layout();this._runLayoutFix();return true},_runLayoutFix:function(){var b=this;this._fixLayout()},_fixLayout:function(){var g=a(this.canvas).position();var d=(parseFloat(g.left)==parseInt(g.left));var b=(parseFloat(g.top)==parseInt(g.top));if(a.browser.msie){var d=true,b=true;var e=this.host;var c=0,f=0;while(e&amp;&amp;e.position&amp;&amp;e[0].parentNode){var h=e.position();c+=parseFloat(h.left)-parseInt(h.left);f+=parseFloat(h.top)-parseInt(h.top);e=e.parent()}d=parseFloat(c)==parseInt(c);b=parseFloat(f)==parseInt(f)}if(!d){this.host.find(&quot;#tdLeft&quot;)[0].style.width=&quot;0.5px&quot;}if(!b){this.host.find(&quot;#tdTop&quot;)[0].style.height=&quot;0.5px&quot;}},_layout:function(){var c=a(this.canvas).offset();var b=this.host.find(&quot;.chartContainer&quot;);this._width=Math.max(a.jqx._rup(this.host.width())-1,0);this._height=Math.max(a.jqx._rup(this.host.height())-1,0);b[0].style.width=this._width;b[0].style.height=this._height;this._fixLayout()},getRect:function(){return{x:0,y:0,width:this._width,height:this._height}},getContainer:function(){var b=this.host.find(&quot;.chartContainer&quot;);return b},clear:function(){while(this.canvas.childElementCount&gt;0){this.canvas.removeChild(this.canvas.firstElementChild)}this._defs=document.createElementNS(this._svgns,&quot;defs&quot;);this._gradients={};this.canvas.appendChild(this._defs)},removeElement:function(c){if(c!=undefined){try{if(c.parentNode){c.parentNode.removeChild(c)}else{this.canvas.removeChild(c)}}catch(b){}}},_openGroups:[],beginGroup:function(){var b=this._activeParent();var c=document.createElementNS(this._svgns,&quot;g&quot;);b.appendChild(c);this._openGroups.push(c);return c},endGroup:function(){if(this._openGroups.length==0){return}this._openGroups.pop()},_activeParent:function(){return this._openGroups.length==0?this.canvas:this._openGroups[this._openGroups.length-1]},createClipRect:function(d){var e=document.createElementNS(this._svgns,&quot;clipPath&quot;);var b=document.createElementNS(this._svgns,&quot;rect&quot;);this.setAttrs(b,{x:d.x,y:d.y,width:d.width,height:d.height});this._clipId=this._clipId||0;e.id=&quot;cl&quot;+this._id+&quot;_&quot;+(++this._clipId).toString();e.appendChild(b);this._defs.appendChild(e);return e},setClip:function(c,b){return this.setAttr(c,&quot;clip-path&quot;,&quot;url(#&quot;+b.id+&quot;)&quot;)},_clipId:0,addHandler:function(b,d,c){b[&quot;on&quot;+d]=c},shape:function(b,e){var c=document.createElementNS(this._svgns,b);if(!c){return undefined}for(var d in e){c.setAttribute(d,e[d])}this._activeParent().appendChild(c);return c},measureText:function(k,c,d){var f=document.createElementNS(this._svgns,&quot;text&quot;);this.setAttrs(f,d);f.appendChild(f.ownerDocument.createTextNode(k));var j=this._activeParent();j.appendChild(f);var l=f.getBBox();var g=a.jqx._rup(l.width);var b=a.jqx._rup(l.height);j.removeChild(f);if(c==0){return{width:g,height:b}}var h=c*Math.PI*2/360;var e=Math.abs(g*Math.sin(h)-b*Math.cos(h));var i=Math.abs(g*Math.cos(h)+b*Math.sin(h));return{width:a.jqx._rup(i),height:a.jqx._rup(e)}},text:function(o,l,k,s,q,z,B,A,n,g){var r;if(!n){n=&quot;center&quot;}if(!g){g=&quot;center&quot;}if(A){r=this.beginGroup();var e=this.createClipRect({x:a.jqx._rup(l),y:a.jqx._rup(k),width:a.jqx._rup(s),height:a.jqx._rup(q)});this.setClip(r,e)}var p=document.createElementNS(this._svgns,&quot;text&quot;);this.setAttrs(p,B);p.appendChild(p.ownerDocument.createTextNode(o));var j=this._activeParent();j.appendChild(p);var b=p.getBBox();j.removeChild(p);var C=b.width;var i=b.height*0.6;var m=s||0;var u=q||0;if(!z||z==0){if(n==&quot;center&quot;){l+=(m-C)/2}else{if(n==&quot;right&quot;){l+=(m-C)}}k+=i;if(g==&quot;center&quot;){k+=(u-i)/2}else{if(g==&quot;bottom&quot;){k+=u-i}}if(!s){s=C}if(!q){q=i}this.setAttrs(p,{x:a.jqx._rup(l),y:a.jqx._rup(k),width:a.jqx._rup(s),height:a.jqx._rup(q),cursor:&quot;default&quot;});j.appendChild(p);this.endGroup();return p}var f=z*Math.PI*2/360;var d=Math.abs(C*Math.sin(f)-i*Math.cos(f));var v=Math.abs(C*Math.cos(f)+i*Math.sin(f));if(n==&quot;center&quot;){l+=(m-v)/2}else{if(n==&quot;right&quot;){l+=(m-v)}}if(g==&quot;center&quot;){k=k+(u-d)/2}else{if(g==&quot;bottom&quot;){k=k+u-d}}if(z&lt;0){k+=d}l+=v;l=a.jqx._rup(l);k=a.jqx._rup(k);var t=this.shape(&quot;g&quot;,{transform:&quot;translate(&quot;+l+&quot;,&quot;+k+&quot;)&quot;});var c=this.shape(&quot;g&quot;,{transform:&quot;rotate(&quot;+z+&quot;)&quot;});t.appendChild(c);c.appendChild(p);j.appendChild(t);this.endGroup();return t},line:function(d,f,c,e,g){var b=this.shape(&quot;line&quot;,{x1:d,y1:f,x2:c,y2:e});this.setAttrs(b,g)},path:function(c,d){var b=this.shape(&quot;path&quot;);b.setAttribute(&quot;d&quot;,c);if(d){this.setAttrs(b,d)}return b},rect:function(b,g,c,e,f){b=a.jqx._ptrnd(b);g=a.jqx._ptrnd(g);c=a.jqx._rup(c);e=a.jqx._rup(e);var d=this.shape(&quot;rect&quot;,{x:b,y:g,width:c,height:e});if(f){this.setAttrs(d,f)}return d},circle:function(b,d,c){return this.shape(&quot;circle&quot;,{cx:b,cy:d,r:c})},_getPieSlicePath:function(p,m,b,j,f,n){if(!b){b=1}var q=Math.abs(j-f);var k=q&gt;180?1:0;if(q&gt;360){j=0;f=360}var d=j*Math.PI*2/360;var i=f*Math.PI*2/360;if(n!=0){var g=q/2+j;var h=g*Math.PI*2/360;offsetX=n*Math.cos(h);offsetY=n*Math.sin(h);p+=offsetX;m-=offsetY}var e=p+b*Math.cos(d);var c=p+b*Math.cos(i);var o=m-b*Math.sin(d);var l=m-b*Math.sin(i);var s=&quot;M &quot;+c+&quot;,&quot;+l;s+=&quot;  &quot;+c+&quot;,&quot;+l+&quot; a&quot;+b+&quot;,&quot;+b;s+=&quot; 0 &quot;+k+&quot;,1 &quot;+(e-c)+&quot;,&quot;+(o-l);s+=&quot; L&quot;+p+&quot;,&quot;+m+&quot; Z&quot;;return s},pieslice:function(i,g,b,e,c,h,d){var f=this._getPieSlicePath(i,g,b,c,h);var j=this.shape(&quot;path&quot;);j.setAttribute(&quot;d&quot;,f);if(d){this.setAttrs(j,d)}return j},setAttrs:function(b,d){if(!b||!d){return}for(var c in d){b.setAttribute(c,d[c])}},setAttr:function(c,b,d){if(!c){return}c.setAttribute(b,d)},getAttr:function(c,b){return c.getAttribute(b)},_gradients:{},_toLinearGradient:function(e,g,h){var c=&quot;grd&quot;+e.replace(&quot;#&quot;,&quot;&quot;)+(g?&quot;v&quot;:&quot;h&quot;);var b=&quot;url(#&quot;+c+&quot;)&quot;;if(this._gradients[b]){return b}var d=document.createElementNS(this._svgns,&quot;linearGradient&quot;);this.setAttrs(d,{x1:&quot;0%&quot;,y1:&quot;0%&quot;,x2:g?&quot;0%&quot;:&quot;100%&quot;,y2:g?&quot;100%&quot;:&quot;0%&quot;,id:c});for(var f in h){var j=document.createElementNS(this._svgns,&quot;stop&quot;);var i=&quot;stop-color:&quot;+a.jqx._adjustColor(e,h[f][1]);this.setAttrs(j,{offset:h[f][0]+&quot;%&quot;,style:i});d.appendChild(j)}this._defs.appendChild(d);this._gradients[b]=true;return b}};a.jqx.vmlRenderer=function(){};a.jqx.vmlRenderer.prototype={init:function(e){var d=&quot;&lt;div class=&#39;chartContainer&#39; style=\&quot;position:relative;overflow:hidden;\&quot;&gt;&lt;div&gt;&quot;;e.append(d);this.host=e;var b=e.find(&quot;.chartContainer&quot;);b[0].style.width=e.width()+&quot;px&quot;;b[0].style.height=e.height()+&quot;px&quot;;if(a.browser.msie&amp;&amp;parseInt(a.browser.version)&lt;9&amp;&amp;(document.childNodes&amp;&amp;document.childNodes.length&gt;0&amp;&amp;document.childNodes[0].data&amp;&amp;document.childNodes[0].data.indexOf(&quot;DOCTYPE&quot;)!=-1)){var c=true;if(document.namespaces.length&gt;0){if(document.namespaces[0].name==&quot;v&quot;&amp;&amp;document.namespaces[0].urn==&quot;urn:schemas-microsoft-com:vml&quot;){c=false}}if(c){document.namespaces.add(&quot;v&quot;,&quot;urn:schemas-microsoft-com:vml&quot;)}this._ie8mode=true}else{var c=true;if(document.namespaces.length&gt;0){if(document.namespaces[0].name==&quot;v&quot;&amp;&amp;document.namespaces[0].urn==&quot;urn:schemas-microsoft-com:vml&quot;){c=false}}if(c){document.namespaces.add(&quot;v&quot;,&quot;urn:schemas-microsoft-com:vml&quot;);document.createStyleSheet().cssText=&quot;v\\:* { behavior: url(#default#VML); display: inline-block; }&quot;}}this.canvas=b[0];this._width=Math.max(a.jqx._rup(b.width()),0);this._height=Math.max(a.jqx._rup(b.height()),0);b[0].style.width=this._width+2;b[0].style.height=this._height+2;this._id=new Date().getTime();this.clear();return true},getRect:function(){return{x:0,y:0,width:this._width,height:this._height}},getContainer:function(){var b=this.host.find(&quot;.chartContainer&quot;);return b},clear:function(){while(this.canvas.childElementCount&gt;0){this.canvas.removeChild(this.canvas.firstElementChild)}this._gradients={}},removeElement:function(b){if(b!=null){b.parentNode.removeChild(b)}},_openGroups:[],beginGroup:function(){var b=this._activeParent();var c=document.createElement(&quot;v:group&quot;);c.style.position=&quot;absolute&quot;;c.coordorigin=&quot;0,0&quot;;c.coordsize=this._width+&quot;,&quot;+this._height;c.style.left=0;c.style.top=0;c.style.width=this._width;c.style.height=this._height;b.appendChild(c);this._openGroups.push(c);return c},endGroup:function(){if(this._openGroups.length==0){return}this._openGroups.pop()},_activeParent:function(){return this._openGroups.length==0?this.canvas:this._openGroups[this._openGroups.length-1]},createClipRect:function(b){var c=document.createElement(&quot;div&quot;);c.style.height=b.height+&quot;px&quot;;c.style.width=b.width+&quot;px&quot;;c.style.position=&quot;absolute&quot;;c.style.left=b.x+&quot;px&quot;;c.style.top=b.y+&quot;px&quot;;c.style.overflow=&quot;hidden&quot;;this._clipId=this._clipId||0;c.id=&quot;cl&quot;+this._id+&quot;_&quot;+(++this._clipId).toString();this._activeParent().appendChild(c);return c},setClip:function(c,b){b.appendChild(c)},_clipId:0,addHandler:function(b,d,c){a(b).bind(d,c)},measureText:function(m,c,d){var e=document.createElement(&quot;v:textbox&quot;);var k=document.createElement(&quot;span&quot;);k.appendChild(document.createTextNode(m));e.appendChild(k);if(d[&quot;class&quot;]){k.className=d[&quot;class&quot;]}var l=this._activeParent();l.appendChild(e);var g=a(e);var h=a.jqx._rup(g.width());var b=a.jqx._rup(g.height());l.removeChild(e);if(b==0&amp;&amp;a.browser.msie&amp;&amp;parseInt(a.browser.version)&lt;9){var n=g.css(&quot;font-size&quot;);if(n){b=parseInt(n);if(isNaN(b)){b=0}}}if(c==0){return{width:h,height:b}}var i=c*Math.PI*2/360;var f=Math.abs(h*Math.sin(i)-b*Math.cos(i));var j=Math.abs(h*Math.cos(i)+b*Math.sin(i));return{width:a.jqx._rup(j),height:a.jqx._rup(f)}},text:function(o,l,k,r,p,A,C,B,n,g){var s=C.stroke||&quot;black&quot;;var q;if(!n){n=&quot;center&quot;}if(!g){g=&quot;center&quot;}B=false;if(B){q=this.beginGroup();var e=this.createClipRect({x:a.jqx._rup(l),y:a.jqx._rup(k),width:a.jqx._rup(r),height:a.jqx._rup(p)});this.setClip(q,e)}var b=document.createElement(&quot;v:textbox&quot;);b.style.position=&quot;absolute&quot;;var t=document.createElement(&quot;span&quot;);t.appendChild(document.createTextNode(o));if(C[&quot;class&quot;]){t.className=C[&quot;class&quot;]}b.appendChild(t);var j=this._activeParent();j.appendChild(b);var D=a(b).width();var i=a(b).height();j.removeChild(b);var m=r||0;var v=p||0;if(!A||A==0){if(n==&quot;center&quot;){l+=(m-D)/2}else{if(n==&quot;right&quot;){l+=(m-D)}}if(g==&quot;center&quot;){k=k+(v-i)/2}else{if(g==&quot;bottom&quot;){k=k+v-i}}if(!r){r=D}if(!p){p=i}if(!q){b.style.left=a.jqx._rup(l);b.style.top=a.jqx._rup(k);b.style.width=a.jqx._rup(r);b.style.height=a.jqx._rup(p)}j.appendChild(b);if(q){this.endGroup();return j}return b}var f=A*Math.PI*2/360;var d=Math.abs(D*Math.sin(f)-i*Math.cos(f));var z=Math.abs(D*Math.cos(f)+i*Math.sin(f));if(n==&quot;center&quot;){l+=(m-z)/2}else{if(n==&quot;right&quot;){l+=(m-z)}}if(g==&quot;center&quot;){k=k+(v-d)/2}else{if(g==&quot;bottom&quot;){k=k+v-d}}l=a.jqx._rup(l);k=a.jqx._rup(k);var u=a.jqx._rup(l+z);var c=a.jqx._rup(k+d);if(Math.abs(A)==90){j.appendChild(b);b.style.left=a.jqx._rup(l);b.style.top=a.jqx._rup(k);b.style.filter=&quot;progid:DXImageTransform.Microsoft.BasicImage(rotation=3)&quot;;if(q){this.endGroup();return j}return b}return line},shape:function(b,e){var c=document.createElement(this._createElementMarkup(b));if(!c){return undefined}for(var d in e){c.setAttribute(d,e[d])}this._activeParent().appendChild(c);return c},line:function(e,g,d,f,h){var b=&quot;M &quot;+e+&quot;,&quot;+g+&quot; L &quot;+d+&quot;,&quot;+f+&quot; X E&quot;;var c=this.path(b);this.setAttrs(c,h);return c},_createElementMarkup:function(b){var c=&quot;&lt;v:&quot;+b+&#39; style=&quot;&quot;&gt;&lt;/v:&#39;+b+&quot;&gt;&quot;;if(this._ie8mode){c=c.replace(&#39;style=&quot;&quot;&#39;,&#39;style=&quot;behavior: url(#default#VML);&quot;&#39;)}return c},path:function(c,e){var b=document.createElement(this._createElementMarkup(&quot;shape&quot;));b.style.position=&quot;absolute&quot;;b.coordsize=this._width+&quot; &quot;+this._height;b.coordorigin=&quot;0 0&quot;;b.style.width=parseInt(this._width);b.style.height=parseInt(this._height);b.style.left=0;b.style.top=0;var d=document.createElement(this._createElementMarkup(&quot;path&quot;));d.v=c;b.appendChild(d);this._activeParent().appendChild(b);if(e){this.setAttrs(b,e)}return b},rect:function(b,g,c,d,f){b=a.jqx._ptrnd(b);g=a.jqx._ptrnd(g);c=a.jqx._rup(c);d=a.jqx._rup(d);var e=this.shape(&quot;rect&quot;,f);e.style.position=&quot;absolute&quot;;e.style.left=b;e.style.top=g;e.style.width=c;e.style.height=d;e.strokeweight=0;return e},circle:function(b,e,d){var c=this.shape(&quot;oval&quot;);b=a.jqx._ptrnd(b-d);e=a.jqx._ptrnd(e-d);d=a.jqx._rup(d);c.style.position=&quot;absolute&quot;;c.style.left=b;c.style.top=e;c.style.width=d*2;c.style.height=d*2;return c},updateCircle:function(d,b,e,c){if(b==undefined){b=parseFloat(d.style.left)+parseFloat(d.style.width)/2}if(e==undefined){e=parseFloat(d.style.top)+parseFloat(d.style.height)/2}if(c==undefined){c=parseFloat(d.width)/2}b=a.jqx._ptrnd(b-c);e=a.jqx._ptrnd(e-c);c=a.jqx._rup(c);d.style.left=b;d.style.top=e;d.style.width=c*2;d.style.height=c*2},_getPieSlicePath:function(h,g,k,s,u,b){if(!k){k=1}var j=Math.abs(s-u);var m=j&gt;180?1:0;if(j&gt;360){s=0;u=360}var n=s*Math.PI*2/360;var f=u*Math.PI*2/360;if(b!=0){var i=j/2+s;var t=i*Math.PI*2/360;offsetX=b*Math.cos(t);offsetY=b*Math.sin(t);h+=offsetX;g-=offsetY}var p=a.jqx._ptrnd(h+k*Math.cos(n));var o=a.jqx._ptrnd(h+k*Math.cos(f));var d=a.jqx._ptrnd(g-k*Math.sin(n));var c=a.jqx._ptrnd(g-k*Math.sin(f));h=a.jqx._ptrnd(h);g=a.jqx._ptrnd(g);k=a.jqx._ptrnd(k);var e=Math.round(s*65535);var q=Math.round((u-s)*65536);var l=&quot;M&quot;+h+&quot; &quot;+g;l+=&quot; AE &quot;+h+&quot; &quot;+g+&quot; &quot;+k+&quot; &quot;+k+&quot; &quot;+e+&quot; &quot;+q;l+=&quot; X E&quot;;return l},pieslice:function(j,h,b,f,c,i,e){var g=this._getPieSlicePath(j,h,b,f,c,i);var d=this.path(g,e);if(e){this.setAttrs(d,e)}return d},_keymap:[{svg:&quot;fill&quot;,vml:&quot;fillcolor&quot;},{svg:&quot;stroke&quot;,vml:&quot;strokecolor&quot;},{svg:&quot;stroke-width&quot;,vml:&quot;strokeweight&quot;},{svg:&quot;fill-opacity&quot;,vml:&quot;fillopacity&quot;},{svg:&quot;opacity&quot;,vml:&quot;opacity&quot;},{svg:&quot;cx&quot;,vml:&quot;style.left&quot;},{svg:&quot;cy&quot;,vml:&quot;style.top&quot;},{svg:&quot;height&quot;,vml:&quot;style.height&quot;},{svg:&quot;width&quot;,vml:&quot;style.width&quot;},{svg:&quot;x&quot;,vml:&quot;style.left&quot;},{svg:&quot;y&quot;,vml:&quot;style.top&quot;},{svg:&quot;d&quot;,vml:&quot;v&quot;}],_translateParam:function(b){for(var c in this._keymap){if(this._keymap[c].svg==b){return this._keymap[c].vml}}return b},setAttrs:function(c,e){if(!c||!e){return}for(var d in e){var b=this._translateParam(d);if(b==&quot;fillcolor&quot;&amp;&amp;e[d].indexOf(&quot;grd&quot;)!=-1){c.type=e[d]}else{if(b==&quot;opacity&quot;||b==&quot;fillopacity&quot;){if(c.fill){c.fill.opacity=e[d]}}else{if(b.indexOf(&quot;style.&quot;)==-1){c[b]=e[d]}else{c.style[b.replace(&quot;style.&quot;,&quot;&quot;)]=e[d]}}}}},setAttr:function(d,c,e){var b=this._translateParam(c);d[b]=e},getAttr:function(d,c){var b=this._translateParam(c);if(b==&quot;opacity&quot;||b==&quot;fillopacity&quot;){if(d.fill){return d.fill.opacity}else{return 1}}if(b.indexOf(&quot;style.&quot;)==-1){return d[b]}return d.style[b.replace(&quot;style.&quot;,&quot;&quot;)]},_gradients:{},_toLinearGradient:function(g,i,j){if(this._ie8mode){return g}var d=&quot;grd&quot;+g.replace(&quot;#&quot;,&quot;&quot;)+(i?&quot;v&quot;:&quot;h&quot;);var e=&quot;#&quot;+d+&quot;&quot;;if(this._gradients[e]){return e}var f=document.createElement(this._createElementMarkup(&quot;fill&quot;));f.type=&quot;gradient&quot;;f.method=&quot;linear&quot;;f.angle=i?0:90;var c=&quot;&quot;;for(var h in j){if(h&gt;0){c+=&quot;, &quot;}c+=j[h][0]+&quot;% &quot;+a.jqx._adjustColor(g,j[h][1])}f.colors=c;var b=document.createElement(this._createElementMarkup(&quot;shapetype&quot;));b.appendChild(f);b.id=d;this.canvas.appendChild(b);return e}}})(jQuery);<br></td></tr
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
 &nbsp; <a href="/p/openappengine/source/diff?spec=svn607&r=598&amp;format=side&amp;path=/branches/grails/openappengine/web-app/js/jqwidgets/jqxchart.js&amp;old_path=/branches/grails/openappengine/web-app/js/jqwidgets/jqxchart.js&amp;old=">Diff</a>
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
 
 var selected_path = '/branches/grails/openappengine/web-app/js/jqwidgets/jqxchart.js';
 
 
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
 
 >...-app/js/jqwidgets/jqxcalendar.js</option>
 
 <option value="/p/openappengine/source/browse/branches/grails/openappengine/web-app/js/jqwidgets/jqxchart.js?r=598&amp;spec=svn607"
 selected="selected"
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
 <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxchart.js%3Fr%3D607&amp;followup=https%3A%2F%2Fcode.google.com%2Fp%2Fopenappengine%2Fsource%2Fbrowse%2Fbranches%2Fgrails%2Fopenappengine%2Fweb-app%2Fjs%2Fjqwidgets%2Fjqxchart.js%3Fr%3D607"
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
 
 <a href="/p/openappengine/source/list?path=/branches/grails/openappengine/web-app/js/jqwidgets/jqxchart.js&start=598">All revisions of this file</a>
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
 
 <div>Size: 57126 bytes,
 7 lines</div>
 
 <div><a href="//openappengine.googlecode.com/svn-history/r607/branches/grails/openappengine/web-app/js/jqwidgets/jqxchart.js">View raw file</a></div>
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
 var paths = {'svn607': '/branches/grails/openappengine/web-app/js/jqwidgets/jqxchart.js'}
 codereviews = CR_controller.setup(
 {"relativeBaseUrl": "", "projectName": "openappengine", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/8599073060794244502", "domainName": null, "profileUrl": null, "projectHomeUrl": "/p/openappengine", "loggedInUserEmail": null, "token": null}, '', 'svn607', paths,
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

