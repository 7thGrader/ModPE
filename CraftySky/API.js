/*
   Copyright 2015 7thGrader
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
CraftySkyAPI For MCPE
Ver 0.2.2a (API 1.1.1)

WARNING : API Only. You have to configure stuffs to use this properly.
PROTIP : You own parts you have contributed!
*/

// There is no minimum money. Because it's bit glitchy.

// Configs (Configureable)
// Stuffs Starting with mca is usually dangerous.

var loginmsg = "CraftySky 0.2.2a by 7thGrader Successfully Loaded!"
var money = 100; // Base Money
var mca000001 = 0; // (Do Not Edit!)
var monetaryUnit = "$";// Monetary Unit
var mca000002 = true; // (Test Mode)
var op = "Angeloid"; // Admin Name(CANNOT BE MULTIPLE)
var extraCurrency = [];
var extraUnit = [];
var MyMoney;

// New Methods

/*
	Economy Namespace
giveMoney(par1double); : gives player money(alias of money += par1int)
takeMoney(par1double); : takes player money(alias of money -= par1int)
setMoney(par1double); : sets player money(alias of money = par1int)
getMoney(); : returns player money. mostly useless.
trade(par1double, par2int, par3int, par4int); : adds money and item at once. you can use negative ;parameter. made for trade.(Deprecated)
	Global Namespace
myName(); : Shows player name
*/
var Economy = {
giveMoney : function(moneyint)
{
money += moneyint;
return;
},
takeMoney : function(takeint)
{
money -= takeint;
return;
},
setMoney : function(setint)
{
money = setint;
return;
},
getMoney : function()
{
return money;
},
trade : function(moneyaddint, itemaddint, countint, itemdmgint)
{
money += moneyaddint;
Player.addItemInventory(itemaddint, countint, itemdmgint);
return;
}
}
var Currency = {
addNewCurrency : function(unitString) {
extraCurrency.push(0);
extraUnit.push(unitString);
},
setNewCurrency : function(idint, valuedouble) {
extraCurrency[idint] = valuedouble;
},
getNewCurrency : function(idint) {
return extraCurrency[idint];
}
}
function myName()
{
return Player.getName(Player.getEntity());
}



// Commands
function procCmd(cmd)
{
var c = cmd.split(" ");
switch(c[0])
{
case "money" :
clientMessage(ChatColor.GOLD + "[CraftySky] You Have " + monetaryUnit + money);
break;
case "givemoney" :
if(myName()==op)
{
Economy.giveMoney(Number(c[1]));
clientMessage(ChatColor.GOLD + "[CraftySky] Gave " + monetaryUnit + c[1] + " to Player");
}
else
{
clientMessage(ChatColor.RED + "[CraftySky] You Don't Have Permission to Use This Command");
}
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
Economy.giveMoney(1);
}
else if(b==1)
{
Economy.takeMoney(1);
}
else if(b==17)
{
Economy.setMoney(100);
}
clientMessage(money);
}
else return;
}

// Misc.

function newLevel()
{
clientMessage(loginmsg);
ModPE.readData(MyMoney);
}

function leaveGame()
{
ModPE.saveData(MyMoney, money);
}
/ Commands
function procCmd(cmd)
{
var c = cmd.split(" ");
switch(c[0])
{
case "money" :
clientMessage(ChatColor.GOLD + "[CraftySky] You Have " + monetaryUnit + money);
break;
case "givemoney" :
if(myName()==op)
{
Economy.giveMoney(Number(c[1]));
clientMessage(ChatColor.GOLD + "[CraftySky] Gave " + monetaryUnit + c[1] + " to Player");
}
else
{
clientMessage(ChatColor.RED + "[CraftySky] You Don't Have Permission to Use This Command");
}
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
Economy.giveMoney(1);
}
else if(b==1)
{
Economy.takeMoney(1);
}
else if(b==17)
{
Economy.setMoney(100);
}
clientMessage(money);
}
else return;
}

// Misc.

function newLevel()
{
clientMessage(loginmsg);
ModPE.readData(MyMoney);
}

function leaveGame()
{
ModPE.saveData(MyMoney, money);
}
