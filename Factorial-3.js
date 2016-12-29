
/*
 * Complete the function below.
 */
function factorial(n) {
    if(n>0){
        var factorial = 1;
    for (var i=1;i<=n;i++)
        {
            factorial=i*factorial;
        }
        return factorial;
    }
    return null;
     


}

