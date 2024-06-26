// main slide
new Swiper(".swiper-container", {
  direction: "horizontal", // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부
  autoplay: {
    delay: 3000, // 초마다 슬라이드 바뀜
    pauseOnMouseEnter: true,
  },
  spaceBetween: 10, // 슬라이드 간의 간격
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
});

// 최상단으로 이동하는 버튼
const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener("click", function () {
  gasp.to(window, 0.6, {
    scrollTo: 0, // 페이지의 0px 지점(최상단)으로 이동
  });
});

// window: 브라우저 창 객체
window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    // gasp.to(요소, 시간, 속성) 메소드: CSS속성을 통해 애니메이션 처리
    gasp.to(0.6, {
      opacity: 0,
      display: "none",
    });

    // 상단으로 이동 버튼 보이기!
    gasp.to(toTopEl, 0.6, {
      opacity: 1,
      x: 0, // x축 0px 지점으로 이동
    });
  }
});
