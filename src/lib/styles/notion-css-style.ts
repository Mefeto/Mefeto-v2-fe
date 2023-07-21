export const notion_css = `<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><style>
/* cspell:disable-file */
/* webkit printing magic: print all background colors */
html {
\\t-webkit-print-color-adjust: exact;
}
* {
\\tbox-sizing: border-box;
\\t-webkit-print-color-adjust: exact;
}

html,
body {
\\tmargin: 0;
\\tpadding: 0;
}
@media only screen {
\\tbody {
\\t\\tmargin: 2em auto;
\\t\\tmax-width: 900px;
\\t\\tcolor: rgb(55, 53, 47);
\\t}
}

body {
\\tline-height: 1.5;
\\twhite-space: pre-wrap;
}

a,
a.visited {
\\tcolor: inherit;
\\ttext-decoration: underline;
}

.pdf-relative-link-path {
\\tfont-size: 80%;
\\tcolor: #444;
}

h1,
h2,
h3 {
\\tletter-spacing: -0.01em;
\\tline-height: 1.2;
\\tfont-weight: 600;
\\tmargin-bottom: 0;
}

.page-title {
\\tfont-size: 2.5rem;
\\tfont-weight: 700;
\\tmargin-top: 0;
\\tmargin-bottom: 0.75em;
}

h1 {
\\tfont-size: 1.875rem;
\\tmargin-top: 1.875rem;
}

h2 {
\\tfont-size: 1.5rem;
\\tmargin-top: 1.5rem;
}

h3 {
\\tfont-size: 1.25rem;
\\tmargin-top: 1.25rem;
}

.source {
\\tborder: 1px solid #ddd;
\\tborder-radius: 3px;
\\tpadding: 1.5em;
\\tword-break: break-all;
}

.callout {
\\tborder-radius: 3px;
\\tpadding: 1rem;
}

figure {
\\tmargin: 1.25em 0;
\\tpage-break-inside: avoid;
}

figcaption {
\\topacity: 0.5;
\\tfont-size: 85%;
\\tmargin-top: 0.5em;
}

mark {
\\tbackground-color: transparent;
}

.indented {
\\tpadding-left: 1.5em;
}

hr {
\\tbackground: transparent;
\\tdisplay: block;
\\twidth: 100%;
\\theight: 1px;
\\tvisibility: visible;
\\tborder: none;
\\tborder-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
\\tmax-width: 100%;
}

@media only print {
\\timg {
\\t\\tmax-height: 100vh;
\\t\\tobject-fit: contain;
\\t}
}

@page {
\\tmargin: 1in;
}

.collection-content {
\\tfont-size: 0.875rem;
}

.column-list {
\\tdisplay: flex;
\\tjustify-content: space-between;
}

.column {
\\tpadding: 0 1em;
}

.column:first-child {
\\tpadding-left: 0;
}

.column:last-child {
\\tpadding-right: 0;
}

.table_of_contents-item {
\\tdisplay: block;
\\tfont-size: 0.875rem;
\\tline-height: 1.3;
\\tpadding: 0.125rem;
}

.table_of_contents-indent-1 {
\\tmargin-left: 1.5rem;
}

.table_of_contents-indent-2 {
\\tmargin-left: 3rem;
}

.table_of_contents-indent-3 {
\\tmargin-left: 4.5rem;
}

.table_of_contents-link {
\\ttext-decoration: none;
\\topacity: 0.7;
\\tborder-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
\\tborder: 1px solid rgba(55, 53, 47, 0.09);
\\tborder-collapse: collapse;
}

table {
\\tborder-left: none;
\\tborder-right: none;
}

th,
td {
\\tfont-weight: normal;
\\tpadding: 0.25em 0.5em;
\\tline-height: 1.5;
\\tmin-height: 1.5em;
\\ttext-align: left;
}

th {
\\tcolor: rgba(55, 53, 47, 0.6);
}

ol,
ul {
\\tmargin: 0;
\\tmargin-block-start: 0.6em;
\\tmargin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
\\tmargin-block-start: 0.6em;
}

ul > li {
\\tlist-style: disc;
}

ul.to-do-list {
\\tpadding-inline-start: 0;
}

ul.to-do-list > li {
\\tlist-style: none;
}

.to-do-children-checked {
\\ttext-decoration: line-through;
\\topacity: 0.375;
}

ul.toggle > li {
\\tlist-style: none;
}

ul {
\\tpadding-inline-start: 1.7em;
}

ul > li {
\\tpadding-left: 0.1em;
}

ol {
\\tpadding-inline-start: 1.6em;
}

ol > li {
\\tpadding-left: 0.2em;
}

.mono ol {
\\tpadding-inline-start: 2em;
}

.mono ol > li {
\\ttext-indent: -0.4em;
}

.toggle {
\\tpadding-inline-start: 0em;
\\tlist-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
\\tpadding-left: 1.7em;
}

.toggle > li > details > summary {
\\tmargin-left: -1.1em;
}

.selected-value {
\\tdisplay: inline-block;
\\tpadding: 0 0.5em;
\\tbackground: rgba(206, 205, 202, 0.5);
\\tborder-radius: 3px;
\\tmargin-right: 0.5em;
\\tmargin-top: 0.3em;
\\tmargin-bottom: 0.3em;
\\twhite-space: nowrap;
}

.collection-title {
\\tdisplay: inline-block;
\\tmargin-right: 1em;
}

.page-description {
    margin-bottom: 2em;
}

.simple-table {
\\tmargin-top: 1em;
\\tfont-size: 0.875rem;
\\tempty-cells: show;
}
.simple-table td {
\\theight: 29px;
\\tmin-width: 120px;
}

.simple-table th {
\\theight: 29px;
\\tmin-width: 120px;
}

.simple-table-header-color {
\\tbackground: rgb(247, 246, 243);
\\tcolor: black;
}
.simple-table-header {
\\tfont-weight: 500;
}

time {
\\topacity: 0.5;
}

.icon {
\\tdisplay: inline-block;
\\tmax-width: 1.2em;
\\tmax-height: 1.2em;
\\ttext-decoration: none;
\\tvertical-align: text-bottom;
\\tmargin-right: 0.5em;
}

img.icon {
\\tborder-radius: 3px;
}

.user-icon {
\\twidth: 1.5em;
\\theight: 1.5em;
\\tborder-radius: 100%;
\\tmargin-right: 0.5rem;
}

.user-icon-inner {
\\tfont-size: 0.8em;
}

.text-icon {
\\tborder: 1px solid #000;
\\ttext-align: center;
}

.page-cover-image {
\\tdisplay: block;
\\tobject-fit: cover;
\\twidth: 100%;
\\tmax-height: 30vh;
}

.page-header-icon {
\\tfont-size: 3rem;
\\tmargin-bottom: 1rem;
}

.page-header-icon-with-cover {
\\tmargin-top: -0.72em;
\\tmargin-left: 0.07em;
}

.page-header-icon img {
\\tborder-radius: 3px;
}

.link-to-page {
\\tmargin: 1em 0;
\\tpadding: 0;
\\tborder: none;
\\tfont-weight: 500;
}

p > .user {
\\topacity: 0.5;
}

td > .user,
td > time {
\\twhite-space: nowrap;
}

input[type="checkbox"] {
\\ttransform: scale(1.5);
\\tmargin-right: 0.6em;
\\tvertical-align: middle;
}

p {
\\tmargin-top: 0.5em;
\\tmargin-bottom: 0.5em;
}

.image {
\\tborder: none;
\\tmargin: 1.5em 0;
\\tpadding: 0;
\\tborder-radius: 0;
\\ttext-align: center;
}

.code,
code {
\\tbackground: rgba(135, 131, 120, 0.15);
\\tborder-radius: 3px;
\\tpadding: 0.2em 0.4em;
\\tborder-radius: 3px;
\\tfont-size: 85%;
\\ttab-size: 2;
}

code {
\\tcolor: #eb5757;
}

.code {
\\tpadding: 1.5em 1em;
}

.code-wrap {
\\twhite-space: pre-wrap;
\\tword-break: break-all;
}

.code > code {
\\tbackground: none;
\\tpadding: 0;
\\tfont-size: 100%;
\\tcolor: inherit;
}

blockquote {
\\tfont-size: 1.25em;
\\tmargin: 1em 0;
\\tpadding-left: 1em;
\\tborder-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
\\ttext-decoration: none;
\\tmax-height: 8em;
\\tpadding: 0;
\\tdisplay: flex;
\\twidth: 100%;
\\talign-items: stretch;
}

.bookmark-title {
\\tfont-size: 0.85em;
\\toverflow: hidden;
\\ttext-overflow: ellipsis;
\\theight: 1.75em;
\\twhite-space: nowrap;
}

.bookmark-text {
\\tdisplay: flex;
\\tflex-direction: column;
}

.bookmark-info {
\\tflex: 4 1 180px;
\\tpadding: 12px 14px 14px;
\\tdisplay: flex;
\\tflex-direction: column;
\\tjustify-content: space-between;
}

.bookmark-image {
\\twidth: 33%;
\\tflex: 1 1 180px;
\\tdisplay: block;
\\tposition: relative;
\\tobject-fit: cover;
\\tborder-radius: 1px;
}

.bookmark-description {
\\tcolor: rgba(55, 53, 47, 0.6);
\\tfont-size: 0.75em;
\\toverflow: hidden;
\\tmax-height: 4.5em;
\\tword-break: break-word;
}

.bookmark-href {
\\tfont-size: 0.75em;
\\tmargin-top: 0.25em;
}

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.highlight-default {
\\tcolor: rgba(55, 53, 47, 1);
}
.highlight-gray {
\\tcolor: rgba(120, 119, 116, 1);
\\tfill: rgba(120, 119, 116, 1);
}
.highlight-brown {
\\tcolor: rgba(159, 107, 83, 1);
\\tfill: rgba(159, 107, 83, 1);
}
.highlight-orange {
\\tcolor: rgba(217, 115, 13, 1);
\\tfill: rgba(217, 115, 13, 1);
}
.highlight-yellow {
\\tcolor: rgba(203, 145, 47, 1);
\\tfill: rgba(203, 145, 47, 1);
}
.highlight-teal {
\\tcolor: rgba(68, 131, 97, 1);
\\tfill: rgba(68, 131, 97, 1);
}
.highlight-blue {
\\tcolor: rgba(51, 126, 169, 1);
\\tfill: rgba(51, 126, 169, 1);
}
.highlight-purple {
\\tcolor: rgba(144, 101, 176, 1);
\\tfill: rgba(144, 101, 176, 1);
}
.highlight-pink {
\\tcolor: rgba(193, 76, 138, 1);
\\tfill: rgba(193, 76, 138, 1);
}
.highlight-red {
\\tcolor: rgba(212, 76, 71, 1);
\\tfill: rgba(212, 76, 71, 1);
}
.highlight-gray_background {
\\tbackground: rgba(241, 241, 239, 1);
}
.highlight-brown_background {
\\tbackground: rgba(244, 238, 238, 1);
}
.highlight-orange_background {
\\tbackground: rgba(251, 236, 221, 1);
}
.highlight-yellow_background {
\\tbackground: rgba(251, 243, 219, 1);
}
.highlight-teal_background {
\\tbackground: rgba(237, 243, 236, 1);
}
.highlight-blue_background {
\\tbackground: rgba(231, 243, 248, 1);
}
.highlight-purple_background {
\\tbackground: rgba(244, 240, 247, 0.8);
}
.highlight-pink_background {
\\tbackground: rgba(249, 238, 243, 0.8);
}
.highlight-red_background {
\\tbackground: rgba(253, 235, 236, 1);
}
.block-color-default {
\\tcolor: inherit;
\\tfill: inherit;
}
.block-color-gray {
\\tcolor: rgba(120, 119, 116, 1);
\\tfill: rgba(120, 119, 116, 1);
}
.block-color-brown {
\\tcolor: rgba(159, 107, 83, 1);
\\tfill: rgba(159, 107, 83, 1);
}
.block-color-orange {
\\tcolor: rgba(217, 115, 13, 1);
\\tfill: rgba(217, 115, 13, 1);
}
.block-color-yellow {
\\tcolor: rgba(203, 145, 47, 1);
\\tfill: rgba(203, 145, 47, 1);
}
.block-color-teal {
\\tcolor: rgba(68, 131, 97, 1);
\\tfill: rgba(68, 131, 97, 1);
}
.block-color-blue {
\\tcolor: rgba(51, 126, 169, 1);
\\tfill: rgba(51, 126, 169, 1);
}
.block-color-purple {
\\tcolor: rgba(144, 101, 176, 1);
\\tfill: rgba(144, 101, 176, 1);
}
.block-color-pink {
\\tcolor: rgba(193, 76, 138, 1);
\\tfill: rgba(193, 76, 138, 1);
}
.block-color-red {
\\tcolor: rgba(212, 76, 71, 1);
\\tfill: rgba(212, 76, 71, 1);
}
.block-color-gray_background {
\\tbackground: rgba(241, 241, 239, 1);
}
.block-color-brown_background {
\\tbackground: rgba(244, 238, 238, 1);
}
.block-color-orange_background {
\\tbackground: rgba(251, 236, 221, 1);
}
.block-color-yellow_background {
\\tbackground: rgba(251, 243, 219, 1);
}
.block-color-teal_background {
\\tbackground: rgba(237, 243, 236, 1);
}
.block-color-blue_background {
\\tbackground: rgba(231, 243, 248, 1);
}
.block-color-purple_background {
\\tbackground: rgba(244, 240, 247, 0.8);
}
.block-color-pink_background {
\\tbackground: rgba(249, 238, 243, 0.8);
}
.block-color-red_background {
\\tbackground: rgba(253, 235, 236, 1);
}
.select-value-color-interactiveBlue { background-color: rgba(35, 131, 226, .07); }
.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }
.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }
.select-value-color-green { background-color: rgba(219, 237, 219, 1); }
.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }
.select-value-color-translucentGray { background-color: rgba(255, 255, 255, 0.0375); }
.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }
.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }
.select-value-color-red { background-color: rgba(255, 226, 221, 1); }
.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }
.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }

.checkbox {
\\tdisplay: inline-flex;
\\tvertical-align: text-bottom;
\\twidth: 16;
\\theight: 16;
\\tbackground-size: 16px;
\\tmargin-left: 2px;
\\tmargin-right: 5px;
}

.checkbox-on {
\\tbackground-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
\\tbackground-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
\\t
</style></head>`;
