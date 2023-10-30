var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  let ele=acc[i];
  ele.addEventListener("click", function() {
    for (var j = 0; j< acc.length; j++) {
      var panel = acc[j].nextElementSibling;
      if(ele==acc[j]){
        panel.style.display = "block";
      }else{
        panel.style.display = "none";
      }
    }
    
    // if (panel.style.display === "block") {
    //   panel.style.display = "none";
    // } else {
    //   panel.style.display = "block";
    // }
  });
}



