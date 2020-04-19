var url = location.href;

function delete_rate() {
    var rating_display = document.getElementsByClassName('glicko_rating_area__box');
    if (rating_display[0] === undefined) return false;
    rating_display[0].remove();
    console.log('deleted!');
    return true;
}

function delay_delete_rate() {
    const js_timer = setInterval(is_deleted, 500);
    function is_deleted() {
        if (delete_rate() === true) {
            clearInterval(js_timer);
        }
        else {
            console.log('not yet deleted');
        }
    }
}

console.log(url);
if (url.indexOf('result') === -1) {
    console.log('not result');
    delete_rate();
}
else {
    console.log('result');
    delay_delete_rate();
}