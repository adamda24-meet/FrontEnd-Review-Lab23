//function changeBackgroundColor(color) {
//	document.getElementsById("bo").style.backgroundColor="color";
//}
//let changeBackgroundColor("red");
function changeBackground(color1,color2) {
	var n =document.body.style.background
	if(n==color1){
   document.body.style.background = color2;}
   else{
   	document.body.style.background = color1;}
}


//window.addEventListener("load",function() { changeBackground('red') });
