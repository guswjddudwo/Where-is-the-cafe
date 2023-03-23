
// meue 
const headerEl = document.querySelector('header');
    const mainMenuEl = document.querySelector('nav.gnb > .main-menu');
    const subMenuEls = document.querySelectorAll('nav.gnb .sub-menu');

    mainMenuEl.addEventListener('mouseover', function () {
      headerEl.style.height = '100px';

      subMenuEls.forEach(function (subMenuEl) {
        subMenuEl.style.opacity = '1';
        subMenuEl.style.visibility = 'visible';
      });
    });

    headerEl.addEventListener('mouseleave', function () {
      headerEl.style.height = '100px';

      subMenuEls.forEach(function (subMenuEl) {
        subMenuEl.style.opacity = '0';
        subMenuEl.style.visibility = 'hidden';
      });
    });


// main slied
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
  } 
});

// 지도!!!!!!!!!!11

// 이미지 지도에서 마커가 표시될 위치입니다 
// var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

// // 이미지 지도에 표시할 마커입니다
// // 이미지 지도에 표시할 마커는 Object 형태입니다
// var marker = {
//     position: markerPosition
// };

// var staticMapContainer  = document.getElementById('staticMap'), // 이미지 지도를 표시할 div  
//     staticMapOption = { 
//         center: new kakao.maps.LatLng(33.450701, 126.570667), // 이미지 지도의 중심좌표
//         level: 3, // 이미지 지도의 확대 레벨
//         marker: marker // 이미지 지도에 표시할 마커 
//     };    

// // 이미지 지도를 생성합니다
// var staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);
