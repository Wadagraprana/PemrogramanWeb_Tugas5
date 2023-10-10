function hanyaAngka(evt) {
    var charcode = (evt.which) ? evt.which : event.keycode
    if (charcode > 31 && (charcode < 48 || charcode >57))
        return false;
    return true;
}