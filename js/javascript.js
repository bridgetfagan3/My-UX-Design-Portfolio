let navListHidden = document.getElementById('nav-list-hidden');
 let hamburger = document.getElementById('hamburger');
 let navListLinkHidden = document.getElementById('nav-list-links-hidden');


hamburger.addEventListener('click', function() {

  if ( navListHidden.style.display != 'none' ) {
     navListHidden.style.display = 'none';
     navListLinkHidden.style.display = 'none';
 }
 else {
     navListHidden.style.display = 'block';
     navListLinkHidden.style.display = 'block';
     console.log("It worked!");
 }

});

/*fix!!*/
