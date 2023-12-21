function findUniq(arr) {
    if (arr[0] === arr[1]) {
        for (let i=0; i< arr.length; i++) {
            if (arr[0]!= arr[i]) {
                console.log(arr[i]);
            }
        }
    } else if (arr[0] != arr[1] && arr[0] != arr[2]) {
        console.log(arr[0]);
    } else {
        console.log(arr[1]);
    }
}