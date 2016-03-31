var canvas;
var ctx;
var HEIGHT;
var WIDTH;

var init = false;
var origin = {x:50,y:50};
var starting_width;
var time;

function restart(){
  if(!init){
  canvas = document.getElementById("output");
  ctx = canvas.getContext("2d");
  HEIGHT = canvas.height;
  WIDTH = canvas.width;
  ctx.lineWidth = 2;
  }
  drawStaff(ctx);
  drawCleff("G-Clef");
  drawSignature(4,4);
  //drawCleff("F-Clef");
  starting_width = 0;
  time = 0;
  init = true;
}
/*var ALLNOTES = [
  "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
  "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5",
  "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6",
  "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7",
];*/
var NOTEPOS = [
  "A3", "B3",
  "C4", "D4", "E4", "F4", "G4", "A4", "B4",
  "C5", "D5", "E5", "F5", "G5", "A5", "B5",
  "C6"
];
function drawStaff(ctx){
  //White Background
  ctx.fillStyle = "white";
  ctx.rect(0, 0, WIDTH, HEIGHT);
  ctx.fill();
  //Horizontal
  for(var i = 0; i < 5; i++){
    ctx.moveTo(origin.x,origin.y+i*25);
    ctx.lineTo(WIDTH-50,origin.y+i*25);
    ctx.stroke();
  }
  //Vertical
  for (var i = 0; i < WIDTH-50; i+=500) {
    ctx.moveTo(origin.x+i,origin.y)
    ctx.lineTo(origin.x+i,HEIGHT-50)
    ctx.stroke();
  }
}
function drawCleff(type){
  if(type === 'G-Clef'){
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, origin.x-15, origin.y-38,110,188);
    }
    img.src = "https://upload.wikimedia.org/wikipedia/commons/e/e8/G-clef.svg";
  }else if (type === 'F-Clef') {
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, origin.x+5, origin.y,72,80);
    }
    img.src = "https://upload.wikimedia.org/wikipedia/commons/c/c5/FClef.svg";
  }
}
function drawSignature(up, down){
  ctx.fillStyle = "black";
  ctx.font = "65px WildWest"
  ctx.fillText(up, origin.x+100, origin.y+45);
  ctx.fillText(down, origin.x+100, origin.y+95);
}
function drawNote(type, note){
  var img = new Image();
  //notePos == 0 is E5
  var notePos = -1;
  var isSharp = note.charAt(1) == '#';
  if(isSharp){
    note = note.charAt(0) + note.charAt(2);
  }

  NOTEPOS.find(function(elem, index){
    if(elem == note){
      notePos *= index-11;
      return true;
    }
  });
  if(notePos != -1){
    img.onload = function() {
      ctx.drawImage(img, origin.x+150+25*time, origin.y+25*0.5*notePos,47,25);
      if(isSharp){
        drawSharp(time,notePos)
      }
      switch (type) {
        case "whole":
          time+=4;
          break;
        case "half":
          time+=2;
          break;
        case "quarter":
          time++;
          break;
        case "eighth":
          time+=0.5;
          break;
        default:
      }
    }
    img.src = "https://upload.wikimedia.org/wikipedia/commons/5/53/WholeNote.svg";
  }
}
function drawSharp(time,notePos){
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(this,origin.x+175+25*time+25, origin.y+25*0.5*notePos,20, 20);
  }
  img.src = "https://upload.wikimedia.org/wikipedia/commons/a/a6/Sharp.svg";
}
