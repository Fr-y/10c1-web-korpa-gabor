function szamol() {
    var letszam = document.getElementById("letszam").value;
    var ejszaka = document.getElementById("ejszaka").value;
    var orszag =  document.getElementById("orszag").value;


    switch(orszag) {
        case "b":
            var ar = 5600
            break;
        case "g":
            var ar = 6200
            break;
        case "h":
            var ar = 5000
            break;
        case "t":
            var ar = 5800
            break;
    }

    var fizetendo = letszam * ejszaka * ar;
    document.getElementById('eredmeny').value = fizetendo + " Ft";
}