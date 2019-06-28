function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}

function PlanetWithSatellite(name, satellite) {
    Planet.apply(this, arguments);
    this.satellite = satellite;

    this.getName = function () {
        const originalResult = this.getName;
        return 'Planet name is ' + this.name + '. The satellite is ' + this.satellite + '.';
    }
}

PlanetWithSatellite.prototype = Object.create(Planet.prototype);
PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;


const earth = new PlanetWithSatellite('earth', 'moon');
console.log(earth.getName());
