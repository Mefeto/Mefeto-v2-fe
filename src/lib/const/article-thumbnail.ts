import { ArticleThumbnailType } from "@/lib/types/article-thumbnail-type";

export const articleThumbnail: ArticleThumbnailType[] = [
  {
    date: "2023-06-01",
    contents: [
      {
        id: 0,
        categories: ["법률 및 규제"],
        imgUrl:
          "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        title: "마약 문제, 법적 처벌을 강화해야 할까?",
        shortDescription:
          "마약 문제가 증가하고 있어서 대한민국에서는 법적 처벌 강화를 요구하는 의견과 예방 교육과 사회적 지원의 중요성을 강조하는 의견이 나뉘고 있습니다. 이 문제를 해결하기 위해서는 법적 처벌뿐만 아니라 예방 교육과 사회적 지원, 국민들의 인식 개선이 필요합니다.",
        mainContent: "",
        html: `<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>메페토 콘텐츠 작성</title><style>
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
</style></head><body><article id="12d10fc7-36e1-4133-b6ec-4a8452aea438" class="page sans"><div class="page-body"><h1 id="0575626b-a7b7-4154-87e8-43c463c928ca" class="">마약 문제, 법적 처벌을 강화해야 할까?</h1><p id="87d626a2-c68b-47fb-abc1-f5daca7180b3" class="">마약 청정국은 옛말, 최근 우리나라 내에서 마약 불법 유통 및 투약 범죄가 증가하고 있어.</p><figure id="aff30e1b-e62e-406f-bb55-d63644f46120" class="image"><a href="https://cyan-floor-d2d.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F15c131a2-bee6-4e95-843d-99e09192c634%2FUntitled.png?id=aff30e1b-e62e-406f-bb55-d63644f46120&table=block&spaceId=aa726672-bfc2-4763-9e42-b1057d54e102&width=860&userId=&cache=v2"><img style="width:432px" src="https://cyan-floor-d2d.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F15c131a2-bee6-4e95-843d-99e09192c634%2FUntitled.png?id=aff30e1b-e62e-406f-bb55-d63644f46120&table=block&spaceId=aa726672-bfc2-4763-9e42-b1057d54e102&width=860&userId=&cache=v2"/></a></figure><ul id="5935fbdf-ee8a-40a9-9fb5-4cb09e4890ef" class="bulleted-list"><li style="list-style-type:disc">5년간 대한민국 내 마약사범 수 변화 추세</li></ul><h2 id="05907a43-f787-4839-869c-13760152711d" class="">국민 여론은 어때?</h2><p id="599d6ada-feff-41f4-99e6-ba2478edb400" class="">무조건 처벌을 강화해야해😠: “중국은 걸리면 무조건 사형임;; 아편전쟁의 무서움을 아는 나라라 그런거지. 우리나라도 처벌을 쌔게 해야 함 진짜”</p><p id="efa54112-50c9-4eb8-babb-2f361ada1360" class="">처벌 강화보다는 예방 교육이 중요하다고 생각해요😅: 처벌만 강화해봤자 이미 마약을 한 사람에게는 소용이 없잖아요.</p><p id="c11ad908-3828-474f-bf6e-faeb41e9a263" class="">마약 문제는 사회적 약자가 더 취약하다는 점을 고려해야 한다고 봅니다😢: 그들에게 필요한 지원을 제공하는 것이 더 중요하다고 생각합니다.</p><h2 id="68eb2320-ee07-4825-bc7b-6836e7283a3d" class="">어떻게 이 문제를 해결할 수 있을까?</h2><p id="8c929747-efcd-4b74-a7b7-8a087c036824" class="">대한민국에서는 마약류 관리에 관한법률에 따라 마약류의 제조, 수입, 수출, 보관, 운반, 제공, 사용 등을 통제하고 있습니다. 이 법률에 따르면, 마약류를 제조, 수입, 수출, 보관, 운반, 제공하거나, 마약류를 투약하는 행위는 5년 이상의 징역 또는 5000만 원 이상의 벌금에 처하게 됩니다. 또한, 마약류를 투약하거나 투약을 권유하는 행위는 법률적 관점에서의 처벌을 설명한 부분입니다. 그러나 이 문제를 해결하기 위해서는 법률적 처벌만으로는 부족합니다. 예방 교육과 사회적 지원, 그리고 마약 문제에 대한 국민들의 인식 개선이 필요합니다. 이를 위해 정부와 사회 전체가 함께 노력해야 합니다.</p><p id="d86cb57b-22a7-4cee-aa9c-4756daec00b9" class="">
</p><p id="0943133e-16ec-4271-bc4e-d2f49214aa39" class="">
</p></div></article></body></html>`,
        signed: 12,
        boundary: 25,
        relatedPropositions: [],
      },
      {
        id: 1,
        categories: ["법률 및 규제"],
        imgUrl:
          "https://mimg.segye.com/content/image/2021/07/30/20210730504510.jpg",
        title: "전동킥보드의 법적 지위와 안전 문제에 대한 해결 방안 제시",
        shortDescription:
          "전동킥보드는 인기를 얻고 있지만, 법적 지위와 안전 문제가 부각되고 있어 정부는 법률 수정과 안전 규제 강화를 통해 이용자들에게 안전한 이동 환경을 제공해야 합니다.",
        mainContent:
          "최근 몇 년 동안 전동킥보드는 도시 이동 수단으로서 급속도로 인기를 얻고 있습니다. 그러나 이러한 발전에도 불구하고, 전동킥보드의 법적 지위와 안전 문제가 심각하게 부각되고 있습니다.\n" +
          "\n" +
          "전동킥보드는 기존 교통 수단에 비해 편리함을 제공하며, 환경 친화적이라는 가치를 중요시하며 이동 수단의 다양성을 증가시키는 동시에, 그 안전성에 대한 우려가 점점 커지고 있습니다.\n" +
          "\n" +
          "대한민국의 도로교통법에 따르면, 전동킥보드는 자전거도로에서 통행할 수 있습니다. 그러나 이는 자전거와 동일한 법적 규제를 받지 않는 상황으로 이어졌습니다. 이로 인해 전동킥보드 이용자들에게 불필요한 위험 요소가 증가하고, 사고 발생 가능성이 높아지고 있습니다.\n" +
          "\n" +
          "또한, 전동킥보드에 대한 명확한 법적 지위가 결여된 상태에서, 실제로 2인 탑승이 금지되어 있음에도 불구하고, 이를 어기는 경우가 빈번하게 발생하고 있습니다. 이러한 행동은 개인의 편의를 추구하는 동시에, 안전에 대한 공동체적 가치와 충돌하게 됩니다.\n" +
          "\n" +
          "따라서 전동킥보드의 법적 지위 명확화와 안전 규제 강화가 필요합니다. 정부는 전동킥보드에 대한 법률을 수정하거나 새로운 규제를 도입하여, 이용자들에게 안전한 이동 환경을 제공하는 것이 중요합니다. 이를 위해서는 전동킥보드에 대한 상세한 법적 규정을 마련하는 것 외에도, 이용자들의 안전을 위해 교육을 강화하는 방안도 고려되어야 합니다.",

        signed: 23,
        boundary: 35,
        relatedPropositions: [
          {
            id: "PRC_M2K3S0T3S2R7P1X6W4X2T4R3A1Y8Z6",
            name: "기후위기 대응을 위한 탄소중립ㆍ녹색성장 기본법 일부개정법률안",
            tag: "환경",
          },
        ],
      },
      {
        id: 2,
        categories: ["경제"],
        imgUrl:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        title: "임대차 3법과 전세 사기: 원인과 해결책 탐색",
        shortDescription:
          "임대차 3법이 전세 사기 증가와 관련하여 논의되고 있는 대한민국 주택 시장의 문제로 제기되고 있으며, 이 문제에 대한 해결책과 관련하여 논의가 진행되고 있습니다.",
        mainContent:
          "대한민국 주택 시장에서 발생한 여러 문제 중 하나로, 임대차 3법이 전세 사기의 원인이라는 주장이 제기되고 있습니다. 이 문제는 국내 주택 시장의 복잡성을 반영하는 동시에, 시장의 다양한 참가자들에게 각기 다른 도전과 기회를 제공하며, 그 해결 방안에 대해 깊이 있는 논의가 요구됩니다.\n" +
          "\n" +
          "임대차 3법은 임대인의 권리를 보호하려는 노력이지만, 일부 주장에 따르면 이로 인해 전세 사기가 증가하였다고 합니다. 더불어, '빌라왕'이라 불리는 일부 사업자들은 이명박 시기에 도입된 '임대사업자 제도'와 박근혜 시기의 파격적인 세제 혜택에 힘입어 부상하였다는 주장이 있습니다.\n" +
          "\n" +
          "그 결과, 일부 전세자들은 월세로 전환하면서 고액 월세 부담을 겪고 있으며, 이는 전월세 시장에서 시장원리가 제대로 작동하지 않는다는 비판으로 이어집니다. 또한, 일부 주장에 따르면, 신씨라는 사람이 이러한 '빌라왕'들의 배후에 있었으며, 그는 박근혜 시기에 빌라를 사들였다는 주장이 있습니다.\n" +
          "\n" +
          "이러한 문제에 대한 해결책으로, 일부는 임대차 3법이 임대인의 권리만을 보호하는 법의 허점을 보완하기 위한 제도로서, 현 상황을 개선할 수 있다는 주장을 제기하고 있습니다.",
        signed: 23,
        boundary: 35,
        relatedPropositions: [
          {
            id: "PRC_F2E3J0K4J1R2Q1P1N5V5U3V1U6S2A0",
            name: "주택법 일부개정법률안",
            tag: "안전",
          },
        ],
      },
      {
        id: 3,
        categories: ["정치"],
        imgUrl:
          "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        title: "천안함 발언 논란: 진실을 찾아서",
        shortDescription:
          "이래경의 천안함 자폭 발언에 대한 논란이 일어나고 있습니다. 이 발언은 천안함 사건에 대한 오해와 불신을 조장하며, 사건의 진상 규명을 방해할 수 있다는 지적이 있습니다.",
        mainContent:
          "최근 이래경의 천안함 자폭 발언에 대한 논란이 일어났습니다. 이 발언은 천안함 사건에 대한 오해와 불신을 조장하며, 사건의 진상 규명을 방해할 수 있다는 지적이 있습니다. 이에 대해 사과와 철저한 진상 조사가 필요하다는 의견이 제기되고 있습니다. 이 이슈는 진실, 안전, 공정이라는 가치와 관련이 있으며, 이들 가치가 현재 충돌하고 있는 상황입니다. 이 문제에 대한 해결책을 찾기 위해, 천안함 사건과 이래경의 발언에 대한 더 깊은 이해와 분석이 필요합니다.",
        signed: 23,
        boundary: 35,
        relatedPropositions: [
          {
            id: "PRC_Z2Y3G0F4E1D7K1J1K2J7H3Q4P8N0O0",
            name: "직업안정법 일부개정법률안",
            tag: "법",
          },
          {
            id: "PRC_X2Y3P0W4R2B1J1A7C3P9S4G4P3H7Z7",
            name: "경영지도사 및 기술지도사에 관한 법률 일부개정법률안",
            tag: "법",
          },
        ],
      },
    ],
  },
  {
    date: "2023-05-31",
    contents: [
      {
        id: 4,
        categories: ["정치"],
        imgUrl:
          "https://images.unsplash.com/photo-1604372425350-fdf0bcebb0f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        title: "한국노총의 경사노위 참여 중단: 노동자의 목소리를 위한 도전",
        shortDescription:
          "한국노총이 경사노위 참여를 중단하였습니다. 이 결정은 노동자의 권리와 이해를 위협할 수 있으며, 노동자 대표의 경사노위 참여를 보장하는 방안이 필요하다는 의견이 제기되고 있습니다.",
        mainContent:
          "한국노총이 경사노위 참여를 중단하였습니다. 이 결정은 노동자의 권리와 이해를 위협할 수 있습니다. 한국노총은 대한민국의 대표적인 노동조합으로, 그들의 결정은 노동자의 권리와 이해에 큰 영향을 미칩니다. 그들이 경사노위 참여를 중단하면, 노동자의 목소리가 제대로 반영되지 않을 수 있습니다. 이에 대해 노동자의 권리와 이해를 보호하고, 노동자 대표의 경사노위 참여를 보장하는 방안이 필요하다는 의견이 제기되고 있습니다. 이 이슈는 평등, 공정, 도덕이라는 가치와 관련이 있으며, 이들 가치가 현재 충돌하고 있는 상황입니다. 이 문제에 대한 해결책을 찾기 위해, 한국노총과 경사노위에 대한 더 깊은 이해와 분석이 필요합니다.",
        signed: 23,
        boundary: 35,
        relatedPropositions: [
          {
            id: "PRC_J2Q3P0N4W1U7T1S1A2B6A0Y4X4T4R5",
            name: "국회미래연구원법 일부개정법률안",
            tag: "법",
          },
        ],
      },
      {
        id: 5,
        categories: ["정치"],
        imgUrl:
          "https://images.unsplash.com/photo-1495725274072-fd5d0b961a9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1143&q=80",
        title: "한국노총의 경사노위 대화 불참: 노동자의 목소리를 위한 도전",
        shortDescription:
          "한국노총이 대통령 직속 사회적대화기구인 경제사회노동위원회 참여를 중단하였습니다. 이 결정은 한국노총 금속노련 김준영 사무처장에 대한 경찰의 강경진압에서 비롯되었습니다.",
        mainContent:
          "한국노총이 대통령 직속 사회적대화기구인 경제사회노동위원회 참여를 중단하였습니다. 이 결정은 한국노총 금속노련 김준영 사무처장에 대한 경찰의 강경진압에서 비롯되었습니다. 포스코 광양제철소 하청업체 탄압 중단을 요구하며 망루 농성을 벌이던 김 사무처장은 체포 당시 경찰봉으로 머리를 맞았고, 지난 2일 구속되었습니다. 한국노총은 윤석열 정부 심판을 위해 결단이 필요하다는 데에 노조 전 조직이 목소리를 모았다고 밝혔습니다. 이 이슈는 노동자의 권리와 안전을 중요하게 생각하는 가치와 관련이 있으며, 이들 가치가 현재 경제적 안정 및 사회적 대화의 중요성과 충돌하고 있는 상황입니다. 이 문제에 대한 해결책을 찾기 위해, 한국노총과 경사노위에 대한 더 깊은 이해와 분석이 필요합니다.",
        signed: 23,
        boundary: 35,
        relatedPropositions: [
          {
            id: "PRC_X2W3V0D4B1C7B1A0V1U3T4U6S4B2Z8",
            tag: "경제",
            name: "옥외광고물 등의 관리와 옥외광고산업 진흥에 관한 법률 일부개정법률안",
          },
          {
            id: "PRC_G2E3A0Z3Y3W0X1G6E2C4B0K4F9F0E2",
            tag: "일상",
            name: "식품 등의 표시ㆍ광고에 관한 법률 일부개정법률안",
          },
        ],
      },
    ],
  },
];
