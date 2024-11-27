function fnInfo() {
  window.location.href = 'info.html';
}
function fnVideo() {
  // Показываем div с id "videoContent"
  document.getElementById('videoContent').style.display = 'block';

  // Скрываем кнопку с id "Video"
  document.getElementById('Video').style.display = 'none';
}
function fnClick(){
  document.getElementById('click').style.display = 'block';
}
function fnfoto() {
  // Показываем div с id "videoContent"
  document.getElementById('fotoContent').style.display = 'block';

  // Скрываем кнопку с id "Video"
  document.getElementById('foto').style.display = 'none';
}