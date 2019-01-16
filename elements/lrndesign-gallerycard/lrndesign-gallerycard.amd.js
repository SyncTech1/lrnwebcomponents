define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js","./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js","./node_modules/@polymer/iron-image/iron-image.js","./node_modules/@polymer/paper-card/paper-card.js","./node_modules/@polymer/iron-icon/iron-icon.js"],function(_exports,_polymerLegacy,_lrndesignAvatar,_materializecssStyles,_ironImage,_paperCard,_ironIcon){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignGallerycard=void 0;function _templateObject_554cbbb019e811e99d3f79805d755561(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"materializecss-styles\"></style>\n    <style>\n      :host {\n        display: inline-flex;\n      }\n      :host([size=\"micro\"]) {\n        transform: scale(0.5);\n      }\n      :host([size=\"small\"]) {\n        transform: scale(0.8);\n      }\n\n      paper-card {\n        border-radius: 4px;\n        margin: 0;\n        width: 100%;\n      }\n\n      .card-actions {\n        background-color: #f5f5f5;\n        border-radius: 0 0 4px 4px;\n        padding: 0 8px;\n      }\n      .card-actions .card-action-details {\n        display: inline-block;\n        vertical-align: middle;\n        vertical-align: -webkit-baseline-middle;\n        width: 80%;\n      }\n      #avatar {\n        display: inline-block;\n        vertical-align: text-top;\n        transform: scale(0.8);\n      }\n\n      .card-control-height {\n        height: 240px;\n      }\n\n      [elevation=\"0\"] {\n        border: solid 1px #eeeeee;\n      }\n\n      .text-right {\n        text-align: right;\n      }\n\n      .text-left {\n        text-align: left;\n      }\n\n      .title {\n        color: #222;\n        font-size: 12.8px;\n        font-weight: 600;\n        line-height: 20px;\n        padding: 0 12px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: 8px;\n      }\n\n      .comments {\n        font-size: 12px;\n        float: right;\n      }\n\n      .divider {\n        height: 1px;\n        width: 100%;\n        background: #efefef;\n      }\n\n      .project-icon {\n        --iron-icon-height: 100%;\n        --iron-icon-width: 100%;\n        overflow: hidden;\n        color: grey;\n      }\n      .project-icon:hover,\n      .project-icon:focus {\n        color: black;\n      }\n\n      .center {\n        margin: auto;\n        width: 80%;\n        padding: 16px;\n      }\n\n      .link {\n        font-size: 16px;\n        line-height: 16px;\n      }\n\n      .submission-info {\n        width: 100%;\n      }\n      .submission-preview {\n        height: 160px;\n      }\n\n      .card-content {\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n      }\n\n      .inline {\n        display: inline;\n      }\n    </style>\n    <paper-card elevation=\"[[elevation]]\">\n      <div class=\"card-content card-control-height card-control-center\">\n        <div class=\"submission-preview\">\n          <iron-icon\n            class=\"project-icon\"\n            icon=\"[[icon]]\"\n            hidden$=\"[[!icon]]\"\n          ></iron-icon>\n          <iron-image\n            style=\"width:100%; height:100%; background-color: lightgray;\"\n            sizing=\"cover\"\n            preload=\"\"\n            fade=\"\"\n            src=\"[[image]]\"\n            hidden$=\"[[!image]]\"\n          ></iron-image>\n        </div>\n        <div class=\"submission-info\">\n          <div class=\"divider\"></div>\n          <div class=\"title\">[[title]]</div>\n        </div>\n      </div>\n      <div class=\"card-actions\">\n        <lrndesign-avatar\n          id=\"avatar\"\n          label=\"[[author.name]]\"\n          src=\"[[author.avatar]]\"\n        ></lrndesign-avatar>\n        <div class=\"card-action-details\">\n          <span class=\"text-left author\">[[author.display_name]]</span>\n          <span class=\"comments text-right\">Comments: [[comments]]</span>\n        </div>\n      </div>\n    </paper-card>\n  "],["\n    <style include=\"materializecss-styles\"></style>\n    <style>\n      :host {\n        display: inline-flex;\n      }\n      :host([size=\"micro\"]) {\n        transform: scale(0.5);\n      }\n      :host([size=\"small\"]) {\n        transform: scale(0.8);\n      }\n\n      paper-card {\n        border-radius: 4px;\n        margin: 0;\n        width: 100%;\n      }\n\n      .card-actions {\n        background-color: #f5f5f5;\n        border-radius: 0 0 4px 4px;\n        padding: 0 8px;\n      }\n      .card-actions .card-action-details {\n        display: inline-block;\n        vertical-align: middle;\n        vertical-align: -webkit-baseline-middle;\n        width: 80%;\n      }\n      #avatar {\n        display: inline-block;\n        vertical-align: text-top;\n        transform: scale(0.8);\n      }\n\n      .card-control-height {\n        height: 240px;\n      }\n\n      [elevation=\"0\"] {\n        border: solid 1px #eeeeee;\n      }\n\n      .text-right {\n        text-align: right;\n      }\n\n      .text-left {\n        text-align: left;\n      }\n\n      .title {\n        color: #222;\n        font-size: 12.8px;\n        font-weight: 600;\n        line-height: 20px;\n        padding: 0 12px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: 8px;\n      }\n\n      .comments {\n        font-size: 12px;\n        float: right;\n      }\n\n      .divider {\n        height: 1px;\n        width: 100%;\n        background: #efefef;\n      }\n\n      .project-icon {\n        --iron-icon-height: 100%;\n        --iron-icon-width: 100%;\n        overflow: hidden;\n        color: grey;\n      }\n      .project-icon:hover,\n      .project-icon:focus {\n        color: black;\n      }\n\n      .center {\n        margin: auto;\n        width: 80%;\n        padding: 16px;\n      }\n\n      .link {\n        font-size: 16px;\n        line-height: 16px;\n      }\n\n      .submission-info {\n        width: 100%;\n      }\n      .submission-preview {\n        height: 160px;\n      }\n\n      .card-content {\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n      }\n\n      .inline {\n        display: inline;\n      }\n    </style>\n    <paper-card elevation=\"[[elevation]]\">\n      <div class=\"card-content card-control-height card-control-center\">\n        <div class=\"submission-preview\">\n          <iron-icon\n            class=\"project-icon\"\n            icon=\"[[icon]]\"\n            hidden\\$=\"[[!icon]]\"\n          ></iron-icon>\n          <iron-image\n            style=\"width:100%; height:100%; background-color: lightgray;\"\n            sizing=\"cover\"\n            preload=\"\"\n            fade=\"\"\n            src=\"[[image]]\"\n            hidden\\$=\"[[!image]]\"\n          ></iron-image>\n        </div>\n        <div class=\"submission-info\">\n          <div class=\"divider\"></div>\n          <div class=\"title\">[[title]]</div>\n        </div>\n      </div>\n      <div class=\"card-actions\">\n        <lrndesign-avatar\n          id=\"avatar\"\n          label=\"[[author.name]]\"\n          src=\"[[author.avatar]]\"\n        ></lrndesign-avatar>\n        <div class=\"card-action-details\">\n          <span class=\"text-left author\">[[author.display_name]]</span>\n          <span class=\"comments text-right\">Comments: [[comments]]</span>\n        </div>\n      </div>\n    </paper-card>\n  "]);_templateObject_554cbbb019e811e99d3f79805d755561=function _templateObject_554cbbb019e811e99d3f79805d755561(){return data};return data}var LrndesignGallerycard=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_554cbbb019e811e99d3f79805d755561()),is:"lrndesign-gallerycard",listeners:{mouseenter:"_mouseEnter",mouseleave:"_mouseLeave"},properties:{size:{type:String,notify:!0,reflectToAttribute:!0},image:{type:String,notify:!0,reflectToAttribute:!0},icon:{type:String,notify:!0,reflectToAttribute:!0},title:{type:String,value:"Project",notify:!0},author:{type:Object,value:{name:"author",display_name:"Author"},notify:!0},elevation:{type:Number,value:1,reflectToAttribute:!0,notify:!0},comments:{type:Number,value:0,reflectToAttribute:!0,notify:!0}},_mouseEnter:function _mouseEnter(e){this.elevation+=2},_mouseLeave:function _mouseLeave(e){this.elevation-=2}});_exports.LrndesignGallerycard=LrndesignGallerycard});