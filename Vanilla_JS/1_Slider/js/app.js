document.addEventListener("DOMContentLoaded",	function	()	{
			console.log("DOM	fully	loaded	and	parsed!");



//PUNKT 2
//zmiana klasy

//visible
var next = document.querySelector("#prevPicture");
console.log(next);

var prev = document.querySelector("#nextPicture");
console.log(prev);

var lista = document.querySelectorAll("li");
console.log(lista);

lista[0].classList.add("visible");

//PUNKT 4 i 5


var picIndex = 0;
next.addEventListener("click", function (event)	{
			lista[picIndex].classList.remove("visible");
			if (picIndex < lista.length - 1) {//bo nie ma zdjecia nr 5
				picIndex += 1;
			}
			else {
				picIndex = 0;
			}
      lista[picIndex].classList.add("visible");
    console.log("Liczba	kliknięć prawym przyciskiem",	picIndex);
})


///PUNKT 6 //

var picIndex = 0;
prev.addEventListener("click", function (event)	{
			lista[picIndex].classList.remove("visible");
			if (picIndex > 0) {//bo nie ma zdjecia nr -1
				picIndex -= 1;
			}
			else {
				picIndex = lista.length - 1;
			}
      lista[picIndex].classList.add("visible");
    console.log("Liczba	kliknięć lewym przyciskiem",	picIndex);
})


//zeby szlo w druga strone zrobic slideindex

//jesli slideindex jest mniejszy od zera to wtedy lista.lenght - 1

//PUNKT 7
//pojawia się błąd po przewinięciu wszystkich obrazków, lista nie odnawia się.


//PUNKT 8

/*Jak temu zaradzić? W eventach dodaj **if-a**, który sprawdzi, czy wartość nie wyszła poza zakres.
Jeżeli tak się stało, to program ma nastawić poprawną wartość:
* liczbą ujemna -> **0**,
* liczba równa liczbie elementów lub większa ->**-1**/











});
