/* 把 src/app.html（claude.ai Artifact 用的頁面內容）包成 GitHub Pages 用的完整 index.html
 * 用法：node build.js */
const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(path.join(__dirname, 'src', 'app.html'), 'utf8');
const cut = src.indexOf('<div class="wrap">');
if (cut < 0) throw new Error('src/app.html 找不到 <div class="wrap">');

/* title、字型、樣式移到 <head>，其餘放進 <body> */
const head = src.slice(0, cut).replace(/<meta charset="utf-8">\s*/i, '').replace(/<meta name="claude:[^>]*>\s*/i, '');
const body = src.slice(cut);

const html = `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,viewport-fit=cover">
<meta name="description" content="不能說話的線上專注空間：大家一起在殿裡點香、發呆、做完一件事撥一顆珠。">
<meta property="og:type" content="website">
<meta property="og:title" content="靜默專注殿">
<meta property="og:description" content="不能說話的線上專注空間：大家一起在殿裡點香、發呆、做完一件事撥一顆珠。">
<meta name="theme-color" content="#4C6A47">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}</style>
<script src="config.js"></script>
${head.trim()}
</head>
<body>
${body.trim()}
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log('index.html 已產生（' + Math.round(html.length / 1024) + ' KB）');
