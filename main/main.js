function handleClick(e){
    const slide = document.getElementById('mobileSidebars');

    const background = document.getElementById('backGroundMobile');
    background.classList.toggle('active')
    slide.style.left = "0" ;
    slide.style.transitionDuration = "0.5s"

}
function handleClickLogIn(){
    const slide = document.getElementById('mobileLogin');
    slide.classList.toggle('active')
}
function Close(){
    document.getElementById('mobileSidebars').style.left = "-300px"
    // document.getElementById("bars").innerHTML = '<i class="fa fa-fw fa-bars" ></i>';
    const background = document.getElementById('backGroundMobile');
    background.classList.toggle('active')
    
}
function clickOutSide(){
    document.getElementById('mobileSidebars').style.left = "-300px";
    const background = document.getElementById('backGroundMobile');
    background.classList.toggle('active')
}

// function nextPrev(){
//     var listImg = document.querySelector('.filtering')
//     var firstImg = listImg.querySelectorAll("img")[0]
//     let firstImgWidth = firstImg.clientWidth + 20;
//     listImg.scrollLeft += firstImgWidth
//     if(listImg.scrollLeft > firstImgWidth * 2){
//         listImg.scrollLeft = 0;
//     }
// }

// function nextPrevTwo(){
//     var listImg = document.querySelector('.filtering-two')
//     var firstImg = listImg.querySelectorAll("img")[0]
//     let firstImgWidth = firstImg.clientWidth;
//     listImg.scrollLeft += firstImgWidth + 10;
//     if(listImg.scrollLeft >= firstImgWidth * 4){
//         listImg.scrollLeft = 0;
//     }
// }