let lista=[
    {
        name:'',
        lastName:'',
        predmet:''
    }
];


const mail = document.querySelector("#em");
const dugme = document.querySelector("#dugme");
const telefon=document.querySelector("#mobilni");
const porukaZaTelefon=document.querySelector("#poruka-telefon");
const porukaZaMail=document.querySelector("#poruka-mail");

function ProveraMejla(mail){
    var primer = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return primer.test(mail);
}

if(mail!=null){
mail.addEventListener('blur',()=>{
    if(ProveraMejla(mail.value)){
        porukaZaMail.textContent="";
        
    }else{
        porukaZaMail.textContent="Unesite ispravnu mail adresu!";
    }
})
}
function ProveraTelefona(telefon) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return re.test(telefon);
}
if(telefon){
telefon.addEventListener('blur',()=>{
    if(ProveraTelefona(telefon.value)){
        porukaZaTelefon.textContent = "";
    }else{
        porukaZaTelefon.textContent = "Unesite ispravan broj telefona";
    }
})

}



    
    function dugmeKliknuto(){
        let ime=document.getElementById("Ime").value;
        let prezime=document.getElementById("Prezime").value;
        let pred=document.getElementById("izbor-predmeta");
        let predText=pred.options[pred.selectedIndex].text;
        let objekat={
            name:ime,
            lastName:prezime,
            predmet:predText
        };
        lista.push(objekat);
        localStorage.setItem("podaci",JSON.stringify(lista));
    
    }
    function storidz(){
        let podaci=localStorage.getItem("podaci");
        if(podaci!=null){
            lista=JSON.parse(podaci);
        }
        else{
            localStorage.setItem("podaci",JSON.stringify(lista));
        }
    }

    function ucitajProfe(){
        if(localStorage.getItem("podaci") != null){
        let podaci=localStorage.getItem("podaci");
        lista=JSON.parse(podaci);
        for(let i=1;i<lista.length;i++){   
            if(lista[i].predmet=="Matematika"){
                let paragrafinjo=document.createElement("p");
                let tekstinjo=document.createTextNode("ime: " + lista[i].name + " prezime:" + lista[i].lastName);
                paragrafinjo.appendChild(tekstinjo);
                let divinjo=document.getElementById("divMata");
                divinjo.appendChild(paragrafinjo);
                let noviRedinjo=document.createElement("br");
                divinjo.appendChild(noviRedinjo);
                
            }
        }
        for(let i=1;i<lista.length;i++){   
            if(lista[i].predmet=="Ekonomija"){
                let paragrafinjo=document.createElement("p");
                let tekstinjo=document.createTextNode("ime: " + lista[i].name + " prezime:" + lista[i].lastName);
                paragrafinjo.appendChild(tekstinjo);
                let divinjo=document.getElementById("divEkonomija");
                divinjo.appendChild(paragrafinjo);
                let noviRedinjo=document.createElement("br");
                divinjo.appendChild(noviRedinjo);
            
            }
        }
        for(let i=1;i<lista.length;i++){   
            if(lista[i].predmet=="Programiranje"){
                let paragrafinjo=document.createElement("p");
                let tekstinjo=document.createTextNode("ime: " + lista[i].name + " prezime:" + lista[i].lastName);
                paragrafinjo.appendChild(tekstinjo);
                let divinjo=document.getElementById("divProgramiranje");
                divinjo.appendChild(paragrafinjo);
                let noviRedinjo=document.createElement("br");
                divinjo.appendChild(noviRedinjo);
            }
        }
        for(let i=1;i<lista.length;i++){   
            if(lista[i].predmet=="Menadžment"){
                console.log("usao");
                let paragrafinjo=document.createElement("p");
                let tekstinjo=document.createTextNode("ime: " + lista[i].name + " prezime:" + lista[i].lastName);
                paragrafinjo.appendChild(tekstinjo);
                let divinjo=document.getElementById("divMenadzment");
                divinjo.appendChild(paragrafinjo);
                let noviRedinjo=document.createElement("br");
                divinjo.appendChild(noviRedinjo);
            
            }
        }
        for(let i=1;i<lista.length;i++){   
            if(lista[i].predmet=="Marketing"){
                let paragrafinjo=document.createElement("p");
                let tekstinjo=document.createTextNode("ime: " + lista[i].name + " prezime:" + lista[i].lastName);
                paragrafinjo.appendChild(tekstinjo);
                let divinjo=document.getElementById("divMarketing");
                divinjo.appendChild(paragrafinjo);
                let noviRedinjo=document.createElement("br");
                divinjo.appendChild(noviRedinjo);
            
            }
        }
        for(let i=1;i<lista.length;i++){   
            if(lista[i].predmet=="Informacioni sistemi"){
                let paragrafinjo=document.createElement("p");
                let tekstinjo=document.createTextNode("ime: " + lista[i].name + " prezime:" + lista[i].lastName);
                paragrafinjo.appendChild(tekstinjo);
                let divinjo=document.getElementById("divIs");
                divinjo.appendChild(paragrafinjo);
                let noviRedinjo=document.createElement("br");
                divinjo.appendChild(noviRedinjo);
            
            
            }
        }
    }
    }

if(dugme!=null){
dugme.addEventListener('click',()=>{
    if(ProveraMejla(mail.value) && ProveraTelefona(telefon.value)){
      dugmeKliknuto();  
      alert("Uspesno ste se registrovali!");
      
    }else{
      alert("Unesite ispravne podatke!");
    }
})
}



const lozinka = document.querySelector("#sifra");
const tekst = document.querySelector("#poruka-lozinka");
if(lozinka!=null){
lozinka.addEventListener('input', validPassword);
}
let testSlaba = /[a-z]/;
let testSrednja = /\d+/;
let testJaka = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
let min_slaba_lozinka = 3;
let min_srednja_lozinka = 6;
let min_jaka_lozinka = 6;
function validPassword() {
  let unos_slab = lozinka.value.match(testSlaba);
  let unos_srednji = lozinka.value.match(testSrednja);
  let unos_jak = lozinka.value.match(testJaka);
  if (lozinka.value) {
    if (lozinka.value.length <= min_slaba_lozinka && (unos_slab || unos_srednji || unos_jak)) {
      tekst.textContent = "Vaša lozinka je suviše slaba";
    }
    if (lozinka.value.length >= min_srednja_lozinka && ((unos_slab && unos_srednji) || (unos_srednji && unos_jak) || (unos_slab && unos_jak))) {
      tekst.textContent = "Vaša lozinka je srednja";
    }
    if (lozinka.value.length >= min_jaka_lozinka && unos_slab && unos_srednji && unos_jak) {
      tekst.textContent = "Vaša lozinka je jaka";
    }
  }
}




