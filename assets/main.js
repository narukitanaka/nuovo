//ハンバーガーメニュー
$('.hambager').on('click', function () {
  navOpen();
});
let navFlg = false;
function navOpen() {
  if (!navFlg) {
    $('.hambager-content').addClass('is-ham-open');
    $('.mega-menu').addClass('is-megamenu-open');
    $('.header_inner').addClass('is-megamenu-icon');
    navFlg = true;
  } else {
    $('.hambager-content').removeClass('is-ham-open');
    $('.mega-menu').removeClass('is-megamenu-open');
    $('.header_inner').removeClass('is-megamenu-icon');
    navFlg = false;
  }
}

//スクロールフェードイン
const fadeIn = document.querySelectorAll(".fadeIn");
const options = {
  rootMargin: '0px',
  threshold: 0.6
};
const observer = new IntersectionObserver(showElement, options);
fadeIn.forEach((fadeIn) => {
  observer.observe(fadeIn);
});
function showElement(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}


//アコーディオン
$(".qa-list dd").hide();
$(".qa-list dl").on("click", function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});

