const searchEl = document.querySelector('.search');
// const searchInputEl =  document.querySelector('.search input'); search라는 요소를 두번 찾게 되기 때문에 해당 코드를 조금 더 효율적으로 바꿀 수 있다.
const searchInputEl =  searchEl.querySelector('input'); //위에 정의했던 search이라는 요소 안에서 input을 찾게 된다.

searchEl.addEventListener('click', function () { //search 요소에 클릭 이벤트를 추가하는 개념
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {   //포커스 된다면
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색') //searchInputEl에 html의 속성을 지정한다.
});
searchInputEl.addEventListener('blur', function () {    //포커스 해제 된다면
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '') //searchInputEl에 html의 속성을 지정한다.
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');  // #to-top인 요소를 찾는다.

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기 !
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기 !
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간ms)


 // toTopEl을 클릭하면 function인 익명인 함수를 실행한다. 해당 익명의 함수는 이벤트 헨들러 라고 불림.
toTopEl.addEventListener('click', function () {  
  gsap.to(window, .7, {
    scrollTo: 0 //0px 지점으로 옮겨준다.
  });
})


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay:(index + 1) * .7,  // 0.7, 1.4, 2.1, 2.7 
    opacity: 1
  });
});


// SWIPER
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true   //반복재생
});  //생성자

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay:3000
  // }
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  direction: 'horizontal', // 기본값으로 명시되어 있음.
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, // 한 화면에 보이는 슬라이드 수
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});





const promotionEl = document.querySelector('.promotion');
const promotionTogglebtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;
promotionTogglebtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');

  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector,  //선택자
    random(1.5, 2.5),  // 애니메이션 동작 시간
    {
    y: size, // size라는 매개변수를 받음
    repeat: -1,   // 라이브러리 지원, 무한 값
    yoyo: true,   // 한번 재생된 애니메이션을 다시 뒤로 재생시킨다.
    ease: Power1.easeInOut,  // 애니메이션의 움직임을 원하는 형태로 움직인다.
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);  // delay 1초 위아래 움직임 15px
floatingObject('.floating2', .5, 15);  
floatingObject('.floating3', 1.5, 20);  


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({   // Scene은 특정한 요소를 감시하는 옵션 지정 메소드
      triggerElement: spyEl,  // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 0~1 의 화면 전체에서 0.8 지점  
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());  
});

// 년도 출력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  //현재 날짜 정보를 가지고 있는 Date객체