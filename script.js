// event pada saat link di klik
$('.page-scroll').on('click', function(e) {


    // ambil isi href
    var tujuan = $(this).attr('href');

    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);


    // pindahkan scroll top TT
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250);


    e.preventDefault();


});