document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM	fully	loaded	and	parsed!");


//PUNKT 2
    var pictures = document.querySelectorAll("img");
    var hidebtn = document.querySelector("#hideButton");
    var showbtn = document.querySelector("#showButton");
    var tagInput = document.querySelector("#tagInput");
    console.log(pictures);
    console.log(hidebtn);
    console.log(showbtn);
    console.log(tagInput);

//PUNKT 3

    var inputValue = tagInput.value;
    hidebtn.addEventListener("click", function () {
        console.log("Kliknięcie hidebtn");
        //PUNKT 4

        console.log(tagInput.value);
        //PUNKT 5
        for (var i = 0; i < pictures.length; i++) {
            var picTags = pictures[i].dataset.tag;
            if (picTags.indexOf(tagInput.value) > -1) {
                pictures[i].classList.add("invisible");
                console.log(picTags);
            }

            else {
                pictures[i].classList.remove("invisible");
            }
        }

        //PUNKT 6

        tagInput.value = "";

    });
    showbtn.addEventListener("click", function () {
        console.log("Kliknięcie showbtn");

        console.log(tagInput.value);


        //PUNKT 5
        for (var i = 0; i < pictures.length; i++) {
            var picTags = pictures[i].dataset.tag;
            if (picTags.indexOf(tagInput.value) > -1) {
                pictures[i].classList.remove("invisible");
                console.log(picTags);
            }
            else {
                pictures[i].classList.add("invisible");
            }

        }


        tagInput.value = "";
    });

//PUNKT 8
//Po kliknięciu 'show' bez wpisanego tekstu pokazują się wszystkie obrazki, po kliknięciu 'hide' bez wpisanego tekstu znikają wszystkie obrazki
});
