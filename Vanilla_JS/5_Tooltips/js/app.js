/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");

var tooltips = document.getElementsByClassName("tooltip");
console.log(tooltips);

//dodaje mouseover i mouseout dla kazdego elementu, czyli petla

    for (i=0; i< tooltips.length; i++) {
        tooltips[i].addEventListener("mouseover", function() {
            console.log(this.dataset.text);
            var newSpan = document.createElement("span");
            var tooltipText = "<span class='tooltipText'>" + this.dataset.text + "</span>";
            this.appendChild(newSpan);
            newSpan.outerHTML = tooltipText;
        });

        tooltips[i].addEventListener("mouseout", function() {
            console.log(this.dataset.text);
            console.log(this);
            var newSpan = document.querySelector(".tooltipText");
            newSpan.parentElement.removeChild(newSpan);
        })







    }




});
