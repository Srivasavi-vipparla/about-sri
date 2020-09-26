"use strict";

function mul() {
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);
    var z=x*y;
    document.getElementById('result').innerHTML = "Multiplication result is:"+z;
    console.count(result);
    return false;
}

document.getElementById('go').addEventListener('click', add);
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("resul").innerHTML = "You have clicked the Multiply button " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("resul").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

