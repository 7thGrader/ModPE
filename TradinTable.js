//TradinTable 1.1.5b dev2 soft
//by 7thGrader
/*
   Copyright 2015 7thGrader

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0
*/
//Orig. : http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/1286564-equivalent-exchange-3-0-1-142

var version = "1.1.5b dev2";

function newLevel()
{
clientMessage("TradinTable 1.1.5b Dev-Build 2 by 7thGrader Loaded!");
clientMessage("This build is soft version. most likely to no bugs but still in-development.");
}

//Crafting Recipe Spam.
Item.addShapedRecipe(341, 8, 0, ["ttt", "tjt", "ttt"], ["j", 265, 0, "t", 1, 0]);
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
