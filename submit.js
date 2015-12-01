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
        alert('you clicked submit');

        var answer = [];
        answer.push(
            (JSON.stringify($('#Field1').val())),
            (JSON.stringify($('#Field2').val())),
            (JSON.stringify($('#Field3').val())),
            (JSON.stringify($('#Field4').val())),
            (JSON.stringify($('#Field5').val())),
            (JSON.stringify($('#Field6').val())),
            (JSON.stringify($('#Field7').val())),
            (JSON.stringify($('#Field8').val())),
            (JSON.stringify($('#Field9').val())),
            (JSON.stringify($('#Field10').val())),
            (JSON.stringify($('#Field11').val())),
            (JSON.stringify($('#Field13').val())),
            (JSON.stringify($('#Field15').val())));
        console.log(answer);

            return false;
        })



})