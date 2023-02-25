// ! call back function without the settimeout
// function orderPizza(myFunction)
// {
//     const pizza="Domu";
//     myFunction(pizza);
// }

// function notifyMeOrSucess(pizza)
// {
//     console.log('here is my notification for ',pizza);
// }

// orderPizza(notifyMeOrSucess);

// ! with set time out 

function orderPizza(myFunction)
{
    // console.log(myFunction);
    makeDough((pizza)=>
        {
            myFunction(pizza);
        });
}

function bakePizza(callback)
{
    // console.log(callback);
    setTimeout(()=>{
        const pizza="Domu";
        console.log('baked the',pizza);
        callback(pizza);
    },2000);
}

function makeDough(callback)
{
    // console.log(callback);
    setTimeout(()=>{
        console.log("dough is ready");
        bakePizza(callback);
    },2000);
}
function notifyMeOrSucess(pizza)
{
    // console.log(pizza);
    setTimeout(()=>{
        console.log('here is my notification for ',pizza);
    },2000);
}

console.log( orderPizza(notifyMeOrSucess));

