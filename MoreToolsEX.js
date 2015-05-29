//MoreToolsEX ver 1.1.1b dev2 soft
//by 7thGrader
var author = "7thGrader";
var version = "1.1.1b dev2";

function newLevel()
{
clientMessage("MoreToolsEX 1.1.1b Dev-Build 1 by 7thGrader Loaded!");
clientMessage("Warning : This version may contain some bugs!");
}

ModPE.setItem(407, "ruby", 0, "PowerGem");
ModPE.setFoodItem(408,"magma_cream",0, 9001,"InstaHeal");
ModPE.setItem(409, "blaze_rod", 0, "SuperStick");
ModPE.setItem(410, "ender_eye", 0, "EnderWings");
ModPE.setItem(411, "book_enchanted", 0, "TimeSpellFast");
ModPE.setItem(412, "book_enchanted", 0, "TimeSpellNormal");
ModPE.setItem(413, "book_enchanted", 0, "TimeSpellSlow");
ModPE.setItem(414, "nether_star", 0, "BlockExtractor");
Item.addFurnaceRecipe(57, 407, 1);
Item.addShapedRecipe(408, 32, 0, ["ttt", "jpj", "ttt"], ["j", 407, 0, "t", 354, 0, "p", 293, 0]);
Item.addShapedRecipe(409, 1, 0, ["jpj", "tjt", "jjj"], ["j", 407, 0, "t", 46, 0, "p", 278, 0]);
Item.addShapedRecipe(410, 1, 0, ["jlj", "ltl", "jjj"], ["j", 407, 0, "t", 276, 0, "l", 325, 10]);
Item.addShapedRecipe(411, 1, 0, ["jlj", "ltl", "jjj"], ["j", 407, 0, "t", 277, 0, "l", 347, 0]);
Item.addShapedRecipe(412, 1, 0, ["jlj", "ltl", "jjj"], ["j", 407, 0, "t", 279, 0, "l", 347, 0]);
Item.addShapedRecipe(413, 1, 0, ["jlj", "ltl", "jjj"], ["j", 407, 0, "t", 247, 0, "l", 347, 0]);
Item.addShapedRecipe(414, 1, 0, ["jlj", "ltl", "jjj"], ["j", 407, 0, "t", 278, 0, "l", 388, 0]);

function useItem(x,y,z,i,b)
{
if (i == 409)
{
explode(x,y,z,5);
}
if (i == 410)
{
clientMessage("Flight Enabled!");
Player.setCanFly(1/0);
}
if (i == 411)
{
ModPE.setGameSpeed(40);
}
if (i == 412)
{
ModPE.setGameSpeed(20);
}
if (i == 413)
{
ModPE.setGameSpeed(10);
}
if (i == 414)
{
Level.destroyBlock(x,y,z,true)
}
}

/*
Tested : 3cf975f47c7489ff5565e72b19db581c
*/
