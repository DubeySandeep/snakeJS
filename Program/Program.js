//Moving sprites
var s = new snake();
var f = new fruit();
var factor = 5 ; 
var score = 0 ;
var x_pix = 800;
var y_pix = 600;

function setup() {
  createCanvas(x_pix,y_pix);
	frameRate(15);

}

function draw() {
    background(255,250,55);
	fill(255,102,0);
	noStroke();
	ellipse(x_pix/2,y_pix/2,200,200);
  	s.drawn();
	f.drawn();
s.update();
	if(check() === 1)
	{
		f.x = int(random(0,x_pix/5))*factor;f.y =int(random(0,y_pix/5))*5;
		s.size +=1;
		s.x.push(s.x[0]);s.y.push(s.y[0]);
	}
	s.motion();
	


  

}


