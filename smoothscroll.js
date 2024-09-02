window.addEventListener("scroll",function(){
    const elm = document.querySelector(".elm");
    const scroll = window.scrollY;

    if(scroll > 100){
        elm.style.opacity = "1";
        elm.style.zIndex = "1";
        // 100PX以上スクロールすると、スタイル付与しスムーススクロールボタン表示される。
    }else{
        elm.style.opacity = "0";
        elm.style.zIndex = "-1";
        // 100PX以下になると非表示
    }
});
