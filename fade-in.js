window.addEventListener('scroll', function(){
  // スクロール量を取得
  const scroll = window.scrollY;
  // 画面の高さを取得
  const windowHeight = window.innerHeight;
  // すべての.boxを取得
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(function(box) {
    // boxまでの高さを取得
    const distanceToBox = box.offsetTop;
    // 下記条件が成り立つときだけboxにis-activeクラスを付与する
    if(scroll + windowHeight > distanceToBox) {
      box.classList.add('is-active');
    }else{
      box.classList.remove('is-active');
    }
  });
});
