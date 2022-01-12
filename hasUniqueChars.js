function uniqueCharacteres(str) {
    for(let i=0; i < str.length; i++){
    for(let j=0; j < str.length; j++)
        if(str[i] == str[j])
        return false;
    }
return true;
}

let input = "GeeksforGeeks";
if (uniqueCharacteres(input) == true){
    console.log (`The String` + input + `has all unique characters.`)
} else {
    console.log(`The String` + input + `has duplicate characters.`)
}