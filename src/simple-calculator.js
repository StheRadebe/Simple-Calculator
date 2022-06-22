function add(...numbers){
    let result = 0;
        for(let i = 0; i < numbers.length; i++){
            result += numbers[i]
        }
    return result
}

function multiply(...numbers) {
    let result = 1;
        for(let i = 0; i < numbers.length; i++){
            result *= numbers[i]
        }
    return result 
}

module.exports = {add, multiply}