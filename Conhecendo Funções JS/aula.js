function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2)
}

function classificarImc(IMC){
    if(IMC < 18.5){
        return 'Abaixo do peso'
    } else if(IMC >= 18.5 && IMC <= 25){
        return 'Peso normal'
    }else if(IMC >= 25 && IMC < 30){
        return 'Acima do peso'
    }else if(IMC >= 30 && IMC < 40){
        return 'Obeso'
    }else{
        return 'Obesidade Grave'
    }   
}

//Main - invocada imediatamente.
(function (){
    const peso = 80.1
    const altura = 1.75
    
    const IMC = calcularImc(peso, altura)
    console.log(classificarImc(IMC.toFixed(2)))
})()


