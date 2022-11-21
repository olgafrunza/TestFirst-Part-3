/* eslint-disable no-unused-vars */

class Mammal {
    constructor(name) {
      this.name = name  
      this.offspring = []
    }

sayHello() {
    return `My name is ${this.name}, I'm a ${this.constructor.name}`
}

haveBaby() {
    let child = new Mammal(`Baby ${this.name}`)
    this.offspring.push(child)
   return child
}
}






class Cat extends Mammal {
    constructor (name, color) {
        super (name)
        this.color = color
    }
    
    haveBaby(color) {
     let child = new Cat(`Baby ${this.name}`, color)
    this.offspring.push(child)
   return child   
    }
    
    meow() {
        return "meow"
    }
}





class Dog extends Mammal {
    constructor (name, breed) {
    super (name)
    this.breed = breed
}

haveBaby (breed) {
   let child = new Dog (`Baby ${this.name}`, breed)
   this.offspring.push(child)
   return child  
}

bark() {
    return "RUFF RUFF"
}

}