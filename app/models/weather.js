export default class Weather {
  kToC(k) {
    let c = k - 273.15
    return c.toFixed(1)
  }
  constructor(data) {
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = this.kToC(data.main.temp)
  }
  get weatherTemplate() {
    return /*html*/`
    <div>
    <p>${this.kelvin}°&nbspC</p>
    <small>${this.city}</small>
    </div>`
  }
}