let output_1 = document.getElementById('output_1');
let output_2 = document.getElementById('output_2');
let new_param = false;
Clearoutput = () => {
  output_1.value = "";
  output_2.value = "";
}
setflaot = () => {
  if (!output_2.value.includes('.')) {
    if (output_2.value == '') {
      output_2.value = 0 + ".";
    }
    else {
      output_2.value = output_2.value + ".";
    }
  }
}
Insert = (val) => {
  if (output_2.value == 0 && !output_2.value.includes('.') || output_2.value == '' || new_param) {
    output_2.value = val;
    new_param = false;
  } else {
    output_2.value = output_2.value + val;
  }
}
initialize = () => {
  if (output_2.value == '') {
    output_2.value = 0;
  }
}
SetOperator = (val) => {
  initialize();
  if (output_1.value == "") {
    output_1.value = parseFloat(output_2.value + ' ') + val;
    new_param = true;
  }
  else {
    let op = output_1.value.charAt(output_1.value.length - 1);
    if (op == "/" && output_2.value == '0') {
      Err();
      Clearoutput();
    }
    else if (op == '-' && output_2.value[0] == '-') {
      let param1 = output_1.value.slice(0, -1) + "+";
      let param2 = output_2.value.substring(1);
      output_1.value = eval(param1 + param2) + val;
    }
    else {
      output_1.value = eval(output_1.value + output_2.value) + val;
      output_2.value = 0;
    }

  }
}
Equal = () => {
  new_param = true;
  if (output_1.value != '' && output_2.value != '' && output_2.value.charAt(output_2.value.length - 1) != ".") {
    let op = output_1.value.charAt(output_1.value.length - 1);
    if (op == "/" && output_2.value == '0') {
      Err();
      Clearoutput();
    }
    else if (op == '-' && output_2.value[0] == '-') {
      let param1 = output_1.value.slice(0, -1) + "+";
      let param2 = output_2.value.substring(1);
      output_1.value = eval(param1 + param2) + op;
    }
    else {
      output_1.value = eval(output_1.value + output_2.value) + op;

    }
  }
}
change_sign = () => {
  if (output_2.value != "0" && output_2.value[0] != "-" && output_2.value != "") {

    output_2.value = '-' + output_2.value;
  }
  else {
    output_2.value = output_2.value.substring(1);
  }
}
Err = () => {
  var myAlert = document.getElementById('toastNotice');//select id of toast
  var bsAlert = new bootstrap.Toast(myAlert);//inizialize it
  bsAlert.show();//show it
}
document.addEventListener("keydown", function (event) {
  if (event.key >= 0 && event.key <= 9) {
    Insert(event.key);
  }
  else if (event.keyCode == 13 || event.keyCode == 187) {
    Equal();
  }
  else if (event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    
    event.key == "/") {
      SetOperator(event.key);

  }
  else if (event.key == "." ) {
    setflaot();
  }
  else if(event.keyCode == 27 ){
    Clearoutput();
  }

})