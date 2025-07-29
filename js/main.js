"use strict"

$(function() {
  $('.header__hb-btn').click(function(){
    $(this).toggleClass('active')
    $('.header__nav').toggleClass('active')
  })

  $('.header__nav ul li a').click(function(){
    $('.header__hb-btn').removeClass('active')
    $('.header__nav').removeClass('active')
  })

  //スクロールイベント
  // $(window).scroll(function(){
  //   // aboutセクションにきたらheaderにchangeクラスが付く
  //   const aboutPos = $('.scroll-trigger').offset().top
  //   const scrollTop = $(this).scrollTop()
  //   if(scrollTop > aboutPos) {
  //     $('.header').addClass('change')
  //   } else {
  //     $('.header').removeClass('change')
  //   }
  //   //トップに戻るボタン
  //   if(scrollTop > 100) {
  //     $('.top-back-btn').addClass('active')
  //   } else {
  //     $('.top-back-btn').removeClass('active')
  //   }
  //  } else {
  //   const aboutPos = $('.scroll-trigger').offset().top
  //  }
  // })

  
  $(window).scroll(function() {
    const triggerElement = $('.scroll-trigger');
    if (triggerElement.length) { // 要素があるかチェック
      const aboutPos = triggerElement.offset().top;
      const scrollTop = $(this).scrollTop();
      
      if (scrollTop > aboutPos) {
        $('.header').addClass('change');
      } else {
        $('.header').removeClass('change');
      }
  
      // トップに戻るボタン
      if (scrollTop > 100) {
        $('.top-back-btn__icon').addClass('active');
      } else {
        $('.top-back-btn__icon').removeClass('active');
      }
      // お問い合せボタン
      if (scrollTop > 100) {
        $('.contact-button').addClass('active');
      } else {
        $('.contact-button').removeClass('active');
      }
    }
  });
  $('#gotop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
  
  //slickスライダー
$(function () {
  $(".slider").slick({
    arrows: true,
    autoplay: true,
    adaptiveHeight: true,
    dots: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,  // ←スマホサイズ
        settings: {
          slidesToShow: 1, // ←1枚表示に切り替え
        },
      },
    ],
  });
});
 
  
  //AOS
  AOS.init({
    duration: 1000,
    delay: 100,
    easing: 'ease-out',
    once: true,
  });
  
  //アコーディオン
  document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', () => {
      const question = accordion.querySelector('.question');
      const answer = accordion.querySelector('.answer');
  
      const isOpen = answer.classList.contains('is-open');
  
      // すべて閉じる
      document.querySelectorAll('.answer').forEach(ans => {
        ans.classList.remove('is-open');
        ans.style.display = "none";
      });
      document.querySelectorAll('.question').forEach(q => {
        q.classList.remove('is-open');
      });
  
      // 開いていなければ開く
      if (!isOpen) {
        answer.classList.add('is-open');
        answer.style.display = "flex";
        question.classList.add('is-open');
      }
    });
  });
});


//ページャー
function createPagination(currentPage, totalPages) {
  let pagination = document.getElementById(".pagination");
  pagination.innerHTML = "";

  let pages = [];

  if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
      }
  } else {
      pages.push(1, 2, 3);

      if (currentPage > 3 && currentPage < totalPages - 2) {
          pages.push("...");
      }

      pages.push(totalPages);
  }

  pages.forEach(page => {
      let li = document.createElement("li");
      if (page === "...") {
          li.classList.add("dots");
          li.innerHTML = "...";
      } else {
          let a = document.createElement("a");
          a.href = `?page=${page}`;
          a.textContent = page;
          if (page == currentPage) {
              li.classList.add("active");
          }
          li.appendChild(a);
      }
      pagination.appendChild(li);
  });
}


//スムーススクロール
$('a[href^="#"]').click(function(){
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({scrollTop:position}, 1000, "swing");
  return false;
});
