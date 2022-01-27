function kalkulal(){
    //Űrlapadatok
    const szelesseg=document.getElementById('szelesseg').value;
    const magassag=document.getElementById('magassag').value;
    const papir=document.getElementById('papirtipus').value;
    //Számítások
    let terulet=Math.round((szelesseg*magassag)/10000);    
    let koltseg=terulet*papir;

    document.getElementById('terulet').innerHTML=terulet
    document.getElementById('papir').innerHTML=koltseg
    document.getElementById('koltseg').innerHTML=terulet*koltseg

    //Megjelenítés
    document.getElementById('valasz').style.visibility = "visible";
}

