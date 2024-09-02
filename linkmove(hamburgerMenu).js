// ハンバーガーメニューのリンク押したらリンク先へスクロールする（メニュー閉じない）
document.addEventListener('DOMContentLoaded', function() { //ドキュメントが完全に読み込まれた時点で指定した関数を実行するように設定しています。これにより、HTML要素がすべてロードされた後にスクリプトが実行されます。
    // ハンバーガーメニューのチェックボックスを取得
    var menuBtnCheck = document.getElementById('menu-btn-check'); //getElementByIdメソッドを使って、IDがmenu-btn-checkの要素（ここではチェックボックス）を取得しています。このチェックボックスは、ハンバーガーメニューの開閉状態を制御します。

    // ハンバーガーメニューが表示/非表示になったときの処理
    menuBtnCheck.addEventListener('change', function() {   //addEventListenerメソッドを使って、チェックボックスのchangeイベント（チェックボックスの状態が変更された時）のリスナーを設定しています。
        var navLinks = document.querySelectorAll('.navlinks ul li a'); //querySelectorAllメソッドを使って、クラス名が.navlinksの親要素内のulタグの中にあるliタグの直下のaタグ（リンク）を全て選択しています。
        navLinks.forEach(function(link) {   //選択したリンクに対して、forEachメソッドを使って各リンクに対して処理を行います。
            link.addEventListener('click', function(e) {  //各リンクに対して、クリックイベントのリスナーを追加しています。
                e.preventDefault(); // デフォルトのリンク動作を防ぐ リンクのデフォルトの動作（ページ遷移）を防ぎます。これにより、スムーススクロールの代わりに通常のページ遷移が行われることを防ぎます。

                // 選択されたリンクのhref属性を取得 
                var targetId = this.getAttribute('href'); //クリックされたリンクのhref属性を取得し、それが指すIDを変数targetIdに格納しています。

                // 指定したIDへのスムーススクロール
                document.querySelector(targetId).scrollIntoView({  //取得したIDに対応する要素を見つけ出し、その要素までスムーススクロールします。behavior: 'smooth'とblock: 'start'オプションを指定することで、スムーススクロールの動きを滑らかくし、スクロールの開始位置を要素の開始部分にすることができます。
                    behavior: 'smooth',
                    block: 'start'  //ターゲット要素の上端がビューポート（画面）の上端に最も近い位置になるようにスクロールが開始されます。
                });
            });
        });
    });
});

// スクロール検知したらハンバーガーメニュー閉じる
// ハンバーガーメニューのチェックボックスを取得
var menuBtnCheck = document.getElementById('menu-btn-check');

// スクロールイベントを監視
window.addEventListener('scroll', function() {
    // スクロール位置を取得
    var scrollPosition = window.scrollY;

    // スクロール位置が一定の値以上になったらハンバーガーメニューを閉じる
    if (scrollPosition > 100) { // 100px以上スクロールした場合
        menuBtnCheck.checked = false; // ハンバーガーメニューを閉じる
    }
});

// ページ読み込み時にハンバーガーメニューが開いている場合に閉じる
if (menuBtnCheck.checked) {
    menuBtnCheck.checked = false;
};
