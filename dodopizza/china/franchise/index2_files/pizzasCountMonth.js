//счетчик на количество пицц с начала месяца в Яньтае
function getDodoData() {
	jQuery.ajax({
		url: "https://api.dodopizza.cn/api/v1/unitinfo/3/pizzacount",

		jsonp: "callback",
		jsonpCallback: "parseDodo",
		dataType: "jsonp"
	});
}

function parseDodo(json) {
	var data = json;
	jQuery().ready(function () {
		jQuery("#pizzasCount").html(data.CurrentMonthTotal);
	})
}

jQuery().ready(function () {
	getDodoData();
	var interval = setInterval(getDodoData, 10000);
});