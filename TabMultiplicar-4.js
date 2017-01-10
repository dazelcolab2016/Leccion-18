
/*
 * Complete the function below.
 */
function stringMultiplicar(n) {
   var resultado = 0;
    var salida = "";
    
    for (var i = 1; i <= 10;i++)
        {
            resultado = n*i;
            salida += n + "x" + i +"=" + resultado;
            
            if ((i+1)<= 10)
                {
                    salida += "/";
                }
            
        }
    return salida;
}
    
