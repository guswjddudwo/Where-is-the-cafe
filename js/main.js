// 카페 소개 섹션 수평 슬라이드 기능
new Swiper(".cafe__contents .swiper", {
  // Optional parameters
  direction: "horizontal", // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부
  autoplay: {
    // 자동 재생 여부

    delay: 5000, // 5초마다 슬라이드 바뀜
  },
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 1, // 슬라이드 사이 여백(간격) px
  //centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  // pagination: {
  //   // 페이지 번호 사용
  //  // el: ".cafe__place .swiper-pagination", // 페이지 번호 요소
  //   clickable: true, // 사용자의 페이지 번호 제어 여부
  // },
});
