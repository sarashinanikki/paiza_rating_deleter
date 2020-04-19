var url = location.href;

function delete_rate() {
    var rating_display = document.getElementsByClassName('glicko_rating_area__box');
    rating_display[0].remove();
}

function delay_delete_rate() {
    window.addEventListener('load',delete_rate(), false);
}

if (url.indexOf('result') !== -1) {
    if (document.getElementsByClassName('glicko_rating_area__box') !== null) delete_rate();
}
else {
    delay_delete_rate();
}