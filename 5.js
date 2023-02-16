function abc() {
    let a = document.getElementById("name").value;
    let b = document.getElementById("age").value;
    if (a == "") {
        alert("Enter Your Name.");
    }
    for (let i = 0; i < a.length; i++) {
        var p=a.charAt(i);
        var q=p.charCodeAt(0);
        if ((q >= 65 && q <= 90) || (q >= 97 && q <= 122)) {
        }else{
            alert("Please Enter the first name in only for Alphnumeric Value");
        }
    }
    if (a.length >= 5 && a.length <= 15) {
    }else{
        alert("Name Only 15 character");
    }
    if (isNaN(b) || b <= 18){
        alert("Enter Only number and age is not greater 18");
    }
}