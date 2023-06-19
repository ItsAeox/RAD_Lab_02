function mammal(){
    const mammal = {
        color   : "Orange",
        type    : "Cat",
        legs    : 4,
        name    : "kitty",
        speed   : 24
    }

    document.write("Name: ",mammal.name + "<br>")
    document.write("Type: ",mammal.type)
}

function test(){ 
    const person = {
        firstName   : "John",
        lastName    : "Doe",
        id          : 5566,
        fullName(){
            return this.firstName + " " + this.lastName
        }
    }
    document.write("Full Name : ",person.fullName())
    document.write("<br>" + "Id : ",person.id)
}

function triangle(){
    const triangle = {
        height  : 25,
        base    : 24,
        color   : "Red",
        area(){
            return this.base * this.height * 0.5
        }
    }
    document.write("Area of the triangle : ",triangle.area())
}