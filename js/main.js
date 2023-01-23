// 카페 소개 섹션 수평 슬라이드 기능
new Swiper(".cafe__contents .swiper", {
  direction: "horizontal", // 수평 슬라이드(기본값)
  loop: true, // 반복 재생 여부
  autoplay: {
    // 자동 재생 여부
    delay: 3000, // 초마다 슬라이드 바뀜
    pauseOnMouseEnter: true,
    spaceBetween: 10,
  },
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  navigation: {
    // 이전/다음 슬라이드 버튼 사용
    nextEl: ".cafe__contents .swiper-button-next > span",
    prevEl: ".cafe__contents .swiper-button-prev > span",
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
const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.6, {
    scrollTo: 0, // 페이지의 0px 지점(최상단)으로 이동
  });
});

// window: 브라우저 창 객체
window.addEventListener("scroll", function () {
  // console.log(window.scrollY);

  if (window.scrollY > 500) {
    // badgeEl.style.display = 'none';

    // gsap.to(요소, 시간, 속성) 메소드: CSS속성을 통해 애니메이션 처리
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: "none",
    });

    // 상단으로 이동 버튼 보이기!
    gsap.to(toTopEl, 0.6, {
      opacity: 1,
      x: 0, // x축 0px 지점으로 이동
    });
  } else {
    // badgeEl.style.display = 'block';

    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: "block",
    });
    // 상단으로 이동 버튼 숨기기!
    gsap.to(toTopEl, 0.6, {
      opacity: 0,
      x: 100, // x축 100px 지점으로 이동
    });
  }
});

// 지도!!!!!!!!!!11

var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);
