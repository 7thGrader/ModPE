/*
   Copyright 2015 7thGrader
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
CraftySkyAPI For MCPE
Ver 0.1.0a

WARNING : API Only. You have to configure stuffs to use this properly.
PROTIP : You own parts you have contributed!
*/

// There is no minimum money. Because it's bit glitchy.

// Configs (Configureable)
// Stuffs Starting with mca is usually dangerous.

var money = 10; // Base Money
var mca000001 = 0; // (Do Not Edit!)
var monetaryUnit = "$";// Monetary Unit
var mca000002 = true; // (Test Mode)
var op = "Angeloid"; // Admin Name(CANNOT BE MULTIPLE)

// New Methods

/*
giveMoney(par1int); : gives player money(alias of money += par1int)
takeMoney(par1int); : takes player money(alias of money -= par1int)
setMoney(par1int); : sets player money(alias of money = par1int)
getMoney(); : returns player money. mostly useless.
trade(par1int, par2int, par3int, par4int); : adds money and item at once. you can use negative ;parameter. made for trade.(Not recommended)
myName(); : Shows player name
*/
function giveMoney(moneyint)
{
money += moneyint;
return;
}
function takeMoney(takeint)
{
money -= takeint;
return;
}
function setMoney(setint)
{
money = setint;
return;
}
function getMoney()
{
return money;
}
function trade(moneyaddint, itemaddint, countint, itemdmgint)
{
money += moneyaddint;
Player.addItemInventory(itemaddint, countint, itemdmgint);
return;
}
function myName()
{
return Player.getName(Player.getEntity());
}

// min money



// Commands
function procCmd(cmd)
{
var c = cmd.split(" ");
switch(c[0])
{
case "money" :
clientMessage(ChatColor.GOLD + "[CraftySky] You Have " + monetaryUnit + money);
break;
}
}

// Test Mode Only

function useItem(x,y,z,i,b)
{
if(mca000002 == true && myName()==op)
{
if(b==3)
{
giveMoney(1);
}
else if(b==1)
{
takeMoney(1);
}
else if(b==17)
{
setMoney(100);
}
clientMessage(money);
}
else return;
}