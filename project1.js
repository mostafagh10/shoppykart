var x = document.getElementById('moonicon');
var y = document.querySelectorAll('.nav-link');
var y2 = document.querySelector('.navbar-brand span');
var y3 = document.getElementsByClassName('navbar-toggler')[0];
var y4 = document.querySelector('nav');
var z = document.getElementsByClassName('shopwithus')[0];
var z2 = document.getElementsByClassName('getonthelist')[0];
var z3 = document.querySelectorAll('.getonthelist h7');

x.onclick = function(){
    if(x.classList.contains('darkmode')){
        document.body.style.backgroundColor = 'white' ;
        x.classList.remove('darkmode');
        z.classList.remove('darkmode');
        z2.classList.remove('darkmode');
        y2.classList.remove('darkmode');
        y3.classList.remove('darkmode2');
        y4.classList.remove('darkmode3');
        z3.forEach((e) => {
            e.classList.remove('darkmode');
        });
        y.forEach((e) => {
            e.classList.remove('darkmode');
        });
    }
    else{
        document.body.style.backgroundColor = 'black' ;
        x.classList.add('darkmode');
        z.classList.add('darkmode');
        z2.classList.add('darkmode');
        y2.classList.add('darkmode');
        y3.classList.add('darkmode2');
        y4.classList.add('darkmode3');
        z3.forEach((e) => {
            e.classList.add('darkmode');
        });
        y.forEach((e) => {
            e.classList.add('darkmode');
        });
    }
}