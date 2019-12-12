import Person from "./Person.mjs";

export default class Student extends Person {
  /**
   * Construct a new student object
   * @param firstName
   * @param lastName
   * @param id
   * @param school
   */
  constructor(firstName, lastName, id, school) {
    super(firstName, lastName, id);
    this._school = school;
  }

  get school() {
    return this._school;
  }

  studentInSameCountryAndSchool(students) {
    let studentInSameCountry = super.peopleInSameCountry(students);

    let result = [];

    for (let student of studentInSameCountry) {
      if (student.school === this.school) {
        result.push(student);
      }
    }
    return result;
  }
}
