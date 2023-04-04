// ==UserScript==
// @name         Pixelbattle Placer 23
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Unity is the way to victory
// @author       gorox and friends
// @match        https://*.pages-ac.vk-apps.com/*
// @match        https://pixel.w84.vkforms.ru/build/*
// @connect      github.com
// @connect      raw.githubusercontent.com
// @updateURL    https://github.com/JesferMonkaS/newnewpixelbot/raw/main/distLoader.user.js
// @downloadURL  https://github.com/JesferMonkaS/newnewpixelbot/raw/main/distLoader.user.js
// @grant        GM_xmlhttpRequest
// @connect      127.0.0.1
// ==/UserScript==

var script=document.createElement("script");script.src="https://code.jquery.com/jquery-3.5.1.min.js",script.onload=(()=>{GM_xmlhttpRequest({url:"https://github.com/pixelGRX/reimagined-waddle/raw/main/bot.min.js",method:"GET",headers:{"Cache-Control":"must-revalidate"},onload:e=>{const t=document.createElement("script");t.type="text/javascript",t.innerHTML=e.responseText,document.body.appendChild(t)},onerror:console.error})}),document.head.appendChild(script);