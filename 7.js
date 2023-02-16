function abc() {
    let a = document.getElementById("un").value;
    if (a == "" || a.length < 8) {
        alert("Username to be Greater than 8 characters.");
    }
    let b = document.getElementById("pa").value;
    let c = document.getElementById("rp").value;
    if (b == "" || b.length < 8) {
        alert("Password are Null and size is Greater 8.");
    }
    if (c == "" || c.length < 8) {
        alert("Retype-Password are Null and size is Greater 8.");
    }
    if (b != c) {
        alert("Password and Retype-Password are not same.");
    }
}