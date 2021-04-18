window.onscroll=function () {
    myFunction()

};

var header=document.getElementById("mHeader");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky){
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }

}



function col() {
    var chk=document.getElementById('pm');
    chk.style.backgroundColor='green';

}

function Check() {

 let checkbox=document.querySelectorAll('input');
 let count=0;
 checkbox.forEach(element => {
     if (element.checked) {
         count++;
     }

 });

    if (count > 3) {
        console.log("too many.")
    }
    if (locat.contains("Europe")) {
        document.getElementById('premium').innerHTML = "€4.99/month";
        document.getElementById('business').innerHTML = "€10.99/month";
    } else {
        if (locat.contains("England")) {
            document.getElementById('premium').innerHTML = "£4.99/month";
            document.getElementById('business').innerHTML = "£10.99/month";
        }
    }
    {
        document.getElementById('premium').innerHTML = "$4.99/month";
        document.getElementById('business').innerHTML = "$10.99/month";
    }


}

var locat=moment.tz.guess();


