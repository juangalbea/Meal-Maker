const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {

  },
  set appetizers(appetizerIn) {

  },
  get mains() {

  },
  set mains(mainIn) {

  },
  get desserts() {

  },
  set desserts(dessertIn) {

  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
  		price: dishPrice
    };

    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;

    return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}, The price is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);

menu.addDishToCourse('mains', 'Carabinero', 2.25);

menu.addDishToCourse('desserts', 'Tart', 1.25);

menu.addDishToCourse('appetizers', 'asas', 7.25);

menu.addDishToCourse('mains', 'sasare', 6.25);

menu.addDishToCourse('desserts', 'reer', 3.25);

let meal = menu.generateRandomMeal();
console.log(meal);
