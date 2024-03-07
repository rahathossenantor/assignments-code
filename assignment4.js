function cubeNumber(number) {
    let inputType = typeof number;
    if (inputType !== "number") {
        return "Please provide a valid number!";
    }
    return number * number * number;
};


function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Please provide two valid strings!";
    }
    return string1.includes(string2);
};


function sortMaker(arr) {
    if (!Array.isArray(arr) || (arr[0] < 0 || arr[1] < 0)) {
        return "Invalid Input!";
    } else if (arr[0] === arr[1]) {
        return "equal";
    } else if (arr[0] > arr[1]) {
        return [arr[0], arr[1]];
    }
    return [arr[1], arr[0]];
};


function findAddress(obj) {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";
    
    return `${street}, ${house}, ${society}`;
};


function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "Your balance is empty!";
    }

    let balance = 0;
    for (let i = 0; i < changeArray.length; i++) {
        balance += changeArray[i];
    }

    if (balance >= totalDue) {
        return true;
    }
    return false;
};
