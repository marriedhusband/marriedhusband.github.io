function revenueHistory() {

 function toCurrency(n ) {
  return (n + '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }
 
 function differenceWithPreviousValue(arr, index) {
  if (!arr || !arr.length || arr.length <= index || index < 0) return 0;
  
  return index == 0 ? arr[index].Value : arr[index].Value - arr[index - 1].Value;
 }

 var unitId = window.unitId;
 $.getJSON('https://api.dodopizza.cn/api/v1/unitinfo/' + unitId + '/revenuehistory?callback=?', function (data) {
  var revenueHistory = data.RevenueHistory;
  var lastIndex = revenueHistory.length - 1;

  var currentMonthRevenue = differenceWithPreviousValue(revenueHistory, lastIndex);
  var prevMonthRevenue = differenceWithPreviousValue(revenueHistory, lastIndex - 1);

  $('#currentMonthRevenue').text(toCurrency(currentMonthRevenue));
  $('#prevMonthRevenue').text(toCurrency(prevMonthRevenue));
 });
}

jQuery().ready(function () {
        window.unitId = 3;
        revenueHistory();
        var interval = setInterval(revenueHistory, 10000);
});
