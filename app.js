//アルバムデータの作成
var album = [
  {src: 'img/_MG_9813.JPG', msg: ''},
  {src: 'img/_MG_9780.JPG', msg: ''},
  {src: 'img/IMG_7734.JPG', msg: ''},
  {src: 'img/IMG_7837.JPG', msg: ''},
  {src: 'img/IMG_7838.JPG', msg: ''},
  {src: 'img/IMG_8232.JPG', msg: ''},
  {src: 'img/_MG_9139.JPG', msg: ''},
  {src: 'img/92880036.jpg', msg: ''},
  {src: 'img/https://github.com/Shigeo-Kawai/skate-pic/commit/598526f572461f099319b31544616b42e01b1c47#diff-acdf9c760f1788217156b4174887b6d5', msg: ''},
  {src: 'img/_MG_1544.JPG', msg: ''},
  {src: 'img/_MG_1558.JPG', msg: ''},
  {src: 'img/_MG_9563.JPG', msg: ''},
];

//最初のデータを表示しておく
var mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

var mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

var mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

//サムネイル写真画像の表示
var thumbFlame = document.querySelector('#gallery .thumb');
for (var i = 0; i < album.length; i++) {
  var thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);    
}

//クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event){
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});
