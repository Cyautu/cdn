// 加载 CSS
$("<link>").attr({href: "https://cdn.jsdelivr.net/gh/yuu2b/cdn/live2d-widget/waifu.css", rel: "stylesheet", type: "text/css"}).appendTo('body');

// 插入 DIV
$('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');

// 加载 JS
$.ajax({
    url: 'https://cdn.jsdelivr.net/gh/yuu2b/cdn/live2d-widget/waifu-tips.js',
    dataType:"script",
    cache: true,
    async: true
});
$.ajax({
    url: 'https://cdn.jsdelivr.net/gh/yuu2b/cdn/live2d-widget/live2d.js',
    dataType:"script",
    cache: true,
    async: true
});