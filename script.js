let p = document.getElementById('paragraph')
let button = document.getElementById('readmore')
let state = false
function expand(){
    p.classList.toggle("expand")
    if(state){
        button.innerHTML = "Read More"
        state = false;
    }else{
        button.innerHTML = "Read Less"
        state = true;

    }
}