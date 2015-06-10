/*
   Copyright 2015 7thGrader
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
*/

// TaxHeap for CraftySkyAPI
// ver 0.1.1a

// Please copy full code to API.js

var tax = 1; // Amount of tax
var taxtick = 1200; // Every configured ticks, Tax will be taken
var mca000003 = 0; // Do Not Edit!

function modTick()
{
mca000003 += 1;
if(mca000003 >= taxtick)
{
mca000003 = 0;
if(money-tax>=0)
{
clientMessage("[TaxHeap]Tax Taken(" + monetaryUnit + tax + ")");
money -= tax;
}
}
}
