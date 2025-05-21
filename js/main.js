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
        $('.top-back-btn').addClass('active');
      } else {
        $('.top-back-btn').removeClass('active');
      }
    }
  });
  

  //音楽スクールスライダー
  $(function () {
    $(".test-slick").slick({
        autoplay: true, 
        slidesToShow: 3,
        arrows: true,
        responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1, // 375px以下では1つだけ表示
                  centerMode: true,
                  centerPadding: "0px"
              }
          }
        ]
    });
  });

  // $(function () {
  //   $(".test-slick").slick({
  //       autoplay: true,
  //       dots: true,
  //       centerMode: true,
  //       centerPadding: "15%",
  //       slidesToShow: 3,
  //       responsive: [
  //           {
  //           breakpoint: 768,
  //               settings: {
  //                   slidesToShow: 2,
  //                   centerPadding: "13%",
  //               },
  //           },
  //           {
  //           breakpoint: 640,
  //               settings: {
  //                   arrows: false,
  //                   slidesToShow: 1,
  //                   centerPadding: "10%",
  //               },
  //           },
  //           {
  //           breakpoint: 375,
  //               settings: {
  //                   arrows: false,
  //                   slidesToShow: 1,
  //                   centerMode: false,
  //               },
  //           },
  //       ],
  //   });
  // });
    

  
  //AOS
  AOS.init({
    duration: 1000,
    delay: 100,
    easing: 'ease-out',
    once: true,
  });
  
  //アコーディオン
  document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
  });
  //is-openクラス付与/削除
  document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const crossBar = question.querySelector('.crossBar');

        if (answer.classList.contains('is-open')) {
            answer.classList.remove('is-open');
            answer.style.display = "none"; // 回答を非表示
            question.classList.remove('is-open'); // 矢印を戻す
        } else {
            // すべての回答を閉じる
            document.querySelectorAll('.answer').forEach(ans => {
                ans.classList.remove('is-open');
                ans.style.display = "none";
            });

            // すべての質問の is-open クラスを削除（矢印をリセット）
            document.querySelectorAll('.question').forEach(q => {
                q.classList.remove('is-open');
            });

            // クリックされた質問のみ開く
            answer.classList.add('is-open');
            answer.style.display = "flex"; // 回答を表示
            question.classList.add('is-open'); // 矢印を変更
        }
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
});

