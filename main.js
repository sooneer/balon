(function() {
    console.log('main');

    var audio = new Audio('assets/balon.wav');
    var balonSayisi = 25;
    SNR.Event('.balon', 'click', function() {
        console.log(this, 'balon patladı');
        audio.play();
        this.classList.add("patladi");

        var lstBa = SNR.Element('.patladi');
        if (lstBa.length == balonSayisi) {
            for (let i = 0; i < lstBa.length; i++) {
                lstBa[i].classList.remove("patladi");
            }
        }
    });


})();