// <!------------------js for  TOPscroll---------------------------->

var mybutton = document.getElementById("myBtn"); //button of top scrol
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) { //TOP scroll 
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() { // When the user clicks on the button, scroll to the top of the document
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

