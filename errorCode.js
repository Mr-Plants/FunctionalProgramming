var arr = [1, 2, 3, 4];

function processArr() {

  function multipleBy10(val) {
    i = 10;  // 由于RHS查询，会一直向上查询变量i，查到就直接赋值，查不到就在根作用域创建变量i
    return val * i;
  }

  for (var i = 0; i < arr.length; i++) {
    arr[i] = multipleBy10(arr[i]);
  }

  return arr;
}

processArr();

console.log(arr);  //-> [10, 2, 3, 4]

