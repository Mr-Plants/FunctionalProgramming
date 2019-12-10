let input = [50, 60, 70];

const sum = (total, current) => total + current;

const total = arr => arr.reduce(sum);  // 纯度不够啊，老铁

const size = arr => arr.length;

const divide = (a, b) => a / b;

const average = arr => divide(total(arr), size(arr));

const res = average(input);

console.log(res);

/**
 * 将函数作为一种数据类型，使用不同的小函数（纯函数）拼装成大的功能
 */
