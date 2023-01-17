// 카페 소개 섹션 수평 슬라이드 기능
new Swiper(".cafe__contents .cafe__swiper", {
  direction: "horizontal", // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부
  autoplay: {
    // 자동 재생 여부
    delay: 5000, // 초마다 슬라이드 바뀜
    pauseOnMouseEnter: true,
    spaceBetween: 1,
  },
  slidesPerView: 2, // 한 번에 보여줄 슬라이드 개수
  navigation: { // 이전/다음 슬라이드 버튼 사용
    nextEl: '.promotion .swiper-button-next',
    prevEl: '.promotion .swiper-button-prev',
  },
});

new Swiper(".new .swiper", {
  direction: "horizontal", // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부
  autoplay: {
    // 자동 재생 여부
    delay: 5000, // 초마다 슬라이드 바뀜
    pauseOnMouseEnter: true,
    spaceBetween: 1,
  },
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
});


// 최상단으로 이동하는 버튼
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.6, {
    scrollTo: 0 // 페이지의 0px 지점(최상단)으로 이동
  });
});
