// Author : 7thGrader
// Read LICENSE File

var a = 0;
var b = 0;
var c = 0;
var 4acb2 = 0;
var ansexc = new Array(0,0,0);
var exactreturn1 = " ";
var exactreturn2 = " ";

function procCmd(cmd)
{
var cd = cmd.split(" ");
if(cd[0] == seteq)
{
a = cd[1];
b = cd[2];
c = cd[3];
}
else if(cd[0] == solveeq)
{
4acb2 = (4*a*c)-Math.pow(b,2);
ansexc[0] = -1*b;
ansexc[1] = 4acb2;
ansexc[2] = 2*a;
if(4acb2 >= 0) //if 4ac-b² is 0 or positive
{
clientMessage("(" + ansexc[0] + " ±  √ " + ansexc[1] + ") / (" + ansexc[2] + ")");
}
else if(4acb2 < 0) //if 4ac-b² is negative
{
clientMessage("(" + ansexc[0] + " ± √ (" + ansexc[1] + ")i) / (" + ansexc[2] + ")"); //i = sqrt(-1)
}
}
else if(cd[0] == appeq)
{
4acb2 = (4*a*c)-Math.pow(b,2);
if(4acb2>=0)
{
clientMessage(((-1*b) + (Math.sqrt(4acb2)))/(2*a));
clientMessage(((-1*b) - (Math.sqrt(4acb2)))/(2*a));
else clientMessage("Try use /solve");
}
}
else return;
}
