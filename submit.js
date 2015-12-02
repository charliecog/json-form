/**
 * Created by charliecoggans on 01/12/2015.
 */


$(function() {

    $('form').submit(function() {
        $('form').trigger('json')
        return false;
    })

    //watcher
    $('form').on('json', function() {
        alert('your data will be saved to the console');

        var answer = {};

        answer[$('#Field1').attr('name')] = $('#Field1').val()
        answer[$('#Field2').attr('name')] = $('#Field2').val()
        answer[$('#Field3').attr('name')] = $('#Field3').val()
        answer[$('#Field4').attr('name')] = $('#Field4').val()
        answer[$('#Field5').attr('name')] = $('#Field5').val()
        answer[$('#Field6').attr('name')] = $('#Field6').val()
        answer[$('#Field7').attr('name')] = $('#Field7').val()
        answer[$('#Field8').attr('name')] = $('#Field8').val()
        answer[$('#Field9').attr('name')] = $('#Field9').val()
        answer[$('#Field10').attr('name')] = $('#Field10').val()
        answer[$('#Field11').attr('name')] = $('#Field11').val()
        answer[$('#Field13').attr('name')] = $('#Field13').val()
        answer[$('#Field15').attr('name')] = $('#Field15').prop("checked")

        console.log(answer);

            return false;
        })
})