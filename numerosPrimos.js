
function buscaNumeroPrimos(n) {
    //não altere a linha acima
    
    /*
     * Nas linhas a seguir, escreva um código que encontre todos
     * os números primos entre 0 e n e coloque-os num array chamado
     * `numerosPrimos`(você deve criar esse array)
     */
    var numerosPrimos = [];
    var primoTeste = true
    for (var i =2; i < n; i++){
        var primoTeste = true
        for (var i2 = 2; i2 < i; i2++ ){
            if (i % i2 == 0){
                primoTeste = false;
            }
            }
            if (primoTeste == true){
                numerosPrimos.push(i)
            }
        }    
        
        
        
        
    
    //não altere as linhas abaixo
      return numerosPrimos;
    }
    
    // fim do seu código
    console.log(buscaNumeroPrimos(30));