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


//上にスクロールした時のヘッダー
const header = document.getElementById("header"); // ヘッダーを取得
const hH = header.clientHeight; // ヘッダーの高さを取得
let lastScrollTop = 0; // 最後のスクロール位置を保持する変数
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop && currentScroll > hH) {
    // 下にスクロール
    header.classList.add('header--unpinned');
    header.classList.remove('header--cover');
  } else if (currentScroll < lastScrollTop) {
    // 上にスクロール
    header.classList.remove('header--unpinned');
    header.classList.add('header--cover');
  }
  if (currentScroll === 0) {
    // スクロール位置がページの最上部
    header.classList.remove('header--cover');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // ネガティブなスクロール値を防ぐ
});