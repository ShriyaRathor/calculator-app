var l = 0;
var a;
$("button").click(function () {
    a = $(this).val();
    l = document.getElementById("display").innerHTML.length;

    if(a == "←")
  {
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.substring(0,l-1);
  }
  else if (a == "=")
  {
    alert("Subramanian + Shriya = Cuties forever");
    
  }
  else
  {
  
  if (l >= 25) {
    alert("Cannot enter more than this");
  } else {
    
    document.getElementById("display").innerHTML += a;
  }
  
}});
