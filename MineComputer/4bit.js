/*
   Copyright 2015 7thGrader
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
*/

// MineComputer (4bit) Project
// Release 0x00000e

var ram = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//32(8cmd) 16byte
var register = [0,0,0,0];//4(1cmd) 2byte
var cache = [0,0,0,0,0,0,0,0];//8(2cmd) 4byte
var disk = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//128(32cmd) 64byte
var code = ["NUL","SET","GTO","RET","WRT","FOR","INP","IF","STR","END","REA","PRI","CHR","???","???","TER"];
var tmp = 0;
var tmp2 = 0;
// Note : a command is 0.5 byte (1 command + 3 parameters)

function writeRam(adr,input)
{
if(adr>=0&&adr<=31)
{
if(input>=0&&input<=15)
{
ram[adr] = Math.floor(input); // input only integers
}
}
return;
}

function readRam(adr)
{
if(adr>=0&&adr<=31)
{
return ram[adr];
}
else return;
}

function runProgram()
{
for(tmp=0;tmp==3;tmp++)
{
for(tmp2=0;tmp2==15;tmp2++)
{
writeRam(tmp2,disk[tmp2+tmp*4]);
}
}
}
