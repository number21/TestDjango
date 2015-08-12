/**
 * Created by gregory on 8/11/15.
 */

function initDateFields() {
    $('input.dateinput').datetimepicker({
        'format': 'YYYY-MM-DD',
        locale: 'uk'
    });
}
function diffTime() {
    var ends = document.getElementsByClassName('end');
    var elapseds = document.getElementsByClassName('elapsed');
    var statuses = document.getElementsByClassName('status');
    var flag = false;
    for (i = 0; i < ends.length; i++) {
        var start = new Date();
        var end = new Date(ends.item(i).innerHTML);
        var punish = "punished";
        var rewar = "reward";
        var diff = new Date(end.getTime() - start.getTime());
        var years = diff.getUTCFullYear() - 1970;
        // console.log(elapseds);
        if (years < 0) {
            elapseds.item(i).innerHTML = "Дедлайн минув";
            // console.log(elapseds.item(i).className.indexOf(punish));
            if (elapseds.item(i).className.indexOf(punish) < 0) {
                elapseds.item(i).className = elapseds.item(i).className + " " + punish;
            }
            continue;
        }
        if (statuses.item(i).innerHTML == "Готово") {
            elapseds.item(i).innerHTML = "Вчасно виконано";
            if (elapseds.item(i).className.indexOf(rewar) < 0) {
                elapseds.item(i).className = elapseds.item(i).className + " " + rewar;
            }
            continue;
        }
        var years = diff.getUTCFullYear() - 1970;
        var months = diff.getUTCMonth();
        var days = diff.getUTCDate() - 1;
        var hours = diff.getUTCHours();
        var minutes = diff.getUTCMinutes();
        var seconds = diff.getUTCSeconds();
        var strBuilder = years + "р " + months + "м " + days + "д " + hours + "г " + minutes + "х " + seconds + "с ";
        elapseds.item(i).innerHTML = strBuilder;

    }
}
function addClass(SetElements,item) {

}
$(document).ready(function () {
    initDateFields();
    setInterval('diffTime()', 500);
    setTimeout((function(){$('.alert').stop().slideUp(500);}), 3000);
});