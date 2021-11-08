var selFile = document.getElementById('selectFile'); // input type="file"の要素取得
var c = document.getElementById('concat'); // canvasの要素取得
var ctx = c.getContext('2d');

selFile.addEventListener("change", function(evt){
 var file = evt.target.files; // fileの取得
 var reader = new FileReader();

 reader.readAsDataURL(file[0]); // fileの要素をdataURL形式で読み込む

 // ファイルを読み込んだ時に実行する
 reader.onload = function(){
  var dataUrl = reader.result; // 読み込んだファイルURL
  var img = new Image(); // 画像

  img.src = dataUrl;

  // 画像が読み込んだ時に実行する
　img.onload = function() {
   // canvasに画像ソースを設定する
   ctx.drawImage(img, 0, 0,320,240);

   // 画像のサイズを設定する場合
   // ctx.drawImage(img, 0, 0, 300, 400); heightとwidthも合わせて設定可能
   }
  }
}, false);
