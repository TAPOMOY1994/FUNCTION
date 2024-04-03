function greet(){

    console.log("HELLO I AM OLIVER!");
}


greet();






function name(person){

    console.log(`My name is ${person}`);
}

name('Tapomoy');






function isName(firstname,lastname){


    console.log(`I am ${firstname} ${lastname}`);
}



isName('Tapomoy','Das');





function repeat(str,numTimes){

    let result='';

    for(let i=0;i<numTimes;i++){

        result=result+str;
    }
    console.log(result);
}


repeat('I AM GOOD',6);