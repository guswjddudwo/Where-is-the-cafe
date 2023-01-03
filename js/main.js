// 카페 소개 섹션 수평 슬라이드 기능
new Swiper('.cafe__contents .swiper', {
  // Optional parameters
  direction: 'horizontal', // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부
  autoplay: { // 자동 재생 여부
    delay: 5000, // 5초마다 슬라이드 바뀜
    pauseOnMouseEnter: true,
  },
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수  
});

// 슬라이드 간격 추가하기