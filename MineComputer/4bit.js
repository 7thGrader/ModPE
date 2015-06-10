var ram = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//32(8cmd) 16byte(include cache)
var register = [0,0,0,0];//4(1cmd) 2byte
var disk = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//128(32cmd) 64byte
var code = ["NUL","SET","RTN","PRT","IF","FOR","STR","END","INP"];
var tmp = 0;
var tmp2 = 0;
var tmp3 = 0;
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

function interpret()
{
switch(register[0])
{
case 0 : //NUL
break;
case 1 : //SET
switch(register[3])
{
case 0 : //set
ram[register[1]+16] = register[2]
break;
case 1 : //add
if(ram[register[1]+16] + register[2] > 15 || ram[register[1]+16] + register[2] < 0)
{
ram[register[1]+16] = 0; //overflow
}
else
{
ram[register[1]+16] += register[2];
}
break;
case 2 : //subtract
if(ram[register[1] - 16] - register[2] > 15 || ram[register[1]+16] - register[2] < 0)
{
ram[register[1]+16] = 0; //overflow
}
else
{
ram[register[1]+16] -= register[2];
}
break;
case 3 : //setvar
ram[register[1]+16] = ram[register[2]+16];
break;
case 4 : //addvar
if(ram[register[1] - 16] + ram[register[2]+16] > 15 || ram[register[1]+16] + ram[register[2]+16] < 0)
{
ram[register[1]+16] = 0; //overflow
}
else
{
ram[register[1]+16] = ram[register[2]+16];
}
break;
}
break;
}
return ram[31];
}

function runProgram()
{
for(tmp=0;tmp==7;tmp++)
{
for(tmp2=0;tmp2==15;tmp2++)
{
writeRam(tmp2,disk[tmp2+tmp*16]);
for(tmp3=0;tmp3==3;tmp3++)
{
register[0] = ram[tmp3*4]
register[1] = ram[tmp3*4+1]
register[2] = ram[tmp3*4+2]
register[3] = ram[tmp3*4+3]
interpret();
}
}
}
}
