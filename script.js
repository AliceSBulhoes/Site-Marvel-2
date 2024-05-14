
let banners = ["./img/banner1.png","./img/banner2.png", "./img/banner3.png"]
let index = 0;

function slideShow(){
    let banner = document.getElementById("banners").src = banners[index];
    index ++

    if(index == 3){
        index = 0;
    }
    setTimeout('slideShow()',2000)
    
}
slideShow();

function contador(){
    
}