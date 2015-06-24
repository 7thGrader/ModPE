var Bools = {
this.AND = new function(a,b) {if(a==true&&b==true) {return true;} else return false;};
this.OR = new function(a,b) {if(a==true||b==true) {return true;} else return false;};
this.NOT = new function(a) {if(a==true) {return false;} else return true;};
this.XOR = new function(a) {if(a==true||b==true) {if(a!=b) {return true;} else return false;} else return false;};
this.NAND = new function(a,b) {if(a==true&&b==true) {return false;} else return true;}
this.NOR = new function(a,b) {if(a==true||b==true) {return false;} else return true;};
this.NXOR = new function(a) {if(a==true||b==true) {if(a!=b) {return false;} else return true;} else return true;};
}
