// by 7thGrader
// Read LICENSE before using it
// I know it won't work 
// copy Source code into API.js (If function conflict occurs, just copy what's inside function)

var winrate = 0.44;
var lottowinrate = 0.001;
var lottoprice = 50;
var lottowin = 50000;

var Gamble = {
normalGamble:function(gamblemoney)
{
if(Economy.getMoney>=gamblemoney) {
if(Math.random() <= winrate)
{
Economy.giveMoney(gamblemoney);
clientMessage("Gamble Success!");
}
else {
Economy.takeMoney(gamblemoney);
clientMessage("Gamble Fail..");
}
}
return;
},
buyLottery:function()
{
if(Economy.getMoney>=lottoprice)
{
if(Math.random<=lottowinrate)
{
Economy.giveMoney(lottowin);
clientMessage("Lotto Win!");
}
else clientMessage("Nothing :(");
}
}
}

function useItem(x, y, z, itemId, blockId, side)
{
if(Level.getSignText(x, y, z, 0)=="[Gamble]");
{
Gamble.normalGamble(Level.getSignText(x, y, z, 1));
}
else if(Level.getSignText(x, y, z, 0)=="[Lottery]");
{
Gamble.buyLottery();
}
}
