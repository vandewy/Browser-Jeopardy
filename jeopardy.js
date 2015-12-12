

var thArray = document.body.getElementsByTagName("th") 
var selectedArray = [];

function openWin(windowToOpen) {
myWindow = window.open("questions/"+windowToOpen+".html", "myWindow", "width=1000, height=500");  
}

function closeWin(windowToClose) {
				var timesUp = document.createElement("AUDIO");
				timesUp.src = "questions/timesUp.mp3";
				timesUp.autoplay = "true";
				document.body.appendChild(timesUp);
    myWindow.close();   // Closes the new window
}

document.body.addEventListener("click",function(){
	if(event.target.nodeName == "TH") 
	{
		for(var i = 1; i < thArray.length; i++)
		{
			if(event.target.className == "q" + i && selectedArray[i] != 1)
			{
				if(selectedArray[i] == 1)
					break;
				else
				{
					event.target.style.color = "blue";//<th> value turns blue
					var page = "q" + i;
					openWin(page);
					window.setTimeout(closeWin, 2000);	
					selectedArray[i] = 1;
				}
			}
		}
				
	}
});




