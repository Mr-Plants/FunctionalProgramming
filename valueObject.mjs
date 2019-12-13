/**
 * 值对象
 * @param code
 * @param location
 * @returns {any}
 */
const zipCode = (code, location) => {
  let _code = code;
  let _location = location;

  return {
    code() {
      return _code;
    },
    location() {
      return _location;
    },
    formString(str) {
      let part = str.split('-');
      return zipCode(part[0], part[1]);
    },
    toString() {
      return _code + '-' + _location;
    }
  }
};

const beijingZip = zipCode('100', '00000');
console.log(beijingZip.toString());

const another = beijingZip.formString('810-016');
console.log(another.code(), another.location());
