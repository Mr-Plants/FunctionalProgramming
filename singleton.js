let MyModule = (function MyModule(exports) {
  let privateVar = 2333;
  exports.method1 = () => {
    console.log(privateVar)
  }
  return exports;
}(MyModule || {}));
console.log(MyModule)

// MyModule.method1();
