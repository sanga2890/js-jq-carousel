// creazione di uno slider per lo scorrimento di una serie di immagini;
// abbino il click del mouse all'icona per  scorrere a destra
$('.forwards').click(function(){
    // definisco l'immagine corrente;
    var img_current = $('img.active');
    // definisco pallino corrente;
    var circle_current = $('.fas.fa-circle');
    // tolgo la classe con il display block;
    img_current.removeClass('active');
    // tolgo la classe che rende il pallino pieno;
    circle_current.removeClass('fas');
    // cambio la classe con quella del pallino vuoto;
    circle_current.addClass('far');
    // selezione l'immagine successiva con il .next;
    var img_next = img_current.next('img');
    // selezione pallino successivo;
    var circle_next = circle_current.next('.pallini i');
    // creo la condizione per il loop;
    // lenght sta per "c'è un'immagine successiva?". Se la risposta è sì allora il suo valore sarà pari a 1 altrimenti sarà pari a 0 (true or false)
    if(img_next.length){
    // aggiungo la classe con il display block all'immagine successiva;
    img_next.addClass('active');
    // inverto le classi dei pallini per sotituire da vuoto a pieno;
    circle_next.removeClass('far');
    circle_next.addClass('fas')
    // se falso aggiungo la classe active alla prima immagine e quindi torno direttamente all'inizio del carosello;
    } else {
        img_next = $('img:first-of-type').addClass('active');
        // per i pallini la condizione false significa in egual modo ripartire dall'inizio e ripristinare quindi la condizione iniziale, ossia con il primo pallino pieno e tutti i successivi vuoti;
        circle_next = $('.pallini i:first-of-type').removeClass('far');
        circle_next = $('.pallini i:first-of-type').addClass('fas')
    }
})

// replico la stessa funzione per lo scorrimento a sinistra;
$('.backwards').click(function(){
    // definisco l'immagine corrente;
    var img_current = $('img.active');
    // tolgo la classe con il display block;
    // definisco pallino corrente;
    var circle_current = $('.fas.fa-circle');
    img_current.removeClass('active');
    // selezione l'immagine precendente con il .prev;
    // tolgo la classe che rende il pallino pieno;
    circle_current.removeClass('fas');
    // cambio la classe con quella del pallino vuoto;
    circle_current.addClass('far');
    // selezione l'immagine successiva con il .next;
    var img_prev = img_current.prev('img');
    // selezione pallino precedente;
    var circle_prev = circle_current.prev('.pallini i');
    // creo la condizione per il loop;
    // lenght sta per "c'è un'immagine successiva?". Se la risposta è sì allora il suo valore sarà pari a 1 altrimenti sarà pari a 0 (true or false)
    if(img_prev.length){
    // aggiungo la classe con il display block all'immagine precedente;
    img_prev.addClass('active');
    circle_prev.removeClass('far');
    circle_prev.addClass('fas')
    // se falso aggiungo la classe active all'ultima immagine e quindi torno direttamente alla fine del carosello;
    } else {
        img_prev = $('img:last-of-type').addClass('active');
        // per i pallini la condizione false significa in egual modo ritornare alla fine e ripristinare quindi la condizione finale, ossia con l'ultimo pallino pieno e tutti i precendenti vuoti;
        circle_prev = $('.pallini i:last-of-type').removeClass('far');
        circle_prev = $('.pallini i:last-of-type').addClass('fas')
    }
})


$('.pallini i:eq(0)').click(function(){
    $('img').removeClass('active')
    $('.carousel img:eq(0)').addClass('active')
    $('.pallini i').removeClass('fas')
    $('.pallini i').addClass('far')
    $('.pallini i:eq(0)').addClass('fas')

})
$('.pallini i:eq(1)').click(function(){
    $('img').removeClass('active')
    $('.carousel img:eq(1)').addClass('active')
    $('.pallini i').removeClass('fas')
    $('.pallini i').addClass('far')
    $('.pallini i:eq(1)').addClass('fas')

})
$('.pallini i:eq(2)').click(function(){
    $('img').removeClass('active')
    $('.carousel img:eq(2)').addClass('active')
    $('.pallini i').removeClass('fas')
    $('.pallini i').addClass('far')
    $('.pallini i:eq(2)').addClass('fas')

})
$('.pallini i:eq(3)').click(function(){
    $('img').removeClass('active')
    $('.carousel img:eq(3)').addClass('active')
    $('.pallini i').removeClass('fas')
    $('.pallini i').addClass('far')
    $('.pallini i:eq(3)').addClass('fas')

})
$('.pallini i:eq(4)').click(function(){
    $('img').removeClass('active')
    $('.carousel img:eq(4)').addClass('active')
    $('.pallini i').removeClass('fas')
    $('.pallini i').addClass('far')
    $('.pallini i:eq(4)').addClass('fas')

})


// Fare sì che il carousel funzioni con l'autoplay, ossia che automaticamente ogni 3 secondi cambi slide e venga visualizzata l'immagine successiva;
// Dichiaro una variabile e imposto l'intervallo di tempo. Inserisco poi la funzione con le istruzioni per lo slide dell'immagine;

$('.play-pause .fas.fa-play').click(function(){
    var clock = setInterval(auto_slide, 3000);
    function auto_slide() {
        // definisco l'immagine corrente;
        var img_current = $('img.active');
        // definisco pallino corrente;
        var circle_current = $('.fas.fa-circle');
        // tolgo la classe con il display block;
        img_current.removeClass('active');
        // tolgo la classe che rende il pallino pieno;
        circle_current.removeClass('fas');
        // cambio la classe con quella del pallino vuoto;
        circle_current.addClass('far');
        // selezione l'immagine successiva con il .next;
        var img_next = img_current.next('img');
        // selezione pallino successivo;
        var circle_next = circle_current.next('.pallini i');
        // creo la condizione per il loop;
        // lenght sta per "c'è un'immagine successiva?". Se la risposta è sì allora il suo valore sarà pari a 1 altrimenti sarà pari a 0 (true or false)
        if(img_next.length){
        // aggiungo la classe con il display block all'immagine successiva;
        img_next.addClass('active');
        // inverto le classi dei pallini per sotituire da vuoto a pieno;
        circle_next.removeClass('far');
        circle_next.addClass('fas')
        // se falso aggiungo la classe active alla prima immagine e quindi torno direttamente all'inizio del carosello;
        } else {
            img_next = $('img:first-of-type').addClass('active');
            // per i pallini la condizione false significa in egual modo ripartire dall'inizio e ripristinare quindi la condizione iniziale, ossia con il primo pallino pieno e tutti i successivi vuoti;
            circle_next = $('.pallini i:first-of-type').removeClass('far');
            circle_next = $('.pallini i:first-of-type').addClass('fas')
        }

    }
    $('.play-pause .fas.fa-pause').click(function(){
        clearInterval(clock)
    })

})
