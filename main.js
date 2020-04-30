// creazione di uno slider per lo scorrimento di una serie di immagini;
// abbino il click del mouse all'icona per  scorrere a destra
$('.forwards').click(function(){
    // definisco l'immagine corrente;
    var img_current = $('img.active');
    // tolgo la classe con il display block;
    img_current.removeClass('active');
    // selezione l'immagine successiova con il .next;
    var img_next = img_current.next('img');
    // aggiungo la classe con il display block all'immagine successiva;
    img_next.addClass('active');
})
