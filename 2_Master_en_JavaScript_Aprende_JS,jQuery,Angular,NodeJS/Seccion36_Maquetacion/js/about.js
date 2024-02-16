'use strict'

$("form input[name='date']").datepicker({
    dateFormat: 'dd/mm/yy'
});

$(document).ready(function(){
    $( "#acordeon" ).accordion();
});