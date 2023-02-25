try{
    console.log("this is error free line");
    console.log(x);// having the error;
    console.log("line after the error");
}
catch(error)
{
    console.log("the error occured : ",error);
}
finally{
    console.log("this will executes always");
}