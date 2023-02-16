function abc() {
    var a = document.getElementById("name").value;
    var b = document.getElementById("age").value;
    var c = document.getElementById("dept").value;
    var d = document.getElementById("desi").value;
    var e = document.getElementById("salary").value;
    var f = document.getElementById("no").value;

    if (a == "") {
        alert("Please Enter Your Name.");
    }
    if (b == "") {
        alert("Please Enter Your Age.");
    }
    if(c == ""){
        alert("Please Enter Your Department.");
    }
    if(d == ""){
        alert("Please Enter Your Designation.");
    }
    if(e == ""){
        alert("Please Enter Your Salary.");
    }
    if(f == ""){
        alert("Please Enter Your NO. of Working Days.");
    }
    if(b <= 18){
        alert("Your age is less 17 please enter your age is greater 18");
    }
    if(f < 25 && e != 10000){
        alert("Must be No. Of Working days >25 and salary = 10000");
    }else if(f > 25 && e != 8000){
        alert("Must be No. Of Working days <25 and salary = 8000");
    }
}