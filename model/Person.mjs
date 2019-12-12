export default class Person {
  /**
   * Construct a new person object
   * @param firstName
   * @param lastName
   * @param id
   * @param birthYear
   * @param address
   */
  constructor(firstName, lastName, id, birthYear = null, address = null) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._id = id;
    this._birthYear = birthYear;
    this._address = address;
  }

  get id() {
    return this._id;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get birthYear() {
    return this._birthYear;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  peopleInSameCountry(peoples) {
    let result = [];
    for (let people of peoples) {
      if (this.address.country === people.address.country) {
        result.push(people);
      }
    }
    return result;
  }

}
