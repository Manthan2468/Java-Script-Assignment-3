function abc(){
    let a = document.getElementById("pa").value;
    let b = document.getElementById("rp").value;
    if (a == "" || a.length < 8) {
        alert("Password are Null and size is Greater 8.");
    }
    if (b == "" || b.length < 8) {
        alert("Retype-Password are Null and size is Greater 8.");
    }
    if (a != b) {
        alert("Password and Retype-Password are not same.");
    }
    let c = document.getElementById("mail").value;
    let d = c.indexOf("@");
    let e = c.lastIndexOf(".");
    if (d < 1 || e < d+2 || e+2 > c.length) {
        alert("Invalid E-mail Id and it's format is 'abc@gmail.com'.");
    }
}