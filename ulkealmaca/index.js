var zarlar = ["Büyük Zafer", "Zafer", "Küçük Zafer", "Barış", "Küçük Yenilgi", "Yenilgi"];
var renkler = ["#0B23D2", "#0B99D2", "#0BD2C6", "#ECF301", "#FF1919", "#BC0202"];
var resimler = ["buyuk_zafer.png", "zafer.webp", "küçük_zafer.png", "baris.png", "kucuk_yenilgi.png", "yenilgi.png"];


$(".zar-div").click(function(){
    $(this).fadeOut(0); 
    $(this).fadeIn(100);
    zarAt()
});

function zarAt () {
    var sayi = getRandomInt(6);
    $(".zar-div span").text(zarlar[sayi]);
    $("img").attr("src", resimler[sayi]);
    $(".zar-div").css("background-color", renkler[sayi]);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}