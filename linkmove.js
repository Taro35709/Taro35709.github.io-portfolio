document.querySelectorAll('nav ul li a').forEach(function(anchor){
    // function(anchor)内で、各リンク要素自体をanchorという変数名で受け取る。
    anchor.addEventListener('click',function(e){
        //  各リンク要素に対して、クリックイベントリスナーを追加しています。クリックイベントが発生すると、関数の中身が実行されます。eはイベントオブジェクトを表し、イベントに関連する情報や操作を制御するために使用されます。
        e.preventDefault();
        // デフォルトのリンク動作を防ぎます。つまり、ユーザーがリンクをクリックしてもページが自動的にリンク先に移動しないようにします。これにより、後続のスクロール動作を制御できます。
        const targetid = this.getAttribute('href');
        //リンク先ID取得
        //  thisキーワードは現在処理中のリンク要素を指します。getAttribute('href')メソッドを使用して、そのリンク要素のhref属性（リンク先のURLまたはID）を取得し、targetIdという変数に保存します。
        document.querySelector(targetid).scrollIntoView({behavior:'smooth'});
        // targetIdに格納されたIDを使用して、該当する<div>要素を選択し、scrollIntoViewメソッドを呼び出してその要素にスムーズにスクロールします。{ behavior: 'smooth' }オプションを指定することで、スクロール動作をスムーズにすることができます。
    });
});
