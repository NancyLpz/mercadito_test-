'use stric'

import { totalForPax, totalForPay, totalForPayReserva, setLimitDate, setLimitDays } from './tours-defaults/tours.js'

$(document).ready(function (e) {
    let zona_tour_id = null;
    let zona_tour_name = null
    let quick_quote_zona_tour_id = null;

    if($('select[name="zonas-tour"]').val()) {
        zona_tour_id = $('select[name="zonas-tour"]').val()
    }

    if($('select[name="quick-quote-zonas-tour"]').val()) {
        quick_quote_zona_tour_id = $('select[name="quick-quote-zonas-tour"]').val()
        zona_tour_name = $('select[name="quick-quote-zonas-tour"] option').filter(function(){return this.value==quick_quote_zona_tour_id}).attr('data-name')
    }
    
    var data = {
        'zona_tour_id': zona_tour_id,
        'guia_tour_op': $('select[name="guia-tour-select"]').val()
    }

    var quick_data = {
        'zona_tour_id': quick_quote_zona_tour_id,
        'guia_tour_op': $('select[name="quick-quote-guia-tour-select"]').val()
    }

    $('select[name="hoteles-tour"]').children('option').remove();
    $('select[name="pickup-hotel"]').children('option').remove();
    $('select[name="pickup-hotel-hour"]').children('option').remove();

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': _token,
            'Content-Type': 'application/json'
        }
    })

    $.ajax({
        method: 'POST',
        url: _route,
        data: JSON.stringify(data),
        success: function(d) {
            if(d.status == true) {
                var select = $('select[name="hoteles-tour"]')
                if($('#es_pickup_hidden').val()) {
                    d.data.map(function(v) {
                        var option = $('<option></option>')
                        option.val(v.id)
                        option.text(v.nombre)
                        select.append(option)
                    })

                    var option = $('<option></option>')
                    option.val(d.data[0].id)
                    option.text(d.data[0].pickup)
                    $('select[name="pickup-hotel"]').append(option)

                    option = $('<option></option>')
                    option.val(d.data[0].id)
                    option.text(d.data[0].hora)
                    $('select[name="pickup-hotel-hour"]').append(option)

                    $('.quick-quote-zona-tour-selected').text(zona_tour_name)
                }
                setLimitDate(_minD, d.dias, null)
            }
        },
        
    })

    $.ajax({
        method: 'POST',
        url: _route,
        data: JSON.stringify(quick_data),
        success: function(d) {
            if(d.status == true) {
                var select = $('select[name="hoteles-tour"]')
                if($('#es_pickup_hidden').val()) {
                    d.data.map(function(v) {
                        var option = $('<option></option>')
                        option.val(v.id)
                        option.text(v.nombre)
                        select.append(option)
                    })
                }
                setLimitDate(_minD, d.dias, 'quick')
            }
        },
        
    })
});

$(document).ready(function() {
    $('select[name="zonas-tour"]').on('change', function() {
        
        var data = {
            'zona_tour_id': $('select[name="zonas-tour"]').val(),
            'guia_tour_op': $('select[name="guia-tour-select"]').val()
        }

        $('select[name="hoteles-tour"]').children('option').remove();
        $('select[name="pickup-hotel"]').children('option').remove();
        $('select[name="pickup-hotel-hour"]').children('option').remove();

        let zona_tour_name = $('select[name="zonas-tour"] option').filter(function(){return this.value==data.zona_tour_id}).attr('data-name')
        $('select[name="quick-quote-zonas-tour"] option').filter(function(){return this.value==data.zona_tour_id}).attr("selected", "selected")
        
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': _token,
                'Content-Type': 'application/json'
            }
        })
        
        $.ajax({
            method: 'POST',
            url: _route,
            data: JSON.stringify(data),
            success: function(d) {
                if(d.status == true) {
                    var select = $('select[name="hoteles-tour"]')
                    d.data.map(function(v) {
                        var option = $('<option></option>')
                        option.val(v.id)
                        option.text(v.nombre)
                        select.append(option)
                    })

                    var option = $('<option></option>')
                    option.val(d.data[0].id)
                    option.text(d.data[0].pickup)
                    $('select[name="pickup-hotel"]').append(option)

                    option = $('<option></option>')
                    option.val(d.data[0].id)
                    option.text(d.data[0].hora)
                    $('select[name="pickup-hotel-hour"]').append(option)

                    $('.quick-quote-zona-tour-selected').text(zona_tour_name)
                }
            }
        })
    })  
})

$(document).ready(function() {
    $('select[name="quick-quote-zonas-tour"]').on('change', function() {
        var data = {
            'zona_tour_id': $('select[name="quick-quote-zonas-tour"]').val(),
            'guia_tour_op': $('select[name="quick-quote-guia-tour-select"]').val()
        }

        $('select[name="hoteles-tour"]').children('option').remove();
        $('select[name="pickup-hotel"]').children('option').remove();
        $('select[name="pickup-hotel-hour"]').children('option').remove();

        let zona_tour_name = $('select[name="quick-quote-zonas-tour"] option').filter(function(){return this.value==data.zona_tour_id}).attr('data-name')
        $('select[name="zonas-tour"] option').filter(function(){return this.value==data.zona_tour_id}).attr("selected", "selected")
        
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': _token,
                'Content-Type': 'application/json'
            }
        })

        $.ajax({
            method: 'POST',
            url: _route,
            data: JSON.stringify(data),
            success: function(d) {
                if(d.status == true) {
                    var select = $('select[name="hoteles-tour"]')
                    d.data.map(function(v) {
                        var option = $('<option></option>')
                        option.val(v.id)
                        option.text(v.nombre)
                        select.append(option)
                    })

                    var option = $('<option></option>')
                    option.val(d.data[0].id)
                    option.text(d.data[0].pickup)
                    $('select[name="pickup-hotel"]').append(option)

                    option = $('<option></option>')
                    option.val(d.data[0].id)
                    option.text(d.data[0].hora)
                    $('select[name="pickup-hotel-hour"]').append(option)

                    $('.quick-quote-zona-tour-selected').text(zona_tour_name)
                }
            }
        })
    })  
})

$(document).ready(function() {
    $('select[name="guia-tour-select"]').on('change', function() {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': _token,
                'Content-Type': 'application/json'
            }
        })

        $('select[name="quick-quote-guia-tour-select"] option:selected', this).removeAttr('selected')
        $('select[name="quick-quote-guia-tour-select"] option').filter(function(){return this.value==$(this).val()}).attr("selected", "selected")
    
        $.ajax({
            method: 'POST',
            url: _routeG,
            data: JSON.stringify({
                'guia_tour_op': $(this).val()
            }),
            
            success: function(d) {
                if(d.status == true) {
                    parent = $('#datepicker').parent()
                    $('#datepicker').remove()

                    setLimitDays(d, _minD)
                }
            }
        })
    })
})

$(document).ready(function() {
    $('select[name="quick-quote-guia-tour-select"]').on('change', function() {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': _token,
                'Content-Type': 'application/json'
            }
        })

        let val = $(this).val()

        $('select[name="guia-tour-select"] option:selected').removeAttr('selected')
        $('select[name="guia-tour-select"] option').filter(function(){
            return this.value==val
        }).attr("selected", "selected")

        $.ajax({
            method: 'POST',
            url: _routeG,
            data: JSON.stringify({
                'guia_tour_op': $(this).val()
            }),
            
            success: function(d) {
                if(d.status == true) {
                    parent = $('#quick-quote-datepicker').parent()
                    $('#quick-quote-datepicker').remove()

                    setLimitDays(d, _minD, 'quick')
                }
            }
        })
    })
})

$(document).ready(function() {
    $('select[name="hoteles-tour"]').on('change', function() {
        var data = {
            'id': $(this).val(),
            'guia_tour_op': $('select[name="guia-tour-select"]').val()
        }

        $('select[name="pickup-hotel"]').children('option').remove();
        $('select[name="pickup-hotel-hour"]').children('option').remove();

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': _token,
                'Content-Type': 'application/json'
            }
        })

        $.ajax({
            method: 'POST',
            url: _routeH,
            data: JSON.stringify(data),
            success: function(d) {
                console.log('d', d)
                if(d.status == true) {
                    var option = $('<option></option>')
                    option.val(d.data[0].id)
                    option.text(d.data[0].pickup)
                    $('select[name="pickup-hotel"]').append(option)

                    option = $('<option></option>')
                    option.val(d.data[0].id)
                    option.text(d.data[0].hora)
                    $('select[name="pickup-hotel-hour"]').append(option)
                }
            }
        })
    })
})

$('#verificar-tour-btn').on('click', function(e) {
    e.preventDefault()
    if($('#datepicker').val() != '') {
        $('input[name="tpyf"]').val('')
        $('#table-summary').css('display', 'none')
        $('#reserva-btn').css('display', 'none')
        let zona_tour_id = null;
        
        if($('select[name="zonas-tour"]').val()) {
            zona_tour_id = $('select[name="zonas-tour"]').val()
        }

        let options = {
            zona_tour_id: zona_tour_id,
            fecha: $('input[name="datepicker"]').val(),
            pax: []
        }

        $('.qty-pax-change').each(function(k, v) {
            options.pax.push({
                'id_pax': $(this).attr('data-pax-id'),
                'cantidad': $(this).val()
            })
        })

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': _token,
                'Content-Type': 'application/json'
            }
        })

        $.ajax({
            method: 'POST',
            url: $(this).attr('data-url'),
            data: JSON.stringify(options),
            success: function(d) {
                if(d.status == true) {
                    $('input[name="tpyf"]').val(d.data.type)
                    $('#table-summary').css('display', 'table')
                    //$('#reserva-btn').css('display', 'block')
                    d.data.precios.map(function(p) {
                        $('.pax-groups').find('#bookin_pax_' + p.id_pax).attr({
                            'data-precio-publico': p.precio_p,
                            'data-precio-reserva': p.precio_r,
                            'data-precio-abordaje': p.precio_a
                        })
                        
                        totalForPax(p.id_pax, p.cantidad, p.precio_p, p.precio_show)
                    })

                    totalForPay()

                    if($('input[name="es_pago_reserva"]').val()) {
                        $('#reserva-btn-pago-reserva').css('display', 'block')
                        totalForPayReserva()
                    }
                } else {
                    alert(d.message)
                }
            },
            error: function(xhr) {
                console.log('Error', xhr)
            }
        })
    } else {
        $('.parent-fecha').append($('<span></span>').attr({
            'class': 'text-danger fecha-no-select'
        }).text('Seleccione una fecha para verificar'))
        
        setTimeout(() => {
            $('#datepicker').focus()
            $('.fecha-no-select').remove()
        }, 2000);
    }
})

$('#verificar-tour-btn-quick').on('click', function(e) {
    e.preventDefault()
    if($('#quick-quote-datepicker').val() != '') {
        $('.price-quick').text('')
        $('#book_tour_form').css('display', 'flex')

        let zona_tour_id = null;
        
        if($('select[name="zonas-tour"]').val()) {
            zona_tour_id = $('select[name="quick-quote-zonas-tour"]').val()
        }

        let options = {
            zona_tour_id: zona_tour_id,
            fecha: $('input[name="quick-datepicker"]').val(),
            pax: []
        }

        $('.qty-pax-change-quick').each(function(k, v) {
            options.pax.push({
                'id_pax': $(this).attr('data-quick-pax-id'),
                'cantidad': $(this).val()
            })
        })

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': _token,
                'Content-Type': 'application/json'
            }
        })

        $('.quick-prices-discounts-10').empty();
        $('.quick-prices-discounts-15').empty();
        $('.quick-prices-discounts-20').empty();

        $.ajax({
            method: 'POST',
            url: $(this).attr('data-url'),
            data: JSON.stringify(options),
            success: function(d) {
                $('input[name="tpyf"]').val(d.data.type)
                $('#table-summary').css('display', 'table')

                if(d.status == true) {
                    let string_options10 = ``
                    let string_options15 = ``
                    let string_options20 = ``

                    let d10 = 0
                    let d15 = 0
                    let d20 = 0
                    d.data.precios.map(function(p) {
                        $('.price_quick_pax_' + p.id_pax).text(' 1 x = USD ' + p.precio_p)
                        d10 = (p.precio_p * 0.10)
                        d10 = (p.precio_p - d10)
                        d15 = (p.precio_p * 0.15)
                        d15 = (p.precio_p - d15)
                        d20 = (p.precio_p * 0.20)
                        d20 = (p.precio_p - d20)
                        string_options10 += `<li>USD ${d10.toFixed(2)}</li>`
                        string_options15 += `<li>USD ${d15.toFixed(2)}</li>`
                        string_options20 += `<li>USD ${d20.toFixed(2)}</li>`

                        totalForPax(p.id_pax, p.cantidad, p.precio_p, p.precio_show)
                    })

                    totalForPay()
                    
                    $('.quick-prices-discounts-10').append(string_options10)
                    $('.quick-prices-discounts-15').append(string_options15)
                    $('.quick-prices-discounts-20').append(string_options20)
                } else {
                    alert(d.message)
                }
            },
            error: function(xhr) {
                console.log('Error', xhr)
            }
        })
    } else {
        alert('Seleccione una fecha para verificar')
    }
})


/*$(document).on('click', 'div.button_inc', function(){
    let parent = $(this).parent()
    let i = parent.find('.qty-pax-change').attr('data-pax-id')
    let p = parent.find('.qty-pax-change').attr('data-precio-publico')
    totalForPax(i, p)
    totalForPay()
})*/
