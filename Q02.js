function calc(){
    var Mark1, Mark2, Mark3
        Mark1 = 30
        Mark2 = 40
        Mark3 = 90
        document.write("Average is ", (Mark1+Mark2+Mark3)/3)
        document.write("<br>")
        document.write("Total is ", Mark1+Mark2+Mark3)
}

function display(){
    var name = "Gayathra Dissanayake"
    var age = "23"
    var gender = "Male"


    document.write("My name is ",name)
    document.write("<br>")
    document.write("I am ",age, " years old.")
    document.write("<br>")
    document.write("Gender : ",gender)
}

function area(){
    let len = prompt("Enter the length of the rectangle")
    let wid = prompt("Enter the width of the rectangle")
    document.write("Area of the rectangle is  ", len*hei)
}

function test(){
    var a = 10
    var b = 20
    document.write("a. a += b = ", a+=b)
    document.write("<br>")
    document.write("b. a -= b = ", a-=b)
    document.write("<br>")
    document.write("c. a += b = ", a+=b)
    document.write("<br>")
    document.write("d. a *= b = ", a*=b)
    document.write("<br>")
    document.write("e. a /= b = ", a/=b)
    document.write("<br>")
    document.write("f. a %= b = ", a%=b)
}

function test_2(){
    var x = 5
    var y = 4
    var text1 = "A"
    var text2 = "B"
    document.write("a. x >= y : ", x>=y)
    document.write("<br>")
    document.write("b. x != y : ", x!=y)
    document.write("<br>")
    document.write("c. text1 < text2 : ", text1<text2)
}

function conc(){
    var statement1 = "what a very"
    var statement2 = " nice day"
    document.write("Concatenated string : ", statement1.concat(statement2))
}

function outputs(){
    x = 5 + 5
    y = "5" + 5
    z = "Hello" + 5
    document.write("a. x = 5 + 5 : ", x)
    document.write("<br>")
    document.write("b. y = \"5\" + 5 : ", y)
    document.write("<br>")
    document.write("c. z = \"Hello\" + 5 : ", z)
    document.write("<br>")

}