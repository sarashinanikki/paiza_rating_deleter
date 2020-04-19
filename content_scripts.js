var url = location.href;

function delete_rate() {
    var rating_display = document.getElementsByClassName('glicko_rating_area__box');
    rating_display[0].remove();
}

function delay_delete_rate() {
    const jsInitCheckTimer = setInterval(jsLoaded, 500);
    function jsLoaded() {
        if (document.getElementsByClassName('glicko_rating_area__box') != null) {
            clearInterval(jsInitCheckTimer);
            delete_rate();
        }
    }
}

if (url.indexOf('result') !== -1) {
    if (document.getElementsByClassName('glicko_rating_area__box') !== null) delete_rate();
}
else {
    window.addEventListener('load', delete_rate(), false);
    delay_delete_rate();
}