window.addEventListener("scroll",function(){
    const nav = document.querySelector(".nav"); //nav表示用
    const reserve = document.querySelector(".reserve"); //ご予約リンク用
    const scroll = window.scrollY;

    if(scroll > 100){
        nav.style.opacity = "1";//nav表示用
        nav.style.zIndex = "100"; //navを一番上に表示したいため、１００。　
        reserve.style.opacity = "1";//ご予約リンク用
        reserve.style.zIndex = "2";
        // 100PX以上スクロールすると、スタイル付与しnav表示される。
    }
    // 一回スクロールすると表示しっぱなし
    //else{
    //     nav.style.opacity = "0";
    //     nav.style.zIndex = "-1";
    // }
});
