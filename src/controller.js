function Controller() {
  this.initialiseSea();
}

Controller.prototype.initialiseSea = function initialiseSea() {
  const backgrounds = [
    './images/water0.png',
    './images/water1.png',
  ];
  let backgroundIndex = 0;
  window.setInterval(() => {
    document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
    backgroundIndex += 1;
  }, 1000);
};
//this refers to the current instance of an object. In this case, this.initialiseSea() won't exist on the object itself, but it will exist on it's prototype (which JavaScript falls back to)
