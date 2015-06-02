//MoreToolsEX ver 1.2b dev9
//by 7thGrader
/*
   Copyright 2015 7thGrader

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0
*/
var author = "7thGrader";
var version = "1.2b dev9";

function newLevel()
{
clientMessage("MoreToolsEX 1.2b Dev-Build 9(soft) by 7thGrader Loaded!");
}

//setitem
ModPE.setItem(407, "ruby", 0, "Power Gem");
ModPE.setFoodItem(408,"magma_cream",0, 9001,"Insta-Heal");
ModPE.setItem(409, "blaze_rod", 0, "Super Stick");
ModPE.setItem(410, "ender_eye", 0, "Ender Wings");
ModPE.setItem(411, "book_enchanted", 0, "TimeSpell(Fast)");
ModPE.setItem(412, "book_enchanted", 0, "TimeSpell(Normal)");
ModPE.setItem(413, "book_enchanted", 0, "TimeSpell(Slow)");
ModPE.setItem(414, "nether_star", 0, "Block Extractor");
ModPE.setItem(415, "sword", 3, "Budder Sword");


//Making Power Gem and Reverting
Item.addFurnaceRecipe(57, 407, 1);
Item.addFurnaceRecipe(407, 57, 1);

//tools recipe
Item.addShapedRecipe(408, 32, 0, ["ttt", "jpj", "ttt"], ["j", 407, 0, "t", 354, 0, "p", 293, 0]);
Item.addShapedRecipe(409, 1, 0, ["jpj", "tjt", "jjj"], ["j", 407, 0, "t", 46, 0, "p", 278, 0]);
Item.addShapedRecipe(410, 1, 0, ["jlj", "ltl", "jjj"], ["j", 407, 0, "t", 276, 0, "l", 325, 10]);
Item.addShapedRecipe(411, 1, 0, ["jlj", "ltl", "jjj"], ["j", 407, 0, "t", 277, 0, "l", 347, 0]);
Item.addShapedRecipe(412, 1, 0, ["jlj", "ltl", "jjj"], ["j", 407, 0, "t", 279, 0, "l", 347, 0]);
Item.addShapedRecipe(413, 1, 0, ["jlj", "ltl", "jjj"], ["j", 407, 0, "t", 247, 0, "l", 347, 0]);
Item.addShapedRecipe(414, 1, 0, ["jlj", "ltl", "jjj"], ["j", 407, 0, "t", 278, 0, "l", 388, 0]);
Item.addShapedRecipe(415, 1, 0, ["jlj", "ltl", "jjj"], ["j", 407, 0, "t", 325, 10, "l", 259, 0]);

//effect
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
clientMessage("It feels weird..");
ModPE.setGameSpeed(40);
}
if (i == 412)
{
clientMessage("Normal Speed!");
ModPE.setGameSpeed(20);
}
if (i == 413)
{
clientMessage("Slow it down.");
ModPE.setGameSpeed(10);
}
if (i == 414)
{
clientMessage("Block Extracted.");
Level.destroyBlock(x,y,z,true)
}
}

function attackHook(a,v)
{
if (Player.getCarriedItem()==415)
{
Entity.setFireTicks(v, 9001);
Entity.setHealth(v, 3);
Entity.setVelY(v, 2);
}
}

/*
Tested : 3cf975f47c7489ff5565e72b19db581c
*/
