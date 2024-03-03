function isPangram(string){
    let pangram = true
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i = 0; i < alphabet.length; i++) {
        if (string.includes(alphabet[i])) {
            pangram = true
        } else {
            pangram = false
        }
    }
    if (pangram == true) {
        return true 
    } else {
        return false 
    }
} 