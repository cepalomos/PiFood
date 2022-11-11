

function unico(array){
    let aux = new Set();
    array.forEach(element => {
        aux.add(element);
    });
    const final = Array.from(aux);
    return final.map(element=>({name:element}));
}



module.exports = {unico}