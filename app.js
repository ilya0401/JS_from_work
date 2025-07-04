function print(message) {
    console.log(`Type of value ${message} === ${typeof message}`)
    return message
}

sum = function sum(a, b){
    const res = a + b;
    console.log(`Result:\t\t\t${res};\nType of result:\t\t${typeof res}`);
    return res;
}


function sum(x = 3, y = 10) {
    const res  = sum(x, y);
    console.log(res);
}