var navIcon = document.getElementById ('mobile-nav-icon');
var mobileUl = document.getElementById ('mobileUl');
var closeNotif = document.getElementById ('close-notif');
var scrollTop = document.getElementById ('scrolltop');

navIcon.addEventListener ('click', function () {
  if (navIcon.className == 'fa-solid fa-xmark') {
    mobileUl.style.display = 'none';
    navIcon.className = 'fa-solid fa-bars-staggered';
  } else {
    mobileUl.style.display = 'flex';
    navIcon.className = 'fa-solid fa-xmark';
  }
});

closeNotif.addEventListener ('click', function () {
  document.getElementById ('notification').style.left = '-1000vw';
});

window.onscroll = function () {
  scroll ();
};

function scroll () {
  if (
    document.querySelector ('body').scrollTop > 200 ||
    document.documentElement.scrollTop > 20
  ) {
    scrollTop.style.display = 'flex';
  } else {
    scrollTop.style.display = 'none';
  }
}
