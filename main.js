<canvas id= "myCanvas" width= "800" height="400"></canvas>

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d")
//Dê altura e largura específicas para a imagem do carro
greencar_width = 75;
greencar_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
greencar_x = 75;
greencar_y = 225;


function add() {
background_imgTag =	new Image();
background_imgTag.onload = uploadbackground;
background_imgTag;src = greencar_image;

greencar_imgTag = new Image();
greencar_imgTag.onload = uploadgreencar;
grenncar_imgTag.src = greencar_image                 
}


function uploadBackground() {
ctx.drawImage(backgroud_imgTag,0 0, canvas.width, canvas.heigth)	                        

}

function uploadGreenCar() {
ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width greencar_height)                                                              
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
}
greencar_y = grenncar_y -10
console.log("when up arrow is pressed, x =" + grenncar "  |  y  = " greencar_y)
uploadBackground();
uploadGreenCar();


function down()
{
	if(greencar_y >=0)

greencar_y = grenncar_y -10
console.log("when down arrow is pressed, x =" + grenncar "  |  y  = " greencar_y)
uploadBackground();
uploadGreenCar();
}

function left()
{
	if(greencar_y >=0)

greencar_y = grenncar_y -10
console.log("when left arrow is pressed, x =" + grenncar "  |  y  = " greencar_y)
uploadBackground();
uploadGreenCar();
}

function right()
{
	if(greencar_y >=0)

	greencar_y = grenncar_y -10
	console.log("when right arrow is pressed, x =" + grenncar "  |  y  = " greencar_y)
	uploadBackground();
	uploadGreenCar();
}
