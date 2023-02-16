function abc() {
    let j = document.getElementById("id1").value;
    if(j == ""){
        alert("Name is Null.");
    }
    for (let i = 0; i < j.length; i++) {
        if ((j[i] >= 65 && j[i] <= 90) || (j[i] >= 97 && j[i] <= 122)) {
            document.getElementById("p1").innerHTML = j ;
        }else{
            alert("Name only Alphabets.");
        }
    }

    let i = document.getElementById("id2").value;
    if(i == ""){
        alert("Semester is Null.");
    }else{
        document.getElementById("p2").innerHTML = i ;
    }

    
    let a = document.getElementById("id3").value;
    if(a == ""){alert("Maths mark is Null.");}else{
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= '0' && a[i] <= 9) {        
        document.getElementById("p3").innerHTML = a ;
        }else{
            alert("Maths mark only numeric value.");}
    }
    let b = document.getElementById("id4").value;
    if(b == ""){alert("Physics mark is Null.");}
    for (let i = 0; i < b.length; i++) {
        if (b[i] >= '0' && b[i] <= 9) {
            document.getElementById("p4").innerHTML = b ;
        }else{
            alert("Physics mark only numeric value.");}
    }
    let c = document.getElementById("id5").value;
    if(c == ""){alert("Chemistry mark is Null.");}
    for (let i = 0; i < c.length; i++) {
        if (c[i] >= '0' && c[i] <= 9) {
            document.getElementById("p5").innerHTML = c ;
        }else{
            alert("Chemistry mark only numeric value.");}
    }
    let f = parseFloat(a);
    let g = parseFloat(b);
    let h = parseFloat(c);
    let d = parseInt(f+g+h);
    document.getElementById("p6").innerHTML = d ;
    let e = parseFloat(d/3);
    document.getElementById("p7").innerHTML = e ;



   
}