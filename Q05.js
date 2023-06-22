function gettime(){
    let time = prompt("Enter time(24H format)")
    if(time < 10.00){
        window.alert("Good Morning")
    }
    else if(time < 20.00){
        window.alert("Good Day")
    }
    else if (time < 24){
        window.alert("Good Night")
    }
    else{
        window.alert("Enter a valid time!")
    }
}

function fruit_col(){
    let color = prompt("Enter the fruit(banana, pineapple, apple)")
    switch(color){
        case "banana":
            window.alert("Yellow")
            break;
        case "pineapple":
            window.alert("Orange")
            break;
        case "apple":
            window.alert("Green")
            break;
        default:
            window.alert("Please select one from givel list!")
    }
}

function max_val(){
    document.write("<label>Value 1:</label>")
    document.write("<input type=\"number\" placeholder=\"Value 1\" id=\"value1\"><br><br></br>")
    document.write("<label>Value 2:</label>")
    document.write("<input type=\"number\" placeholder=\"Value 2\" id=\"value2\"><br><br></br>")
    document.write("<label>Value 3:</label>")
    document.write("<input type=\"number\" placeholder=\"Value 3\" id=\"value3\"><br><br></br>")
    document.write("<input type=\"submit\" name=\"submit\" onclick=\"maxvalfn()\" value=\"Get Max\">")
}

function maxvalfn(){
    let val1 = parseInt(document.getElementById("value1").value)
    let val2 = parseInt(document.getElementById("value2").value)
    let val3 = parseInt(document.getElementById("value3").value)
    console.log(val1, val2, val3)
    if(val1>val2){
        if(val1>val3){
            window.alert(val1 + " is the largest value!")
            console.log(val1, val2, val3)
        }
        else{
            window.alert(val3 + " is the largest value!")
            console.log(val1, val2, val3)
        }
    }
    else{
        if(val2>val3){
            window.alert(val2 + " is the largest value!")
            console.log(val1, val2, val3)
        }
        else{
            window.alert(val3 + " is the largest value!")
            console.log(val1, val2, val3)
        }
    }
}

function prime(){
    let val = prompt("Enter the value")
    var prime = true

    if(val < 2){
        prime = false
    }
    else if(val != 2){
        for(let i = 2; i < val; i++){
            if(val%i == 0){
                prime = false
                break
            }
        }
    }
    if(prime){
        alert("Prime number")
    }
    else{
        alert("Not a prime number")
    }
}

function odd(){
    for(let i = 1; i < 30; i++){
        if(i%2==1){
            document.write(i + " ")
        }
    }
}

function array(){
    const arr1 = [23, 44, 61, 39, 162]
    for(let i = 0; i < 5; i++){
        document.write(arr1[i] + " ")
    }
}

function arr_op(){
    const numbers = [80, 30, 40, 50, 23]
    numbers[1] = 78
    let arr_len = numbers.length
    for (i = 0; i < arr_len; i++) {
        let min = numbers[i];
        let index = i;
        for (j = i + 1; j < arr_len; j++) {
            if (numbers[j] < min) {
                min = numbers[j];
                index = j;
            }
        }
        let temp = numbers[i];
        numbers[i] = min;
        numbers[index] = temp;
    }

    for(let i = 0; i < 5; i++){
        document.write(numbers[i] + " ")
    }
}

function arr_op2(){
    const names = ["sadun", "kamal", "nimal", "ruwan"];
    const temp = names;
    const string = temp.join(" ");
    document.write(string + "</br>");
    names.pop();
    for (i = 0; i < names.length; i++) {
        document.write(names[i] + " ");
    }
    document.write("</br>");
    names.push("nuwani");
    for (i = 0; i < names.length; i++) {
        document.write(names[i] + " ");
    }
}

function merge_arr(){
    const myGirls = ["Cecilie", "lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    const newArray = myGirls;

    for (i = 0; i < myBoys.length; i++) {
        newArray.push(myBoys[i]);
    }
    for (i = 0; i < newArray.length; i++){
        document.write(newArray[i] + ", ");
    }
}

function sum(){
    const numbersArray = [1, 13, 22, 123, 49];
    let total = 0;
    
    for (i = 0; i < numbersArray.length; i++){
        total += numbersArray[i];
    }
    alert("Sum : " + total);
}