$(document).ready(function () {
    pizzeriaCount();
});

//счетчик на количество пиццерий
function pizzeriaCount() {
    $.getJSON(Url.GlobalDodoApi + '/api/v1/pizzerias/count?callback=?', function (data) {
        $("#unitsCount").html(data.total);
    });
}