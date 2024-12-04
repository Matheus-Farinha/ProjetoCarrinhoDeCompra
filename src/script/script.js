"use strict";
let p = document.querySelector('.contador');
let botao = document.querySelector('.botao');
let racao = document.querySelector('.racao');
let coleira = document.querySelector('.coleira');
let casa_gato = document.querySelector('.casa_gato');
let casa_cachorro = document.querySelector('.casa_cachorro');


let qntd_items = 0;
let num = 0;
let valor_tot = 0;

function clicar() {
    num++
    p.innerHTML = num;
    let valor_r = 20

    if(event.target === racao) {
        // while(p.racao != 1) {
        //     valor_tot = valor_r * num;
        //     console.log("o valor total é de R$" + valor_tot)
        } 
        // ;
        // qntd_items ++;
        // console.log("você está comprando racão x" + qntd_items)

        
    } else if (event.target === coleira) {
        
    } else if(event.target === casa_gato) {
        
    } else if(event.target === casa_cachorro) {

    }
}
//# sourceMappingURL=script.js.map