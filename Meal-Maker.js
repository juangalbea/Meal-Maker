const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {

  },
  set appettizers(appetizerIn) {

  },
  get mains() {

  },
  set main(mainIn) {

  },
  get desserts() {

  },
  set desserts(dessertsIn) {

  },
  get courses() {

  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `The meal is ${appetizer.name}, ${main.name} and ${dessert.name} and the total price is ${totalPrice}`;
  }

}
menu.addDishToCourse('appetizers', 'Olives', 3);
menu.addDishToCourse('appetizers', 'Peanuts', 2);
menu.addDishToCourse('appetizers', 'Oysters', 14);
menu.addDishToCourse('mains', 'Sirloin', 25);
menu.addDishToCourse('mains', 'Hake', 19);
menu.addDishToCourse('mains', 'Cauliflower', 12);
menu.addDishToCourse('desserts', 'White Brownie', 6);
menu.addDishToCourse('desserts', 'Water Melon', 2.5);
menu.addDishToCourse('desserts', 'Lemon Tart', 6);


let meal = menu.generateRandomMeal();

console.log(meal);
