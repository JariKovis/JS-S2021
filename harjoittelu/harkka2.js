
console.log( areYouOldEnough(16) );
document.write( areYouOldEnough(19) );
alert(areYouOldEnough(5));
alert(areYouOldEnough(25));


function areYouOldEnough(age) {
    if (age < 18){ 
        return "Alaikäinen";
    }else 
    return "Vanha";
}
