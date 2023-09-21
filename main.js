var fundo = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(0,0,0,1) 0%, rgba(51,48,48,1) 39%, rgba(70,13,6,1) 69%, rgba(30,99,27,1) 100%)";
var fundo2 = "linear-gradient(blue, lightblue, lightblue, darkgreen, brown, grey, grey, darkblue)";
function voltardetema() {
  document.getElementById("bod").style.background= fundo2;
  document.getElementById("bod").style.color ="black";
}
function mudardetema() {
  document.getElementById("bod").style.background = fundo;
  document.getElementById("nometitulo").style.color = "darkgreen";
  document.getElementById("bod").style.color ="white";
}
function changeImageOver() {
  document.getElementById('img2').src = "https://steamuserimages-a.akamaihd.net/ugc/1906737058568622464/E8D2FE7A5E42C0DD59333BF427A6E1EA484BA654/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true";
}
function changeImageLeave() {
  document.getElementById('img2').src = "https://i.redd.it/di49fhu3qby41.png";
}