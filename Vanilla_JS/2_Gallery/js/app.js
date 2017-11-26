/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded	and	parsed!");

//PUNKT 2


    var list = document.querySelectorAll("img");
    console.log(list);

    var body = document.querySelector("body");
    console.log(body);

//PUNKT 3//Rozwiazanie, modyfikacja w zadaniu 4, dlatego komentarz

//for (var i=0; i<list.length; i++) {
//    list[i].addEventListener("click", function () {
//        console.log("działa");
//    });
//}

//PUNKT 4

//for (var i=0; i<list.length; i++) {
    //         list[i].addEventListener("click", function () {
    //           var url = this.getAttribute("src");
    //         console.log(url);

    //    });
    // };


//PUNKT 5

    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function () {
            var url = this.getAttribute("src");
            console.log(url);


            var newDiv = document.createElement("div");


            var fullScreenHTML = "<div class=\"fullScreen\"> <img src= " + this.src + "><button class=\"close\">Close</button></div>";
            body.appendChild(newDiv);
            newDiv.outerHTML = fullScreenHTML;

//PUNKT 6
            var button = document.querySelector("button");
            button.addEventListener("click", function () {
                var fullScreen = this.parentElement;
                fullScreen.parentElement.removeChild(fullScreen);
            })

        });
    }


// punkt 7
//Problem: po powiększeniu zdjęcia z opcją fullscreen, zdjęcie jest podświetlone.


});
