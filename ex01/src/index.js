var ij = "";
var varCapsLock = "0";
var varShif = "0";
​
function funcDel() {
  var inputD = document.getElementById("backsp").innerHTML;
  var i = document.getElementById("backsp").innerHTML.length;
  var j = 1;
  var k = i - j;
  document.getElementById("backsp").innerHTML = inputD.slice(0, k);
}
​
function functionCaps() {
  if (varCapsLock == "0") {
    varCapsLoc = "1";
  } else if (varCapsLock == "1") {
    varCapsLock = "0";
  }
}
​
function functionShf() {
  if (varShif == "0") {
    varShif = "1";
  } else if (varShif == "1") {
    varShif = "0";
  }
}
​
function functionEnt() {
  var inputD = document.getElementById("ent").innerHTML;
  document.getElementById("ent").innerHTML = inputD + "\n";
}
​
function functionOK() {
  var inputD = document.getElementById("ok").innerHTML;
  if (inputD == "") {
    alert("Niste unijeli tekst!");
  } else {
    alert(inputD);
  }
}
​
function functionSpc() {
  var inputD = document.getElementById("space").innerHTML;
  document.getElementById("space").innerHTML = inputD + " ";
}
​
//Brojevi
function function1() {
  var inputD = document.getElementById("1").innerHTML;
  textarea.innerHTML += "1";
}
function function2() {
  var inputD = document.getElementById("2").innerHTML;
  document.getElementById("2").innerHTML = inputD + "2";
}
function function3() {
    var inputD = document.getElementById("3").innerHTML;
    document.getElementById("3").innerHTML = inputD + "3";
  }
  function function4() {
    var inputD = document.getElementById("4").innerHTML;
    document.getElementById("4").innerHTML = inputD + "4";
  }
  function function5() {
    var inputD = document.getElementById("5").innerHTML;
    document.getElementById("5").innerHTML = inputD + "5";
  }
  function function6() {
    var inputD = document.getElementById("6").innerHTML;
    document.getElementById("6").innerHTML = inputD + "6";
  }
  function function7() {
    var inputD = document.getElementById("7").innerHTML;
    document.getElementById("7").innerHTML = inputD + "7";
  }
  function function8() {
    var inputD = document.getElementById("8").innerHTML;
    document.getElementById("8").innerHTML = inputD + "8";
  }
  function function9() {
    var inputD = document.getElementById("9").innerHTML;
    document.getElementById("9").innerHTML = inputD + "9";
  }
  function function0() {
    var inputD = document.getElementById("0").innerHTML;
    document.getElementById("0").innerHTML = inputD + "0";
  }
​
//Slova
//Q
function functionQ() {
  var inputD = document.getElementById("q").innerHTML;
  if (varCapsLoc == "0") {
    if (varShif == "0") {
      document.getElementById("q").innerHTML = inputD + "q";
    } else if (varShif == "1") {
      varShif = "0";
      document.getElementById("q").innerHTML = inputD + "Q";
    }
  } else if (varCapsLoc == "1") {
    if (varShif == "0") {
      document.getElementById("q").innerHTML = inputD + "Q";
    } else if (varShif == "1") {
      varShif = "0";
      document.getElementById("q").innerHTML = inputD + "q";
    }
  }
}
//W
function functionW() {
    var inputD = document.getElementById("w").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("w").innerHTML = inputD + "w";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("w").innerHTML = inputD + "W";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("w").innerHTML = inputD + "W";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("w").innerHTML = inputD + "w";
      }
    }
  }
//E
function functionE() {
    var inputD = document.getElementById("e").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("e").innerHTML = inputD + "e";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("e").innerHTML = inputD + "E";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("e").innerHTML = inputD + "E";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("e").innerHTML = inputD + "e";
      }
    }
  } 
//R
function functionR() {
    var inputD = document.getElementById("r").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("r").innerHTML = inputD + "r";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("r").innerHTML = inputD + "R";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("r").innerHTML = inputD + "R";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("r").innerHTML = inputD + "r";
      }
    }
  }
  //T
  function functionT() {
    var inputD = document.getElementById("t").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("t").innerHTML = inputD + "t";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("t").innerHTML = inputD + "T";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("t").innerHTML = inputD + "T";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("t").innerHTML = inputD + "t";
      }
    }
  }
  //Y
  function functionY() {
    var inputD = document.getElementById("y").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("y").innerHTML = inputD + "y";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("y").innerHTML = inputD + "Y";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("y").innerHTML = inputD + "Y";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("y").innerHTML = inputD + "y";
      }
    }
  }
  //U
  function functionU() {
    var inputD = document.getElementById("u").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("u").innerHTML = inputD + "u";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("u").innerHTML = inputD + "U";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("u").innerHTML = inputD + "U";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("u").innerHTML = inputD + "u";
      }
    }
  }
  //I
  function functionI() {
    var inputD = document.getElementById("i").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("i").innerHTML = inputD + "i";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("i").innerHTML = inputD + "I";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("i").innerHTML = inputD + "I";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("i").innerHTML = inputD + "i";
      }
    }
  }
  //O
  function functionO() {
    var inputD = document.getElementById("o").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("o").innerHTML = inputD + "o";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("o").innerHTML = inputD + "O";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("o").innerHTML = inputD + "O";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("o").innerHTML = inputD + "o";
      }
    }
  }
  //P
  function functionP() {
    var inputD = document.getElementById("p").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("p").innerHTML = inputD + "p";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("p").innerHTML = inputD + "P";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("p").innerHTML = inputD + "P";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("p").innerHTML = inputD + "p";
      }
    }
  }
  //A
  function functionA() {
    var inputD = document.getElementById("a").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("a").innerHTML = inputD + "a";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("a").innerHTML = inputD + "A";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("a").innerHTML = inputD + "A";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("a").innerHTML = inputD + "a";
      }
    }
  }
  //S
  function functionS() {
    var inputD = document.getElementById("s").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("s").innerHTML = inputD + "s";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("s").innerHTML = inputD + "S";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("s").innerHTML = inputD + "S";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("s").innerHTML = inputD + "s";
      }
    }
  }
  //D
  function functionD() {
    var inputD = document.getElementById("d").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("d").innerHTML = inputD + "d";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("d").innerHTML = inputD + "D";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("d").innerHTML = inputD + "D";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("d").innerHTML = inputD + "d";
      }
    }
  }
  //F
  function functionF() {
    var inputD = document.getElementById("f").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("f").innerHTML = inputD + "f";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("f").innerHTML = inputD + "F";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("f").innerHTML = inputD + "F";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("f").innerHTML = inputD + "f";
      }
    }
  }
  //G
  function functionG() {
    var inputD = document.getElementById("g").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("g").innerHTML = inputD + "g";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("g").innerHTML = inputD + "G";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("g").innerHTML = inputD + "G";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("g").innerHTML = inputD + "g";
      }
    }
  }
  //H
  function functionH() {
    var inputD = document.getElementById("h").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("h").innerHTML = inputD + "h";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("h").innerHTML = inputD + "H";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("h").innerHTML = inputD + "H";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("h").innerHTML = inputD + "h";
      }
    }
  }
  //J
  function functionJ() {
    var inputD = document.getElementById("j").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("j").innerHTML = inputD + "j";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("j").innerHTML = inputD + "J";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("j").innerHTML = inputD + "J";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("j").innerHTML = inputD + "j";
      }
    }
  }
  //K
  function functionK() {
    var inputD = document.getElementById("k").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("k").innerHTML = inputD + "k";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("k").innerHTML = inputD + "K";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("k").innerHTML = inputD + "K";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("k").innerHTML = inputD + "k";
      }
    }
  }
  //L
  function functionL() {
    var inputD = document.getElementById("l").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("l").innerHTML = inputD + "l";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("l").innerHTML = inputD + "L";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("l").innerHTML = inputD + "L";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("l").innerHTML = inputD + "l";
      }
    }
  }
  //Z
  function functionZ() {
    var inputD = document.getElementById("z").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("z").innerHTML = inputD + "z";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("z").innerHTML = inputD + "Z";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("z").innerHTML = inputD + "Z";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("z").innerHTML = inputD + "z";
      }
    }
  }
//X
function functionX() {
    var inputD = document.getElementById("x").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("x").innerHTML = inputD + "x";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("x").innerHTML = inputD + "X";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("x").innerHTML = inputD + "X";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("x").innerHTML = inputD + "x";
      }
    }
  }
  //C
  function functionC() {
    var inputD = document.getElementById("c").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("c").innerHTML = inputD + "c";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("c").innerHTML = inputD + "C";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("c").innerHTML = inputD + "C";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("c").innerHTML = inputD + "c";
      }
    }
  }
  //V
  function functionV() {
    var inputD = document.getElementById("v").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("v").innerHTML = inputD + "v";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("v").innerHTML = inputD + "V";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("v").innerHTML = inputD + "V";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("v").innerHTML = inputD + "v";
      }
    }
  }
  //B
  function functionB() {
    var inputD = document.getElementById("b").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("b").innerHTML = inputD + "b";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("b").innerHTML = inputD + "B";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("b").innerHTML = inputD + "B";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("b").innerHTML = inputD + "b";
      }
    }
  }
  //N
  function functionN() {
    var inputD = document.getElementById("n").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("n").innerHTML = inputD + "n";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("n").innerHTML = inputD + "N";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("n").innerHTML = inputD + "N";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("n").innerHTML = inputD + "n";
      }
    }
  }
  //M
  function functionM() {
    var inputD = document.getElementById("m").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("m").innerHTML = inputD + "m";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("m").innerHTML = inputD + "M";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("m").innerHTML = inputD + "M";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("m").innerHTML = inputD + "m";
      }
    }
  }
//-
function functionMid() {
    var inputD = document.getElementById("-").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("-").innerHTML = inputD + "-";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("-").innerHTML = inputD + "-";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("-").innerHTML = inputD + "-";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("display").innerHTML = inputD + "-";
      }
    }
  }
  //_
  function functionDown() {
    var inputD = document.getElementById("_").innerHTML;
    if (varCapsLoc == "0") {
      if (varShif == "0") {
        document.getElementById("_").innerHTML = inputD + "_";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("_").innerHTML = inputD + "_";
      }
    } else if (varCapsLoc == "1") {
      if (varShif == "0") {
        document.getElementById("_").innerHTML = inputD + "_";
      } else if (varShif == "1") {
        varShif = "0";
        document.getElementById("_").innerHTML = inputD + "_";
      }
    }
  }


