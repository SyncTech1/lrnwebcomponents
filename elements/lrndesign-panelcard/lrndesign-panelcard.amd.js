define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/paper-card/paper-card.js","./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_polymerLegacy,_paperCard,_materializecssStyles,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignPanelcard=void 0;function _templateObject_4753ba0019e711e9ac63257449a593f0(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"materializecss-styles\"></style>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n        --secondary-text-color: #ffffff;\n        --paper-input-container-color: #ffffff;\n      }\n\n      .card-panel {\n        transition: box-shadow 0.25s;\n        padding: 24px;\n        margin: 0;\n        border-radius: 2px;\n        background-color: #fff;\n      }\n\n      h3 {\n        padding: 0;\n        margin: 0 0 8px 0;\n      }\n    </style>\n    <aside>\n      <paper-card elevation=\"[[elevation]]\">\n        <div class$=\"card-panel [[color]]\">\n          <h3 class$=\"[[textColor]]\">[[title]]</h3>\n          <span class$=\"[[textColor]]\"> <slot></slot> </span>\n        </div>\n      </paper-card>\n    </aside>\n  "],["\n    <style include=\"materializecss-styles\"></style>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n        --secondary-text-color: #ffffff;\n        --paper-input-container-color: #ffffff;\n      }\n\n      .card-panel {\n        transition: box-shadow 0.25s;\n        padding: 24px;\n        margin: 0;\n        border-radius: 2px;\n        background-color: #fff;\n      }\n\n      h3 {\n        padding: 0;\n        margin: 0 0 8px 0;\n      }\n    </style>\n    <aside>\n      <paper-card elevation=\"[[elevation]]\">\n        <div class\\$=\"card-panel [[color]]\">\n          <h3 class\\$=\"[[textColor]]\">[[title]]</h3>\n          <span class\\$=\"[[textColor]]\"> <slot></slot> </span>\n        </div>\n      </paper-card>\n    </aside>\n  "]);_templateObject_4753ba0019e711e9ac63257449a593f0=function _templateObject_4753ba0019e711e9ac63257449a593f0(){return data};return data}var LrndesignPanelcard=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_4753ba0019e711e9ac63257449a593f0()),is:"lrndesign-panelcard",behaviors:[HAXBehaviors.PropertiesBehaviors,MaterializeCSSBehaviors.ColorBehaviors],properties:{title:{type:String,value:"Block heading",reflectToAttribute:!0},color:{type:String,value:"yellow lighten-4",reflectToAttribute:!0},textColor:{type:String,value:"black-text",reflectToAttribute:!0},elevation:{type:Number,value:2,reflectToAttribute:!0}},attached:function attached(){var props={canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Note card",description:"A small note to offset text used for asides.",icon:"icons:check-box-outline-blank",color:"grey",groups:["Content","Visual Treatment"],handles:[{type:"text",text:"title"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"The heading for this sticky note",inputMethod:"textfield",icon:"editor:title"},{property:"color",title:"Background color",description:"Select the background color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"elevation",title:"Elevation",description:"Visually how high this is off the page",inputMethod:"textfield",icon:"icons:content-copy"}],configure:[{property:"title",title:"Title",description:"The heading for this sticky note",inputMethod:"textfield",icon:"editor:title"},{slot:"",title:"Text",description:"The text for our sticky note",inputMethod:"textarea",icon:"editor:title",required:!1,validationType:"text"},{property:"color",title:"Background color",description:"Select the background color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"elevation",title:"Elevation",description:"Visually how high this is off the page",inputMethod:"select",options:{0:"0",1:"1",2:"2",3:"3",4:"4",5:"5"}}],advanced:[]}};this.setHaxProperties(props)}});_exports.LrndesignPanelcard=LrndesignPanelcard});