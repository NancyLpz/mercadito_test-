$(document).ready(function() {

    let validatePickUpValue = (el) => {
        var set_hP = ''

        if(el.is('input:text')) {
            var v = el

            if(v.val() != '') {
                set_hP = (v.val().match(/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/)) ? v.val() : 'No Format Valid';
            } 
        }
        return el.val()
        //return set_hP
    }

    let loopAndValidateFormat = (type) => {
        var hotelesObj = {
            data: []
        }

        if(type == 'create') {
            $('.hidden_to_take').each(function(k, v) {

                var pickUpValue = validatePickUpValue($('.timepicker-value').eq(k))

                if(pickUpValue == 'No Format Valid') {
                    $('.timepicker-value').eq(k).focus()
                    return false;

                } else {
                    hotelesObj.data.push({
                        'nombre_hotel': $(this).attr('data-hidden-hotel-nombre'),
                        'id_hotel': $(this).attr('data-hidden-hotel-id'),
                        'hora_pickup': pickUpValue,
                        'id_tour': $(this).attr('data-hidden-tour-id')
                    })
                }
            })
        
        } else if(type == 'update') {
            $('.hidden_to_take_update').each(function(k, v) {

                var pickUpValue = validatePickUpValue($('.timepicker-value').eq(k))

                if(pickUpValue == 'No Format Valid') {
                    $('.timepicker-value').eq(k).focus()
                    return false;

                } else {
                    hotelesObj.data.push({
                        'id': $(this).attr('data-hidden-id'),
                        'nombre_hotel': $(this).attr('data-hidden-hotel-nombre'),
                        'id_hotel': $(this).attr('data-hidden-hotel-id'),
                        'hora_pickup': pickUpValue,
                        'id_tour': $(this).attr('data-hidden-tour-id')
                    })
                }
            })
        }

        return hotelesObj;

    }


    $('#send-form-tour-data').on('click', function(e){
        e.preventDefault()

        let first_range = $('#picker_temp_alta').val()
        let second_range = $('#picker_temp_baja').val()

        if($('.copiar_pick_up_confirm').is(':checked')) {
            if($('#select-copiar-pick').val() == 0) {
                alert('Para copiar un Tour, por favor selecciona uno.')
                return false;
            } else {
                var dataSend = {
                    'confirm-copy': true,
                    'tour-to-copy': $('#select-copiar-pick').val(),
                    'tour-id': $('input[name="id_tour_current"]').val()
                }
            }
        }

        else if(!$('.copiar_pick_up_confirm').is(':checked')) {
            if($('#select-copiar-pick').val() != 0) {
                alert('Para copiar un Tour, por favor confirma la acción.')
                return false;
            } else {
                var dataSend = {
                    'confirm-copy': true,
                    'tour-to-copy': $('#select-copiar-pick').val(),
                    'tour-id': '{{ $tour->id }}'
                }
            }
        }

        if(!$('.copiar_pick_up_confirm').is(':checked') && $('#select-copiar-pick').val() == 0) {
            var dataSend = loopAndValidateFormat('create')
        }
        
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': token,
                'Content-Type': 'application/json'
            }
        })

        $.ajax({
            url: route,
            method: 'POST',
            data: JSON.stringify(dataSend),
            success: function(d) {
                if(d.status == true) {
                    $('#form_send').submit(); 
                }
            }
        })
    })

    $('#update-form-tour-data').on('click', function(e){
        e.preventDefault()

        let first_range = $('#picker_temp_alta').val()
        let second_range = $('#picker_temp_baja').val()

        if($('.copiar_pick_up_confirm').is(':checked')) {
            if($('#select-copiar-pick').val() == 0) {
                alert('Para copiar un Tour, por favor selecciona uno.')
                return false;
            } else {
                var dataSend = {
                    'confirm-copy': true,
                    'tour-to-copy': $('#select-copiar-pick').val(),
                    'tour-id': $('input[name="id_tour_current"]').val()
                }
            }
        }

        else if(!$('.copiar_pick_up_confirm').is(':checked')) {
            if($('#select-copiar-pick').val() != 0) {
                alert('Para copiar un Tour, por favor confirma la acción.')
                return false;
            } else {
                var dataSend = {
                    'confirm-copy': true,
                    'tour-to-copy': $('#select-copiar-pick').val(),
                    'tour-id': '{{ $tour->id }}'
                }
            }
        }

        if(!$('.copiar_pick_up_confirm').is(':checked') && $('#select-copiar-pick').val() == 0) {
            var dataSend = loopAndValidateFormat('update')
        }

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': token,
                'Content-Type': 'application/json'
            }
        })

        $.ajax({
            url: route,
            method: 'POST',
            data: JSON.stringify(dataSend),
            success: function(d) {
                if(d.status == true) {
                    $('#form_update').submit(); 
                }
            },
            
            error: function(xhr) {
                console.log(xhr)
            }
        })
    })
});