function reverseString(string) {
    let strLength = string.length;
    let revString= " ";
for (let i = strLength - 1; i>=0; i--) {
    revString +=string[i];
} 
return revString;

}
console.log(reverseString("ciao"));