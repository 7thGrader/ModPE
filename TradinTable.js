//TradinTable 1.2b Stable
//by 7thGrader
/*
   Copyright 2015 7thGrader
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
*/
//Orig. : http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1286564-equivalent-exchange-3-0-1-142

var version = "1.2";
var beta = true;
var dev = 39;

function newLevel()
{
clientMessage("TradinTable 1.2b Stable by 7thGrader Loaded!");
clientMessage("NEW : Try tapping ground with your slimeball!");
}

function useItem(x,y,z,i,b)
{
if(i==341&&Player.getCarriedItemCount()!=64)
{
addItemInventory(341, -1);
if(b==2)
{
Level.setTile(x, y, z, 3);
}
else if(b==3)
{
Level.setTile(x, y, z, 12);
}
else if(b==12)
{
Level.setTile(x, y, z, 13);
}
else if(b==13)
{
Level.setTile(x, y, z, 2);
}
else if(b==1)
{
Level.setTile(x, y, z, 4);
}
else if(b==4)
{
Level.setTile(x, y, z, 48);
}
else if(b==48)
{
Level.setTile(x, y, z, 4);
}
else
{
clientMessage("Oops. I think it cannot be converted.");
}
}
else if(i==341)
{
clientMessage("You cannot convert stuffs if you have full stack on hand.");
}
else return; //return if it isnt slimeball
}

//1.2 dev29

//Crafting Recipe Spam.
Item.addShapedRecipe(341, 16, 0, ["ttt", "tjt", "ttt"], ["j", 265, 0, "t", 1, 0]);
Item.addShapedRecipe(341, 64, 0, ["ttt", "tjt", "ttt"], ["j", 266, 0, "t", 1, 0]);
Item.addShapedRecipe(265, 8, 0, ["im ", "   ", "   "], ["i", 266, 0, "m", 341, 0]);
Item.addShapedRecipe(266, 1, 0, ["iii", "imi", "iii"], ["i", 265, 0, "m", 341, 0]);
Item.addShapedRecipe(266, 4, 0, ["im ", "   ", "   "], ["i", 264, 0, "m", 341, 0]);
Item.addShapedRecipe(264, 1, 0, [" i ", "imi", " i "], ["i", 266, 0, "m", 341, 0]);
Item.addShapedRecipe(17, 1, 0, ["iii", "imi", "iii"], ["i", 4, 0, "m", 341, 0]);
Item.addShapedRecipe(4, 8, 0, ["im ", "   ", "   "], ["i", 17, 0, "m", 341, 0]);
Item.addShapedRecipe(263, 1, 0, ["imi", "ii ", "   "], ["i", 17, 0, "m", 341, 0]);
Item.addShapedRecipe(17, 4, 0, ["im ", "   ", "   "], ["i", 263, 0, "m", 341, 0]);
Item.addShapedRecipe(265, 1, 0, [" i ", "imi", " i "], ["i", 263, 0, "m", 341, 0]);
Item.addShapedRecipe(265, 1, 0, ["iii", "imi", "iii"], ["i", 263, 1, "m", 341, 0]);
Item.addShapedRecipe(17, 16, 0, ["iii", "imi", "iii"], ["i", 263, 1, "m", 341, 0]);
Item.addShapedRecipe(263, 4, 0, ["im ", "   ", "   "], ["i", 265, 0, "m", 341, 0]);
Item.addShapedRecipe(248, 1, 0, ["iii", "imi", "iii"], ["i", 57, 0, "m", 341, 0]);
Item.addShapedRecipe(57, 8, 0, ["im ", "   ", "   "], ["i", 248, 0, "m", 341, 0]);
Item.addShapedRecipe(406, 1, 0, ["im ", "   ", "   "], ["i", 266, 0, "m", 341, 0]);
Item.addShapedRecipe(266, 1, 0, ["im ", "   ", "   "], ["i", 406, 0, "m", 341, 0]);
Item.addShapedRecipe(351, 4, 4, ["im ", "   ", "   "], ["i", 266, 0, "m", 341, 0]);
Item.addShapedRecipe(266, 1, 0, ["im ", "ii ", "i  "], ["i", 351, 4, "m", 341, 0]);
Item.addShapedRecipe(331, 6, 0, ["im ", "   ", "   "], ["i", 265, 0, "m", 341, 0]);
Item.addShapedRecipe(265, 1, 0, ["iii", " m ", "iii"], ["i", 331, 0, "m", 341, 0]);
Item.addShapedRecipe(388, 1, 0, ["im ", "i  ", "   "], ["i", 264, 0, "m", 341, 0]);
Item.addShapedRecipe(264, 2, 0, ["im ", "   ", "   "], ["i", 388, 0, "m", 341, 0]);
Item.addShapedRecipe(348, 1, 0, ["imi", "iii", "   "], ["i", 265, 0, "m", 341, 0]);
Item.addShapedRecipe(265, 5, 0, ["im ", "   ", "   "], ["i", 348, 0, "m", 341, 0]);
Item.addShapedRecipe(263, 1, 0, ["iii", "imi", "iii"], ["i", 360, 0, "m", 341, 0]);
Item.addShapedRecipe(360, 32, 0, ["im ", "   ", "   "], ["i", 265, 0, "m", 341, 0]);
Item.addShapedRecipe(265, 2, 0, ["iii", "imi", "iii"], ["i", 103, 0, "m", 341, 0]);
Item.addShapedRecipe(263, 9, 0, ["iii", "imi", "iii"], ["i", 103, 0, "m", 341, 0]);
Item.addShapedRecipe(265, 1, 0, ["iii", "imi", "iii"], ["i", 296, 0, "m", 341, 0]);
Item.addShapedRecipe(296, 8, 0, ["im ", "   ", "   "], ["i", 265, 0, "m", 341, 0]);
Item.addShapedRecipe(265, 1, 0, ["iii", "imi", "iii"], ["i", 295, 0, "m", 341, 0]);
Item.addShapedRecipe(295, 8, 0, ["im ", "   ", "   "], ["i", 265, 0, "m", 341, 0]);
Item.addShapedRecipe(265, 2, 0, ["iii", "imi", "iii"], ["i", 392, 0, "m", 341, 0]);
Item.addShapedRecipe(392, 4, 0, ["im ", "   ", "   "], ["i", 265, 0, "m", 341, 0]);
Item.addShapedRecipe(265, 2, 0, ["iii", "imi", "iii"], ["i", 391, 0, "m", 341, 0]);
Item.addShapedRecipe(391, 4, 0, ["im ", "   ", "   "], ["i", 265, 0, "m", 341, 0]);
Item.addShapedRecipe(265, 1, 0, ["iii", "imi", "iii"], ["i", 86, 0, "m", 341, 0]);
Item.addShapedRecipe(86, 8, 0, ["im ", "   ", "   "], ["i", 265, 0, "m", 341, 0]);
Item.addShapedRecipe(17, 8, 0, ["im ", "   ", "   "], ["i", 6, 0, "m", 341, 0]);
Item.addShapedRecipe(6, 8, 0, ["mii", "iii", "iii"], ["i", 17, 0, "m", 341, 0]);
Item.addShapedRecipe(19, 8, 0, ["mi ", "   ", "   "], ["i", 264, 0, "m", 341, 0]);
Item.addShapedRecipe(264, 1, 0, ["mii", "iii", "iii"], ["i", 19, 0, "m", 341, 0]);
//=====================================================//
Item.addShapedRecipe(3, 1, 0, ["mi ", "   ", "   "], ["i", 12, 0, "m", 341, 0]);
Item.addShapedRecipe(12, 1, 0, ["mi ", "   ", "   "], ["i", 3, 0, "m", 341, 0]);
Item.addShapedRecipe(3, 1, 0, ["mi ", "   ", "   "], ["i", 13, 0, "m", 341, 0]);
Item.addShapedRecipe(13, 1, 0, ["mi ", "   ", "   "], ["i", 3, 0, "m", 341, 0]);
Item.addShapedRecipe(12, 1, 0, ["mi ", "   ", "   "], ["i", 13, 0, "m", 341, 0]);
Item.addShapedRecipe(13, 1, 0, ["mi ", "   ", "   "], ["i", 12, 0, "m", 341, 0]);
Item.addShapedRecipe(3, 8, 0, ["mii", "iii", "iii"], ["i", 12, 0, "m", 341, 0]);
Item.addShapedRecipe(12, 8, 0, ["mii", "iii", "iii"], ["i", 3, 0, "m", 341, 0]);
Item.addShapedRecipe(3, 8, 0, ["mii", "iii", "iii"], ["i", 13, 0, "m", 341, 0]);
Item.addShapedRecipe(13, 8, 0, ["mii", "iii", "iii"], ["i", 3, 0, "m", 341, 0]);
Item.addShapedRecipe(13, 8, 0, ["mii", "iii", "iii"], ["i", 12, 0, "m", 341, 0]);
Item.addShapedRecipe(12, 8, 0, ["mii", "iii", "iii"], ["i", 13, 0, "m", 341, 0]);
//=====================================================//
Item.addShapedRecipe(1, 1, 0, ["mi ", "   ", "   "], ["i", 4, 0, "m", 341, 0]);
Item.addShapedRecipe(4, 1, 0, ["mi ", "   ", "   "], ["i", 1, 0, "m", 341, 0]);
Item.addShapedRecipe(1, 1, 0, ["mi ", "   ", "   "], ["i", 48, 0, "m", 341, 0]);
Item.addShapedRecipe(48, 1, 0, ["mi ", "   ", "   "], ["i", 1, 0, "m", 341, 0]);
Item.addShapedRecipe(4, 1, 0, ["mi ", "   ", "   "], ["i", 48, 0, "m", 341, 0]);
Item.addShapedRecipe(48, 1, 0, ["mi ", "   ", "   "], ["i", 4, 0, "m", 341, 0]);
Item.addShapedRecipe(1, 8, 0, ["mii", "iii", "iii"], ["i", 4, 0, "m", 341, 0]);
Item.addShapedRecipe(4, 8, 0, ["mii", "iii", "iii"], ["i", 1, 0, "m", 341, 0]);
Item.addShapedRecipe(1, 8, 0, ["mii", "iii", "iii"], ["i", 48, 0, "m", 341, 0]);
Item.addShapedRecipe(48, 8, 0, ["mii", "iii", "iii"], ["i", 1, 0, "m", 341, 0]);
Item.addShapedRecipe(4, 8, 0, ["mii", "iii", "iii"], ["i", 48, 0, "m", 341, 0]);
Item.addShapedRecipe(48, 8, 0, ["mii", "iii", "iii"], ["i", 4, 0, "m", 341, 0]);

// Tested : 0B13921089805DFFB25EFC2C2D266A9B1AFC115625DEA7C61E0023A9105884B0
