function calc(num1, num2,op)
{
    if (op == 1)
    { return (num1+num2)}

    else if (op == 2)
    {return (num1-num2)}

    else if(op == 3)
    { return (num1*num2)}

    else if(op == 4)
    {
        return(num1/num2)
    }

    else
    {
            return 0
    }
}
let executar = true;
while(executar==true)
{
    console.log("Qual operaçaó voce quer realizar:");
    console.log("1: Soma  2: Subtraçao  3: Multiplicação  4: Divisão");
    
    let op = 1;
    if (op<0|| op>4)
       { console.log("Essa opção não existe")}
    else if(op==0)
        {executar=false;    }
    else
    {
        console.log("Digite o primeiro numero da operação:");
        num1=number(num1);

        console.log("Digite o segundo numero da operação:");
        num2=number(num2);

        let resulatado= calc(num1,num2,op);
        console.log("O resultado da operação é "+resulatado);
        
    }
}


    


    
