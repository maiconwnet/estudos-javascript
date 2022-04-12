

let family = {

    incomes: [255, 435, 869.38, 1455,89],
    expenses:[345, 100, 9999.22]   
    
    }
    
    function sum(array){
     let total = 0;
    
    
     for (let value of array) {
         total += value;
     }
    return total
    }
    
    function calcBalancer (){
    
        const calculateIncomes = sum(family.incomes)
        const calculateExpenses = sum (family.expenses)
    
        const total = calculateIncomes - calculateExpenses
        const itsOk = total >= 0 ;
    
        let balancerText = "Negativo"
    
        if (itsOk){
            balancerText = "Possitivo"
    
        }
        console.log(`seu saldo é ${balancerText}: R$${total.toFixed(2)}`)
    }
    
    calcBalancer();