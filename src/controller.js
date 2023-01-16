function Controller() {
  this.initialiseSea();
}

Controller.prototype.initialiseSea = function initialiseSea() {};
//this refers to the current instance of an object. In this case, this.initialiseSea() won't exist on the object itself, but it will exist on it's prototype (which JavaScript falls back to)
