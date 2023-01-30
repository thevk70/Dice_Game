let x = Math.floor((Math.random() * 6) + 1);
let y = Math.floor((Math.random() * 6) + 1);
function check()
{
   document.querySelector(".img1").setAttribute("src","images/dice"+ x +".png");
   document.querySelector(".img2").setAttribute("src","images/dice"+ y +".png");
   if(x>y)
   {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
   }
   else if(x<y)
   {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
   }
   else
   {
    document.querySelector("h1").innerHTML = "Draw!";
   }
}
check();