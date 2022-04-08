(function() {
    var balonSayisi = 24;

    var resetBalon = function(){
        var lstPatlayan = SNR.Element('.patladi');
        if (lstPatlayan.length == balonSayisi) {
            for (let i = 0; i < lstPatlayan.length; i++) {
                lstPatlayan[i].classList.remove("patladi");
            }
        }
    };

    var checkBalon = function(event) {
        var patlamaSesi = new Audio('assets/balon.wav');
        
        if (this.classList.contains('patladi')) {
            return;
        }

        patlamaSesi.play();
        this.classList.add("patladi");

        resetBalon();
    };

    //SNR.Event('.balon', 'click', checkBalon);

    SNR.Event('.balon', 'touchstart', checkBalon);

    SNR.Event('body', 'touchmove', function(event){
        if (event.scale !== 1) {
            event.preventDefault();
        }
    });

})();