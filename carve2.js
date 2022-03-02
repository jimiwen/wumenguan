function carve2(x,y,shapesize,wiggle,vertpos1,vertpos2,vertpos3,vertpos4){
// console.log(vertpos1)
  let width =3000
    let height = 3000

    left_x = int(width * -0.5)
    right_x = int(width * 1.5)
    top_y = int(height * -0.5)
    bottom_y = int(height * 1.5)
    resolution = int(width * 0.01)


    num_columns = 3*int((right_x - left_x) / resolution)
    num_rows = 3*int((bottom_y - top_y) / resolution)

	// initialise field
	let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
	let m = Array2D(num_columns,num_rows);

	//print("m length "+m.length)
	if (random(0,1)>0.5){
		gain=int(random(1.1,3.1));
	}
	else{
		gain=int(random(-3.1,-1.1));
	}

	bend=random(0.1,0.2);
	offset=random(0,num_rows)
	if (random(0,1)<0.2) {
		quantum=1;
		for (let column=0; column<num_columns; column++) {
			for (row=0; row<num_rows; row++) {

				angle = (quantum*(row-offset-gain*bend*column) / (num_rows*bend))/quantum * PI*gain
				// print('angle'+angle)
				m[column][row] = angle
			}
		}
	}
	else{
		quantum=random(12,13);
		for (let column=0; column<num_columns; column++) {
			for (row=0; row<num_rows; row++) {

				angle = int(quantum*((row-offset-gain*bend*column) / (num_rows*bend))/quantum) * PI*gain
				// print('angle'+angle)
				m[column][row] = angle
			}
		}
	}

	//print("angle"+m[100][100])

	// let	x = 100+random(-100,1000)
	// let y = 100+random(-100,1000)
	let num_steps=100

  let stepsize=random(0.5,0.6);

//	print("dice2=  "+dice2)
	let curvelength=random(215,400);
	//stroke(255)
 //measure balance


// print(shiftX,shiftY)
// print(x,y)
x=x
y=y


	//draw
	for (k=0;k<50+curvelength;k+=1+random(0,3)) {
    strokeWeight(0.1+random(0,0.5))


		x_offset = x - left_x
		y_offset = y - top_y
		if (x_offset<4500 && y_offset< 4500 && x_offset>0 && y_offset>0  ) {
			column_index = int(x_offset / resolution)
			row_index = int(y_offset / resolution)
			//	print(column_index,row_index)
			// NOTE: normally you want to check the bounds here
			grid_angle = m[column_index][row_index]
			x_step = stepsize*resolution * cos(grid_angle)
			y_step = stepsize*resolution * sin(grid_angle)
			//	vertex(x, y)


			//main curve
			stroke(random([coloring.color1,coloring.color2,coloring.color3])
)

noFill()
			//	ellipse(x,y,shapesize,shapesize)
     strokeWeight(0.1)
			rect(x,y,shapesize,random(1,1)*shapesize)
    //   strokeWeight(1.5*sqrt(1/(k+2)+1/(50+curvelength-k+2)))
     strokeWeight(0.1)
      line(x,y,vertpos1[0],vertpos1[1])
      line(x+shapesize,y,vertpos2[0],vertpos2[1])
        line(x+shapesize,y+shapesize,vertpos3[0],vertpos3[1])
        line(x,y+shapesize,vertpos4[0],vertpos4[1])

          //console.log(vertpos1)

strokeWeight(0.1)
			//
			//pop()
			x = x + x_step+int(random(0,1))
			y = y + y_step+int(random(0,1))

//print(x,y)

			//circle(x,y,300)
		}


	}
	return x,y,shapesize;
}
