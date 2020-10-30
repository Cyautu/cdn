/**
 * loader by yuu
 *
 */

$('head').append(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yuu2b/cdn/css/loader-ball.css">`)
$('body').css('overflow','hidden').prepend('<div class="loader loader-ball is-active" shadow></div>');

document.onreadystatechange = function () {
    if (document.readyState === 'complete'){
        $('.loader').remove();
        $('body').css('overflow','auto');
    }
}
