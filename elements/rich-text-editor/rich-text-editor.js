/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { HAXWiring } from "@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";
import "@polymer/iron-a11y-keys/iron-a11y-keys.js";
import "./lib/rich-text-editor-styles.js";
import "./lib/toolbars/rich-text-editor-toolbar.js";
import "./lib/toolbars/rich-text-editor-toolbar-mini.js";
import "./lib/toolbars/rich-text-editor-toolbar-full.js";
/**
 * `rich-text-editor`
 * `a standalone rich text editor`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html demo
 * @demo demo/mini.html mini floating toolbar
 * @demo demo/full.html toolbar with breadcrumb
 * @demo demo/config.html custom configuration
 */
class RichTextEditor extends PolymerElement {
  // render function
  static get template() {
    return html`
      <style>
        :host([hidden]) {
          display: none;
        }
        :host {
          display: block;
          min-height: 20px;
          cursor: pointer;
          @apply --rich-text-editor-content;
        }
        :host([contenteditable="true"]) {
          border: var(--rich-text-editor-border);
          overflow: auto;
          @apply --rich-text-editor-content-edit;
        }
        :host(.heightmax[contenteditable="true"]) {
          max-height: calc(100vh - 200px);
          overflow-y: scroll;
          @apply --rich-text-editor-heightmax;
        }
        :host(:empty) {
          border: 1px dashed var(--rich-text-editor-border-color);
          @apply --rich-text-editor-empty;
        }
        :host(:not([contenteditable="true"]):empty):before {
          content: attr(placeholder);
          padding: 0 5px;
          display: block;
          color: var(--rich-text-editor-button-disabled-color);
          @apply --rich-text-editor-empty-placeholder;
        }
        :host([contenteditable="true"]:empty):before {
          @apply --rich-text-editor-empty-editable;
        }
      </style>
      <style include="rich-text-editor-styles"></style>
      <slot></slot>
    `;
  }

  // haxProperty definition
  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Rich text-editor",
        description: "a standalone rich text editor",
        icon: "icons:android",
        color: "green",
        groups: ["Text"],
        handles: [
          {
            type: "todo:read-the-docs-for-usage"
          }
        ],
        meta: {
          author: "nikkimk",
          owner: "Penn State University"
        }
      },
      settings: {
        quick: [],
        configure: [
          {
            property: "title",
            description: "",
            inputMethod: "textfield",
            required: false,
            icon: "icons:android"
          }
        ],
        advanced: []
      }
    };
  }
  // properties available to the custom element for data binding
  static get properties() {
    let props = {
      /**
       * The editor's unique id
       */
      id: {
        name: "id",
        type: String,
        value: ""
      },

      /**
       * Placeholder text for empty editable regions
       */
      placeholder: {
        name: "placeholder",
        type: String,
        reflectToAttribute: true,
        value: "Click to edit"
      },

      /**
       * The id for the toolbar
       */
      toolbar: {
        name: "toolbar",
        type: String,
        value: ""
      },

      /**
       * The type of editor toolbar, i.e.
       * `full` for full toolbar with breadcrumb,
       * `mini` for mini floating toolbar, or
       * the default toolbar if neither.
       */
      type: {
        name: "type",
        type: String,
        value: "rich-text-editor-toolbar"
      }
    };
    if (super.properties) {
      props = Object.assign(props, super.properties);
    }
    return props;
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "rich-text-editor";
  }
  /**
   * life cycle, element is afixed to the DOM
   * @returns {void}
   */
  connectedCallback() {
    super.connectedCallback();
    if (!this.id) this.id = this._generateUUID();
    window.RichTextEditorStyleManager.requestAvailability();
  }
  /**
   * ready
   * @returns {void}
   */
  ready() {
    super.ready();
    this.getEditor();
  }
  /**
   * connects the mini-toolbar to a mini editor
   * @returns {void}
   */
  getEditor() {
    let root = this,
      id = this.toolbar ? "#" + this.toolbar : "",
      both = document.querySelector(this.type + id),
      idOnly = id ? document.querySelector(id) : null,
      typeOnly = document.querySelector(this.type),
      //try to match both id and type, if no match try id only, and then type only
      toolbar = both || idOnly || typeOnly;
    //if still no match, create a region of type
    if (!this.toolbar) this.toolbar = this._generateUUID();
    if (!toolbar || !toolbar.addEditableRegion) {
      toolbar = document.createElement(this.type);
      toolbar.id = this.toolbar;
      root.parentNode.appendChild(toolbar);
    }
    toolbar.addEditableRegion(root);
  }

  /**
   * Normalizes selected range data.
   *
   * @returns {object} the selected range
   */
  _getRange() {
    let sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    } else if (sel) {
      return sel;
    } else false;
  }

  /**
   * Generate a UUID
   * @returns {string} a unique id
   */
  _generateUUID() {
    let hex = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    return "rte-" + "ss-s-s-s-sss".replace(/s/g, hex);
  }

  /**
   * life cycle, element is removed from the DOM
   */
  //disconnectedCallback() {}
}

export { RichTextEditor };

window.customElements.define(RichTextEditor.tag, RichTextEditor);
