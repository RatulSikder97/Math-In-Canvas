let  newGame = new Game()
newGame.init()



let x=0
newGame.context.lineTo(0,180)

setInterval(() => {
    // newGame.clearRender()

    newGame.context.beginPath()
    newGame.context.lineJoin = 'round';
    newGame.context.moveTo(x-1,180+Math.sin(Math.PI*(x-1)/60)*100)
    newGame.context.lineTo(x,180+Math.sin(Math.PI*x/60)*100)
    newGame.context.strokeStyle="#000"
    newGame.context.stroke()

    console.log(x, Math.sin(Math.PI*x/360)*120)
    if(x < newGame.width) {
        x+=1
    } 
}, 1000/30)

// for(x=0; x<=360; x+=1) { // 360 steps (degrees) for entire sine period
//     y = 180.0 - Math.sin(x*Math.PI/180)*120; // calculate y flipped horizontally, converting from DEG to RADIAN
//     newGame.context.lineTo(x,y); // draw the point
//     newGame.context.stroke();
// }
