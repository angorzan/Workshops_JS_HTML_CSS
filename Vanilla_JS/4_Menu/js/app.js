/**
 * Created by Jacek on 2015-12-16.
 */


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");

//PUNKT 2


    var list = document.querySelectorAll("div > ul > li");
    console.log(list);

//PUNKT 3 i 4


for (i=0; i<list.length; i++) {
    list[i].addEventListener("mouseover", function() {
        if (this.firstElementChild !== null) {
            this.firstElementChild.style.display = "inline-block";
        }

        console.log(this.firstElementChild);
    });
    list[i].addEventListener("mouseout", function() {
        if (this.firstElementChild !== null) {
            console.log("Zejście z listy");

            this.firstElementChild.style.display = "none";
        }
        console.log(this.firstElementChild);
    });


}







});