$(function () {

    // 헤더 내비

    $("nav.gnb ul li").mouseenter(function () {
        $(".submenu, .bg").stop(500).slideDown(600);
    });
    $("nav.gnb>ul>li").mouseleave(function () {
        $(".submenu, .bg").stop().slideUp(100);
    });

        // 탑버튼
        // .btn_top을 500px 도달시 나타남
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $("button.topbtn").fadeIn();
                // 안보이던 화살표 버튼이 500px 이상으로 스크롤이 내려오면 나타남
            } else {
                $("button.topbtn").fadeOut(); // 500px 이하일 경우 사라짐
            }
        });
        // .logo와 .btn_top을 최상단으로 가게 하기
        $("button.topbtn").on("click",function(){
            $("html, body").animate({
                scrollTop:0
            },400); //0.4초
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $("header").fadeOut();
                // 안보이던 화살표 버튼이 500px 이상으로 스크롤이 내려오면 나타남
            } else {
                $("header").fadeIn(); // 500px 이하일 경우 사라짐
            }
        });


// 현재 슬라이드의 인덱스를 저장하는 변수를 초기화
let slideIndex = 0; // 첫 번째 박스부터 시작

// 모든 슬라이드 요소(.box)의 개수를 가져와서 저장
const totalSlides = document.querySelectorAll(".box").length;

// 진행 바 요소를 선택합니다.
const progressBar = document.querySelector(".progress-bar");

// 슬라이드를 보여주는 함수를 정의
function showSlide(index) {
    // 슬라이드 컨테이너 요소를 선택
    const slideContainer = document.querySelector(".slide-container");

    // 슬라이드를 보여주는 효과를 위해 translateX 속성을 사용하여 슬라이드를 이동
    // index * 400 픽셀만큼 왼쪽으로 이동하게 됩니다.
    slideContainer.style.transform = `translateX(-${index * 400}px)`;

    // 진행 바 업데이트: 현재 슬라이드의 인덱스를 기반으로 진행 바의 너비를 계산
    // 슬라이드의 인덱스를 전체 슬라이드 개수로 나눈 후 100을 곱해 퍼센트로 표시
    const progressWidth = (index / (totalSlides - 1)) * 100 + "%";

    // 진행 바의 너비를 업데이트합니다.
    progressBar.style.width = progressWidth;
}

// 다음 슬라이드로 이동하는 함수를 정의
function nextSlide() {
    // 다음 슬라이드의 인덱스를 계산하고 현재 슬라이드 인덱스를 업데이트
    slideIndex = (slideIndex + 1) % totalSlides;

    // 새로운 슬라이드를 보여줌
    showSlide(slideIndex);
}

// 이전 슬라이드로 이동하는 함수를 정의
function prevSlide() {
    // 이전 슬라이드의 인덱스를 계산하고 현재 슬라이드 인덱스를 업데이트
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;

    // 새로운 슬라이드를 보여줌
    showSlide(slideIndex);
}

// 초기 슬라이드와 진행 바를 설정하기 위해 showSlide 함수를 호출
showSlide(slideIndex);

// 이전 및 다음 버튼에 클릭 이벤트 리스너를 등록
document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);

});

// .stop() - 이전 애니메이션을 중지할때 사용 (애니메이션 중복 방지)
// 그래서, .stop()은, 부드러운 전환을 위한 중요한 기술 
// .mouseenter() - 마우스가 선택한 요소에 들어왔을때
// .mouseleave() - 마우스가 선택한 요소에서 벗어났을때