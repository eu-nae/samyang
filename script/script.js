$(function () {
    // 그룹메뉴
    // $(".to_btn>span>img").click(function () {
    //     var x=0;
    //     setInterval(function(){
    //         if(x<7){
    //             x++
    //         }else{
    //             x=0;
    //         }
    //         var sp=x*(-400)+"px";
    //         $(".toInner>ul").move({left:sp},300);
    //     })
    // });


    


    // $(function(){
    //     var x=0;
    //     $(".to_btn>.prev").click(function(){
    //         if(x<6){
    //             x--
    //         }else{
    //         x=0;
    //         }
    //         var sp=x*(350)+"px"
    //         $(".toInner>ul").animate({left:sp},500);
    //     });
    //     $(".to_btn>.next").click(function(){
    //         if(x<6){
    //             x++
    //         }else{
    //         x=6;
    //         }
    //         var sp=x*(-350)+"px"
    //         $(".toInner>ul").animate({left:sp},500);
    //     });
    // });







    $("nav.gnb ul li").mouseenter(function () {
        $(".submenu, .bg").stop(500).slideDown(600);
    });
    $("nav.gnb>ul>li").mouseleave(function () {
        $(".submenu, .bg").stop().slideUp(100);
    });






        // .btn_top을 500px 도달시 나타남
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $("button.to-top").fadeIn();
                // 안보이던 화살표 버튼이 500px 이상으로 스크롤이 내려오면 나타남
            } else {
                $("button.to-top").fadeOut(); // 500px 이하일 경우 사라짐
            }
        });
        // .logo와 .btn_top을 최상단으로 가게 하기
        $("button.to-top").on("click",function(){
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

});

// .stop() - 이전 애니메이션을 중지할때 사용 (애니메이션 중복 방지)
// 그래서, .stop()은, 부드러운 전환을 위한 중요한 기술 
// .mouseenter() - 마우스가 선택한 요소에 들어왔을때
// .mouseleave() - 마우스가 선택한 요소에서 벗어났을때

