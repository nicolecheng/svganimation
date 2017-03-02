var cbutton = document.getElementById("circle"); 
var dbutton = document.getElementById("dvd");
var sbutton = document.getElementById("stop");
var s = document.getElementById("savage");
var rid;

var stop = function(){
    window.cancelAnimationFrame(rid);

}

var animate_dot = function(){
    while (s.lastChild) {
	s.removeChild(s.lastChild);
    }
    var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circ.setAttribute("cx",250);
    circ.setAttribute("cy",250);
    circ.setAttribute("fill","yellow");
    circ.setAttribute("r",r);
    var inc = true;
    var r = 0;
    stop();
    var circle = function(){
	if(r>=250){
	    inc = false;
	}else if(r<=0){
	    inc = true;
	}
	if(inc){
	    r++;
	    console.log(r);
	}else{
	    r--;
	}
	circ.setAttribute("r",r);
	s.appendChild(circ);
	rid = window.requestAnimationFrame( circle );
    };
    circle();
};

var animate_dvd = function(){
    var x = 0;
    var y = 0;
    var right = true;
    var down = true;
    window.cancelAnimationFrame(rid); 
    var dvd = function(){
	clear();
	var ctx = c.getContext('2d');
	ctx.beginPath();
	ctx.fillRect(x,y,75,50);
	rid = window.requestAnimationFrame( dvd );
	if(x >= 425){
	    right = false;
	}else if(x<=0){
	    right = true;
	}
	if(right){
	    x++;
	}else{
	    x--;
	}
	if(y >= 450){
	    down = false;
	}else if(y <= 0){
	    down = true;
	}
	if(down){
	    y++;
	}else{
	    y--;
	}
    };
    dvd();
};

cbutton.addEventListener('click',animate_dot);

dbutton.addEventListener('click',animate_dvd);

sbutton.addEventListener("click", stop);
