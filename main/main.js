function handleClick(e){
    document.getElementById('mobileSidebars').style.display="block";
    document.getElementById('mobileLogin').style.display="none";
    document.getElementById('mobileSidebars').style.zIndex="99999";
    let bg= document.getElementById('moblie-background-cover');
    bg.style.background = "black";
    bg.style.width = "600px";
    bg.style.height="400px";
    bg.style.opacity="0.86";
}
function handleClickLogIn(){
    document.getElementById('mobileLogin').style.display="block";
    document.getElementById('mobileSidebars').style.display="none";
    document.getElementById('moblie-background-cover').style.display="none";
}
