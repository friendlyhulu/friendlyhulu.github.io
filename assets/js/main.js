/*Bactotop*/
 $(window).scroll(function(){
  if ($(this).scrollTop()){
      $('.backtotop').fadeIn();
  } else {
      $('.backtotop').fadeOut();
  }
});

 $(".backtotop").click(function(){
     $("html, body").animate({scrollTop : 0}, 10);
 });
 
 //Hide Navbar
 var prevScrollpos = window.pageYOffset;
 window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){

  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
 
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});






