const greatestCombo = (array) => { //       O(n)
    let stringifiedArray = array.join("O").split("O") // stringify each element of the array
    let combo = "" // accumulator for greatest combination

    while (stringifiedArray.length !== 0) {                                                 // set loop to continously run through the array until it is empty 
        const maxNum = stringifiedArray.reduce((a, b) => {                                 // use reduce to get O(n) for finding number

            if (parseInt(b.split("")[0]) > parseInt(a.split("")[0])) {
                return b

            } else if (parseInt(b.split("")[0]) == parseInt(a.split("")[0])) {
                const be = b.split("")[1]
                const aye = a.split("")[1]
                return (aye == undefined && parseInt(a) > parseInt(be)) ? a : b     // if the first digit of element is the same and there is no second digit to compare then we want to compare the element to second digit of second number

            } else {
                return a
            }
        })

        combo += maxNum // add number to accumulator
        stringifiedArray.splice(stringifiedArray.indexOf(maxNum), 1)  // remove number from array to eventually end loop
    }

    return combo

}

console.log(greatestCombo([3,32,34,5,9]))
console.log(greatestCombo([2,10]))


const mostProfitablePatient = (array) => {
    let totalProfit = {};
    let freqOfVisit = {};

    for (let patientData of array) {
        const patientName = patientData[0];
        const paymentAmount = patientData[1];
        (freqOfVisit[patientName] == undefined) ? freqOfVisit[patientName] = 1 : freqOfVisit[patientName]++;
        (totalProfit[patientName] == undefined) ? totalProfit[patientName] = paymentAmount : totalProfit[patientName] += paymentAmount
    }

    let currHighestPayment = 0, currName;

    for (let name of Object.keys(totalProfit)) {
        if ((totalProfit[name] / freqOfVisit[name]) > currHighestPayment) {
            currHighestPayment = (totalProfit[name] / freqOfVisit[name])
            currName = name
        }
    }

    return currName
}

console.log(mostProfitablePatient([["john", 50], ["greg", 60], ["john", 80], ["brian", 90]]));


const missingNum = (array) => {
    const max = Math.max(...array);
    const min = Math.min(...array);
    let desiredTotal = 0;
    let actualTotal = 0

    for (let i = min; i <= max; i++) {
        desiredTotal += i
    }

    for (let i = 0; i < array.length; i++) {
        actualTotal += array[i]
    }

    return desiredTotal - actualTotal

}

console.log(missingNum([7, 5, 3, 6, 2]))

