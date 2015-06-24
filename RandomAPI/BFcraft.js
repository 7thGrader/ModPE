var code = new Array();
var memory = new Array();
var pointer = 0;
var cp = 0;
var loop = 0;

function runCode()
{
for(;memory.length==0;)
{
memory.pop();
} //Clears Memory
pointer = 0; //Resets The Pointer
for(cp=1;cp>=code.length;cp++)
{
switch(code[cp-1])
{
case 1 :
memory[pointer] += 1;
break;
case 2 :
memory[pointer] -= 1;
break;
case 3 :
pointer++;
break;
case 4:
pointer--;
break;
case 5:
memory[pointer] == getTile(pointer,64,0); // Input by tile of (pointer,64,0).
break;
case 6:
setTile(pointer,64,0,memory[pointer]); // output is blocks, too.
case 7:
loop = cp;
break;
case 8:
if(pointer!=0)
{
cp = loop-1; //because 1 will be added back.
}
break;
}
}
}

// Made it only for fun :)
// #10MinutesOfCode
// Based by Brainf***. Pure Turing Machine Controller.
