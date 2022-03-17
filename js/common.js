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

// 년도 출력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  //현재 날짜 정보를 가지고 있는 Date객체