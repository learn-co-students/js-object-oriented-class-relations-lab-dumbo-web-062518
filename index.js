let store = { drivers: [], passengers: [], trips: [] }
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId

    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.driverId === this.id)
  }

  passengers() {
    const passengersArray = []
    this.trips().forEach(trip => {
      const passenger = store.passengers.find(passenger => passenger.id === trip.passengerId)
      passengersArray.push(passenger)
    })
    return passengersArray
  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId

    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id)
  }

  drivers() {
    const driversArray = []
    this.trips().forEach(trip => {
      const driver = store.drivers.find(driver => driver.id === trip.driverId)
      driversArray.push(driver)
    })
    return driversArray
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    if(driver) {
      this.driverId = driver.id
    }
    if(passenger) {
      this.passengerId = passenger.id
    }

    store.trips.push(this)
  }

  passenger() {
    const passengerId = this.passengerId
    return store.passengers.find(passenger => passenger.id === passengerId )
  }

  driver() {
    const driverId = this.driverId
    return store.drivers.find(driver => driver.id === driverId)
  }
}
