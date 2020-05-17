//sample cookie string from scoalainformala.ro

/*  "_ga=GA1.2.1050163692.1571684152;
 __zlcmid=usid2MPQIV4bNm; 
 userName: John Doe; 
  _gid=GA1.2.495623437.1589568038; _gat_UA-82680323-3=1"*/



  //convert cookie string to object, returneaza un obiect
document.cookie

function cookiesObject() {
    let cookieArray = document.cookie.split("; ");
    //obj gol
    let cookieObj = {};

    cookieArray.forEach(element => {
        let cookieData = element.split("=");
        //key=value
        cookieObj[cookieData[0]] = cookieData[1];
    })

    return cookieObj;
}

//daca avem cookie de limba setat, il vom avea in acest obiect
const cookieObj = cookiesObject();
console.log(cookieObj.language);

//selectam valorile din cele doua radio btns
const radioBtns = document.getElementsByName("language");

console.log(radioBtns);

/*event pentru a prinde valoarea selectata de utilizator
parcurgere nod list pt valorile din ambele butoane
event.target e btn pe care utilizatorul a dat click
*/
for (let i = 0; i < radioBtns.length; i++) {
    //verificam daca value din butonul checked e aceeasi cu cea din cookie, butonul sa fie ckecked
    if (radioBtns[i].value === cookieObj.language) {
        radioBtns[i].checked = "checked";
    }

    radioBtns[i].addEventListener("click", (event) => {
        document.cookie = `language=${event.target.value}; expires=Thu, 2 Aug 2020 20:47:11 UTC; path=/`
        console.log(event.target.value);
    })
}









