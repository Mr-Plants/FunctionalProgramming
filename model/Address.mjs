export default class Address {
  /**
   * Construct a new street object
   * @param country
   * @param city
   * @param zip
   * @param street
   */
  constructor(country, city = null, zip = null, street = null) {
    this._country = country;
  }

  get country() {
    return this._country;
  }

  set country(value) {
    this._country = value;
  }

}
