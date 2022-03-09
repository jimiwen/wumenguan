function guarotation(fullgua,yaofour){

  let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
  let vertpos = Array2D(4,8);

  shiftstep=random([1,2,3,4,5,6,7])
  let tiandi=[];
  for (k=0;k<4;k++){
    //k fourgua
    tiandi[k]=gettiandi(yaofour[k]);

    //tiandi=ceil(random(0,1)*10)-1;
    shengchengX=ceil(random(0,tiandi[k]+0.00001))-1;


    shengchengY=ceil(random(0,tiandi[k]+0.00001))-1;


    for (p=0;p<8;p++){
      //p shifting
      vertpos[k][p]=[
        fullgua[(tiandi[k])][(shengchengX+shiftstep*p) % (tiandi[k]+1)][0],
        fullgua[(tiandi[k])][(shengchengY+shiftstep*p) % (tiandi[k]+1)][1],
      ];
    }
  }

  for (p=0;p<8;p++){
    points=[
      [vertpos[0][p][0],vertpos[0][p][1]],
      [vertpos[1][p][0],vertpos[1][p][1]],
      // [vertpos[2][p][0],vertpos[2][p][1]],
      [vertpos[3][p][0],vertpos[3][p][1]],
    ];

    rc.polygon(points, {
      fill: random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]),
      fillStyle: random(["hachure"]),
      fillWeight: 10*random(0.05,0.1),
      hachureAngle: random(0,180),
      stroke: "transparent",
    });
  }

  for (p=0;p<8;p++){
    points=[
      [vertpos[0][p][0],vertpos[0][p][1]],
      [vertpos[1][p][0],vertpos[1][p][1]],
      [vertpos[2][p][0],vertpos[2][p][1]],
      //    [vertpos[3][p][0],vertpos[3][p][1]],
    ];

    rc.polygon(points, {
      fill: random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]),
      fillStyle: random(["hachure"]),
      fillWeight: 10*random(0.05,0.1),
      hachureAngle: random(0,180),
      stroke: "transparent",
    });
  }

//  return vertpos;
}

function guarotation2(fullgua,yaofour,pos,gain){

  let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
  let vertpos = Array2D(4,8);

  shiftstep=random([1,2,3,4,5,6,7])
  let tiandi=[];
  for (k=0;k<4;k++){
    //k fourgua
    tiandi[k]=gettiandi(yaofour[k]);

    //tiandi=ceil(random(0,1)*10)-1;
    shengchengX=ceil(random(0,tiandi[k]+0.00001))-1;


    shengchengY=ceil(random(0,tiandi[k]+0.00001))-1;


    for (p=0;p<8;p++){
      //p shifting
      vertpos[k][p]=[
        fullgua[(tiandi[k])][(shengchengX+shiftstep*p) % (tiandi[k]+1)][0],
        fullgua[(tiandi[k])][(shengchengY+shiftstep*p) % (tiandi[k]+1)][1],
      ];
    }
  }

  for (p=0;p<8;p++){
    points=[
      [vertpos[0][p][0],vertpos[0][p][1]],
      [vertpos[1][p][0],vertpos[1][p][1]],
      // [vertpos[2][p][0],vertpos[2][p][1]],
      [vertpos[3][p][0],vertpos[3][p][1]],
    ];
push()
translate(pos[0],pos[1])
scale(gain,gain)
    rc.polygon(points, {
      fill: random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]),
      fillStyle: random(["hachure"]),
      fillWeight: 10*random(0.05,0.1),
      hachureAngle: random(0,180),
      stroke: "transparent",
    });
  }
pop()

  for (p=0;p<8;p++){
    points=[
      [vertpos[0][p][0],vertpos[0][p][1]],
      [vertpos[1][p][0],vertpos[1][p][1]],
      [vertpos[2][p][0],vertpos[2][p][1]],
      //    [vertpos[3][p][0],vertpos[3][p][1]],
    ];

    push()
    translate(pos[0],pos[1])
    scale(gain,gain)
        rc.polygon(points, {
          fill: random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]),
          fillStyle: random(["hachure"]),
          fillWeight: 10*random(0.05,0.1),
          hachureAngle: random(0,180),
          stroke: "transparent",
        });
      }
    pop()

//  return vertpos;
}

function fractalquaqua(fullgua,yaofour){
  let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
  let vertpos = Array2D(4,8);


  let tiandi=[];
    shiftstep=random([1,2,3,4,5,6,7])
  for (k=0;k<4;k++){
    //k fourgua
    tiandi[k]=gettiandi(yaofour[k]);

    //tiandi=ceil(random(0,1)*10)-1;
    shengchengX=ceil(random(0,tiandi[k]+0.00001))-1;


    shengchengY=ceil(random(0,tiandi[k]+0.00001))-1;


    for (p=0;p<8;p++){

      //p shifting
      vertpos[k][p]=[
        fullgua[(tiandi[k])][(shengchengX+shiftstep*p) % (tiandi[k]+1)][0],
        fullgua[(tiandi[k])][(shengchengY+shiftstep*p) % (tiandi[k]+1)][1],
      ];
    }
  }


  for (i=0;i<8;i++){

    pointss=[
      [vertpos[0][i][0],vertpos[0][i][1]],
      [vertpos[1][i][0],vertpos[1][i][1]],
      [vertpos[2][i][0],vertpos[2][i][1]],
      [vertpos[3][i][0],vertpos[3][i][1]],
    ];

//console.log(pointss)

wiggle=0;
noFill()
    push()
    translate(pointss[0][0]-wiggle,pointss[0][1]-wiggle)
    scale(16.9/pow(i,4),16.9/pow(i,4))
    strokeWeight(random(1000,1150))
      lrad=random([0.25,0.5,1,2]);
  //      fill(random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]))
  //  circle(pointss[0][0]-wiggle,pointss[0][1]-wiggle,random([0.5,2])*1500)
  arc(pointss[0][0]-wiggle,pointss[0][1]-wiggle,lrad*1500,random([1])*lrad*1500,PI-random(0,PI), PI +random(0,PI))

    guarotation(fullgua,yaofour);
    pop()

    push()
    translate(pointss[1][0]-wiggle,pointss[1][1]-wiggle)
    scale(16.9/pow(i,4),16.9/pow(i,4))
    strokeWeight(random(1000,1150))
      lrad=random([0.5,2]);
  //    fill(random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]))
  //  circle(pointss[0][0]-wiggle,pointss[0][1]-wiggle,random([0.5,2])*1500)
  arc(pointss[0][0]-wiggle,pointss[0][1]-wiggle,lrad*1500,random([1])*lrad*1500,PI-random(0,PI), PI +random(0,PI))

    guarotation(fullgua,yaofour);
    pop()

    push()
    translate(pointss[2][0]-wiggle,pointss[2][1]-wiggle)
    scale(16.9/pow(i,4),16.9/pow(i,4))
    strokeWeight(random(1000,1150));
    lrad=random([0.5,2]);
  //  fill(random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]))
//    circle(pointss[0][0]-wiggle,pointss[0][1]-wiggle,random([0.5,2])*1500)
arc(pointss[0][0]-wiggle,pointss[0][1]-wiggle,lrad*1500,random([1])*lrad*1500,PI-random(0,PI), PI +random(0,PI))

    guarotation(fullgua,yaofour);
    pop()

    push()
    translate(pointss[3][0]-wiggle,pointss[3][1]-wiggle)
    scale(16.9/pow(i,4),16.9/pow(i,4))
  strokeWeight(random(1000,1150))
    lrad=random([0.5,2]);
    //fill(random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]))
  //circle(pointss[0][0]-wiggle,pointss[0][1]-wiggle,random([0.5,2])*1500)
arc(pointss[0][0]-wiggle,pointss[0][1]-wiggle,lrad*1500,random([1])*lrad*1500,PI-random(0,PI), PI +random(0,PI))
    guarotation(fullgua,yaofour);
    pop()



  }




//  return vertpos;
}
