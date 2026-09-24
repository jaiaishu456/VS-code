/*for( let num = 8; num<=100; num++){
    let count = 0;

    for ( let i=2;i<num;i++){
        if(num %i ===0) {
            count++
    
}
}
if (count === 0){
    console.log(num)
}
} */

/*let paragraph = "Jayascript is a programming language and Jayascript is used in automation testing. automation testing is used for test web application."
let words = paragraph.toLowerCase().replace(/[^\w\s]/g,"").split(" ")
let checked = []

    for (let i=0; i< words.length; i++){
        if (checked. includes(words[i])){
            continue
        }
    let count = 0

    for (let j=0; j< words.length; j++){
       if (words[i]=== words[j]){
        count++

       } 
    }  
    if (count > 1){
        console.log(words[i] ,"=",count)
    }
    checked.push(words[i])

}*/

// let paragraph = "The cat likes to play with a ball. The cat plays with the ball every day. The dog likes the ball too, and the dog plays with the ball. Playing with the ball makes the cat happy, and playing makes the dog happy."
// let words = paragraph.toLocaleLowerCase().replace(/[^\w\s]/g,"").split(" ")
// let checked = []

 
//  for(let i=0; i<words.length; i++){
//     if(checked.includes(words[i])){
//         continue
//     }
//     let count = 0
//  for(let j=0; j<words.length; j++){
//     if(words[i]===words[j]){
//         count++
//     }


//  }  
//  if(count>1){
//     console.log(words[i],"=",count)
    
//  }
// //  checked.push(words[i])
   
//  }
 
// 

for(let num=2; num<=100; num++){
    let isPrime = true

    for(let i=2 ; i<num; i++){
        if(num % i == 0){
            isPrime = false
            break;
        }
    }
    if(isPrime){
        console.log(num)
    }
add()

}












