var btn = document.querySelector('#btn')
var img = document.querySelector(".pic-container")
var quote = document.querySelector('#caption')

btn.addEventListener("click", function(){
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function(){
        if (XHR.readyState == 4 && XHR.status == 200) {
            var url = JSON.parse(XHR.responseText).message;
            img.style.backgroundImage = `url(${url})`
        }
    }

    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();

})

btn.addEventListener("click", function() {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200) {
            var quotes = JSON.parse(XHR.responseText)[0].quote
            console.log(quotes)
            quote.innerHTML = quotes
        }
    }
    XHR.open("GET", "https://thesimpsonsquoteapi.glitch.me/quotes");
    XHR.send();
})