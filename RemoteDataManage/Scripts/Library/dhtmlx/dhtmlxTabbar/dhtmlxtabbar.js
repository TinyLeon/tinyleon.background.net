//v.3.6 build 131108

/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
You allowed to use this component or parts of it under GPL terms
To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
*/
function dhtmlXTabBar(a,b,c){b=b||"top";dhtmlxEventable(this);this._hrefs={};this._s={};this._c={};this._s.mode=b;this._s.scrolls=!0;this._custom_height=c;this._s.line_height=(parseInt(c)||20)+3;this._s.skin_line=1;this._s.tab_margin=0;this._s.expand=0;this._s.ext_border=2;this._s._bMode=b=="right"||b=="bottom"?1:0;this._s._vMode=b=="right"||b=="left"?1:0;this._dx=this._s._vMode?"height":"width";this._dy=this._s._vMode?"width":"height";switch(b){case "top":this._py="top";this._px="left";this._pxc=
"right";break;case "bottom":this._py="bottom";this._px="left";this._pxc="right";break;case "right":this._py="right";this._px="top";this._pxc="bottom";break;case "left":this._py="left",this._px="top",this._pxc="bottom"}this._active=null;this._tabs={};this._content={};this._href={};this._rows=[];this._s._tabSize=150;this._styles={"default":{left:3,right:3,select_shift:3,select_top:2,margin:1,offset:5,tab_color:"#F4F3EE",data_color:"#F0F8FF"},winbiscarf:{left:18,right:18,select_shift:3,select_top:2,
margin:1,offset:5},winscarf:{left:18,right:4,select_shift:3,select_top:2,margin:5,offset:5},modern:{left:5,right:5,select_shift:3,select_top:2,margin:1,offset:5,tab_color:"#F4F3EE",data_color:"#F0F8FF"},silver:{left:7,right:7,select_shift:3,select_top:2,margin:1,offset:5,tab_color:"#F4F3EE",data_color:"#F0F8FF"},dark_blue:{left:2,right:2,select_shift:3,select_top:2,margin:1,offset:5},glassy_blue:{left:2,right:3,select_shift:3,select_top:2,margin:1,offset:5},dhx_terrace:{left:7,right:7,select_shift:0,
select_top:0,margin:-1,offset:0,tab_color:"",data_color:"#ffffff"},dhx_black:{left:2,right:2,select_shift:3,select_top:0,margin:1,offset:5},dhx_blue:{left:2,right:2,select_shift:3,select_top:0,margin:1,offset:5,tab_color:"#F4F3EE",data_color:"#F0F8FF"},dhx_skyblue:{left:3,right:3,select_shift:0,select_top:0,margin:-1,offset:5,data_color:"white",hover:!0},dhx_web:{left:3,right:3,select_shift:1,select_top:0,margin:5,offset:15,data_color:"white"}};typeof a!="object"&&(a=document.getElementById(a));this.entBox=
a;this.entBox.className+=" dhx_tabbar_zone_"+this._s.mode;dhtmlx.image_path&&this.setImagePath(dhtmlx.image_path);this.setStyle("default");this.__skin=!1;this._createSelf();_isIE&&this.preventIECashing(!0);return this}
dhtmlXTabBar.prototype={_get_size:function(a,b){var c=this.entBox.getAttribute(a)||this.entBox.style[a]||(window.getComputedStyle?window.getComputedStyle(this.entBox,null)[a]:this.entBox.currentStyle?this.entBox.currentStyle[a]:0);(c||"").indexOf("%")!=-1&&this.enableAutoReSize(!0,!0);if(!c||c.indexOf("%")!=-1||c=="auto")c=b+"px";return c},setStyle:function(a){this.setSkin(a)},_getSkin:function(){return this._a},setSkin:function(a){a=a.toLowerCase();this._styles[a]||(a="default");this._a=this._styles[a];
this.skin=a;if(this._tabAll)this._tabAll.className="dhx_tabbar_zone dhx_tabbar_zone_"+this.skin;var b=a.indexOf("dhx_sky")==0,c=a.indexOf("dhx_web")==0,d=a.indexOf("dhx_terrace")==0;if(d&&!this._custom_height)this._s.line_height=37,this._setRowSizes();if(b)this._s.skin_line=0;if(c)this._s.line_height=29,this._s.ext_border=-1,this._s.expand=!0;if(b){this._s.line_height=26;this._setRowSizes();if(this._s.expand)this._s.tab_margin=-1;this._s.skin_line_x=!0;this._s.skin_line=-3;var e=this._s._rendered;
if(e)for(var f=0;f<e.length;f++)e[f].parentNode.removeChild(e[f]);var g=document.createElement("DIV");g.className="dhx_tabbar_lineA";this._tabAll.appendChild(g);var h=document.createElement("DIV");h.className="dhx_tabbar_lineB";this._tabAll.appendChild(h);var i=document.createElement("DIV");i.className="dhx_tabbar_lineC";this._tabAll.appendChild(i);var j=document.createElement("DIV");j.className="dhx_tabbar_lineD";this._tabAll.appendChild(j);this._getCoverLine();this._s._rendered=[g,h,i,j];if(this._s.expand){this._conZone.style.borderWidth=
"0px 0px 0px 0px";this._tabZone.firstChild.style.borderWidth="0px 0px 0px 0px";i.style.borderWidth="0px 0px 0px 0px";j.style.left="0px";i.style.right="0px";g.style.borderWidth="0px 0px 0px 0px";if(this._s.mode=="top")this._lineA.style.borderWidth="1px 0px 0px 0px";h.style.left="1px";this._s.ext_border=0}var k=function(){this._lineA.style[this._dx]="1px";var a=_isIE&&document.compatMode=="BackCompat",b=this._tabAll[this._s._vMode?"offsetHeight":"offsetWidth"]+(a?2:0);this._lastActive&&(b=Math.max(b,
this._lastActive.parentNode[this._s._vMode?"scrollHeight":"scrollWidth"]));b<6||(g.style[this._py]=parseInt(this._conZone.style[this._py])-3+"px",g.style[this._dx]=b-2+"px",h.style[this._py]=parseInt(this._conZone.style[this._py])-3+"px",h.style[this._dx]=b-(a?6:4)+(this._s.expand?2:0)+"px",i.style[this._dy]=parseInt(this._tabZone.style[this._dy])-3+"px",this._lineA.style[this._dx]=b-2+"px")};k.call(this);var l=this._checkScroll;this._checkScroll=function(){k.apply(this,arguments);l.apply(this,arguments)};
var o=this._scrollTo;this._scrollTo=function(){o.apply(this,arguments);k.apply(this,arguments)}}if(this._a.data_color&&this._conZone)this._conZone.style.backgroundColor=this._a.data_color;this.__skin=!0},enableAutoReSize:function(){var a=this;dhtmlxEvent(window,"resize",function(){window.setTimeout(function(){a&&a._setSizes&&a._setSizes()},1)})},_createSelf:function(){this._tabAll=document.createElement("DIV");this._tabZone=document.createElement("DIV");this._conZone=document.createElement("DIV");
this.entBox.appendChild(this._tabAll);this._tabAll.appendChild(this._tabZone);this._tabAll.appendChild(this._conZone);this._tabAll.className="dhx_tabbar_zone dhx_tabbar_zone_"+this.skin;this._s._vMode&&(this._tabAll.className+="V");this._s._bMode&&(this._tabAll.className+="B");this._tabZone.className="dhx_tablist_zone";this._conZone.className="dhx_tabcontent_zone";if(this.entBox._hideBorders)this._conZone.style.borderLeft=this._conZone.style.borderRight=this._conZone.style.borderBottom="0px solid white";
if(this._a.data_color)this._conZone.style.backgroundColor=this._a.data_color;this._tabZone.onselectstart=function(){return!1};this._tabZone.onclick=this._onClickHandler;this._tabZone.onmouseover=this._onMouseOverHandler;this._tabZone[_isFF?"onmouseout":"onmouseleave"]=this._onMouseOutHandler;this._tabZone.tabbar=this;this._createRow()},_createRow:function(){var a=document.createElement("DIV");a.className="dhx_tabbar_row";a.tabCount=0;this._tabZone.appendChild(a);this._rows[this._rows.length]=a;this._setRowSizes()},
_removeRow:function(a){a.parentNode.removeChild(a);for(var b=[],c=0;c<this._rows.length;c++)this._rows[c]!=a&&(b[b.length]=this._rows[c]);this._rows=b},_setSizes:function(a,b){var c=["clientHeight","clientWidth"];this._dx!="width"&&c.reverse();var d=_isIE&&document.compatMode=="BackCompat",e=this._conZone.offsetWidth-this._conZone.clientWidth,f=b||this.entBox[c[0]]+(d?e:0),d=a||this.entBox[c[1]]+(d?e:0),g=this._rows.length*(this._s.line_height-(this._s.skin_line_x?4:2))+(this._s.skin_line_x?2:0);
this._tabZone.style[this._dy]=g+"px";this._conZone.style[this._dy]=Math.max(0,f-this._s.ext_border-g-(this._s.skin_line_x?3:0)-this._s.tab_margin)+"px";this._conZone.style[this._dx]=Math.max(0,d-(this._s.expand?0:2))+"px";this._tabZone.style[this._py]=this._s.tab_margin+"px";this._conZone.style[this._py]=g+this._s.tab_margin-this._s.skin_line+"px";this._checkScroll();var h=this.getActiveTab();h&&this.cells(h).activate()},_checkScroll:function(){if(this._lineA){this._lineA.style[this._dx]="1px";var a=
_isIE&&document.compatMode=="BackCompat",b=this._tabAll[this._s._vMode?"offsetHeight":"offsetWidth"]+(a?2:0);this._lastActive&&(b=Math.max(b,this._lastActive.parentNode[this._s._vMode?"scrollHeight":"scrollWidth"]));b>2&&(this._lineA.style[this._dx]=b-2+"px")}if(!this._s._vMode&&this._s.scrolls)for(var c=0;c<this._rows.length;c++)this._rows[c].scrollWidth-this._rows[c].offsetWidth>2?this._showScroll(c):this._hideScroll(c)},_showScroll:function(a){if(!this._rows[a]._scroll){this.callEvent("onBeforeShowScroll",
[a]);var b=this._rows[a]._scroll=[],c=Math.max(0,this._s.line_height-23);b[0]=document.createElement("DIV");b[0].style.cssText="background-image:url("+this.imgUrl+this.skin+"/"+this.skin+"_scroll_left.gif); width:20px; height:21px;position:absolute;left:0px;z-index:990;top:"+c+"px;";b[0].className="dhx_tab_scroll_left";this._rows[a].appendChild(b[0]);b[1]=document.createElement("DIV");b[1].style.cssText="background-image:url("+this.imgUrl+this.skin+"/"+this.skin+"_scroll_right.gif); width:20px; height:21px;position:absolute;right:0px;z-index:990;top:"+
c+"px;";b[1].className="dhx_tab_scroll_right";this._rows[a].appendChild(b[1])}},_hideScroll:function(a){this._rows[a]._scroll&&this.callEvent("onBeforeHideScroll",[a]);if(this._rows[a]._scroll)this._rows[a].removeChild(this._rows[a]._scroll[0]),this._rows[a].removeChild(this._rows[a]._scroll[1]),this._rows[a]._scroll=null},_setRowSizes:function(){for(var a=0;a<this._rows.length;a++)this._rows[a].style[this._dy]=this._s.line_height+"px",this._rows[a].style[this._py]=a*(this._s.line_height-(this._s.skin_line_x?
4:2))-(_isIE&&!window.postMessage&&this._s._bMode?0:0)+"px",this._rows[a].style.zIndex=10+a;this._setSizes()},_setTabSizes:function(a){for(var b=this._a.offset,c=this._s.align?this._pxc:this._px,d=0;d<a.tabCount;d++){var e=a.childNodes[d];e.style.display!="none"&&(e.style[c]=b-(this._lastActive==e?this._a.select_shift:0)+"px",b+=e._size+this._a.margin)}},addTab:function(a,b,c,d,e){!this.__skin&&dhtmlx.skin&&this.setSkin(dhtmlx.skin);for(var e=e||0,f=this._rows.length;f<=e;f++)this._createRow();var g=
this._rows[e].tabCount;!d&&d!==0&&(d=g);var h=this._createTab(a,b,c=="*"?10:c||this._s._tabSize);this._addTab(this._rows[e],h,c,d);this._tabs[a]=h;this.cells(a).hide();this._checkScroll()},getIndex:function(a){var b=this._tabs[a];if(b)for(var c=b.parentNode,d=0;d<c.childNodes.length;d++)if(c.childNodes[d]==b)return d;return-1},moveTab:function(a,b){var c=this._tabs[a];if(c){var d=this.getIndex(a),e=c.parentNode,b=Math.min(b,e.tabCount-1);d!=b&&(d<b&&b++,c.parentNode.childNodes[b]?c.parentNode.insertBefore(c,
c.parentNode.childNodes[b]):c.parentNode.appendChild(c),this._setTabSizes(c.parentNode))}},removeTab:function(a,b){var c=this._tabs[a];if(c){this.cells(a)._dhxContDestruct();this._content[a]&&this._content[a].parentNode&&this._content[a].parentNode.removeChild(this._content[a]);this._content[a]=null;this._goToAny(c,b);var d=c.parentNode;c.innerHTML="";d.removeChild(c);d.tabCount--;d.tabCount==0&&this._rows.length>1?this._removeRow(d):this._setTabSizes(d);delete this._tabs[a];if(this._lastActive==
c)this._lastActive=null;this._setRowSizes()}},_goToAny:function(a,b){if(this._lastActive==a&&(b&&this.goToNextTab()==a&&this.goToPrevTab(),this._lastActive==a))this._lastActive=null},_createTab:function(a,b,c){var d=document.createElement("DIV");d.className="dhx_tab_element dhx_tab_element_inactive";var e="<span>"+b+"</span><div></div><div></div><div></div>";this._close&&(e+="<IMG style='"+this._pxc+":4px; "+this._py+(this.skin=="dhx_web"?":7":":4")+"px; position:absolute;z-index:11;' src='"+this.imgUrl+
this.skin+"/close.png' >");d.innerHTML=e;d.setAttribute("tab_id",a);d._size=parseInt(c);d.style[this._dx]=parseInt(c)+"px";d.style[this._dy]=this._s.line_height+"px";d.style[this._py]=this._a.select_top+"px";d.skin=this.skin;if(this._a.tab_color)d.style.backgroundColor=this._a.tab_color;if(this._c[a])d.childNodes[0].style.cssText=this._c[a].color;this._img_all(d);if(this._close){var f=this;d.childNodes[4].onclick=function(a){var b=this.parentNode.getAttribute("tab_id");f.callEvent("onTabClose",[b])&&
f.removeTab(b,!0);(a||event).cancelBubble=!0}}return d},_img_all:function(a){var b=this._getSkin(a),c=a._active?1:4;this._img(a.childNodes[1],c,this._px,b.left);this._img(a.childNodes[2],c+2,this._pxc,b.right);this._img(a.childNodes[3],c+1,this._px,parseInt(a.style[this._dx])-(b.left+b.right),b.left)},_get_img_pos:function(a){this._s._bMode&&a<7&&(a=Math.abs(a-6));a=-5-a*(this._s._vMode==1&&this.skin=="dhx_terrace"?245:45);return this._s._vMode?a+"px 0px":"0px "+a+"px"},_img:function(a,b,c,d,e){if(typeof a!=
"undefined"){a.style.backgroundImage="url("+this.imgUrl+this.skin+"/"+this.skin+"_"+this._s.mode+".gif)";a.style.backgroundPosition=this._get_img_pos(b);if(this._s._vMode==1&&this.skin=="dhx_terrace")a.style.width="240px";a.style[this._py]="0px";c&&(a.style[this._dx]=Math.max(d,0)+"px",a.style[c]=(e||0)+"px")}},_addTab:function(a,b,c,d){var e=this._a.offset;if(a.tabCount)var f=a.childNodes[a.tabCount-1],e=parseInt(f.style[this._s.align?this._pxc:this._px])+parseInt(f._size)+this._a.margin;var g=a.childNodes[d];
g?a.insertBefore(b,g):a.appendChild(b);a.tabCount++;if(c=="*")b.style.whiteSpace="nowrap",this.adjustTabSize(b);b.style[this._s.align?this._pxc:this._px]=e+"px";d!=a.tabCount-1&&this._setTabSizes(a)},adjustTabSize:function(a,b){var c=this._getSkin(c);if(!b)a.style.fontWeight="bold",a.childNodes[3].style[this._dx]=a.style[this._dx]="10px",b=a[this._s._vMode?"scrollHeight":"scrollWidth"]+10+(this._close?20:0),a.style.fontWeight="";a.style[this._dx]=b+"px";a._size=b;this._img_all(a)},_onMouseOverHandler:function(a){var b=
this.tabbar._getTabTarget(a?a.target:event.srcElement);this.tabbar._showHover(b)},_onMouseOutHandler:function(){this.tabbar._showHover()},_showHover:function(a){if(a!=this._lastHower){if(this._lastHower&&this._lastHower!=this._lastActive){var b=this._getSkin(this._lastHower);this._lastHower.className=this._lastHower.className.replace(/[ ]*dhx_tab_hover/gi,"");b.hover?this._img_all(this._lastHower):this._img(this._lastHower.childNodes[3],5,this._px,parseInt(this._lastHower.style[this._dx])-(b.left+
b.right),b.left);this._lastHower=null}if(!a||!(a==this._lastActive||a._disabled))if(this._lastHower=a)b=this._getSkin(a),a.className+=" dhx_tab_hover",b.hover&&(this._img(a.childNodes[1],7,this._px,b.left),this._img(a.childNodes[2],8,this._pxc,b.right)),this._img(a.childNodes[3],0,this._px,parseInt(a.style[this._dx])-(b.left+b.right),b.left)}},_getTabTarget:function(a){if(!a)return null;for(;!a.className||a.className.indexOf("dhx_tab_element")==-1;){if(a.className&&a.className.indexOf("dhx_tabbar_zone")!=
-1)return null;a=a.parentNode;if(!a)return null}return a},_onClickHandler:function(a){var b=a?a.target:event.srcElement,c=this.tabbar._getTabTarget(b);if(c&&!c._disabled)this.tabbar._setTabActive(c);else{var d=null;if(b.className=="dhx_tab_scroll_left")b.parentNode.scrollLeft=Math.max(0,b.parentNode.scrollLeft-b.parentNode.offsetWidth/2),d=b,this.tabbar._setTabTop(this.tabbar._lastActive);else if(b.className=="dhx_tab_scroll_right")b.parentNode.scrollLeft+=b.parentNode.offsetWidth/2,d=b.previousSibling,
this.tabbar._setTabTop(this.tabbar._lastActive);if(d&&d.parentNode&&d.parentNode.tagName){d.style.left=d.parentNode.scrollLeft+"px";if(!_isIE||window.XMLHttpRequest)d.nextSibling.style.right=d.parentNode.scrollLeft*-1+"px";return!1}}},_deactivateTab:function(){this._setTabInActive(this._lastActive);this._lastActive=null},_setTabInActive:function(a){if(!a||a!=this._lastActive)return!0;var b=this._getSkin(a),c=a.getAttribute("tab_id"),d=this._s.align?this._pxc:this._px;a.className=a.className.replace("_active",
"_inactive");a.style[this._py]=b.select_top+"px";a.style[d]=parseInt(a.style[d])+b.select_shift+"px";a.style[this._dx]=a._size+"px";a._active=!1;if(b.tab_color)a.style.backgroundColor=b.tab_color;if(this._c[c])a.childNodes[0].style.cssText=this._c[c].color;this._img_all(a);this.cells(c).hide()},_setTabActive:function(a,b){if(!a)return!0;var c=a.getAttribute("tab_id"),d=this._lastActive?this._lastActive.getAttribute("tab_id"):null,e=this._getSkin(a);b||this.callEvent("onTabClick",[c,d]);if(a==this._lastActive)return!0;
if(b||this.callEvent("onSelect",[c,d])){var f=this._s.align?this._pxc:this._px;this._setTabInActive(this._lastActive);a.className=a.className.replace("_inactive","_active");a.style[this._py]="0px";a.style[f]=parseInt(a.style[f])-e.select_shift+"px";a.style[this._dx]=a._size+e.select_shift*2+"px";a._active=!0;if(e.data_color)a.style.backgroundColor=e.data_color;if(this._c[c])a.childNodes[0].style.cssText=this._c[c].scolor;this._img_all(a);this._setTabTop(a);this._lastActive=a;this.cells(c).show();
this._scrollTo(a);return!0}},_scrollTo:function(a){if(this._s.scrolls&&(a.offsetLeft<a.parentNode.scrollLeft||a.offsetLeft+a.offsetWidth>a.parentNode.scrollLeft+a.parentNode.offsetWidth)){a.parentNode.scrollLeft=a.offsetLeft;var b=a.parentNode._scroll;if(b&&b[0]&&(b[0].style.left=b[0].parentNode.scrollLeft+"px",!_isIE||window.XMLHttpRequest))b[1].style.right=b[1].parentNode.scrollLeft*-1+"px"}},_setTabTop:function(a){if(!a)return!1;for(var b=this._rows.length-1,c=0;c<this._rows.length;c++)if(this._rows[c]==
a.parentNode){var d=this._rows[c];c!=b&&(this._rows[c]=this._rows[b],this._rows[b]=d);var e=this._getCoverLine();d.appendChild(e);e.style[this._dx]="1px";var f=this._s._vMode?Math.max(this._tabZone.offsetHeight,d.scrollHeight):Math.max(this._tabZone.offsetWidth,d.scrollWidth);f>0&&(e.style[this._dx]=f+"px");a.style.zIndex=e._index++;break}this._setRowSizes()},_getCoverLine:function(){if(!this._lineA)this._lineA=document.createElement("div"),this._lineA.className="dhx_tablist_line",this._lineA.style[this._py]=
this._s.line_height-3-(this._s.skin_line_x?1:0)+"px",this._lineA.style[this._dx]="100%",this._lineA._index=1;this._lineA.style.zIndex=this._lineA._index++;return this._lineA},cells:function(a){if(!this._tabs[a])return null;if(!this._content[a]){var b=document.createElement("DIV");b.style.cssText="width:100%;height:100%;visibility:hidden;overflow:hidden;position:absolute;top:0px; left:0px;";b.setAttribute("tab_id",a);b.skin=this.skin;this._conZone.appendChild(b);(new dhtmlXContainer(b)).setContent(b);
this.skin=="dhx_web"&&b._setPadding&&b._setPadding(1,"dhxcont_tabbar_dhx_web");b._isTabbarCell=!0;this._content[a]=b;var c=this;b.show=function(){if(c._s.hide)this.style.display="";this.style.visibility="";this.style.zIndex="1";this.autoSize();this._activate()};b.hide=function(){c._s.hide?(this.style.visibility="",this.style.display="none"):this.style.visibility="hidden";this.style.zIndex=-1;c._hrfmode=="iframe"&&this.attachURL("javascript:false")};b.autoSize=function(){if(c._awdj||c._ahdj){var a=
this.vs?this.vs[this.av].dhxcont.mainCont[this.av]:this.mainCont;if(!a.offsetWidth)a.style.width=Math.max(0,c.entBox.offsetWidth-2)+"px";if(c._ahdj)a.style.height="1px";var b=this._getContentDim();if(c._awdj)c.entBox.style.width=b[0]+2+"px",a.style.width=b[0]+"px";if(c._ahdj)c._tabAll.style.height=c.entBox.style.height=b[1]+c._rows.length*(c._s.line_height-2)+(c._s.expand?0:2)+2+"px",a.style.height=b[1]+"px";c._setSizes();c._setTabTop(c._lastActive)}};b._activate=function(){this._delay&&this._attachContent.apply(this,
this._delay);this.activate();if(c._hrfmode!="iframe")this._delay=null};b._doOnResize=function(){this.activate()};b.activate=function(){this.adjustContent(this.parentNode,0,0,!1,0);b.updateNestedObjects()};b._doOnAttachStatusBar=b.activate;b._doOnAttachMenu=b.activate;b._doOnAttachToolbar=b.activate;b._getContentDim=function(){var a=this.vs?this.vs[this.av].dhxcont.mainCont[this.av]:this.mainCont;return[a.scrollWidth,a.scrollHeight]};b._doOnFrameContentLoaded=function(){(c._awdj||c._ahdj)&&c.cells(a).autoSize();
c.callEvent("onXLE",[]);c.callEvent("onTabContentLoaded",[this.getAttribute("tab_id")])};b._doOnBeforeAttachURL=function(){c.callEvent("onXLS",[])};b.adjustContent(b.parentNode,0,0,!1,0)}return this._content[a]},forceLoad:function(a,b){this.setContentHref(a,b||this._hrefs[a]);this.cells(a)._activate()},enableAutoSize:function(a,b){this._ahdj=convertStringToBoolean(b);this._awdj=convertStringToBoolean(a)},clearAll:function(){for(var a in this._tabs)this.removeTab(a,!1);if(this._lineA){var b=this._getCoverLine();
b.parentNode&&b.parentNode.removeChild(b)}},enableTabCloseButton:function(a){this._close=convertStringToBoolean(a)},preventIECashing:function(a){this.no_cashe=convertStringToBoolean(a);if(this.XMLLoader)this.XMLLoader.rSeed=this.no_cashe},setTabActive:function(a,b){this._setTabActive(this._tabs[a],b===!1)},setTabInActive:function(){var a=this._lastActive;a&&(this._deactivateTab(),this._setTabTop(a),this._getCoverLine())},loadXMLString:function(a,b){this.XMLLoader=new dtmlXMLLoaderObject(this._parseXML,
this,!0,this.no_cashe);this.XMLLoader.waitCall=b||0;this.XMLLoader.loadXMLString(a)},loadXML:function(a,b){this.callEvent("onXLS",[]);this.XMLLoader=new dtmlXMLLoaderObject(this._parseXML,this,!0,this.no_cashe);this.XMLLoader.waitCall=b||0;this.XMLLoader.loadXML(a)},_parseXML:function(a,b,c,d,e){a.clearAll();var f="";if(!e)e=a.XMLLoader;var g=e.getXMLTopNode("tabbar"),h=e.doXPath("//row",g),i=g.getAttribute("tabstyle");i&&a.setStyle(i);a._hrfmode=g.getAttribute("hrefmode")||a._hrfmode;a._a.margin=
parseInt(g.getAttribute("margin")||a._a.margin,10);if(i=g.getAttribute("align"))a._s.align=i=="right"||i=="bottom";a._a.offset=parseInt(g.getAttribute("offset")||a._a.offset,10);(i=g.getAttribute("skinColors"))&&a.setSkinColors(i.split(",")[0],i.split(",")[1]);for(var j=0;j<h.length;j++)for(var k=e.doXPath("./tab",h[j]),l=0;l<k.length;l++){var o=k[l].getAttribute("width"),q=a._getXMLContent(k[l]),m=k[l].getAttribute("id");a.addTab(m,q,o,"",j);k[l].getAttribute("selected")&&(f=m);if(a._hrfmode)a.setContentHref(m,
k[l].getAttribute("href"));else for(var p=0;p<k[l].childNodes.length;p++){var n=k[l].childNodes[p];n.tagName=="content"&&(n.getAttribute("id")?a.setContent(m,n.getAttribute("id")):a.setContentHTML(m,a._getXMLContent(n)))}}f&&a.setTabActive(f);a.callEvent("onXLE",[])},adjustOuterSize:function(){this._setSizes()},_getXMLContent:function(a){for(var b="",c=0;c<a.childNodes.length;c++){var d=a.childNodes[c];b+=d.nodeValue===null?"":d.nodeValue}return b},enableContentZone:function(a){this._conZone.style.display=
convertStringToBoolean(a)?"":"none";this._setSizes()},enableForceHiding:function(a){this._s.hide=convertStringToBoolean(a)},setSize:function(a,b){this.entBox.style.width=a+"px";this.entBox.style.height=b+"px";this._setSizes()},setSkinColors:function(a,b,c){if(a)this._a.data_color=a;if(b)this._a.tab_color=b;var d=document.createElement("style");d.setAttribute("type","text/css");d.setAttribute("media","screen");document.getElementsByTagName("head")[0].appendChild(d);var e=document.styleSheets[document.styleSheets.length-
1];e.addRule?e.addRule("#"+this.entBox.id+" .dhx_tabcontent_zone > div","background-color: "+(c||a)+";",0):e.insertRule("#"+this.entBox.id+" .dhx_tabcontent_zone > div{ background-color: "+(c||a)+";}",0);this._conZone.style.backgroundColor=c||a},setCustomStyle:function(a,b,c,d){var e="";this._c[a]={color:";"+(b?"color:"+b+";":"")+(d||""),scolor:";"+(c?"color:"+c+";":"")+(d||"")};if(this._tabs[a])this._tabs[a].childNodes[0].style.cssText=this._tabs[a]==this._lastActive?this._c[a].scolor:this._c[a].color},
setImagePath:function(a){this.imgUrl=a},getNext:function(a,b){var b=b||"nextSibling",c=a[b];c&&c.className.indexOf("dhx_tab_element")==-1&&(c=null);!c&&a.parentNode[b]&&(c=a.parentNode[b].childNodes[0]);return c||a},getAllTabs:function(){var a=[],b;for(b in this._tabs)a.push(b);return a},goToNextTab:function(a){do a=this.getNext(a||this._lastActive);while(!this._setTabActive(a));return a},goToPrevTab:function(a){do a=this.getNext(a||this._lastActive,"previousSibling");while(!this._setTabActive(a));
return a},disableTab:function(a){this._tabs[a]._disabled=!0;this._tabs[a].className+=" dhx_tab_element_disabled";this._tabs[a].style.color="silver"},enableTab:function(a){this._tabs[a]._disabled=!1;if(this._tabs[a].className)this._tabs[a].className=this._tabs[a].className.replace(/dhx_tab_element_disabled/g,"");this._tabs[a].style.color=""},showTab:function(a){var b=this._tabs[a];b.style.display="";this._setTabSizes(b.parentNode)},hideTab:function(a,b){var c=this._tabs[a];c.style.display="none";c==
this._lastActive&&b!==!1&&this.goToNextTab();this._setTabSizes(c.parentNode)},getActiveTab:function(){return!this._lastActive?null:this._lastActive.getAttribute("tab_id")},setLabel:function(a,b,c){var d=this.getActiveTab();this._tabs[a].firstChild.innerHTML=b;this.adjustTabSize(this._tabs[a],c);this._setTabSizes(this._tabs[a].parentNode);this._checkScroll()},getLabel:function(a){return this._tabs[a].firstChild.innerHTML},setOffset:function(a){this._a.offset=a*1},enableScroll:function(a){this._s.scrolls=
convertStringToBoolean(a)},setMargin:function(a){this._a.margin=a*1},setAlign:function(a){this._s.align=a=="bottom"||a=="right"},tabWindow:function(a){var b=null;if(this._content[a])var c=this.cells(a),b=(c.vs?c.vs[c.av]:this._content[a])._frame.contentWindow;return b},setContentHTML:function(a,b){this.cells(a).attachHTMLString(b)},setContent:function(a,b){this.cells(a).attachObject(b);this.cells(a).activate()},setHrefMode:function(a){this._hrfmode=a},setContentHref:function(a,b){this._hrefs[a]=b;
switch(this._hrfmode){case "iframes":this.cells(a).attachURL(b);break;case "iframe":case "iframes-on-demand":this.cells(a)._delay=["url",b,!1];break;case "ajax":var c=this.cells(a),d=this;c._delay=["urlajax",b,!0];if(!c.attachHTMLStringA)c.attachHTMLStringA=c.attachHTMLString,c.attachHTMLString=function(a,b){b&&(a=d._getXMLContent(b.doXPath("//content")[0]));return this.attachHTMLStringA(a)};break;case "ajax-html":this.cells(a)._delay=["urlajax",b,!0]}this._tabs[a]==this._lastActive&&this.cells(a).show(!0)},
normalize:function(a,b){function c(a,b){d[b]._size+=j!=Infinity?j-i:0;a.adjustTabSize(d[b],d[b]._size)}for(var a=a||this._tabZone.offsetWidth,d=[],e=0;e<this._rows.length;e++)for(var f=0;f<this._rows[e].tabCount;f++)d.push(this._rows[e].removeChild(this._rows[e].childNodes[0]));this._tabZone.innerHTML="";this._rows=[];var g=this._lastActive;this._lastActive=null;this._createRow();for(var h=0,i=this._a.offset,j=Infinity,k=null,f=0;f<d.length;f++)i+d[f]._size+this._a.margin<a?(this._rows[h].appendChild(d[f]),
this._rows[h].tabCount++,i+=d[f]._size+this._a.margin):(b&&i<j&&c(this,f-1),this._createRow(),f--,h++,j=i,i=this._a.offset);b&&i<j&&j!=Infinity&&c(this,f-1);for(e=0;e<this._rows.length;e++)this._setTabSizes(this._rows[e]);this._setSizes();(this._lastActive=g)&&this._setTabTop(this._lastActive)},showInnerScroll:function(){for(var a in this._tabs){var b=dhtmlx.$customScroll;if(this.cells(a).vs){var c=this.cells(a).av;b?dhtmlx.CustomScroll.enable(this.cells(a).vs[c].dhxcont.mainCont[c]):this.cells(a).vs[c].dhxcont.mainCont[c].style.overflow=
"auto"}else b?dhtmlx.CustomScroll.enable(this.cells(a).dhxcont.mainCont):this.cells(a).dhxcont.mainCont.style.overflow="auto"}},getNumberOfTabs:function(){for(var a=0,b=0;b<this._rows.length;b++)a+=this._rows[b].tabCount;return a},destructor:function(){}};
if(!window.dhtmlXContainer)window.dhtmlXContainer=function(a){var b=this;this.obj=a;this.dhxcont=null;this.setContent=function(a){this.dhxcont=a;this.dhxcont.innerHTML="<div id='dhxMainCont' class='dhxcont_main_content'></div><div id='dhxContBlocker' class='dhxcont_content_blocker' style='display: none;'></div>";this.dhxcont.mainCont=this.dhxcont.childNodes[0];this.obj.dhxcont=this.dhxcont};this.obj._genStr=function(a){for(var b="",e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
f=0;f<a;f++)b+=e.charAt(Math.round(Math.random()*e.length));return b};this.obj.setMinContentSize=function(a,b){this._minDataSizeW=a;this._minDataSizeH=b};this.obj.moveContentTo=function(a){a.updateNestedObjects()};this.obj.adjustContent=function(a,b,e,f,g){this.dhxcont.style.top=b+"px";this.dhxcont.style.left="0px";if(f!=!0)this.dhxcont.style.width=a.clientWidth+"px";var h=a.clientHeight-b;h<0&&(h=0);this.dhxcont.style.height=h+(e!=null?e:0)+"px";if(f!=!0&&this.dhxcont.offsetWidth>a.clientWidth)this.dhxcont.style.width=
Math.max(0,a.clientWidth*2-this.dhxcont.offsetWidth)+"px";if(this.dhxcont.offsetHeight>a.clientHeight-b)h=(a.clientHeight-b)*2-this.dhxcont.offsetHeight,h<0&&(h=0),this.dhxcont.style.height=h+"px";if(g&&!isNaN(g))this.dhxcont.style.height=parseInt(this.dhxcont.style.height)-g+"px";if(this._minDataSizeH!=null&&parseInt(this.dhxcont.style.height)<this._minDataSizeH)this.dhxcont.style.height=this._minDataSizeH+"px";if(this._minDataSizeW!=null&&parseInt(this.dhxcont.style.width)<this._minDataSizeW)this.dhxcont.style.width=
this._minDataSizeW+"px";if(f!=!0)this.dhxcont.mainCont.style.width=this.dhxcont.clientWidth+"px";var i=this.menu!=null?!this.menuHidden?this.menuHeight:0:0,j=this.toolbar!=null?!this.toolbarHidden?this.toolbarHeight:0:0,k=this.sb!=null?!this.sbHidden?this.sbHeight:0:0;this.dhxcont.mainCont.style.height=this.dhxcont.clientHeight-i-j-k+"px"};this.obj.updateNestedObjects=function(){};this.obj.attachObject=function(a,b){typeof a=="string"&&(a=document.getElementById(a));if(b){a.style.visibility="hidden";
a.style.display="";var e=a.offsetWidth,f=a.offsetHeight}this._attachContent("obj",a);if(b&&this._isWindow)a.style.visibility="",this._adjustToContent(e,f)};this.obj.appendObject=function(a){typeof a=="string"&&(a=document.getElementById(a));this._attachContent("obj",a,!0)};this.obj.attachHTMLString=function(a){this._attachContent("str",a);for(var b=a.match(/<script[^>]*>[^\f]*?<\/script>/g)||[],e=0;e<b.length;e++){var f=b[e].replace(/<([\/]{0,1})script[^>]*>/g,"");if(window.execScript){var g=b[e].match(/<script[^>]*src\s*=\s*("|')([^"']+)("|')/);
if(g)f=dhtmlxAjax.getSync(g[2]).xmlDoc.responseText;f&&window.execScript(f)}else window.eval(f)}};this.obj.attachURL=function(a,b){this._attachContent(b==!0?"urlajax":"url",a,!1)};this.obj._attachContent=function(a,d,e){if(e!==!0)for(;b.dhxcont.mainCont.childNodes.length>0;)b.dhxcont.mainCont.removeChild(b.dhxcont.mainCont.childNodes[0]);if(a=="url"){var f=document.createElement("IFRAME");f.frameBorder=0;f.border=0;f.style.width="100%";f.style.height="100%";b.dhxcont.mainCont.appendChild(f);f.src=
d;this._frame=f;this._doOnFrameContentLoaded&&this._doOnFrameContentLoaded(!0)}else if(a=="urlajax"){var g=this,h=function(){g.attachHTMLString(this.xmlDoc.responseText,this);g._doOnFrameContentLoaded&&g._doOnFrameContentLoaded(!1);this.destructor()},i=new dtmlXMLLoaderObject(h,window);i.loadXML(d);g._doOnBeforeAttachURL&&g._doOnBeforeAttachURL(!1)}else if(a=="obj")b.dhxcont._frame=null,b.dhxcont.mainCont.appendChild(d),b.dhxcont.mainCont.style.overflow=e===!0?"auto":"hidden",d.style.display="";else if(a==
"str")b.dhxcont._frame=null,b.dhxcont.mainCont.innerHTML=d};this.obj._dhxContDestruct=function(){}};
(function(){dhtmlx.extend_api("dhtmlXTabBar",{_init:function(a){return[a.parent,a.mode,a.height]},tabs:"tabs",skin:"setSkin",offset:"setOffset",margin:"setMargin",image_path:"setImagePath",href_mode:"setHrefMode",align:"setAlign",xml:"loadXML",close_button:"enableTabCloseButton",scroll:"enableScroll",forced:"enableForceHiding",content_zone:"enableContentZone",size_by_content:"enableAutoSize",auto_size:"enableAutoReSize"},{tabs:function(a){for(var b=0;b<a.length;b++){var c=a[b];this.addTab(c.id,c.label,
c.width,c.index,c.row);c.active&&this.setTabActive(c.id)}}})})();

//v.3.6 build 131108

/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
You allowed to use this component or parts of it under GPL terms
To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
*/