document.getElementById("btn").addEventListener("click", function(){
  var n = document.getElementById('nooftimes').value;
  var start = document.getElementById('rangestart').value;
  var end = document.getElementById('rangeend').value;
  var range=end-start;
  if(range<0){alert("Please Enter The Range Correctly");}
  var ans="";
  for(var i=0;i<n;i++)
  {var varr=Math.floor(Math.random() * range );
    let xx=Number(varr)+Number(start);
    //alert(varr+" "+start+" "+xx);
    ans+=xx+" ";
  }
  document.getElementById("amplified").innerHTML=ans;
});
