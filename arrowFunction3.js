let comparaComThis = function(param) {
    console.log(this === param)
}

const comparaComThisTrue = (param) => {
    console.log(this === param);
}

comparaComThisTrue();
comparaComThis();
