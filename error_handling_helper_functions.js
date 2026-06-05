// 1
function validate(){
    return `Yes! ${input} is correct!`;
}

// console.log(validate())

// 2
function errorTypes(word){
    try {
        const word = prompt("Enter your word")
        if (typeof word != "string")
            throw new Error ("Strings only")
    }catch(error){
        console.log("error", error.message);
    }
}

errorTypes()

// 3 (backup, Lisekho did main)
function vacation(){
    const destination = prompt("Please input your ideal holiday destination:");
    return destination.charAt(0).toUpperCase() + destination.slice(1);
}

function comment(){
    const comment = vacation();
    return `${comment} sounds like the best vacation ever, you'll definitely be able to go there soon!`;
}

// console.log(comment())