  var whatTimeIsIt = function(angle) {
    let timeH = Math.floor(angle / 30)
    let timeM = Math.floor(((angle % 30)/30) * 60)
    if (timeH < 10) {
        if (timeM == 0) {
            return `0${timeH}:${timeM}0`; 
        } else if (timeM < 10) {
            return `0${timeH}:0${timeM}`;
        } else {
            return `0${timeH}:${timeM}`;
        }
    } else if (timeH == 0) {
        if (timeM == 0) {
            return `12:00`;  
        } else if (timeM < 10) {
            return `12:0${timeM}`;
        } else {
            return `12:${timeM}`;
        }
    } else {
        if (timeM == 0) {
            return `${timeH}:${timeM}0`;  
        } else if (timeM < 10) {
            return `${timeH}:0${timeM}`;
        } else {
            return `${timeH}:${timeM}`;
        }
    }
} 

