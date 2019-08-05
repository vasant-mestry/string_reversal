/**
 * 
 * @param {string} input - Character
 * @returns {boolean} - Characcter is special character no not
 */
const alphabets=(input)=>{
    let alphabets = `!""#$%^&*()-=+_~,./?[]\|:;'{} `
    return alphabets.includes(input)
}

/**
 * reverese the input string
 * @param {object} input- splitted input string 
 */
const check=(input)=>{
    let l=0;
    let r = input.length-1;
    while(l<r){
        if(alphabets(input[l])){
            l++
        }
        else if(alphabets(input[r])){
            r--;
        }
        else{
            let swap = input[l];
            input[l] = input[r]
            input[r] = swap;
            r--;
            l++;
        }
    }
}
/**
 * Takes the input and splits into character array 
 */
const reverseString = ()=>{
    let input = document.getElementById("inputArea").value
    input = input.split('')
    check(input)
    console.log("Reverse of input is "+input)
}