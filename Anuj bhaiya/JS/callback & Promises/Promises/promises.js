function makePizza()
{
    return new Promise (function(resolve,reject){
        setTimeout(()=>{
            console.log("near to end");
            const pizza="dona";
            resolve(pizza);
        },2000);
    })

}


const PizzaPromise=makePizza();
console.log(PizzaPromise);

