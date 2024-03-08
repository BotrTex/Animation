/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/spritesheet.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:380, height:380, startX:3612, startY:0},
				{width:380, height:380, startX:4128, startY:0},
				{width:380, height:380, startX:4644, startY:0},
				{width:380, height:380, startX:5160, startY:0},
				{width:380, height:380, startX:5676, startY:0},
				{width:380, height:380, startX:6192, startY:0},
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:8,
			cycle:true,
			frames:
			[
				{width:380, height:380, startX:9288, startY:0},
				{width:380, height:380, startX:9804, startY:0},
				{width:380, height:380, startX:10320, startY:0},
				{width:380, height:380, startX:10836, startY:0},
				{width:380, height:380, startX:11352, startY:0},
				{width:380, height:380, startX:11868, startY:0},
			]
		},
		//The jump animation 
		jump:
		{
			fps:15,
			cycle:false,
			frames:
			[
				{width:380, height:380, startX:6708, startY:0},
				{width:380, height:380, startX:7224, startY:0},
				{width:380, height:380, startX:7740, startY:0},
				{width:380, height:380, startX:8256, startY:0},
				{width:380, height:380, startX:8772, startY:0},
				
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:380, height:380, startX:3096, startY:0},
				
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:true,
			//width:300,
			frames:
			[
				{width:420, height:380, startX:0, startY:0},
				{width:420, height:380, startX:516, startY:0},
				{width:420, height:380, startX:1032, startY:0},
				{width:420, height:380, startX:1548, startY:0},
				{width:420, height:380, startX:2064, startY:0},
				{width:420, height:380, startX:2580, startY:0},
				
			]
		}
	}
		
}