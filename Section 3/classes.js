// Classes 
// Example 1 
class Cookie {
    constructor(color) {
        this.color = color;
    }
}
// Create new instances of the Cookie class
let cookieOne = new Cookie('green');
let cookieTwo = new Cookie('blue');

// Example 2
class Cookie {
    constructor(color) {
        this.color = color;
    }
// Setters
    getColor() {
        return this.color;
    }
// Getters
    setColor(color) {
        this.color = color;
    }

}

cookieOne.getColor(); // green
cookieOne.setColor('red');