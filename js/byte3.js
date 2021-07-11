// Avoid Scrolling in beginig loader part

window.onload = function(){
  document.getElementById('menu_txt').style.fontSize = "170%";
}

function noscroll() {
    window.scrollTo( 0, 0 );
}
window.addEventListener('scroll', noscroll);

setTimeout(function () {
    window.removeEventListener('scroll', noscroll);
    document.getElementsByClassName('loaderMain')[0].style.display='none';
    },
2000);


var heightOfPage = document.getElementById("particles-js");
function changeTab(id)
{   
    
  document.getElementById('MENU').style.display = 'none';
  document.getElementById('ABOUT').style.display = 'none';
  document.getElementById('CYBER').style.display = 'none';
  document.getElementById('MIND').style.display = 'none';
  document.getElementById('LIFE').style.display = 'none';
  document.getElementById('PHOTO').style.display = 'none';
  document.getElementById('PRASTUTI').style.display = 'none';
  document.getElementById('BYTE').style.display = 'none';
  //document.getElementById('REGISTER').style.display = 'none';
  document.getElementById(id).style.display = 'block';
  noscroll();
}
 
changeTab("MENU");