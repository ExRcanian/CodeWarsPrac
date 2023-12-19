function solution(number){
    let arr3 = []
    let arr5 = []
    for (let i=number-1; i >2; i--) {
        if (i%3 == 0) {
            arr3.push(i)
        }
        if (i%5 == 0 && i%3 !== 0) {
            arr5.push(i)
        }
    }
    
    let merged = [...arr3, ...arr5]
    let sum = 0
    for (let i=0; i < merged.length; i++) {
        sum += merged[i];
    }

    if (sum < 0) {
        return 0
    } else {
        return sum
    }
}



