// creazione di uno slider per lo scorrimento di una serie di immagini;
// abbino il click del mouse all'icona per  scorrere a destra
$('.forwards').click(function(){
    // definisco l'immagine corrente;
    var img_current = $('img.active');
    // tolgo la classe con il display block;
    img_current.removeClass('active');
    // selezione l'immagine successiva con il .next;
    var img_next = img_current.next('img');
    // creo la condizione per il loop;
    // lenght sta per "c'è un'immagine successiva?". Se la risposta è sì allora il suo valore sarà pari a 1 altrimenti sarà pari a 0 (true or false)
    if(img_next.length){
    // aggiungo la classe con il display block all'immagine successiva;
    img_next.addClass('active');
    // se falso aggiungo la classe active alla prima immagine e quindi torno direttamente all'inizio del carosello;
    } else {
        img_next = $('img:first-of-type').addClass('active');
    }
})

// replico la stessa funzione per lo scorrimento a sinistra;
$('.backwards').click(function(){
    // definisco l'immagine corrente;
    var img_current = $('img.active');
    // tolgo la classe con il display block;
    img_current.removeClass('active');
    // selezione l'immagine precendente con il .prev;
    var img_prev = img_current.prev('img');
    // creo la condizione per il loop;
    // lenght sta per "c'è un'immagine successiva?". Se la risposta è sì allora il suo valore sarà pari a 1 altrimenti sarà pari a 0 (true or false)
    if(img_prev.length){
    // aggiungo la classe con il display block all'immagine precedente;
    img_prev.addClass('active');
    // se falso aggiungo la classe active all'ultima immagine e quindi torno direttamente alla fine del carosello;
    } else {
        img_prev = $('img:last-of-type').addClass('active');
    }
})
