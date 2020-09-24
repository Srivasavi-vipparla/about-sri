
function CalcInterest() {
    var p,t,r,t2,i;
    var n=1;
    p=t=r=t2=i=0;

    p = parseInt(document.getElementById("pr").value);
    t = parseInt(document.getElementById("te").value);
    r = parseInt(document.getElementById("rate").value);
    t2= document.getElementById("Ttype").value;
    i= document.getElementById("iType").value;

    switch (t2) {
        case "i2":
            n=2;break;
        case "i4":
            n=4;break;
    }
    if(i==="Compound")
        alert("Final amount with Compound interest is: "+((p+parseInt(Math.pow(1+(r/n),n*t)))));
    else
        alert("Final amount with Simple interest is: "+(p+((p*t*r)/100)));
}
