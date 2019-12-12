import Student from "./model/Student.mjs";
import Address from "./model/Address.mjs";

let foo = new Student('Smith', 'Foo', '2333', 'Princeton');
foo.address = new Address('US');

let bar = new Student('Dodge', 'Bar', '2334', 'Qinghua');
bar.address = new Address('CN');

let baz = new Student('Nan', 'Baz', '2335', 'Qinghai');
baz.address = new Address('CN');

let jack = new Student('Smith', 'Jack', '1899', 'Qinghai');
jack.address = new Address('CN');

const peopleInSameCountry = jack.peopleInSameCountry([foo, bar, baz]);
console.log(peopleInSameCountry);

const studentInSameCountryAndSchool = jack.studentInSameCountryAndSchool([foo, baz, bar]);
console.log(studentInSameCountryAndSchool);

// ================================end oop========================================

const selector = (country, school) => {
  return (student) => {
    // return student.address.country() === country && student.school() === school;  // 为啥这样不行？
    return student.address.country === country && student.school === school;
  }
};

const findStudentsBy = (friends, selector) => {
  return friends.filter(selector);
};

const FPResult = findStudentsBy([bar, baz, jack, foo], selector('CN', 'Qinghai'));
console.log('FPResult:', FPResult);
