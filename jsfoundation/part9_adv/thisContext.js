const person = {
    name: "Rohan",
    greet(){
        console.log(`Hi, I am ${this.name}`);
        
    }
}

person.greet()

const bindingContext = person.greet.bind({name: "John"});
bindingContext()