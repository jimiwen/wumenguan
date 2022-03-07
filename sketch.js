let seasonpicker= Xrandom(0,1 );
let rc;
let yao=[0,0,0,0,0,0];
let yaoone=Xrandom(0,1);
let yaotwo=Xrandom(0,1);
let yaothree=Xrandom(0,1);
let yao4=Xrandom(0,1);
let yaofive=Xrandom(0,1);
let yaosix=Xrandom(0,1);
let strokenumber=Xrandom(0,1);



function Xrandom(x,y){
  return (y-x)*fxrand()+x;
}

if (yaoone<0.6){
  yao[0]=0;
}else{
  yao[0]=1;
};

if (yaotwo<0.6){
  yao[1]=0;
}else{
  yao[1]=1;
}

if (yaothree<0.6){
  yao[2]=0;
}else{
  yao[2]=1;
}

if (yao4<0.6){
  yao[3]=0;
}else{
  yao[3]=1;
}

if (yaofive<0.6){
  yao[4]=0;
}else{
  yao[4]=1;
}
if (yaosix<0.6){
  yao[5]=0;
}else{
  yao[5]=1;
}



if (strokenumber<0.3){
  aa=3;
}else if (strokenumber<0.85){
  aa=6;
}else{
  aa=9;
}



window.$fxhashFeatures = {
  "生成 Being": getMoodStyle(seasonpicker),
  "上卦 Upper Gua": getLowerGuaStyle(yaoone,yaotwo,yaothree),
  "下卦 Lower Gua": getLowerGuaStyle(yao4,yaofive,yaosix),
  "Number of?:": getstrokeNum(strokenumber)
}


 console.log(getMoodStyle(seasonpicker))
console.log(getLowerGuaStyle(yaoone,yaotwo,yaothree))
 console.log(getLowerGuaStyle(yao4,yaofive,yaosix))
 console.log(getstrokeNum(strokenumber))

function getstrokeNum(value){
  if (value<0.3) return '3';
  else if (value<0.85) return '6'
  else return '12'
}

function getMoodStyle(value){
  if (value<0.35) return '魂 intution';
  else if (value<0.40) return '我 id'
  else if (value<0.5) return '神 spirit'
  else return '魄 reflection'
}



function getLowerGuaStyle(yao4,yaofive,yaosix){
let yaoL=[0 ,0 ,0];

  if (yao4<0.6){
    yaoL[0]=0;
  }else{
    yaoL[0]=1;
  }

  if (yaofive<0.6){
    yaoL[1]=0;
  }else{
    yaoL[1]=1;
  }
  if (yaosix<0.6){
    yaoL[2]=0;
  }else{
    yaoL[2]=1;
  }

  if (yaoL[0]==0 && yaoL[1]==0 && yaoL[2]==0){
  return "坤地 kun earth"
}else if (yaoL[0]==1 && yaoL[1]==0 && yaoL[2]==1){
    return "離火 li fire"
  } else if (yaoL[0]==0 && yaoL[1]==1 && yaoL[2]==1){
    return "巽風 xun wind"
  } else if (yaoL[0]==1 && yaoL[1]==0 && yaoL[2]==0){
    return "震雷 zhen thunder"
  } else if (yaoL[0]==0 && yaoL[1]==0 && yaoL[2]==1){
    return "艮山 gen mountain"
  } else if (yaoL[0]==0 && yaoL[1]==1 && yaoL[2]==0){
    return "坎水 kan water"
  } else if (yaoL[0]==1 && yaoL[1]==1 && yaoL[2]==1){
    return "乾天 qian heaven"
  } else if (yaoL[0]==1 && yaoL[1]==1 && yaoL[2]==0){
    return "兌澤 dui swamp"
  }else {
    return "error"
  }
}


coloring={
  color1: '#bfb8c2',
  color2: '#d0dbd8',
  color3: '#c2740c',
}

if (seasonpicker<0.35){
  //pink 35%
  colors = {
    main: "#423b40",
    bg: "#02040a",
    sea1: '#0892c4',
    sea2: '#02c0d9',
    sand1:'#635c61',
    sand2:'#52483c',
    body2:'#069c94',
    body1:'#64faf3'
  };
  coloring={
    color1: '#eb528d',
    color2: '#89c7c3',
    color3: '#f5965f',
  }
}else if (seasonpicker<0.4){
  //summer green 5%
  colors = {
    main: "#f7dfdf",
    bg: "#692545",
    sea1: '#bd112b',
    sea2: '#de4573',
    sand1:'#3c4d3d',
    sand2:'#2d4038',
    body2:'#f07832',
    body1:'#edaf3b'
  };

  coloring={
    color1: '#08ffb5',
    color2: '#280096',
    color3: '#c2740c',

  }
}else if (seasonpicker<0.50){
  // golden tiger 10%
  colors = {
    main: "#ff7700",
    bg: "#ff8800",
    sea1: '#ffaa00',
    sea2: '#ff6200',
    sand1:'#f06e3e',
    sand2:'#ff0011',
    body2:'#ff8800',
    body1:'#ff8800',
  };

  coloring={
    color1:'#2f1a38',
  	color2:'#88898c',
  	color3:'#404759',
}

}else{
  //50% winter
  colors = {
    main: "#02040a",
    bg: "#f1f1f1",
    sea1: '#0892c4',
    sea2: '#02c0d9',
    sand1:'#02040a',
    sand2:'#52483c',
    body2:'#069c94',
    body1:'#64faf3'
  };

  coloring={
    color1: '#bfb8c2',
    color2: '#d0dbd8',
    color3: '#c2740c',
  }
}







function setup() {
  randomSeed(int(fxrand()*100000000))
  const canvas = createCanvas(3601, 6401);
  //angleMode(DEGREES)
  rc = rough.canvas(canvas.canvas);
  background(colors.main);
  noLoop();






  //  console.log(dishichengtu)
}

function draw() {
  //drawhetu()

  let	x = 100+random(500,2800)
  let y = 100+random(500,2800)
  let shapesize=random([300,300,300,300,280,250,300,350]);
  let stepsize=random(0.01,0.03);

  raddd=600;
  chengtu_centre=[1800,3200];
  dishichengtu=[
    [chengtu_centre[0]+raddd*cos(1*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(1*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(2*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(2*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(3*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(3*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(4*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(4*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(5*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(5*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(6*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(6*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(7*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(7*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(8*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(8*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(9*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(9*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(10*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(10*2*PI/10)],
  ];

  tianwushengtu=[
    [chengtu_centre[0]-300,chengtu_centre[1]],
    [chengtu_centre[0],chengtu_centre[1]-500],
    [chengtu_centre[0],chengtu_centre[1]],
    [chengtu_centre[0]+300,chengtu_centre[1]],
    [chengtu_centre[0],chengtu_centre[1]+500],
  ];

  tianyishengshui=[
    [chengtu_centre[0],chengtu_centre[1]+2000]
  ];

  widsix=500;
  bottom_edge=2800;
  diliuchengshui=[
    [chengtu_centre[0]-2.5*widsix,chengtu_centre[1]+bottom_edge],
    [chengtu_centre[0]-1.5*widsix,chengtu_centre[1]+bottom_edge],
    [chengtu_centre[0]-0.5*widsix,chengtu_centre[1]+bottom_edge],
    [chengtu_centre[0]+0.5*widsix,chengtu_centre[1]+bottom_edge],
    [chengtu_centre[0]+1.5*widsix,chengtu_centre[1]+bottom_edge],
    [chengtu_centre[0]+2.5*widsix,chengtu_centre[1]+bottom_edge],
  ];

  left_edge=200;
  wid8=370;
  dibachengmu=[
    [left_edge,chengtu_centre[1]-7*wid8],
    [left_edge,chengtu_centre[1]-5*wid8],
    [left_edge,chengtu_centre[1]-3*wid8],
    [left_edge,chengtu_centre[1]-wid8],
    [left_edge,chengtu_centre[1]+wid8],
    [left_edge,chengtu_centre[1]+3*wid8],
    [left_edge,chengtu_centre[1]+5*wid8],
    [left_edge,chengtu_centre[1]+7*wid8],
  ];

  tiansanshengmu=[
    [left_edge+400,chengtu_centre[1]-4.6*wid8],
    [left_edge+400,chengtu_centre[1]],
    [left_edge+400,chengtu_centre[1]+4.6*wid8],
  ];
  wid6=450;
  tianqichenghuo=[
    [chengtu_centre[0]-3*wid6,200],
    [chengtu_centre[0]-2*wid6,200],
    [chengtu_centre[0]-wid6,200],
    [chengtu_centre[0],200],
    [chengtu_centre[0]+wid6,200],
    [chengtu_centre[0]+2*wid6,200],
    [chengtu_centre[0]+3*wid6,200],
  ];

  diershenghuo=[
    [chengtu_centre[0]-400,801],
    [chengtu_centre[0]+400,801]
  ];
  widnine=660
  right_edge=3400
  tianjiuchengjin=[
    [right_edge,chengtu_centre[1]-4*widnine],
    [right_edge,chengtu_centre[1]-3*widnine],
    [right_edge,chengtu_centre[1]-2*widnine],
    [right_edge,chengtu_centre[1]-1*widnine],
    [right_edge,chengtu_centre[1]],
    [right_edge,chengtu_centre[1]+1*widnine],
    [right_edge,chengtu_centre[1]+2*widnine],
    [right_edge,chengtu_centre[1]+3*widnine],
    [right_edge,chengtu_centre[1]+4*widnine],
  ];

  disishengjin=[
    [right_edge-widnine,chengtu_centre[1]-2.4*widnine],
    [right_edge-widnine,chengtu_centre[1]-0.8*widnine],
    [right_edge-widnine,chengtu_centre[1]+0.8*widnine],
    [right_edge-widnine,chengtu_centre[1]+2.4*widnine],
  ];

  fullgua=[
    tianyishengshui,
    diershenghuo,
    tiansanshengmu,
    disishengjin,
    tianwushengtu,
    diliuchengshui,
    tianqichenghuo,
    dibachengmu,
    tianjiuchengjin,
    dishichengtu
  ];

console.log(yao)
yaofour=fourgua(yao)
console.log(yaofour)


  tiandi=gettiandi(yaofour[0]);

  //tiandi=ceil(random(0,1)*10)-1;
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos1=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  vertpos1next=[
    fullgua[tiandi][(shengchengX+1) % (tiandi+1)][0],
    fullgua[tiandi][(shengchengY+1) % (tiandi+1)][1],
  ]

  tiandi=gettiandi(yaofour[1]);
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos2=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  vertpos2next=[
    fullgua[tiandi][(shengchengX+1) % (tiandi+1)][0],
    fullgua[tiandi][(shengchengY+1) % (tiandi+1)][1],
  ]

  tiandi=gettiandi(yaofour[2]);
  shengchengX=ceil(random(0,tiandi+0.00001))-1;

  tiandiY=ceil(random(0,1)*10)-1;
  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos3=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  vertpos3next=[
    fullgua[tiandi][(shengchengX+1) % (tiandi+1)][0],
    fullgua[tiandi][(shengchengY+1) % (tiandi+1)][1],
  ]

  tiandi=gettiandi(yaofour[3]);
  shengchengX=ceil(random(0,tiandi+0.00001))-1;
shengchengY=ceil(random(0,tiandi+0.00001))-1;



  vertpos4=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  vertpos4next=[
    fullgua[tiandi][(shengchengX+1) % (tiandi+1)][0],
    fullgua[tiandi][(shengchengY+1) % (tiandi+1)][1],
  ]



  points=[
    [vertpos1[0],vertpos1[1]],
      [vertpos2[0],vertpos2[1]],
        [vertpos4[0],vertpos4[1]],
        //  [vertpos4[0],vertpos4[1]],
  ];

    rc.polygon(points, {
      fill: random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]),
      fillStyle: random(["hachure"]),
      fillWeight: 10*random(0.05,0.1),
      hachureAngle: random(0,180),
      stroke: "transparent",
    });

    points=[
      [vertpos1next[0],vertpos1next[1]],
        [vertpos2next[0],vertpos2next[1]],
          [vertpos4next[0],vertpos4next[1]],
          //  [vertpos4[0],vertpos4[1]],
    ];

      rc.polygon(points, {
        fill: random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]),
        fillStyle: random(["hachure"]),
        fillWeight: 10*random(0.05,0.1),
        hachureAngle: random(0,180),
        stroke: "transparent",
      });

  drawGate(vertpos1,vertpos2,vertpos3)


}

function exportImage() {
  save(`hehua_${fxhash}.png`)
}



function keyReleased() {
  "1" == key && exportImage()
}

function gettiandi(yaofour){
  if (yaofour=="kun") return 0;
  else if (yaofour=="xun") return 1;
  else if (yaofour=="li") return 2;
    else if (yaofour=="dui") return 3;
      else if (yaofour=="gen") return 5;
        else if (yaofour=="kan") return 6;
          else if (yaofour=="zhen") return 7;
          else return 8;
}

function fourgua(yao){
  let yaofour=[]
for (k=0;k<4;k++){
yaofour[k]=yao2gua([yao[k],yao[k+1],yao[k+2]])
}
return yaofour
}

function yao2gua(yaoyao){
  yaothree3 = createVector(yaoyao[0],yaoyao[1],yaoyao[2]);
  if (yaothree3.equals([1,1,1])){
    return "qian";
  }else if(yaothree3.equals([1,1,0])){
    return "dui"
  }else if (yaothree3.equals([0,0,0])){
    return "kun"
  }else if (yaothree3.equals([1,0,1])){
    return "li"
  }else if (yaothree3.equals([0,1,1])){
    return "xun"
  }else if (yaothree3.equals([1,0,0])){
    return "zhen"
  }else if (yaothree3.equals([0,0,1])){
    return "gen"
  }else return "kan"
}

function drawFlower(coloring,thick,y1){
  //console.log(y1)
  offset=random(50,100);
  framepoints=[
    [0,0],
    [0,3000],
    [3000,3000],
    // [3000,y1+offset],
    // [0,y1+offset],
    // [0,y1],
    // [3000,y1],
    [3000,0],
    [0,0]
  ];
  rc.polygon(framepoints, {
    fill: random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]),
    fillStyle: random(["hachure"]),
    fillWeight: thick*random(0.05,0.1),
    hachureAngle: random(0,180),
    stroke: "transparent",
  });
  rc.polygon(framepoints, {
    fill: random([colors.sand1,colors.sand1,colors.sea2,colors.sea1,colors.sand2]),
    fillStyle: random(["hachure"]),
    fillWeight: thick*random(0.05,0.1),
    hachureAngle: random(0,180),
    stroke: "transparent",
  });
  rc.polygon(framepoints, {
    fill: random([colors.sand1,colors.sand1,colors.sea2,colors.sea1,colors.sand2]),
    fillStyle: random(["hachure"]),
    fillWeight: thick*random(0.05,0.1),
    hachureAngle: random(0,180),
    stroke: "transparent",
  });

  //
  // rc.polygon(framepoints, {
  //   fill: random([colors.sand1,colors.sand1,colors.sand1,colors.sand1,colors.sand2]),
  //   fillStyle: random(["hachure"]),
  //   fillWeight: thick*random(0.11,0.2),
  //   hachureAngle: random(0,180),
  //   stroke: "transparent",
  // });
  // rc.polygon(framepoints, {
  //   fill: random([colors.sand1,colors.sand1,colors.sand1,colors.sand1,colors.sand2]),
  //   fillStyle: random(["hachure"]),
  //   fillWeight: thick*random(0.11,0.2),
  //   hachureAngle: random(0,180),
  //   stroke: "transparent",
  // });
  // rc.polygon(framepoints, {
  //   fill: random([colors.sand1,colors.sand1,colors.sand1,colors.sand2,colors.sand2]),
  //   fillStyle: random(["hachure"]),
  //   fillWeight: thick*random(0.11,0.2),
  //   hachureAngle: random(0,180),
  //   stroke: "transparent",
  // });
  // rc.polygon(framepoints, {
  //   fill: random([colors.sand1,colors.sand1,colors.sand1,colors.sand2,colors.sand2]),
  //   fillStyle: random(["hachure"]),
  //   fillWeight: thick*random(0.11,0.2),
  //   hachureAngle: random(0,180),
  //   stroke: "transparent",
  // });

}
//
function drawFrames(coloring,thick){


  tiandi=random([4,9]);
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos1a=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  tiandi=random([4,9]);
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos2a=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  tiandi=random([4,9]);
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos3a=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]

  tiandi=random([4,9]);
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  vertpos4a=[
    fullgua[tiandi][shengchengX][0],
    fullgua[tiandi][shengchengY][1],
  ]


  framepointRandom=[
    //  [random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])],
    // vertpos1=[tianyishengshui[0][0],tianyishengshui[0][1]],
    // vertpos2=[diershenghuo[0][0],diershenghuo[0][1]],
    // vertpos3=[dishichengtu[0][0],dishichengtu[0][1]],
    // vertpos4=[dibachengmu[6][0],dibachengmu[6][1]],

    vertpos1,
    vertpos1a,
    vertpos2,
    vertpos2a,
    vertpos3,
    vertpos3a,
    vertpos4,
    vertpos4a,
    //  [random([0,300,800,2200,2800,3000]),random([0,300,800,2200,2800,3000])],
  ];

  rc.polygon(framepointRandom, {
    fill: coloring,
    fillStyle: random(["hachure"]),
    fillWeight: thick*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",
  });
  rc.polygon(framepointRandom, {
    fill: coloring,
    fillStyle: random(["hachure"]),
    fillWeight: thick*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",
  });
  rc.polygon(framepointRandom, {
    fill: coloring,
    fillStyle: random(["hachure"]),
    fillWeight: thick*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",
  });
  // rc.polygon(framepointRandom, {
  //   fill: coloring,
  //   fillStyle: random(["hachure"]),
  //   fillWeight: thick*random(0.11,0.3),
  //   hachureAngle: random(0,180),
  //   stroke: "transparent",
  // });
  // rc.polygon(framepointRandom, {
  //   fill: coloring,
  //   fillStyle: random(["hachure"]),
  //   fillWeight: thick*random(0.11,0.3),
  //   hachureAngle: random(0,180),
  //   stroke: "transparent",
  // });
}

function carve(x,y,vertpos1,vertpos2,vertpos3,vertpos4){

  let width =2800
  let height = 2800

  left_x = int(width * -0.5)
  right_x = int(width * 1.5)
  top_y = int(height * -0.5)
  bottom_y = int(height * 1.5)
  resolution = int(width * 0.01)


  num_columns = 3*int((right_x - left_x) / resolution)
  num_rows = 3*int((bottom_y - top_y) / resolution)
  //	print('num_columns'+ num_columns)
  //	print('num_rows'+ num_rows)


  // initialise field
  let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
  let m = Array2D(num_columns,num_rows);

  //print("m length "+m.length)

  gain=int(random(-3.1,3.1));
  bend=random(0.12,0.13);
  offset=random(0,num_rows)
  if (random(0,1)<0.99) {
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
    quantum=random(2,3);
    for (let column=0; column<num_columns; column++) {
      for (row=0; row<num_rows; row++) {

        angle = int(quantum*((row-offset-gain*bend*column) / (num_rows*bend))/quantum) * PI*gain
        // print('angle'+angle)
        m[column][row] = angle
      }
    }
  }

  //print("angle"+m[100][100])

  x = 100+random(500,1900)
  y = 100+random(500,1900)
  let num_steps=100

  strokeWeight(0.1)
  dice=random(0,1)
  if (dice<0.95){
    noFill()
    stroke(random([coloring.color1,coloring.color2,coloring.color3]))
  }
  else if (dice>0.999995){
    //fill(random([coloring.color1,coloring.color2,coloring.color3]))
    noStroke();
    stroke(random([coloring.color1,coloring.color2,coloring.color3]))

    noFill()
  }
  else {
    //fill(random([coloring.color1,coloring.color2,coloring.color3]))
    stroke(random([coloring.color1,coloring.color2,coloring.color3]))
    noFill()
  }

  //vertex(100,100)
  //vertex(1100,1300)
  beginShape()
  let dice2=random(0,1)
  shapesize=random(330,500);
  stepsize=random(0.1,0.3);
  curvelegnth=50+random(250,400);
  stroke(random([coloring.color1,coloring.color2,coloring.color3]))
  for (k=0;k<curvelegnth;k+=1+random(0,3)) {
    strokeWeight(0.1+random(0,0.5))


    x_offset = x - left_x
    y_offset = y - top_y
    if (x_offset<4500 && y_offset< 4500 && x_offset>0 && y_offset>0  ) {
      column_index = int(x_offset / resolution)
      row_index = int(y_offset / resolution)
      //	print(column_index,row_index)
      grid_angle = m[column_index][row_index]
      x_step = stepsize*resolution * cos(grid_angle)
      y_step = stepsize*resolution * sin(grid_angle)
      //	vertex(x, y)
      strokeWeight(0.1)
      //draw shapes
      if (dice2>0.50){
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        noFill()
        //rect(x,y,shapesize,shapesize)
        vertex(x, y)
        //      strokeWeight(0.1/k+0.1/(curvelegnth-k))
        line(x,y,vertpos1[0],vertpos1[1])
        line(x,y,vertpos2[0],vertpos2[1])
        line(x,y,vertpos3[0],vertpos3[1])
        line(x,y,vertpos4[0],vertpos4[1])
      }
      else if (dice2<0.20 && dice2>0.1){
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        //fill(random([coloring.color1,coloring.color2,coloring.color3]))
        //	ellipse(x,y,shapesize,shapesize)
        //	rect(x,y,shapesize,shapesize)
        vertex(x, y)
        //      strokeWeight(0.1/k+0.1/(curvelegnth-k))
        line(x,y,vertpos1[0],vertpos1[1])
        line(x,y,vertpos2[0],vertpos2[1])
        line(x,y,vertpos3[0],vertpos3[1])
        line(x,y,vertpos4[0],vertpos4[1])




      }
      else if (dice2<0.30 && dice2>0.2){
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        //	fill(255)
        //	fill(random([coloring.color1,coloring.color2,coloring.color3]))
        //	ellipse(x,y,shapesize,shapesize)
        noFill()
        rect(x,y,shapesize,random(1,1)*shapesize)
        vertex(x, y)
        //      strokeWeight(0.1/k+0.1/(curvelegnth-k))
        line(x,y,vertpos1[0],vertpos1[1])
        line(x,y,vertpos2[0],vertpos2[1])
        line(x,y,vertpos3[0],vertpos3[1])
        line(x,y,vertpos4[0],vertpos4[1])

      }
      else if (dice2<0.9){
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        //				fill(0)
        noFill()
        //strokeWeight(0.1/k+0.1/(curvelegnth-k))
        vertex(x, y)
        line(x,y,vertpos1[0],vertpos1[1])
        line(x,y,vertpos2[0],vertpos2[1])
        line(x,y,vertpos3[0],vertpos3[1])
        line(x,y,vertpos4[0],vertpos4[1])


      }
      else {
        //	noFill()
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        //fill(0)
        noFill()
        strokeWeight(0.2)
        rect(x,y,random(1,1)*shapesize,shapesize)
        // line(x,y,vertpos1[0],vertpos1[1])
        // line(x,y,vertpos2[0],vertpos2[1])
        //	vertex(x, y)

      }
      //
      //pop()

      x = x + x_step+int(random(0,1))
      y = y + y_step+int(random(0,1))


      circle(x,y,3)
    }
    stroke(random([coloring.color1,coloring.color2,coloring.color3]))
    noFill()
    strokeWeight(0.1)
    endShape()
  }
  posi=[x,y];
  return posi
}




function carve3(x,y){
  let width =2500
  let height = 2500
  left_x = int(width * -0.5)
  right_x = int(width * 1.5)
  top_y = int(height * -0.5)
  bottom_y = int(height * 1.5)
  resolution = int(width * 0.01)
  num_columns = 3*int((right_x - left_x) / resolution)
  num_rows = 3*int((bottom_y - top_y) / resolution)
  //	print('num_columns'+ num_columns)
  //	print('num_rows'+ num_rows)
  // initialise field
  let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
  let m = Array2D(num_columns,num_rows);
  //print("m length "+m.length)
  gain=int(random(-3.1,3.1));
  bend=random(0.012,0.013);
  offset=random(0,num_rows)
  if (random(0,1)<0.9) {
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
    quantum=random(2,3);
    for (let column=0; column<num_columns; column++) {
      for (row=0; row<num_rows; row++) {
        angle = int(quantum*((row-offset-gain*bend*column) / (num_rows*bend))/quantum) * PI*gain
        // print('angle'+angle)
        m[column][row] = angle
      }
    }
  }
  //print("angle"+m[100][100])
  tiandi=random([0,2,1,3])
  shengchengX=ceil(random(0,tiandi+0.00001))-1;


  shengchengY=ceil(random(0,tiandi+0.00001))-1;

  x = fullgua[tiandi][shengchengX][0]
  y= fullgua[tiandi][shengchengY][1]
  let num_steps=100
  strokeWeight(0.1)
  dice=random(0,1)
  if (dice<0.95){
    noFill()
    stroke(random([coloring.color1,coloring.color2,coloring.color3]))
  }
  else if (dice>0.999995){
    //fill(random([coloring.color1,coloring.color2,coloring.color3]))
    noStroke();
    noFill()
  }
  else {
    //fill(random([coloring.color1,coloring.color2,coloring.color3]))
    stroke(random([coloring.color1,coloring.color2,coloring.color3]))
    noFill()
  }

  //vertex(100,100)
  //vertex(1100,1300)
  beginShape()
  let dice2=random(0,1)
  shapesize=random(330,500);
  stepsize=random(0.1,0.3);
  stroke(random([coloring.color1,coloring.color2,coloring.color3]))
  for (k=0;k<50+random(25,100);k+=1+random(0,3)) {
    strokeWeight(0.8+random(0,0.5))
    x_offset = x - left_x
    y_offset = y - top_y
    if (x_offset<3100 && y_offset< 3100 && x_offset>0 && y_offset>0  ) {
      column_index = int(x_offset / resolution)
      row_index = int(y_offset / resolution)
      //	print(column_index,row_index)
      grid_angle = m[column_index][row_index]
      x_step = stepsize*resolution * cos(grid_angle)
      y_step = stepsize*resolution * sin(grid_angle)
      //	vertex(x, y)
      //draw shapes
      if (dice2>0.50){
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        noFill()
        //		rect(x,y,shapesize,shapesize)
        //rect(x,y,shapesize,shapesize)
        vertex(x, y)
      }
      else if (dice2<0.20 && dice2>0.1){
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        //fill(random([coloring.color1,coloring.color2,coloring.color3]))
        //	ellipse(x,y,shapesize,shapesize)
        //	rect(x,y,shapesize,shapesize)
        //			rect(x,y,shapesize,shapesize)
        vertex(x, y)

      }
      else if (dice2<0.30 && dice2>0.2){
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        //	fill(255)
        //	fill(random([coloring.color1,coloring.color2,coloring.color3]))
        //	ellipse(x,y,shapesize,shapesize)
        noFill()
        //	rect(x,y,shapesize,random(1,1)*shapesize)
        vertex(x, y)
      }
      else if (dice2<0.92){
        //	else if (dice2<0.7){
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        //				fill(0)
        noFill()
        vertex(x, y)
      }
      else {
        //	noFill()
        stroke(random([coloring.color1,coloring.color2,coloring.color3]))
        //fill(0)
        noFill()
        rect(x,y,random(1,1)*shapesize,shapesize)
        //	vertex(x, y)
      }
      //
      //pop()
      x = x + x_step+int(random(0,1))
      y = y + y_step+int(random(0,1))
      circle(x,y,3)
    }
    stroke(random([coloring.color1,coloring.color2,coloring.color3]))

    noFill()
    endShape()
  }

  posi=[x,y];
  return posi
}

function drawhetu(){
  raddd=600;
  chengtu_centre=[1800,3200];
  dishichengtu=[
    [chengtu_centre[0]+raddd*cos(1*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(1*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(2*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(2*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(3*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(3*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(4*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(4*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(5*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(5*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(6*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(6*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(7*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(7*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(8*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(8*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(9*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(9*2*PI/10)],
    [chengtu_centre[0]+raddd*cos(10*2*PI/10),chengtu_centre[1]+1.8*raddd*sin(10*2*PI/10)],
  ];

  tianwushengtu=[
    [chengtu_centre[0]-300,chengtu_centre[1]],
    [chengtu_centre[0],chengtu_centre[1]-500],
    [chengtu_centre[0],chengtu_centre[1]],
    [chengtu_centre[0]+300,chengtu_centre[1]],
    [chengtu_centre[0],chengtu_centre[1]+500],
  ];

  tianyishengshui=[
    [chengtu_centre[0],chengtu_centre[1]+2000]
  ];

  widsix=500;
bottom_edge=2800;
  diliuchengshui=[
    [chengtu_centre[0]-2.5*widsix,chengtu_centre[1]+bottom_edge],
    [chengtu_centre[0]-1.5*widsix,chengtu_centre[1]+bottom_edge],
    [chengtu_centre[0]-0.5*widsix,chengtu_centre[1]+bottom_edge],
    [chengtu_centre[0]+0.5*widsix,chengtu_centre[1]+bottom_edge],
    [chengtu_centre[0]+1.5*widsix,chengtu_centre[1]+bottom_edge],
    [chengtu_centre[0]+2.5*widsix,chengtu_centre[1]+bottom_edge],
  ];

left_edge=200;
wid8=370;
  dibachengmu=[
    [left_edge,chengtu_centre[1]-7*wid8],
    [left_edge,chengtu_centre[1]-5*wid8],
    [left_edge,chengtu_centre[1]-3*wid8],
    [left_edge,chengtu_centre[1]-wid8],
    [left_edge,chengtu_centre[1]+wid8],
    [left_edge,chengtu_centre[1]+3*wid8],
    [left_edge,chengtu_centre[1]+5*wid8],
    [left_edge,chengtu_centre[1]+7*wid8],
  ];

  tiansanshengmu=[
    [left_edge+400,chengtu_centre[1]-4.6*wid8],
    [left_edge+400,chengtu_centre[1]],
    [left_edge+400,chengtu_centre[1]+4.6*wid8],
  ];
wid6=450;
  tianqichenghuo=[
    [chengtu_centre[0]-3*wid6,200],
    [chengtu_centre[0]-2*wid6,200],
    [chengtu_centre[0]-wid6,200],
    [chengtu_centre[0],200],
    [chengtu_centre[0]+wid6,200],
    [chengtu_centre[0]+2*wid6,200],
    [chengtu_centre[0]+3*wid6,200],
  ];

  diershenghuo=[
    [chengtu_centre[0]-400,801],
    [chengtu_centre[0]+400,801]
  ];
  widnine=660
  right_edge=3400
  tianjiuchengjin=[
    [right_edge,chengtu_centre[1]-4*widnine],
    [right_edge,chengtu_centre[1]-3*widnine],
    [right_edge,chengtu_centre[1]-2*widnine],
    [right_edge,chengtu_centre[1]-1*widnine],
    [right_edge,chengtu_centre[1]],
    [right_edge,chengtu_centre[1]+1*widnine],
    [right_edge,chengtu_centre[1]+2*widnine],
    [right_edge,chengtu_centre[1]+3*widnine],
    [right_edge,chengtu_centre[1]+4*widnine],
  ];

  disishengjin=[
    [right_edge-widnine,chengtu_centre[1]-2.4*widnine],
    [right_edge-widnine,chengtu_centre[1]-0.8*widnine],
    [right_edge-widnine,chengtu_centre[1]+0.8*widnine],
    [right_edge-widnine,chengtu_centre[1]+2.4*widnine],
  ];

  rc.polygon(dishichengtu,{
    fill: coloring.color1,
    fillStyle: random(["hachure"]),
    fillWeight: 2*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",
  }
)

fill(coloring.color1)
for (k=0;k<10;k++){
  rc.circle(dishichengtu[k][0],dishichengtu[k][1],60,{
    fill: coloring.color1,
    fillStyle: random(["hachure"]),
    fillWeight: 4*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",}
  )
}

fill(colors.sand1)
for (k=0;k<10;k++){
  rc.circle(dishichengtu[k][0],dishichengtu[k][1],50,{
    fill: colors.sand1,
    fillStyle: random(["hachure"]),
    fillWeight: 4*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",}
  )
}

fill(colors.sand1)
for (k=0;k<5;k++){
  rc.circle(tianwushengtu[k][0],tianwushengtu[k][1],50,{
    fill: colors.sand1,
    fillStyle: random(["hachure"]),
    fillWeight: 4*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",}
  )
}

fill(coloring.color1)
for (k=0;k<1;k++){
  rc.circle(tianyishengshui[k][0],tianyishengshui[k][1],60,{
    fill: coloring.color1,
    fillStyle: random(["hachure"]),
    fillWeight: 4*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",}
  )
}

fill(colors.sand1)
for (k=0;k<1;k++){
  rc.circle(tianyishengshui[k][0],tianyishengshui[k][1],50,{
    fill: colors.sand1,
    fillStyle: random(["hachure"]),
    fillWeight: 4*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",}
  )
}

fill(coloring.color1)
for (k=0;k<6;k++){
  rc.circle(diliuchengshui[k][0],diliuchengshui[k][1],50,{
    fill: coloring.color1,
    fillStyle: random(["hachure"]),
    fillWeight: 4*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",}
  )
}


fill(coloring.color1)
for (k=0;k<8;k++){
  rc.circle(dibachengmu[k][0],dibachengmu[k][1],50,{
    fill: coloring.color1,
    fillStyle: random(["hachure"]),
    fillWeight: 4*random(0.11,0.3),
    hachureAngle: random(0,180),
    stroke: "transparent",}
  )
}


fill(coloring.color1)
for (k=0;k<3;k++){
  rc.circle(tiansanshengmu[k][0],tiansanshengmu[k][1],60,
    {
      fill: coloring.color1,
      fillStyle: random(["hachure"]),
      fillWeight: 4*random(0.11,0.3),
      hachureAngle: random(0,180),
      stroke: "transparent",})
}

fill(colors.sand1)
for (k=0;k<3;k++){
  rc.circle(tiansanshengmu[k][0],tiansanshengmu[k][1],50,
    {
      fill: colors.sand1,
      fillStyle: random(["hachure"]),
      fillWeight: 8*random(0.11,0.3),
      hachureAngle: random(0,180),
      stroke: "transparent",})
}

fill(coloring.color1)
for (k=0;k<2;k++){
  rc.circle(diershenghuo[k][0],diershenghuo[k][1],50,
    {
      fill: coloring.color1,
      fillStyle: random(["hachure"]),
      fillWeight: 4*random(0.11,0.3),
      hachureAngle: random(0,180),
      stroke: "transparent",})
}


fill(coloring.color1)
for (k=0;k<7;k++){
  rc.circle(tianqichenghuo[k][0],tianqichenghuo[k][1],60,
    {
      fill: coloring.color1,
      fillStyle: random(["hachure"]),
      fillWeight: 4*random(0.11,0.3),
      hachureAngle: random(0,180),
      stroke: "transparent",})
}

fill(colors.sand1)
for (k=0;k<7;k++){
  rc.circle(tianqichenghuo[k][0],tianqichenghuo[k][1],50,
    {
      fill: colors.sand1,
      fillStyle: random(["hachure"]),
      fillWeight: 8*random(0.11,0.3),
      hachureAngle: random(0,180),
      stroke: "transparent",})
}


fill(coloring.color1)
for (k=0;k<4;k++){
  rc.circle(disishengjin[k][0],disishengjin[k][1],50,
    {
      fill: coloring.color1,
      fillStyle: random(["hachure"]),
      fillWeight: 4*random(0.11,0.3),
      hachureAngle: random(0,180),
      stroke: "transparent",})
}


fill(coloring.color1)
for (k=0;k<9;k++){
  rc.circle(tianjiuchengjin[k][0],tianjiuchengjin[k][1],60,
    {
      fill: coloring.color1,
      fillStyle: random(["hachure"]),
      fillWeight: 4*random(0.11,0.3),
      hachureAngle: random(0,180),
      stroke: "transparent",})
}

fill(colors.sand1)
for (k=0;k<9;k++){
  rc.circle(tianjiuchengjin[k][0],tianjiuchengjin[k][1],50,
    {
      fill: colors.sand1,
      fillStyle: random(["hachure"]),
      fillWeight: 8*random(0.11,0.3),
      hachureAngle: random(0,180),
      stroke: "transparent",})
}

// console.log(tianyishengshui)
}
//     License : Copyright (C) 2022 Jimi Y. C. Wen . All rights reserved.\n
//     Licensed under CC BY-NC-SA 4.0
//    https://github.com/jimiwen
