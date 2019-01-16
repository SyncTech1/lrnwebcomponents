define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/iron-ajax/iron-ajax.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@polymer/paper-spinner/paper-spinner.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@polymer/iron-icon/iron-icon.js","./node_modules/@polymer/paper-tooltip/paper-tooltip.js","./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js"],function(_exports,_polymerLegacy,_ironAjax,_paperButton,_paperSpinner,_ironIcons,_ironIcon,_paperTooltip,_materializecssStyles){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.CsvRender=void 0;function _templateObject_ecc9522019e611e98168cb314ff0045d(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"materializecss-styles-colors\"></style>\n    <style>\n      :host {\n        display: block;\n      }\n      .mdl-data-table {\n        width: 100%;\n        /*position: relative;*/\n        border: 1px solid rgba(0, 0, 0, 0.12);\n        border-collapse: collapse;\n        white-space: nowrap;\n        font-size: 16px;\n        background-color: rgb(255, 255, 255);\n      }\n      .mdl-data-table thead {\n        padding-bottom: 0.16px;\n        position: sticky;\n      }\n      .mdl-data-table caption {\n        background-color: #eee;\n        font-weight: bold;\n        padding: 8px;\n        border: 1px solid rgba(0, 0, 0, 0.12);\n        border-bottom: none;\n      }\n      .mdl-data-table thead th {\n        text-align: center;\n      }\n      .mdl-data-table thead .mdl-data-table__select {\n        margin-top: 0;\n      }\n      .mdl-data-table tbody tr {\n        position: relative;\n        height: 48px;\n        -webkit-transition-duration: 0.28s;\n        transition-duration: 0.28s;\n        -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n        -webkit-transition-property: background-color;\n        transition-property: background-color;\n      }\n      .mdl-data-table tbody tr.is-selected {\n        background-color: #e0e0e0;\n      }\n      .mdl-data-table tbody tr:hover {\n        background-color: #eeeeee;\n      }\n      .mdl-data-table td,\n      .mdl-data-table th {\n        padding: 0 1.125em;\n        text-align: right;\n      }\n      .mdl-data-table td:first-of-type,\n      .mdl-data-table th:first-of-type {\n        padding-left: 24px;\n      }\n      .mdl-data-table td:last-of-type,\n      .mdl-data-table th:last-of-type {\n        padding-right: 24px;\n      }\n      .mdl-data-table td {\n        border-top: 1px solid rgba(0, 0, 0, 0.12);\n        border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n      }\n      .mdl-data-table td .mdl-data-table__select {\n        vertical-align: top;\n        position: absolute;\n        left: 24px;\n      }\n      .mdl-data-table th.mdl-data-table__sort {\n        color: rgba(0, 0, 0, 0.87);\n      }\n      .mdl-data-table th {\n        position: relative;\n        vertical-align: bottom;\n        text-overflow: ellipsis;\n        font-size: 16px;\n        font-weight: bold;\n        line-height: 24px;\n        letter-spacing: 0;\n        color: rgba(0, 0, 0, 0.54);\n        height: 48px;\n        padding-bottom: 8px;\n        box-sizing: border-box;\n      }\n      .mdl-data-table th .mdl-data-table__select {\n        position: relative;\n      }\n      .mdl-data-table__select {\n        width: 16px;\n      }\n      .mdl-data-table td.mdl-data-table__cell--non-numeric {\n        text-align: left;\n      }\n      .mdl-data-table th.mdl-data-table__cell--non-numeric {\n        text-align: left;\n      }\n      #loading {\n        position: absolute;\n        width: 100px;\n        height: 100px;\n        transition: 1.2s all linear;\n        opacity: 0;\n      }\n      #loading[active] {\n        visibility: visible;\n        opacity: 1;\n      }\n      #download paper-button {\n        border-radius: 36px;\n        width: 36px;\n        height: 36px;\n        min-width: unset;\n        padding: 0;\n        margin: 0;\n        display: inline-flex;\n      }\n      iron-icon {\n        display: inline-flex;\n        margin: 0;\n        padding: 0;\n      }\n      #download paper-button:focus,\n      #download paper-button:active {\n        outline: 2px solid grey;\n      }\n    </style>\n    <iron-ajax\n      auto=\"\"\n      url=\"[[dataSource]]\"\n      handle-as=\"text\"\n      last-response=\"{{tableData}}\"\n      on-response=\"handleResponse\"\n    ></iron-ajax>\n    <paper-spinner id=\"loading\" active=\"\"></paper-spinner>\n    <a href=\"[[dataSource]]\" id=\"download\" tabindex=\"-1\">\n      <paper-button class=\"grey-text\"\n        ><iron-icon icon=\"file-download\"></iron-icon\n      ></paper-button> </a\n    ><paper-tooltip for=\"download\" animation-delay=\"200\" offset=\"14\"\n      >Download table data</paper-tooltip\n    >\n    <table class=\"mdl-data-table\" summary=\"[[summary]]\">\n      <template is=\"dom-if\" if=\"[[caption]]\">\n        <caption>\n          [[caption]]\n        </caption>\n      </template>\n      <thead>\n        <tr>\n          <template is=\"dom-repeat\" items=\"[[tableHeadings]]\" as=\"heading\">\n            <th scope=\"col\">[[heading]]</th>\n          </template>\n        </tr>\n      </thead>\n      <tbody>\n        <template is=\"dom-repeat\" items=\"[[table]]\" as=\"row\">\n          <tr>\n            <template is=\"dom-repeat\" items=\"[[row]]\" as=\"col\">\n              <td>[[col]]</td>\n            </template>\n          </tr>\n        </template>\n      </tbody>\n    </table>\n  "]);_templateObject_ecc9522019e611e98168cb314ff0045d=function _templateObject_ecc9522019e611e98168cb314ff0045d(){return data};return data}var CsvRender=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_ecc9522019e611e98168cb314ff0045d()),is:"csv-render",properties:{dataSource:{type:String},caption:{type:String,reflectToAttribute:!0},summary:{type:String,reflectToAttribute:!0},table:{type:Array,value:[]},tableHeadings:{type:Array,value:[]},tableData:{type:String,value:""}},handleResponse:function handleResponse(e){this.table=this.CSVtoArray(this.tableData);this.tableHeadings=this.table.shift();this.$.loading.active=!1},CSVtoArray:function CSVtoArray(text){var p="",row=[""],ret=[row],i=0,r=0,s=!0,l;for(l in text){l=text[l];if("\""===l){if(s&&l===p)row[i]+=l;s=!s}else if(","===l&&s)l=row[++i]="";else if("\n"===l&&s){if("\r"===p)row[i]=row[i].slice(0,-1);row=ret[++r]=[l=""];i=0}else row[i]+=l;p=l}return ret}});_exports.CsvRender=CsvRender});