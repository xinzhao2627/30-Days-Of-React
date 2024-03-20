// LEVEL 3 ARRAYS
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
ages.sort()

let mean = 0 

if((ages.length % 2) === 0){
    mean = (ages[ages.length/2] + ages[ages.length/2 - 1])/2 // true
} else {
    mean = ages[(ages.length-1)/2]  // false
}



console.log("mean is: ", mean)
console.log("avg is: ", ages.reduce((a, b) => a + b, 0) / ages.length)
console.log("range is: ", Math.abs(ages[ages.length - 1] - ages[0]))
console.log("minavg range is: ", Math.abs(ages[0] - ages.reduce((a, b) => a + b, 0) / ages.length))
console.log("maxavg range is: ", Math.abs(ages[ages.length - 1] - ages.reduce((a, b) => a + b, 0) / ages.length))