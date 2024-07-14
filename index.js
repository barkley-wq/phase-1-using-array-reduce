const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce((num, sum) => {
    return num + sum}, 0)

console.log(totalBatteries)
