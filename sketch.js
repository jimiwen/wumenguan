let seasonpicker= Xrandom(0,1 );
let rc;
let yao1=[0,0,0,0,0,0];
let yao2=[0,0,0,0,0,0];
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

let odds=0.5;

if (yaoone<odds){
  yao1[0]=0;
}else{
  yao1[0]=1;
};

if (yaotwo<odds){
  yao1[1]=0;
}else{
  yao1[1]=1;
}

if (yaothree<odds){
  yao1[2]=0;
}else{
  yao1[2]=1;
}

if (yao4<odds){
  yao1[3]=0;
}else{
  yao1[3]=1;
}

if (yaofive<odds){
  yao1[4]=0;
}else{
  yao1[4]=1;
}
if (yaosix<odds){
  yao1[5]=0;
}else{
  yao1[5]=1;
}


console.log(yao1)

if (yao1[0]==yao1[1] && yao1[1]==yao1[2] && yao1[1]==1){
  yao1[1]=0;
}else if (yao1[0]==yao1[1] && yao1[1]==yao1[2] && yao1[1]==0){
  yao1[1]=1;
}

if (yao1[3]==yao1[4] && yao1[4]==yao1[5] && yao1[5]==1){
  yao1[5]=0;
}else if (yao1[3]==yao1[4] && yao1[4]==yao1[5] && yao1[5]==0){
    yao1[5]=1;
}



if (strokenumber<0.3){
  aa=3;
}else if (strokenumber<0.85){
  aa=6;
}else{
  aa=9;
}



window.$fxhashFeatures = {
  "Being": getMoodStyle(seasonpicker),
  "Upper Gua": getLowerGuaStyle(yaoone,yaotwo,yaothree),
  "Lower Gua": getLowerGuaStyle(yao4,yaofive,yaosix),
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
  if (value<0.25) return '魂 intution';
  else if (value<0.50) return '我 id'
  else if (value<0.75) return '神 spirit'
  else return '魄 reflection'
}



function getLowerGuaStyle(yao4,yaofive,yaosix){
let yaoL=[0 ,0 ,0];

  if (yao4<odds){
    yaoL[0]=0;
  }else{
    yaoL[0]=1;
  }

  if (yaofive<odds){
    yaoL[1]=0;
  }else{
    yaoL[1]=1;
  }
  if (yaosix<odds){
    yaoL[2]=0;
  }else{
    yaoL[2]=1;
  }

  if (yaoL[0]==0 && yaoL[1]==0 && yaoL[2]==0){
  return "kun earth"
}else if (yaoL[0]==1 && yaoL[1]==0 && yaoL[2]==1){
    return "li fire"
  } else if (yaoL[0]==0 && yaoL[1]==1 && yaoL[2]==1){
    return "xun wind"
  } else if (yaoL[0]==1 && yaoL[1]==0 && yaoL[2]==0){
    return "zhen thunder"
  } else if (yaoL[0]==0 && yaoL[1]==0 && yaoL[2]==1){
    return "gen mountain"
  } else if (yaoL[0]==0 && yaoL[1]==1 && yaoL[2]==0){
    return "kan water"
  } else if (yaoL[0]==1 && yaoL[1]==1 && yaoL[2]==1){
    return "qian heaven"
  } else if (yaoL[0]==1 && yaoL[1]==1 && yaoL[2]==0){
    return "dui swamp"
  }else {
    return "error"
  }
}



if (seasonpicker<0.4){

  // saturated
  colors = {
    main: "#375093",
    bg: "#aea9b0",
    sea1: '#f7e623',
    sea2: '#25702a',
    sand1:'#3f4c66',
    sand2:'#d95a0b',
    body2:'#fd4661',
    body1:'#2f68ad'
  };

  // // baby blue baby purple
  // colors = {
  //   main: "693793",
  //   bg: "#5323d1",
  //   sea1: '#c892c4',
  //   sea2: '#6fc0d9',
  //   sand1:'#d35c61',
  //   sand2:'#51423c',
  //   body2:'#623c94',
  //   body1:'#5ffaf3'
  // };

  // // baby blue baby pink
  // colors = {
  //   main: "#932793",
  //   bg: "#93lsdj",
  //   sea1: '#f892c4',
  //   sea2: '#0fc0d9',
  //   sand1:'#f35c61',
  //   sand2:'#f2483c',
  //   body2:'#f69c94',
  //   body1:'#f4faf3'
  // };


  // //aqua
  // colors = {
  //   main: "#423b40",
  //   bg: "#02040a",
  //   sea1: '#0892c4',
  //   sea2: '#02c0d9',
  //   sand1:'#635c61',
  //   sand2:'#52483c',
  //   body2:'#069c94',
  //   body1:'#64faf3'
  // };

}else if (seasonpicker<0.45){
  //golden tiger 10%
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

  //summer green 5%
  // colors = {
  //   main: "#f7dfdf",
  //   bg: "#692545",
  //   sea1: '#bd112b',
  //   sea2: '#de4573',
  //   sand1:'#3c4d3d',
  //   sand2:'#2d4038',
  //   body2:'#f07832',
  //   body1:'#edaf3b'
  // };

  // baby blue baby purple
  // colors = {
  //   main: "693793",
  //   bg: "#5323d1",
  //   sea1: '#c892c4',
  //   sea2: '#6fc0d9',
  //   sand1:'#d35c61',
  //   sand2:'#51423c',
  //   body2:'#623c94',
  //   body1:'#5ffaf3'
  // };

}else if (seasonpicker<0.60){


  // baby blue baby pink
  colors = {
    main: "#932793",
    bg: "#93lsdj",
    sea1: '#f892c4',
    sea2: '#0fc0d9',
    sand1:'#f35c61',
    sand2:'#f2483c',
    body2:'#f69c94',
    body1:'#f4faf3'
  };


}else{
  //50% winter
  colors = {
    main: "#02040a",
    bg: "#93b9ba",
    sea1: '#199ecf',
    sea2: '#1f1001',
    sand1:'#bd6e2a',
    sand2:'#49c9a9',
    body2:'#cfc508',
    body1:'#d99873'
  };

}


function setup() {
  randomSeed(int(fxrand()*100000000))
  pixelDensity(0.5)
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

console.log(yao1)
yaofour1=fourgua(yao1)
console.log(yaofour1)

//drawGate([100,100],[2000,2000],[3000,3000])



//drawcover(3601, 6401)
//guarotation(fullgua,yaofour1)
 fractalquaqua(fullgua,yaofour1);
drawcover(1000,6000)

 //drawcover()

}

function exportImage() {
  save(`wumen_${fxhash}.png`)
}



function keyReleased() {
  "1" == key && exportImage()
}


function drawcover(lefttop,leftbottom){
  pointcover=[
    [0,0],
    [lefttop,0],
    [lefttop,leftbottom],
    [0,leftbottom]
  ];
  rc.polygon(pointcover, {
    fill: random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]),
    fillStyle: random(["dashed",]),
    fillWeight: 10*random(0.05,0.1),
    hachureAngle: random(70,80),
    stroke: "transparent",
  });
  rc.polygon(pointcover, {
    fill: random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]),
    fillStyle: random(["dashed"]),
    fillWeight: 5*random(0.05,0.1),
    hachureAngle: random(10,180),
    stroke: "transparent",
  });
  rc.polygon(pointcover, {
    fill: random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]),
    fillStyle: random(["dashed"]),
    fillWeight: 10*random(0.05,0.1),
    hachureAngle: random(170,180),
    stroke: "transparent",
  });
  rc.polygon(pointcover, {
    fill: random([colors.body2,colors.body1,colors.sea2,colors.sea1,colors.sand2]),
    fillStyle: random(["dashed"]),
    fillWeight: 1*random(0.05,0.1),
    hachureAngle: random(170,180),
    stroke: "transparent",
  });
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


//     License : Copyright (C) 2022 Jimi Y. C. Wen . All rights reserved.\n
//     Licensed under CC BY-NC-SA 4.0
//    https://github.com/jimiwen
