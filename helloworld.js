// THWS (THIS HELLO WORLD SUCKS)

var alphabet = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
var strings;

function randint()
{
Math.floor(Math.random()*26);
}

function newLevel()
{
for(;;)
{
if(alphabet[randint()] == alphabet[7])
{
strings = alphabet[7];
break;
}
}
for(;;)
{
if(alphabet[randint()] == alphabet[4])
{
strings = strings + alphabet[4];
break;
}
}
for(;;)
{
if(alphabet[randint()] == alphabet[11])
{
strings = strings + alphabet[11];
break;
}
}
for(;;)
{
if(alphabet[randint()] == alphabet[11])
{
strings = strings + alphabet[11];
break;
}
}
for(;;)
{
if(alphabet[randint()] == alphabet[14])
{
strings = strings + alphabet[14];
break;
}
}
for(;;)
{
if(alphabet[randint()] == alphabet[22])
{
strings = alphabet[22];
break;
}
}
for(;;)
{
if(alphabet[randint()] == alphabet[14])
{
strings = alphabet[14];
break;
}
}
for(;;)
{
if(alphabet[randint()] == alphabet[17])
{
strings = alphabet[17];
break;
}
}
for(;;)
{
if(alphabet[randint()] == alphabet[11])
{
strings = strings + alphabet[11];
break;
}
}
for(;;)
{
if(alphabet[randint()] == alphabet[3])
{
strings = strings + alphabet[3];
break;
}
}
print(strings);
return strings;
}
