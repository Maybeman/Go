function checkform(a,b,c) {
    var T;
    if (c == 0) {
        if (a.fname.value == '') {
            alert("You sent an empty blank.");
            if (b.value == 'Submit') b.value = 'Resubmit';
            T=false;
        }

        else {
            alert("You sent your informastion sucsesfully.");
            if (b.value == 'Resubmit') b.value = 'Submit';
            T = true;
        }
    }
    else {
        (T != false) ? alert('OK!') : alert('Error! Try again.')
    }
}