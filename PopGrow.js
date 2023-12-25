function nbYear(currentPop, percentIncrease, migrants, targetPop) {
    let per = percentIncrease/100
    let years = 0

    do {
        currentPop = Math.floor(currentPop + (currentPop * per) + migrants)
        console.log(currentPop);
        years++
    } while (currentPop < targetPop) {
        
    return years
    } 
}
 
