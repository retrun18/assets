// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/DataBrowser/templates/ShoppingCart.html":'\x3cdiv class\x3d"ShoppingCart"\x3e\r\n    \x3ctable border\x3d"0" cellpadding\x3d"0" celspacing\x3d"0" class\x3d"Label" data-dojo-attach-event\x3d"mouseenter: _showList, click:_toggleList"\x3e\r\n        \x3ctr\x3e\r\n            \x3ctd class\x3d"ShoppingCart_CounterTD"\x3e\r\n                \x3cdiv class\x3d"ShoppingCart_CounterDivLeftBorder"\x3e\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d"divCounter" class\x3d"ShoppingCart_CounterDiv"\x3e\x3c/div\x3e\x3cdiv class\x3d"ShoppingCart_CounterDivRightBorder"\x3e\x3c/div\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"ShoppingCart_LabelTd"\x3e\r\n                \x3cdiv\x3e${nls.selectedVars}\x3c/div\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n                \x3cdiv class\x3d"ShoppingCartOpener"\x3e\x26#x25bc;\x3c/div\x3e\r\n            \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n    \x3c/table\x3e\r\n        \r\n    \x3cdiv data-dojo-attach-point\x3d"divOuter" class\x3d"ShoppingCart_OuterDiv"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"divList" class\x3d"ShoppingCart_DivList"\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"divEmpty" class\x3d"ShoppingCart_DivEmpty"\x3e\r\n            \x3cdiv\x3e${nls.noVariables}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/DataBrowser/ShoppingCart","dojo/dom-construct dojo/dom-attr dojo/_base/lang dojox/mvc/Templated dojo/on ../../../declare dijit/_WidgetBase dojo/text!./templates/ShoppingCart.html dgrid/List dojo/i18n!../../../nls/jsapi dojo/_base/window".split(" "),function(e,h,c,k,f,l,m,n,p,g,q){g=g.geoenrichment.dijit.ShoppingCart;return l("esri.dijit.geoenrichment.ShoppingCart",[m,k],{nls:g,templateString:n,list:null,content:null,constructor:function(){this.content={}},buildRendering:function(){this.inherited(arguments);
f(this.divList,"click, touchend",c.hitch(this,this._stopEvent))},displayCounter:function(){this.divCounter.innerHTML=this.contentLength().toString()},contentLength:function(){var a=0,b;for(b in this.content)this.content.hasOwnProperty(b)&&a++;return a},startup:function(){this.inherited(arguments);this.list=new p({renderRow:c.hitch(this,this.renderVariableRow)},this.divList);this.list.startup();this.displayCounter();this.divOuter.style.display="none"},renderVariableRow:function(a){var b=e.create("div",
{"class":"ShoppingCartRowOuter"}),d=e.create("div",{"class":"ShoppingCartRow"},b);e.create("div",{"class":"TrimWithEllipses ShoppingCartRowLabel",innerHTML:a.alias},d);d=e.create("div",{"class":"ShoppingCartRowCloser"},d);h.set(d,"idDesc",a.idDesc);f(d,"click",c.hitch(this,this.onClick));return b},onClick:function(a){delete this.content[a.currentTarget.attributes.idDesc.value];this.onRemoveElement(a.currentTarget.attributes.idDesc.value);this.refresh()},_showList:function(a){"none"===this.divOuter.style.display&&
(this._stopEvent(a),this._displayList())},_toggleList:function(a){this._stopEvent(a);"none"===this.divOuter.style.display?this._displayList():this._hideList()},_displayList:function(){this.refresh();this.divOuter.style.display="";event.stopPropagation&&event.stopPropagation();f.once(this.divOuter,"mouseleave",c.hitch(this,this._hideList));f.once(q.doc,"click",c.hitch(this,this._hideList))},_hideList:function(){this.divOuter&&(this.divOuter.style.display="none")},_stopEvent:function(a){a.stopPropagation&&
a.stopPropagation()},addVariable:function(a){this.content[a.idDesc]||(this.content[a.idDesc]=a,this.displayCounter(),this.onSelect());return!0},setVariables:function(a){this.content={};for(var b=0;b<a.length;b++)this.content[a[b].idDesc]=a[b];this.displayCounter()},addVariables:function(a){for(var b=0;b<a.length;b++)this.content[a[b].idDesc]=a[b];this.displayCounter();this.onSelect()},removeVariable:function(a){delete this.content[a];this.displayCounter()},refresh:function(){var a=[],b;for(b in this.content)this.content.hasOwnProperty(b)&&
a.push(this.content[b]);this.list.refresh();this.list.renderArray(a);this.displayCounter();this.divEmpty.style.visibility=0===a.length?"visible":"hidden"},collectSelection:function(){var a=[],b;for(b in this.content)this.content.hasOwnProperty(b)&&a.push(this.content[b].id2);return a},onRemoveElement:function(a){},onSelect:function(){}})});