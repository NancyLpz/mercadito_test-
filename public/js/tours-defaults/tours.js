let setTotalParsed = (t) => {
    t = parseFloat(t).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return String(t);
}

let checkDays = (d) => {
    let idx_D = []

    d.domingo == 1 ? idx_D.push(null) : idx_D.push(0)
    d.lunes == 1 ? idx_D.push(null) : idx_D.push(1)
    d.martes == 1 ? idx_D.push(null) : idx_D.push(2)
    d.miercoles == 1 ? idx_D.push(null) : idx_D.push(3)
    d.jueves == 1 ? idx_D.push(null) : idx_D.push(4)
    d.viernes == 1 ? idx_D.push(null) : idx_D.push(5)
    d.sabado == 1 ? idx_D.push(null) : idx_D.push(6)

    return idx_D
}

let createInputPicker = (cc, type = null) => {
    let conClass = ''
    let input = ''

    if(type == 'quick') {
        conClass = 'quick-quote-date-pick-' + cc + ' w-100'
        input = $('<input>').attr({
            'id': 'quick-quote-datepicker',
            'class': conClass,
            'type': 'text',
            'name': 'quick-datepicker'
        })
    
        $('.quick-quote-parent-fecha').append(input)
    } else {
        conClass = 'date-pick-' + cc
        input = $('<input>').attr({
            'id': 'datepicker',
            'class': conClass,
            'type': 'text',
            'name': 'datepicker'
        })
    
        $('.parent-fecha').append(input)
    }
}

export function totalForPax(i, q, p, ps) {
    /*let qty = $('input[name="quantity_booking_pax_' + i +'"]').val()
    qty = Number(qty)
    p = p.replace(',' , '')

    let res = setTotalParsed(qty * parseFloat(p))*/

    $('.qty_pax_table').find('.qty_pax_' + i + ' .price_qty_' + i).text(q)
    $('.qty_pax_table').find('.qty_pax_' + i + ' .price_pax_real_' + i).text('USD ' + ps + ' =')
    $('.qty_pax_table').find('.qty_pax_' + i + ' .price_pax_' + i).text('USD ' + p)
    $('.qty_pax_table').find('.qty_pax_' + i + ' .price_pax_' + i).attr('data-pax-price', p)
}

export function totalForPay() {
    let total = 0;
    let discount = 0
    let res;
    $('.price_to_sum').each(function(k, v) {
        let p = $(this).attr('data-pax-price')
        p = p.replace(',' , '')
        total += parseFloat(p)

        res = setTotalParsed(total)
    })
    
    discount = (res * 0.10)
    
    $('.price_total b').text(' = USD ' + res)
    $('.total_discount_booking').text(' = USD ' + discount.toFixed(2))
    $('.price_total').attr('data-price-total', res)
    $('.grand_price_total b').text(' = USD ' + (res - discount).toFixed(2))
}

export function totalForPayReserva() {
    let total = 0;
    let res;
    $('.qty-pax-change').each(function(k, v) {
        let p = $(this).attr('data-precio-reserva')
        p = p.replace(',' , '')
        total += parseFloat(p)

        res = setTotalParsed(total)
    })

    $('#reserva-btn-pago-reserva').text('Reservar con $' + res)
}

export function setLimitDate(min, d, type = null) {
    //let start = new Date();
    //let end = e
    //let endParser = new Date(end)
    //let daysBetween = Math.round((endParser - start)/(1000 * 60 * 60 * 24));
    let idx_D = checkDays(d)

    if(type == 'quick') {
        $('input.quick-date-pick').datepicker({
            'startDate': min,
            //'endDate': '+' + daysBetween + 'd',
            beforeShowDay: function(d) {
                if(idx_D.indexOf(d.getDay()) != -1) {
                    return false
                }
            }
        });
    } else {
        $('input.date-pick').datepicker({
            'startDate': min,
            //'endDate': '+' + daysBetween + 'd',
            beforeShowDay: function(d) {
                if(idx_D.indexOf(d.getDay()) != -1) {
                    return false
                }
            }
        });
    }
}

export function setLimitDays(d, min, type = null) {
    createInputPicker(d.dias.id_subtitulo, type)

    let idx_D = checkDays(d.dias)

    //let start = new Date();
    //let end = d.fechas.to
    //let endParser = new Date(end)
    //let daysBetween = Math.round((endParser - start)/(1000 * 60 * 60 * 24));
    if(type == 'quick') {
        $('body').on('focus', '.quick-quote-date-pick-'+d.dias.id_subtitulo, function() {
            $(this).datepicker({
                'startDate': min,
                //'endDate': '+' + daysBetween + 'd',
                beforeShowDay: function(d) {
                    if(idx_D.indexOf(d.getDay()) != -1) {
                        return false
                    }
                }
            });
        })
    } else {
        $('body').on('focus', '.date-pick-'+d.dias.id_subtitulo, function() {
            $(this).datepicker({
                'startDate': min,
                //'endDate': '+' + daysBetween + 'd',
                beforeShowDay: function(d) {
                    if(idx_D.indexOf(d.getDay()) != -1) {
                        return false
                    }
                }
            });
        })
    }
    
}