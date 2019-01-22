
function draw_sector(ctx,x,y,radius,start_a,end_a,radius_delta,value_color,vl) {

	

	//degree to rad
	start_a = 0.0174532925 * start_a;
	end_a = 0.0174532925 * end_a;
	
	ctx.beginPath();
	ctx.arc(x,y,radius,start_a,end_a,false);
	ctx.arc(x,y,radius-radius_delta,end_a,start_a,true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.closePath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'black';
	ctx.stroke();	


}


function draw_sector_value(ctx,sector,value_color,vl) {


//console.log("hola");
	var centerX = vl.w_square / 2;
	var centerY = vl.h_square / 2;
	
	//degree to rad


	switch(sector) {
  case 0:	
  
  		start_a = 250;
  		end_a = 290;
  		var delta_y = 0;
  		var radius = 390;
  		var radius_delta = 100;
  		var valor = radius - radius_delta + value_color*2;
  		
  		
  		
    break;
  
 case 1:	
  
  		start_a = 320;
  		end_a = 350;
  		var delta_y = 100;
  		var radius = 310;
  		var radius_delta = 100;
  		var valor = radius - radius_delta + value_color*2;
  		
    break;
    
     case 2:	
  
  		start_a = 190;
  		end_a = 220;
  		var delta_y = 100;
  		var radius = 310;
  		var radius_delta = 100;
  		var valor = radius - radius_delta + value_color*2;
  		
    break;
    
     case 3:	
  
  		start_a = 10;
  		end_a = 40;
  		var delta_y = -130;
  		var radius = 310;
  		var radius_delta = 100;
  		var valor = radius - radius_delta + value_color*2;
  		
  		
    break;
    
     case 4:	
  
   	start_a = 70;
  		end_a = 110;
  		var delta_y = -30;
  		var radius = 390;
  		var radius_delta = 100;
  		var valor = radius - radius_delta + value_color*2;
  		
  		
    break;
    
     case 5:	
  
  		start_a = 140;
  		end_a = 170;
  		var delta_y = -130;
  		var radius = 310;
  		var radius_delta = 100;
  		var valor = radius - radius_delta + value_color*2;
  		
  		
    break;  
  
}

//if (sector == 0) {
///console.log(value_color)
//console.log(valor)
//}
	start_a = 0.0174532925 * start_a;
	end_a = 0.0174532925 * end_a;
	
	ctx.beginPath();
	
	ctx.arc(centerX,centerY-delta_y,valor-2,start_a,end_a,false);
	ctx.arc(centerX,centerY-delta_y,radius-radius_delta+2,end_a,start_a,true);
	ctx.fillStyle = 'green';
	ctx.fill();
	ctx.closePath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'green';
	ctx.stroke();
	
	ctx.closePath();
		
	ctx.beginPath();
	
	ctx.arc(centerX,centerY-delta_y,radius-2,start_a,end_a,false);
	ctx.arc(centerX,centerY-delta_y,valor+2,end_a,start_a,true);
	ctx.fillStyle = 'white';
	ctx.fill();
	ctx.closePath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'white';
	ctx.stroke();
	ctx.closePath();
}


function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}	




function draw_car(id, vl){

		var ctx = id;
	
      var imageObj = new Image();

      imageObj.onload = function() {
      	
      	ctx.drawImage(imageObj,
        vl.w_square / 2 - vl.image_size_w / 2,
        vl.h_square / 2 - vl.image_size_h / 2,
        vl.image_size_w,vl.image_size_h
);

      };
      
      imageObj.src = 'car.png';
   
   var centerX = vl.w_square / 2;
	var centerY = vl.h_square / 2;
	
	
   
	
	draw_sector(id,centerX,centerY-100,310,320,350,100,0,vl);
	draw_sector(id,centerX,centerY,390,250,290,100,0,vl);
	draw_sector(id,centerX,centerY-100,310,190,220,100,0,vl);
	
	draw_sector(id,centerX,centerY+130,310,10,40,100,0,vl);
	draw_sector(id,centerX,centerY+30,390,70,110,100,0,vl);
	draw_sector(id,centerX,centerY+130,310,140,170,100,0,vl);
}
 
