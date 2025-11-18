// https://stylelint.io/user-guide/configure/
const config = {
  "plugins": [
		"stylelint-order"
	],
  // https://stylelint.io/user-guide/rules
  "rules": {
    "order/order": [
			"custom-properties",
			"declarations",
      "rules",
      "at-rules",
		],
    "order/properties-order": [
      [
        {
          groupName: "Display Properties",
          emptyLineBefore: "threshold",
          noEmptyLineBetween: true,
          properties: [
            "content",
            "appearance",
            "-webkit-appearance",
            "cursor",
            "pointer-events",
            "user-select",
            "box-sizing",
            "position",
            "display",
            "list-style",
            "opacity",
            "box-orient",
            "box-align",
            "box-pack",
            "line-clamp",
            "align-items",
            "justify-content",
            "flex",
            "z-index",
            "vertical-align",
            "overflow",
            "text-overflow",
          ],
        }, {
          groupName: "Dimensions",
          emptyLineBefore: "threshold",
          noEmptyLineBetween: true,
          properties: [
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "top",
            "left",
            "bottom",
            "right",
          ]
        },
        {
          groupName: "Background",
          emptyLineBefore: "threshold",
          noEmptyLineBetween: true,
          properties: [
            "fill",
            "background",
            "background-color",
            "background-image",
            "background-position",
            "background-size",
            "background-clip",
            "background-blend-mode",
            "box-shadow",
          ]
        },
        {
          groupName: "Box Model",
          emptyLineBefore: "threshold",
          noEmptyLineBetween: true,
          properties: [
            "stroke",
            "stroke-width",
            "stroke-dasharray",
            "stroke-dashoffset",
            "outline",
            "margin",
            "margin-top",
            "margin-left",
            "margin-bottom",
            "margin-right",
            "padding",
            "padding-top",
            "padding-left",
            "padding-bottom",
            "padding-right",
            "border",
            "border-radius",
            "inset",
          ],
        },
        {
          groupName: "Typography",
          emptyLineBefore: "threshold",
          noEmptyLineBetween: true,
          properties: [
            "color",
            "font",
            "text-align",
            "font-family",
            "font-size",
            "font-style",
            "font-display",
            "font-weight",
            "font-variant",
            "font-variant-numeric",
            "line-height",
            "text-indent",
            "white-space",
            "word-break",
            "text-transform",
            "text-shadow",
          ],
        },
        {
          groupName: "Paint Layer",
          emptyLineBefore: "threshold",
          noEmptyLineBetween: true,
          properties: [
            "perspective",
            "transform-style",
            "transform",
            "transform-origin",
            "backface-visibility",
            "blend-mode",
            "clip-path",
            "transition",
          ]
        },
      ],
      { 
        unspecified: "bottomAlphabetical",
        emptyLineBeforeUnspecified: "always",
        emptyLineMinimumPropertyThreshold: 4
      }
    ],

    // Duplicate Rules
    "declaration-block-no-duplicate-custom-properties": true,
    "declaration-block-no-duplicate-properties": true,
    "no-duplicate-at-import-rules": true,
    "keyframe-block-no-duplicate-selectors": true,
    "no-duplicate-selectors": true,

    // Invalid Rules
    "color-no-invalid-hex": true,

    // No-Missing Rules
    "custom-property-no-missing-var-function": true,
    "font-family-no-missing-generic-family-keyword": [true, { ignoreFontFamilies: ["fontawesome", "fontawesome-thin", "var(--sans-stack)", "var(--serif-stack)"] }],

    // Irregular Rules
    "no-irregular-whitespace": true,
    "function-linear-gradient-no-nonstandard-direction": true,

    // Override Rules
    "declaration-block-no-shorthand-property-overrides": true,

    // Unmatchable Rules
    "selector-anb-no-unmatchable": true,

    // Empty Rules
    "block-no-empty": true,
    "comment-no-empty": true,
    "no-empty-source": true,

    // Declaration Rules

    // Allowed, Disallowed & Required Rules
    "color-no-hex": true,
    "no-descending-specificity": null,
    "declaration-no-important": null,
    "length-zero-no-unit": true,
    "unit-disallowed-list": "em",
    "value-no-vendor-prefix": null,
    "function-name-case": "lower",
    "selector-type-case": "lower",
    "value-keyword-case": ["lower", { camelCaseSvgKeywords: true }],

    // Min Max Rules
    // TODO: Enable all of these
    "selector-max-id": null, // [0, {severity: "warning"}],
    "selector-max-type": null, // [0, {severity: "warning"}],
    "selector-max-universal": null, // [0, {severity: "warning"}],
    "selector-max-combinators": [2, {severity: "warning"}],
    "selector-max-attribute": [1, {severity: "warning"}],
    "max-nesting-depth": [2, {severity: "warning"}],

    // Notation Rules
    "alpha-value-notation": "percentage",
    "color-function-notation": "modern",
    "color-hex-length": "long",
    "font-weight-notation": "numeric",
    "hue-degree-notation": "angle",
    "import-notation": "string",
    "keyframe-selector-notation": "percentage",
    "media-feature-range-notation": "context",
    "selector-not-notation": "complex",
    "selector-pseudo-element-colon-notation": "double",

    // Quotes Rules
    "font-family-name-quotes": "always-unless-keyword",
    "function-url-quotes": "always",
    "function-url-quotes": "always",

    // Redundancy Rules
    "shorthand-property-no-redundant-values": true,
    "declaration-block-no-redundant-longhand-properties": true,

    // Empty Lines Rules
    "at-rule-empty-line-before": ["always", { 
      except: ["blockless-after-blockless"],
      ignore: ["after-comment", "first-nested"],
    }],
    "comment-empty-line-before": ["always", { 
      except: ["first-nested"],
      ignore: ["after-comment", "stylelint-commands"],
    }],
    "custom-property-empty-line-before": ["always", { 
      except: ["after-comment", "after-custom-property", "first-nested"],
      ignore: ["after-comment"],
    }],
    // "declaration-empty-line-before": "never",
    "rule-empty-line-before": ["always", { 
      except: ["after-single-line-comment", "first-nested", "inside-block"],
      ignore: ["after-comment"],
    }],
  }
}

module.exports = config
