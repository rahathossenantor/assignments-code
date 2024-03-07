function bar() {
    console.log("bar");
}
function foo() {
    console.log("foo");
    bar();
}
// foo();
// bar();

// a function that takes tow numbers and returns the sum of them.
function addTowNumber(num1, num2) {
    let result = num1 + num2;
    return result;
}

// a function that takes an integer and returns the square of that number.
function square(num) {
    let result = num * num;
    return result;
}

// get average of three numbers.
function getAverage(n1, n2, n3) {
    let average = (n1 + n2 + n3) / 3;
    return average;
}

// get average.
function getAverage(averages) {
    let sum = 0;
    for (let i = 0; i < averages.length; i++) {
        sum += averages[i];
    }
    let result = sum / averages.length;
    return result;
}

// take a number and find out is that number even or not.
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

// inch to feet
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

// mile to km
function mileToKm(mile) {
    const km = mile * 1.6;
    return km;
}

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

// add all elements of an array.
function addArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// get all odd numbers of an array.
function getOddNumbersOfAnArray(arr) {
    let oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element % 2 !== 0) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

// get factorial using for loop.
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

// another way to get factorial.
function getFactorialReverse(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result *= i;
    }
    return result;
}

// get factorial using while loop.
function factorialWhile(num) {
    let i = 1;
    let result = 1;
    while (i <= num) {
        result *= i;
        i++;
    }
    return result;
}

// get factorial using while loop by reverse way.
function getFactorialReverseWhile(num) {
    let i = num;
    let result = 1;
    while (i >= 1) {
        result *= i;
        i--;
    }
    return result;
}

// hours to minutes converter.
function hoursToMinutes(hours) {
    let minutes = hours * 60;
    return minutes;
}

// find all the leap years from an array.
function findLeapYears(years) {
    let leapYears = [];
    for (let i = 0; i < years.length; i++) {
        const year = years[i];
        if (isLeapYear(year)) {
            leapYears.push(year);
        }
    }
    return leapYears;
}

// find the max of three numbers.
function findMaxOfThreeNumbers(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    } else if (n2 > n1 && n2 > n3) {
        return n2;
    }
    return n3;
}

// find the max number of an array.
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}

// find the minimum number of an array.
function findMin(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}

// reverse string.
function reverseStrings(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        let latter = str[i];
        result += latter
    }
    return result;
}

// reverse words.
function reverseWords(str) {
    let words = str.split(" ");
    let result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        result.push(words[i]);
    }
    result = result.join(" ");
    return result;
}

// fobonacci series.
function fobonacci(end) {
    let fibo = [0, 1];
    for (let i = 2; i <= end; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

// remove duplicates
function removeDuplicates(data) {
    let uniq = [];
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        let index = uniq.includes(element);
        if (!index) {
            uniq.push(element);
        }
    }
    return uniq;
}

// calculate wood.
function calculateWood(chair, table, bed) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chair * perChairWood;
    const tableWood = table * perTableWood;
    const bedWood = bed * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
};

// find the cheapest phone from an array.
function findCheapestPhone(phones) {
    let cheapestPhone = phones[0];
    for (let i = 0; i < phones.length; i++) {
        let phone = phones[i];
        if (phone.price < cheapestPhone.price) {
            cheapestPhone = phone;
        }
    }
    return cheapestPhone;
};

const phones = [
    { brandName: "Apple", model: "14 pro max", camera: 48, storage: 512, price: 149000, quantity: 2 },
    { brandName: "Samsung", model: "s23 ultra", camera: 200, storage: 512, price: 119000, quantity: 4 },
    { brandName: "Xiaomi", model: "11 ultra", camera: 200, storage: 256, price: 12100, quantity: 9 },
    { brandName: "Oppo", model: "find x", camera: 50, storage: 256, price: 62000, quantity: 1 },
    { brandName: "Vivo", model: "v20", camera: 120, storage: 64, price: 32000, quantity: 3 },
    { brandName: "Tecno", model: "camon 17p", camera: 32, storage: 128, price: 1900, quantity: 7 }
];

// calculateTotal.
function calculateTotal(products) {
    let total = 0;
    let productsTotal = 0;
    for (let i = 0; i < products.length; i++) {
        productsTotal = products[i].price * products[i].quantity;
        total += productsTotal;
    }
    return total;
}

// calculate ticket price.
function calculateTicketPrice(ticketsQuantity) {
    const first100 = 100;
    const second100 = 90;
    const rest = 70;

    if (ticketsQuantity <= 100) {
        const price = first100 * ticketsQuantity;
        return price;
    } else if (ticketsQuantity >= 101 && ticketsQuantity <= 200) {
        const first100Price = first100 * 100;
        const restTickets = ticketsQuantity - 100;
        const restPrice = second100 * restTickets;
        const totalTicketPrice = first100Price + restPrice;
        return totalTicketPrice;
    } else {
        const first100Price = first100 * 100;
        const second100Price = second100 * 100;
        const restTickets = ticketsQuantity - 200;
        const restPrice = rest * restTickets;
        const totalTicketPrice = first100Price + second100Price + restPrice;
        return totalTicketPrice;
    }
}

// let factorialR = 1;
// for (let i = 1; i <= 7; i++) {
//     factorialR *= i;
//     console.log(factorialR, i);
// }
function getFactorialRecursive(factorial) {
    if (factorial === 1) {
        return 1;
    }
    return factorial * getFactorialRecursive(factorial-1);
}




// ---------------------------------------------------------------
// 1st problem solved
// mindGame function
function mindGame(number) {
    let multiplyBy3 = number * 3;
    let additionBy10 = multiplyBy3 + 10;
    let dividBy2 = additionBy10 / 2;
    let subtructionBy5 = dividBy2 - 5;
    return subtructionBy5;
}
mindGame(60);

// 2nd problem solved
// Finding even or odd
function evenOdd(friendName) {
    let lengthCheck = friendName.length;
    if (lengthCheck % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
evenOdd('Jamil Ahmed');

// 3rd problem solved
// is less or greater than seven
function isLGSeven(inputNumber) {
    let differenceCheck = inputNumber - 7;
    if (differenceCheck < 7) {
        return differenceCheck;
    }
    else {
        let multiplyBy2 = inputNumber * 2;
        return multiplyBy2;
    }
}
isLGSeven(30);

// 4th problem solved
// findingBadData in an array
function findingBadData(randomNumbers) {
    let goodData = 0;
    let badData = 0;
    for (let i = 0; i < randomNumbers.length; i++) {
        let element = randomNumbers[i];
        if (element >= 0) {
            goodData++;
        }
        else {
            badData++;
        }
    }
    return badData;
}
let randomNumbers = [20, -50, 35, -20, 100, -1200, 25, 33, -40];
findingBadData(randomNumbers);

// 5th problem solved
// convert gems to diamond
function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
    let convertFirstFriendGems = firstFriendGems * 21;
    let convertSecondFriendGems = secondFriendGems * 32;
    let convertThirdFriendGems = thirdFriendGems * 43;
    let totalGems = convertFirstFriendGems + convertSecondFriendGems + convertThirdFriendGems;
    if (totalGems > 1000 * 2) {
        totalGems -= 2000;
        return totalGems;
    }
    else {
        return totalGems;
    }
}
gemsToDiamond(25, 18, 70);

