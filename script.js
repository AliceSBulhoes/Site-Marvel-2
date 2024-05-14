
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
    const contador = document.getElementById("contador-1");
    let valor = 0;
    let tempo = setInterval(()=>{
        valor += 1;

        contador.innerHTML = ` + ${valor}`

        if(valor == 300){
            clearInterval(tempo)
        }
    });

    const contador2 = document.getElementById("contador-2");
    let valor2 = 0;
    let tempo2 = setInterval(()=>{
        valor2 += 1;

        contador2.innerHTML = ` + ${valor2}`

        if(valor2 == 500){
            clearInterval(tempo2)
        }
    });

    const contador3 = document.getElementById("contador-3");
    let valor3 = 0;
    let tempo3 = setInterval(()=>{
        valor3 += 1;

        contador3.innerHTML = ` + ${valor3}`;

        if(valor3 == 1000){
            clearInterval(tempo3);
        }
    });
}