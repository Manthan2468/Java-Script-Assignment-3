function abc() {
    var a = document.getElementById("i1").value;
    if (a == "") {
        alert("Your Name is Null.");
    }
    for (let i = 0; i < a.length; i++) {
      if ((a[i] >= 'A' && a[i] <= 'Z') || (a[i] >= 'a' && a[i] <= 'z')) {} else {
        alert("Name should be a Alphabets.");
      }
    }
    if (a.length == 6) {
        document.getElementById("p1").innerText = a;
    }else{
        alert("Name should be of 6 Alphabets Only");
    }
    let b = document.getElementById("i2").value;
    let c = b.indexOf("@");
    let d = b.lastIndexOf(".");
    if ( c < 1 || d < c+2 || d+2 > b.length) {
        alert("Please Enter Valid E-mail like abc@gmail.com");
    }else{
        document.getElementById("p2").innerHTML = b ;
    }
    let e = document.getElementById("i3").value;
    if (e == "") {
        alert("Password is Blank.");
    }
    if (e.length == 10) {  
        document.getElementById("p3").innerHTML = e ; 
    }else{
        alert("Password Should 10 Characters Only.");
    }
    let f = document.getElementById("i4").value;
    if (f == "") {
        alert("Phone Number is Blank.");
    }
    if (f.length == 10) {  
        document.getElementById("p4").innerHTML = f ; 
    }else if(isNaN(f)){
        alert("Phone Number should of 10 Digits Only.");
    }
    
    let g = document.getElementById("i5").checked;
    let h = document.getElementById("i6").checked;
    let i = document.getElementById("i7").checked;
    if (g == true) {
        document.getElementById("p5").innerHTML = "Male"; 
    }else if (h == true) {
        document.getElementById("p5").innerHTML = "Female"; 
    }else if (i == true) {
        document.getElementById("p5").innerHTML = "Other"; 
    }

    let j=document.getElementById("i8");
    let k = j.options[j.selectedIndex].value;
    if(k == "")
    {
	alert("Select a Country");
	}
	else
	{
    document.getElementById("p6").innerHTML= k;
   }

   let l = document.getElementById("i9").value;
   if (l == "" || isNaN(l) || l.length != 6) {
    alert("Zipcode Should be of 6 Digits Only");
   }else{
    document.getElementById("p7").innerHTML = l;
   }
let m = document.getElementById("i10").value;
if (m == "") {
    alert("About is Null.");
}else{
    document.getElementById("p8").innerHTML = m ;
}
}