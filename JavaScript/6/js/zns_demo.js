window.onload = function(){
	var oDiv = document.getElementById('div1');
	var aImg = oDiv.getElementsByTagName('img');
	var aTxt = document.getElementsByTagName('input');
	document.onmousemove = function(ev){
		var oEvent =ev||event;
		for(var i = 0;i<aImg.length;i++){
			var a = aImg[i].offsetWidth/2 +aImg[i].offsetLeft+oDiv.offsetLeft - oEvent.clientX;
			var b = aImg[i].offsetHeight/2 +aImg[i].offsetTop+oDiv.offsetTop - oEvent.clientY;
			var c = Math.sqrt(a*a+b*b);
			
			var scale = 1-c/500;
			/*
			if(scale<0.5){
				scale = 0.5
			}
			*/
			(scale<0.5)&&(scale = 0.5);
			aImg[i].style.width = 128*scale +'px';
			aTxt[i].value = scale;
		}
	};
};