// Write your solution below:

let hello = 'Hello World, I love You!'

let duplicate = str =>{
    let newStr = ''
    for (i = 0; i < str.length; i++){
        if (!newStr.includes(str[i])){
            newStr += str[i]
    } 
}
return newStr
}


console.log(duplicate('Hello World, I\'m your wild girl...'))

console.log('=====================================================')

console.log([...new Set(hello)])
