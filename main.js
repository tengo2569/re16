const pirveli = document.getElementById("zuraba")
pirveli.addEventListener("click", function ufunqcio(){
    const temuri = document.getElementById("input")
    const teimurazi = document.getElementById("false")
    const tengizi = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if(!tengizi.test(temuri.value)){
        teimurazi.innerHTML="Oops! Please check your email"
        teimurazi.style.color ="red"
        
    }
    else{
        teimurazi.innerHTML="IT'S OKAY"
        teimurazi.style.color ="green"

    }
})