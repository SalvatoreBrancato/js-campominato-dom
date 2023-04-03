// Fusinzione che crea un div con una classe tutte le volte che viene invocata
function creaElementoHtml(tagHtml, classi, text){
    let elemento = document.createElement(tagHtml);
    elemento.className = classi;
    elemento.innerText = text;
    return elemento;
}

//variabile che richiama la classe div del HTML dove verranno inseriti i nuovi div
let griglia = document.querySelector(".griglia");
// costante che richiama il button
const play = document.querySelector("#gioca");

 play.addEventListener("click", function(){
     let livello = document.querySelector("#difficoltà").value
     let display = document.getElementById(`display`);
                    display.classList.add("none");
                    let gameOver = document.getElementById(`game-over`);
                    gameOver.classList.add("none");
     let bomba = []
             console.log(bomba)
     if(livello == 1){
        griglia.innerHTML = "";
        bomba = generaBombe(100)
         for(let i = 1; i <=100; i++){
             const divbox = creaElementoHtml("div", "box", i);
             
             griglia.append(divbox)
                   
             divbox.addEventListener("click", function(){

                
                if(bomba.includes(i)) {
                    this.innerHTML = `<i class="fa-solid fa-bomb fa-shake" style="color: #ef0606;"></i>`
                    let display = document.getElementById(`display`);
                    display.classList.remove("none");
                    let gameOver = document.getElementById(`game-over`);
                    gameOver.classList.remove("none");
                }else{
                    this.classList.toggle("blue")
                    this.classList.toggle("textwhite")
                    console.log(i)
                }
                
             })
         }
         
     }else if(livello == 2){
        griglia.innerHTML = "";
        bomba = generaBombe(81)
         for(let i = 1; i <=81; i++){
             const divbox = creaElementoHtml("div", "box2", i);
             
             griglia.append(divbox)
        
             divbox.addEventListener("click", function(){
        
                if(bomba.includes(i)) {
                    this.innerHTML = `<i class="fa-solid fa-bomb fa-shake" style="color: #ef0606;"></i>`
                    let display = document.getElementById(`display`);
                    display.classList.remove("none");
                    let gameOver = document.getElementById(`game-over`);
                    gameOver.classList.remove("none");
                }else{
                    this.classList.toggle("blue")
                    this.classList.toggle("textwhite")
                    console.log(i)
                }
        
             })
         }
     }else if(livello == 3){
        griglia.innerHTML = "";
        bomba = generaBombe(49)
         for(let i = 1; i <=49; i++){
             const divbox = creaElementoHtml("div", "box3", i);
             griglia.append(divbox)
       
             divbox.addEventListener("click", function(){
       
                if(bomba.includes(i)) {
                    this.innerHTML = `<i class="fa-solid fa-bomb fa-shake" style="color: #ef0606;"></i>`
                    let display = document.getElementById(`display`);
                    display.classList.remove("none");
                    let gameOver = document.getElementById(`game-over`);
                    gameOver.classList.remove("none");
                }else{
                    this.classList.toggle("blue")
                    this.classList.toggle("textwhite")
                    console.log(i)
                }
        
             })
         }
     }
 })

 function generaBombe(numeroMax){
    let arrayBombe = [];
    console.log(arrayBombe)
    while(arrayBombe.length < 16){
        let bombe = numeroRandom( 1 , numeroMax );
        if(!arrayBombe.includes(bombe)){
        arrayBombe.push(bombe);
        
        }
    }
    return arrayBombe
    
 }

 function numeroRandom(min, max){
    return Math.floor((Math.random() * max) + min)
    
}