$(function() {
  $(".accordion").click(function() {
    $(this).toggleClass("close").next().slideToggle();
  });

  // ★ カレンダーの日付をクリックしたときに予定欄を表示する
  $(".calendar-day").click(function() {
    document.getElementById('schedule-panel').style.display = 'block';
  });
});
