$(document).ready(function () {
  $(".aside-btn").click(function () {
    $(".filter-target").slideToggle(500);
  });

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 16,
  });

  // 오늘 날짜 가져오기
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  $(".input-date").val(formattedDate);

  $(".select-custom").on("change", function () {
      var selectedOption = $(this).find("option:selected").text(); // 선택한 옵션의 텍스트 가져오기
      var target = $(this).parent().parent().find(".prod-selected"); // target 요소 찾기

      // 선택된 옵션을 띄어쓰기를 기준으로 나누기
      var words = selectedOption.split(' ').filter(Boolean); // 공백 제거

      // 새로운 div 생성
      var newDiv = $("<div class='selected-item'></div>");

      // 나눈 단어들을 p 태그로 감싸서 div 안에 추가
      words.forEach(function(word) {
          newDiv.append("<p>" + word + "</p>");
      });

      // 기존의 내용을 삭제하고 새로운 div로 교체
      target.empty().append(newDiv);
  });

    $('.increment').on('click', function () {
      var $input = $(this).prev('input');
      var value = parseInt($input.val());
      var max = parseInt($input.attr('max'));

      if (value < max) {
          $input.val(value + 1);
      }
  });

  $('.decrement').on('click', function () {
      var $input = $(this).next('input');
      var value = parseInt($input.val());
      var min = parseInt($input.attr('min'));

      if (value > min) {
          $input.val(value - 1);
      }
  });

});
