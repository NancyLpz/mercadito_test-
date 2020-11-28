$(document).ready(function() {
    let checkForTranportZone = () => {
        $('input[name="es_pickup"]').on('change', function() {
            if($(this).is(':checked')) {
               $('#tour_row_transport_zones').css('display', 'block')
               $('#tour_row_transport').find('.help-block').text('Deselecciona para desactivar Transportación')
            } else {
                $('#tour_row_transport_zones').css('display', 'none')
                $('#tour_row_transport').find('.help-block').text('Selecciona para activar Transportación')
            }
        })
    }

    let validateForm = form => {
        var contCheckLng = 0
        var contCheckZones = 0
        var contCheckPax = 0;

        if($(form + ' #tour_row_title input[name="titulo_tour_system"]').val() == '') {
            $(form + ' #tour_row_title').addClass('has-error')
            return false
        }

        $(form + ' #tour_row_lng input[type="checkbox"]').each(function() {
            if($(this).is(':checked')) {
                contCheckLng += 1
            }
        })

        if($('input[name="es_pickup"]').is(':checked')) {
            $(form + ' #tour_row_transport_zones input[type="checkbox"]').each(function() {
                if($(this).is(':checked')) {
                    contCheckZones += 1
                }
            })

            if(!contCheckZones > 0) {
                $(form + ' #tour_row_transport_zones').addClass('has-error')
                return false
            }
        } else {
            contCheckZones = 1
        }

        $(form + ' #tour_row_pax input[type="checkbox"]').each(function() {
            if($(this).is(':checked')) {
                contCheckPax += 1
            }
        })

        if(!contCheckLng > 0) {
            $(form + ' #tour_row_lng').addClass('has-error')
            return false
        }

        if(!contCheckPax > 0) {
            $(form + ' #tour_row_pax').addClass('has-error')
            return false
        }

        if(contCheckLng > 0 && contCheckZones > 0 && contCheckPax > 0) {
            return true
        }

        return false
    }

    checkForTranportZone()

    $('#tour_btn_create').on('click', function(e) {
        e.preventDefault()

        $($(this).attr('data-form-submit')).find('.form-group').removeClass('has-error')

        if(validateForm($(this).attr('data-form-submit'))) {
            console.log('Ok')
            $($(this).attr('data-form-submit')).submit()
        }
    })
})