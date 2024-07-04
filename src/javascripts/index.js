

let r = Math.random()

document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, World!');
});

for(let i = 0; i < 10; i++){
    let r = Math.random()
    if(r < .5){
        document.write('div class="red box"></div>')
    }else{
        document.write('div class="blue box"></div>')
    }
}


let j = 0;
while(j < 10) {
    let r = Math.random()
    if(r < .5){
        document.write('div class="red box"></div>')
    }else{
        document.write('div class="blue box"></div>')
    }
    j++;
}

let k = 0
do {
    let r = Math.random()
    if(r < .5){
        document.write('div class="red box"></div>')
    }else{
        document.write('div class="blue box"></div>')
    }
    k++;

}while(k < 10)