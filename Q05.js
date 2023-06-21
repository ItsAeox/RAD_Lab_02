function gettime(){
    let time = prompt("Enter time(24H format)")
    if(time < 10.00){
        window.alert("Good Morning");
    }
    else if(time < 20.00){
        window.alert("Good Day");
    }
    else if (time < 24){
        window.alert("Good Night");
    }
    else{
        window.alert("Enter a valid time!")
    }
}