

var thArray = document.body.getElementsByTagName("th") 

function openWin(windowToOpen) {
myWindow = window.open(windowToOpen+".html", "myWindow", "width=800, height=400");  
}

function closeWin(windowToClose) {
    myWindow.close();   // Closes the new window
}

document.body.addEventListener("click",function(){
	if(event.target.nodeName == "TH")
	{
		for(var i = 1; i < thArray.length; i++)
		{
			if(event.target.className == "q" + i)
			{
				event.target.style.color = "blue";
				var page = "q" + i;
				openWin(page);
				window.setTimeout(closeWin, 2000);
				var timesUp = new Audio(["timesUp.mp3"]);
				
				
				
			}
		}
				
	}
});




