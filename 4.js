function abc() {
    let a=document.getElementById("fn").value;
    let b=document.getElementById("ln").value;
    if (a == "") {
        alert("Please Enter the First Name :- ");
    }else{
        document.getElementById("s1").innerHTML=a;
    }
    if (b == "") {
        alert("Please Enter the Last Name :- ");
    }else{
        document.getElementById("s2").innerHTML=b;
    }

    let c=document.getElementById("r1").checked;
    let d=document.getElementById("r2").checked;
    if (c == false && d == false) {
        alert("Please Select in Your Gender");
    }else if (c == true || d == false) {
        document.getElementById("s3").innerHTML=" Male";
    }else if (c == false || d == true) {
        document.getElementById("s3").innerHTML=" Female";
    }
    
    let e=document.getElementById("c1").checked;
    let f=document.getElementById("c2").checked;
    let g=document.getElementById("c3").checked;
    if(e == false && f == false && g == false){
        alert("Please Select in Your Hobbies");
    }else if (e == true && f == true && g == true) {
        document.getElementById("s4").innerHTML=" Cricket , Singing , Dancing ";
    }else if (e == true && f == true && g == false) {
        document.getElementById("s4").innerHTML=" Cricket , Singing ";
    }else if (e == true && f == false && g == true) {
        document.getElementById("s4").innerHTML=" Cricket , Dancing ";
    }else if (e == false && f == true && g == true) {
        document.getElementById("s4").innerHTML=" Singing , Dancing ";
    }else if (e == true && f == false && g == false) {
        document.getElementById("s4").innerHTML=" Cricket ";
    }else if (e == false && f == false && g == true) {
        document.getElementById("s4").innerHTML=" Dancing ";
    }else if (e == false && f == true && g == true) {
        document.getElementById("s4").innerHTML=" Singing ";
    }


    let h=document.getElementById("select");
    let i = h.options[h.selectedIndex].value;
    if(i == "")
    {
	alert("Select a Country");
	}
	else
	{
    document.getElementById("s5").innerHTML= i;
   }
}