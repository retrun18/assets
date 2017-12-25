// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/CalculateDensity.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_hotspotsToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e \r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"createDensitySurfaceIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e${i18n.calculateDensity}\x3c/td\x3e\r\n              \x3ctd\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                    \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                      \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                    \x3c/div\x3e              \r\n                \x3c/div\x3e  \r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n     \x3ctable class\x3d"esriFormTable"\x3e \r\n       \x3ctbody\x3e\r\n        \x3ctr  data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_interpolateToolDescription" \x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e \r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding-bottom:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e          \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.selectAttributesLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"field"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_fieldSelect" data-dojo-attach-event\x3d"onChange:_handleFieldChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e \r\n        \x3ctr data-dojo-attach-point\x3d"_optionsRow"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"optionsTd"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1 optionsClose" data-dojo-attach-point\x3d"_optionsDiv"\x3e\r\n              \x3cdiv class\x3d"dijitTreeExpando" data-dojo-attach-event\x3d"onclick:_handleOptionsBtnClick"\x3e\x3clabel class\x3d"esriLeadingMargin2 noWrapLabel"\x3e${i18n.Options}\x3c/label\x3e\x3c/div\x3e\r\n              \x3ctable class\x3d"esriFormTable optionsTable"\x3e\r\n                \x3ctbody\x3e\r\n                 \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"2"\x3e\r\n                      \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.searchDistance}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd class\x3d"shortTextInput"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"radius"\x3e\x3c/a\x3e\r\n                    \x3c/td\x3e                    \r\n                  \x3c/tr\x3e                  \r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"3" style\x3d"padding:0;"\x3e\r\n                      \x3ctable class\x3d"esriFormTable esriLeadingMargin2" style\x3d"width:90%;"\x3e\r\n                        \x3ctbody\x3e\r\n                          \x3ctr\x3e\r\n                          \x3ctd  style\x3d"width:50%;padding-right:1em;"\x3e\r\n                      \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"onChange:_handleDistValueChange" data-dojo-props\x3d"intermediateChanges:true,placeHolder:\'${i18n.searchDistance}\'" data-dojo-attach-point\x3d"_searchDistanceInput" style\x3d"width:100%;"\x3e\r\n                          \x3c/td\x3e\r\n                          \x3ctd colspan\x3d"2"\x3e\r\n                      \x3cselect class\x3d"longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"onChange:_handleDistUnitsChange" data-dojo-attach-point\x3d"_radiusUnitsSelect"\x3e\r\n                      \x3c/select\x3e\r\n                          \x3c/td\x3e\r\n                          \x3c/tr\x3e\r\n                        \x3c/tbody\x3e\r\n                      \x3c/table\x3e\r\n                    \x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                  \r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"2"\x3e\r\n                      \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.interpolateWithin}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd class\x3d"shortTextInput"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"boundingPolygonLayer"\x3e\x3c/a\x3e\r\n                    \x3c/td\x3e                    \r\n                  \x3c/tr\x3e\r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"2" style\x3d"width:40%;"\x3e\r\n                      \x3cselect class\x3d"esriLeadingMargin2 longInput esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_boundingAreaSelect" data-dojo-attach-event\x3d"onChange:_handleBoundingSelectChange"\x3e\x3c/select\x3e                      \r\n                    \x3c/td\x3e\r\n                    \x3ctd style\x3d"width:9%;"\x3e\r\n                      \x3cdiv data-dojo-type\x3d"dijit/form/ToggleButton" data-dojo-attach-point\x3d"_bndgPolyDrawBtn" class\x3d"esriFloatLeading esriActionButton" data-dojo-props\x3d"showLabel:false,iconClass:\'toolbarIcon polygonIcon\',label:\'${i18n.drawLabel}\'" data-dojo-attach-event\x3d"onChange:_handleBoundingBtnChange"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e \r\n                  \x3c/tr\x3e      \r\n                  \r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"2"\x3e\r\n                      \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.classifyLabel}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd class\x3d"shortTextInput"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"classificationType"\x3e\x3c/a\x3e\r\n                    \x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"3" style\x3d"padding-bottom:0.25;"\x3e\r\n                      \x3cselect class\x3d"esriLeadingMargin2 longInput esriLongLabel"  data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_classifySelect" data-dojo-attach-event\x3d"onChange:_handleClassifySelectChange" style\x3d"width:68%"\x3e\r\n                        \x3coption value\x3d"EqualInterval"\x3e${i18n.equalInterval}\x3c/option\x3e\r\n                        \x3coption value\x3d"EqualArea"\x3e ${i18n.quantile}\x3c/option\x3e\r\n                        \x3coption value\x3d"GeometricInterval"\x3e${i18n.geometricInterval}\x3c/option\x3e\r\n                        \x3coption value\x3d"NaturalBreaks"\x3e${i18n.naturalBreaks}\x3c/option\x3e\r\n                        \x3coption value\x3d"StandardDeviation"\x3e${i18n.standardDeviation}\x3c/option\x3e\r\n                      \x3c/select\x3e\r\n                    \x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                  \x3ctr data-dojo-attach-point\x3d"_classifyOtherOptionLabelRow"\x3e \r\n                    \x3ctd colspan\x3d"2" style\x3d"padding-top:0.25;padding-bottom:0.25;"\x3e\r\n                      \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.classesCountLabel}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd class\x3d"shortTextInput" style\x3d"padding-top:0;padding-bottom:0;"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"numClasses"\x3e\x3c/a\x3e\r\n                    \x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                  \x3ctr data-dojo-attach-point\x3d"_classifyOtherOptionInputRow"\x3e\r\n                     \x3ctd colspan\x3d"3" style\x3d"padding-top:0.25;"\x3e\r\n                       \x3cinput data-dojo-type\x3d"dijit/form/NumberSpinner"  class\x3d "esriMediumlabel esriLeadingMargin2"  data-dojo-attach-point\x3d"_numClassesInput" data-dojo-props\x3d"value:${numClasses}, style: \'width:25%\',smallDelta:1,constraints: { min:3, max:32, places:0 }"/\x3e\r\n                     \x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                  \x3ctr data-dojo-attach-point\x3d"_manualOptionLabelRow" style\x3d"display:none;"\x3e\r\n                    \x3ctd colspan\x3d"3" style\x3d"padding-top:0.25;padding-bottom:0.25;"\x3e\r\n                      \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.classBreakValues}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3c!--\x3ctd class\x3d"shortTextInput" style\x3d"padding-top:0;padding-bottom:0;"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"MeasurementMethod"\x3e\x3c/a\x3e\r\n                    \x3c/td\x3e--\x3e\r\n                  \x3c/tr\x3e\r\n                  \x3ctr  data-dojo-attach-point\x3d"_manualOptionInputRow" style\x3d"display:none;"\x3e\r\n                    \x3ctd colspan\x3d"3" style\x3d"padding-top:0.25;"\x3e\r\n                      \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"intermediateChanges:true" data-dojo-attach-point\x3d"_classBreaksInput" class\x3d"esriLeadingMargin2"\x3e\r\n                      \x3cdiv\x3e\r\n                        \x3clabel class\x3d"esriLeadingMargin2 esriSmallLabel"\x3e${i18n.classBreaksHelp}\x3c/label\x3e\r\n                      \x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                  \x3c/tr\x3e                  \r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"2" style\x3d"width:40%;"\x3e\r\n                      \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.outputAerealUnits}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd class\x3d"shortTextInput"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"areaUnits"\x3e\x3c/a\x3e\r\n                    \x3c/td\x3e                    \r\n                  \x3c/tr\x3e\r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"3"\x3e\r\n                        \x3cselect class\x3d"esriLeadingMargin2 longInput esriLongLabel"  data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_areaUnitsSelect" data-dojo-attach-event\x3d"onChange:_handleArealUnitsSelectChange" style\x3d"width:68%"\x3e\x3c/select\x3e\r\n                    \x3c/td\x3e   \r\n                  \x3c/tr\x3e                               \r\n                \x3c/tbody\x3e\r\n              \x3c/table\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"longTextInput esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n     \x3c/table\x3e\r\n   \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n     \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n       \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n         ${i18n.useMapExtent}\r\n     \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n        ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e    \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/CalculateDensity","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/Color dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/number dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/NumberSpinner dijit/form/NumberTextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../toolbars/draw ../PopupTemplate ../../layers/FeatureLayer ../../graphic ./utils ./CreditEstimator ../../symbols/PictureMarkerSymbol dijit/form/HorizontalSlider dijit/form/HorizontalRule dijit/form/HorizontalRuleLabels dojo/i18n!../../nls/jsapi dojo/text!./templates/CalculateDensity.html".split(" "),
function(p,v,e,h,m,w,k,x,K,q,c,y,L,M,f,l,z,A,B,C,D,N,O,P,Q,R,S,T,U,V,W,X,Y,E,n,F,G,s,t,u,Z,H,I,g,$,aa,ba,ca,da,r,J){p=v([z,A,B,C,D,G,F],{declaredClass:"esri.dijit.analysis.CalculateDensity",templateString:J,widgetsInTemplate:!0,inputLayer:null,field:null,classificationType:"EqualInterval",numClasses:10,boundingPolygonLayer:null,outputName:null,classBreaks:null,radius:null,radiusUnits:null,arealUnits:null,_NOVALUE_:"NOVALUE",map:null,i18n:null,toolName:"CalculateDensity",helpFileName:"CalculateDensity",
resultParameter:"resultLayer",constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);h.forEach(this._pbConnects,m.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);e.mixin(this.i18n,r.findHotSpotsTool);e.mixin(this.i18n,r.interpolatePointsTool);e.mixin(this.i18n,r.calculateDensityTool);this.set("drawLayerName",this.i18n.blayerName);this.set("drawPointLayerName",this.i18n.pointlayerName)},
postCreate:function(){this.inherited(arguments);f.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",e.hitch(this,this.validateServiceName));this._classBreaksInput.set("validator",e.hitch(this,this.validateClassBreaks));this._buildUI()},startup:function(){},_onClose:function(a){a&&this._featureLayer&&(this.map.removeLayer(this._featureLayer),h.forEach(this.boundingPolygonLayers,function(a,d){a===this._featureLayer&&(this._boundingAreaSelect.removeOption({value:d+1,label:this._featureLayer.name}),
this.boundingPolygonLayers.splice(d,1))},this));this._handleBoundingBtnChange(!1);this.emit("close",{save:!a})},clear:function(){this._featureLayer&&(this.map.removeLayer(this._featureLayer),h.forEach(this.boundingPolygonLayers,function(a,b){a===this._featureLayer&&(this._boundingAreaSelect.removeOption({value:b+1,label:this._featureLayer.name}),this.boundingPolygonLayers.splice(b,1))},this));this._handleBoundingBtnChange(!1)},_handleShowCreditsClick:function(a){a.preventDefault();a={};this._form.validate()&&
(a.inputLayer=k.toJson(g.constructAnalysisInputLyrObj(this.get("inputLayer"))),this.get("field")&&(a.field=this.get("field")),this.get("radius")&&(a.radius=this.radius),this.radius&&this.get("radiusUnits")&&(a.radiusUnits=this.radiusUnits),this.get("areaUnits")&&(a.areaUnits=this.areaUnits),this.get("classificationType")&&(a.classificationType=this.get("classificationType")),"Manual"!==this.classificationType?a.numClasses=this.get("numClasses"):a.classBreaks=this.get("classBreaks"),this.get("boundingPolygonLayer")&&
(a.boundingPolygonLayer=k.toJson(g.constructAnalysisInputLyrObj(this.boundingPolygonLayer))),this.returnFeatureCollection||(a.OutputName=k.toJson({serviceProperties:{name:this.get("outputName")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=k.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,a).then(e.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()})))},_handleSaveBtnClick:function(a){if(this._form.validate()){this._saveBtn.set("disabled",
!0);a={};var b={},d;a.inputLayer=k.toJson(g.constructAnalysisInputLyrObj(this.get("inputLayer")));this.get("field")&&(a.field=this.get("field"));this.get("radius")&&(a.radius=this.radius);this.radius&&this.get("radiusUnits")&&(a.radiusUnits=this.radiusUnits);this.get("areaUnits")&&(a.areaUnits=this.areaUnits);this.get("classificationType")&&(a.classificationType=this.get("classificationType"));"Manual"!==this.classificationType?a.numClasses=this.get("numClasses"):a.classBreaks=this.get("classBreaks");
this.get("boundingPolygonLayer")&&(a.boundingPolygonLayer=k.toJson(g.constructAnalysisInputLyrObj(this.boundingPolygonLayer)));this.returnFeatureCollection||(a.OutputName=k.toJson({serviceProperties:{name:this.get("outputName")}}));this.showChooseExtent&&!this.get("DisableExtent")&&this._useExtentCheck.get("checked")&&(a.context=k.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(d={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&
(d.extent=this.map.extent._normalize(!0)),a.context=k.toJson(d));a.returnFeatureCollection=this.returnFeatureCollection;b.jobParams=a;b.itemParams={description:this.i18n.itemDescription,tags:q.substitute(this.i18n.itemTags,{layername:this.inputLayer.name,fieldname:!a.field?"":a.field}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this.get("folderId"));this.execute(b)}},_handleBrowseItemsSelect:function(a){a&&a.selection&&g.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?
this.inputLayers:this.boundingPolygonLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._boundingAreaSelect,posIncrement:this._isAnalysisSelect?0:1,browseDialog:this._browsedlg,widget:this}).always(e.hitch(this,this._updateAnalysisLayerUI,!0))},_save:function(){},_buildUI:function(){var a=!0;this._radiusUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",
label:this.i18n.meters}]);this._areaUnitsSelect.addOption([{value:"SquareMiles",label:this.i18n.sqMiles},{value:"SquareKilometers",label:this.i18n.sqKm}]);this.signInPromise.then(e.hitch(this,g.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));this.get("showSelectAnalysisLayer")&&(!this.get("inputLayer")&&this.get("inputLayers")&&this.set("inputLayer",this.inputLayers[0]),g.populateAnalysisLayers(this,"inputLayer","inputLayers"));this.outputName&&(this._outputLayerInput.set("value",
this.outputName),a=!1);this.inputLayer&&this._updateAnalysisLayerUI(a);this.classificationType&&this._classifySelect.set("value",this.classificationType);if(this.boundingPolygonLayers){this._boundingAreaSelect.addOption({value:"-1",label:this.i18n.defaultBoundingOption,selected:!0});var b=!1;h.forEach(this.boundingPolygonLayers,function(a,e){"esriGeometryPolygon"===a.geometryType&&(b=this.get("boundingPolygonLayer")&&this.get("boundingPolygonLayer").name===a.name,this._boundingAreaSelect.addOption({value:e+
1,label:a.name,selected:b}))},this)}g.addReadyToUseLayerOption(this,[this._analysisSelect,this._boundingAreaSelect]);this.classBreaks&&this._classBreaksInput.set("value",this.classBreaks.join().replace(/,/g," "));this.radius&&this._searchDistanceInput.set("value",this.radius);this.radiusUnits&&this._radiusUnitsSelect.set("value",this.radiusUnits);this.areaUnits&&this._areaUnitsSelect.set("value",this.areaUnits);c.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&
this.getFolderStore().then(e.hitch(this,function(a){this.folderStore=a;g.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));c.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");c.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this._loadConnections()},_updateAnalysisLayerUI:function(a){this.inputLayer&&
(y.set(this._interpolateToolDescription,"innerHTML",q.substitute(this.i18n.toolDefine,{layername:this.inputLayer.name})),a&&(this.outputName=q.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name})),this._outputLayerInput.set("value",this.outputName),this.set("fields",this.inputLayer))},_handleAnalysisLayerChange:function(a){"browse"===a?(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this._browsedlg.browseItems.set("query",this._analysisquery+
' AND (tags:"point" OR tags:"line") '),this._isAnalysisSelect=!0,this._browsedlg.show()):(this.inputLayer=this.inputLayers[a],this._updateAnalysisLayerUI(!0))},_handleMethodChange:function(a){"NN"===a?(f.add(this._optionsDiv,"disabled"),f.contains(this._optionsDiv,"optionsOpen")&&(f.remove(this._optionsDiv,"optionsOpen"),f.add(this._optionsDiv,"optionsClose"))):(f.contains(this._optionsDiv,"disabled")&&f.remove(this._optionsDiv,"disabled"),"KG"===a?(c.set(this._barrierLabelRow,"display","none"),c.set(this._barrierSelectRow,
"display","none"),c.set(this._speedLabelRow,"display",""),c.set(this._speedSliderRow,"display","")):"LP"===a&&(c.set(this._barrierLabelRow,"display",""),c.set(this._barrierSelectRow,"display",""),c.set(this._speedLabelRow,"display","none"),c.set(this._speedSliderRow,"display","none")))},_handleOptimizeSliderChange:function(a){console.log(a,this._optimizeSlider.get("value"));this.set("interpolateOption",this._optimizeSlider.get("value"))},_handleFieldChange:function(a){},_handleOptionsBtnClick:function(){f.contains(this._optionsDiv,
"disabled")||(f.contains(this._optionsDiv,"optionsClose")?(f.remove(this._optionsDiv,"optionsClose"),f.add(this._optionsDiv,"optionsOpen")):f.contains(this._optionsDiv,"optionsOpen")&&(f.remove(this._optionsDiv,"optionsOpen"),f.add(this._optionsDiv,"optionsClose")))},_handleBoundingSelectChange:function(a){"browse"===a&&(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this._browsedlg.browseItems.set("query",this._analysisquery+' AND tags:"polygon"'),this._isAnalysisSelect=
!1,this._browsedlg.show())},_handleArealUnitsSelectChange:function(a){},_handleBoundingBtnChange:function(a){a?(this.emit("drawtool-activate",{}),this._featureLayer||this._createBoundingPolyFeatColl(),this._toolbar.activate(u.POLYGON)):(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}))},_handleDistValueChange:function(a){},_handleDistUnitsChange:function(a){},_handleClassifySelectChange:function(a){c.set(this._classifyOtherOptionLabelRow,"display","Manual"===a?"none":"block");c.set(this._classifyOtherOptionInputRow,
"display","Manual"===a?"none":"block");c.set(this._manualOptionInputRow,"display","Manual"===a?"block":"none");c.set(this._manualOptionLabelRow,"display","Manual"===a?"block":"none")},_loadConnections:function(){this.on("start",e.hitch(this,"_onClose",!1));this._connect(this._closeBtn,"onclick",e.hitch(this,"_onClose",!0))},_createBoundingPolyFeatColl:function(){var a=g.createPolygonFeatureCollection(this.drawLayerName);this._featureLayer=new H(a,{id:this.drawLayerName});this.map.addLayer(this._featureLayer);
m.connect(this._featureLayer,"onClick",e.hitch(this,function(a){this.map.infoWindow.setFeatures([a.graphic])}))},_addFeatures:function(a){var b=[],d={},e=new s(s.STYLE_NULL,new t(t.STYLE_SOLID,new w([0,0,0]),4));a=new I(a,e);this.map.graphics.add(a);d.description="blayer desc";d.title="blayer";a.setAttributes(d);b.push(a);this._featureLayer.applyEdits(b,null,null);if(0===this.boundingPolygonLayers.length||this.boundingPolygonLayers[this.boundingPolygonLayers.length-1]!==this._featureLayer)b=this.boundingPolygonLayers.push(this._featureLayer),
d=this._boundingAreaSelect.getOptions(),this._boundingAreaSelect.removeOption(d),d=h.map(d,function(a){a.selected=!1;return a}),d.push({value:b,label:this._featureLayer.name,selected:!0}),this._boundingAreaSelect.addOption(d)},validateServiceName:function(a){return g.validateServiceName(a,{textInput:this._outputLayerInput})},validateClassBreaks:function(){var a,b=[],d=[],c,f;a=e.trim(this._classBreaksInput.get("value")).split(" ");if("Manual"!==this.get("classificationType"))return!0;if(!a&&"Manual"===
this.get("classificationType")||2>a.length||31<a.length)return!1;h.some(a,function(g,h){g=l.parse(g);if(isNaN(g))return b.push(0),!1;if(d[a[h]])return d[a[h]]=!1,b.push(0),!1;d[a[h]]=!0;c=l.format(g,{locale:"root"});n.isDefined(c)?n.isDefined(c)||(c=l.format(g,{locale:"en-us"})):c=l.format(g,{locale:"en"});n.isDefined(c)&&(f=e.trim(c).match(/\D/g));if(f&&0<f.length)return b.push(0),!1});return-1!==h.indexOf(b,0)?!1:!0},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",
this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){this.inputLayer=a},_getInputLayerAttr:function(){return this.inputLayer},_setInputLayersAttr:function(a){this.inputLayers=a},_setFieldsAttr:function(a){var b=a.fields,d,c;this._fieldSelect&&this._fieldSelect.removeOption(this._fieldSelect.getOptions());this._fieldSelect.addOption({value:this._NOVALUE_,label:this.i18n.chooseCountField});h.forEach(b,function(b,e){b.name!==a.objectIdField&&-1!==h.indexOf(["esriFieldTypeSmallInteger",
"esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],b.type)&&(d={value:b.name,label:n.isDefined(b.alias)&&""!==b.alias?b.alias:b.name},this.field&&d.value===this.field&&(d.selected="selected",c=b.name),this._fieldSelect.addOption(d))},this);c&&this._fieldSelect.set("value",c)},_setFieldAttr:function(a){this.field=a},_getFieldAttr:function(){this._fieldSelect&&(this.field=this._fieldSelect.get("value")!==this._NOVALUE_?this._fieldSelect.get("value"):null);return this.field},_setRadiusAttr:function(a){this._set("radius",
a)},_getRadiusAttr:function(){this._searchDistanceInput&&this.set("radius",this._searchDistanceInput.get("value"));return this.radius},_setRadiusUnitsAttr:function(a){this._set("radiusUnits",a)},_getRadiusUnitsAttr:function(){this._radiusUnitsSelect&&this.set("radiusUnits",this._radiusUnitsSelect.get("value"));return this.radiusUnits},_setAreaUnitsAttr:function(a){this._set("areaUnits",a)},_getAreaUnitsAttr:function(){this._areaUnitsSelect&&this.set("areaUnits",this._areaUnitsSelect.get("value"));
return this.areaUnits},_setClassificationTypeAttr:function(a){this.classificationType=a},_getClassificationTypeAttr:function(){this._classifySelect&&(this.classificationType=this._classifySelect.get("value"));return this.classificationType},_getNumClassesAttr:function(){this._numClassesInput&&(this.numClasses=this._numClassesInput.get("value"));return this.numClasses},_setNumClassesAttr:function(a){this.numClasses=a},_getClassBreaksAttr:function(){if(this._classBreaksInput){var a=e.trim(this._classBreaksInput.get("value")).split(" "),
b=[];h.forEach(a,function(a){b.push(l.parse(a))});this.classBreaks=b}return this.classBreaks},_setClassBreaksAttr:function(a){a&&(this.classBreaks=a)},_getBoundingPolygonLayerAttr:function(){this._boundingAreaSelect&&(this.boundingPolygonLayer=null,"-1"!==this._boundingAreaSelect.get("value")&&(this.boundingPolygonLayer=this.boundingPolygonLayers[this._boundingAreaSelect.get("value")-1]));return this.boundingPolygonLayer},_setBoundingPolygonLayerAttr:function(a){this.boundingPolygonLayer=a},_setBoundingPolygonLayersAttr:function(a){this.boundingPolygonLayers=
a},_getOutputNameAttr:function(){this._outputLayerInput&&(this.outputName=this._outputLayerInput.get("value"));return this.outputName},_setOutputNameAttr:function(a){this.outputName=a},_setMapAttr:function(a){this.map=a;this._toolbar=new u(this.map);m.connect(this._toolbar,"onDrawEnd",e.hitch(this,this._addFeatures))},_getMapAttr:function(){return this.map},_setDrawLayerNameAttr:function(a){this.drawLayerName=a},_getDrawLayerNameAttr:function(){return this._featureLayer.name},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",
a)},_getDrawLayerAttr:function(){var a=[];this._featureLayer&&a.push(this._featureLayer);this._pointfeatureLayer&&a.push(this._pointfeatureLayer);return a},_setDisableExtentAttr:function(a){this._useExtentCheck.set("checked",!a);this._useExtentCheck.set("disabled",a)},_getDisableExtentAttr:function(){this._useExtentCheck.get("disabled")},_connect:function(a,b,c){this._pbConnects.push(m.connect(a,b,c))}});x("extend-esri")&&e.setObject("dijit.analysis.CalculateDensity",p,E);return p});