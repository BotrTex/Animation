/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
startButton.img.src="images/R.png"
startButton.width=90;
startButton.height=90;
startButton.hitBoxWidth=5
startButton.hitBoxHeight=10
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/MENU.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{

		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play('Cartoon Background Musicv', 0, true);
		}

		//Hover Effect Graffic
		//startButton.color = `Black`
		src="images/R.png"
		startButton.width=160;
		startButton.height=110;
	}
	else
	{
		//Default Button Graphic
		//startButton.color = `purple`
		src="images/R.png"
		startButton.width=150;
		startButton.height=110;
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage()
}
	
	
