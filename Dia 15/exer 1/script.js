let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14];
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21];

function numerosEmComum(array1, array2) {
    let arrayComum = [];
    let positionArray = 0;
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                arrayComum[positionArray] = array1[i];
                positionArray++;
                j = arrayB.length;
            }
        }
    }

    return arrayComum;
}

console.log(numerosEmComum(arrayA, arrayB));