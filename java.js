function tabuada(){
    let numero = Number(document.getElementById("tabu").value)
    let adicao =document.getElementById("adi")
    let subtracao = document.getElementById("sub")
    let multiplicacao =document.getElementById("mult")
    let divisao= document.getElementById("div")

    for(i=0;i<=10;i++){
        soma = numero + i
        sub = i + numero
        multi = numero * i
        divi = i * numero
        adicao.innerHTML += numero + " + " + i + "=" + soma + "<br>"
        subtracao.innerHTML += sub + " - " + numero + "=" + i + "<br>"
        multiplicacao.innerHTML += numero + " &#215 " +  i + "=" + multi + "<br>"
        divisao.innerHTML += divi + " / " + numero + "=" + i + "<br>"

    }
    
}
function arcoiris(cores){

    const corpo = document.getElementsByTagName("body")[0];
    corpo.style.backgroundColor = cores
    }

    function iniciar(){
        let bola = document.getElementById("bola")
        bola.classList.add("movimento")
    }
    
    function parar(){
        let bola = document.getElementById("bola")
        bola.classList.remove("movimento")
        bola.classList.remove("pular")
    }
    
    // function pular(){
    //     let bola = document.getElementById("bola")
    //     bola.classList.add("pular")
    //     bola.classList.remove("pular")
    
    function valor(carro) {
        var res = document.getElementById("res")

        switch(carro){
            case "gol":
                res.innerText = "48.000,00"
                break

                case "saveiro":
                res.innerText = "56.500,00"
                break

                case "fiat":
                res.innerText = "87.390,00"
                break

                case "susuki":
                res.innerText = "169.880,00"
                break
                
                case "corolla":
                res.innerText = "77.360,00"
                break
            
        }







    }
