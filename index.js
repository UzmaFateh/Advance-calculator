// function press(e) {
//     document.getElementById('inpt').value +=e
// }

// function eq() {
//    var a = document.getElementById('inpt')
//     a.value =eval(a.value)
// }

// function clr() {
//     document.getElementById('inpt').value =''
// }

// function clr1() {
//     var a = document.getElementById('inpt') 
//     a.value =a.value.slice (0,-1)
//  }
 
function press(e) {
  document.getElementById("inpt").value += e;
}

function eq() {
  const a = document.getElementById("inpt");
  let exp = a.value;

  // Convert trig input to degrees (optional)
  exp = exp.replace(/Math\.sin\(/g, "Math.sin((Math.PI/180)*");
  exp = exp.replace(/Math\.cos\(/g, "Math.cos((Math.PI/180)*");
  exp = exp.replace(/Math\.tan\(/g, "Math.tan((Math.PI/180)*");

  try {
    a.value = eval(exp);
  } catch {
    a.value = "Error";
  }
}

function clr() {
  document.getElementById("inpt").value = "";
}

function clr1() {
  const a = document.getElementById("inpt");
  a.value = a.value.slice(0, -1);
}

// ✅ Optional: Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") eq();
  if (e.key === "Backspace") clr1();
});




