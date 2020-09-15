function getData(cb) {
    var xhr = new XMLHttpRequest(); //allows us to consume APIs

    // var data;

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");//mkes a request to GET data from website

    xhr.send();//sends request

    // function setData(jsonData) {// write a new function to log the JSON data in the console without having to keep all the code written in one function
    //     data = jsonData;
    //     // console.log(data);
    // }

    xhr.onreadystatechange = function() { //when state changes we run a check
        // console.log(this.readyState);don't need after setTimeout
        if(this.readyState == 4 && this.status == 200) { // readyState 4 means operation is done. status 200 is JS for OK
            // once the if statements respond positively, the div with #data will fill it's innerText with the data gotten from the API
            cb(JSON.parse(this.responseText));//after adding timeout we can add this to work afterall
                // document.getElementById("data").innerHTML = this.responseText;

                // setData(JSON.parse(this.responseText));//allows the data to be called inside the other function
                
            // data = this.responseText; // was supposed to allow us to log data to be viewed in browser but nah
            // console.log(JSON.parse(this.responseText)); //parses data into a tidy list for viewing in the browser
            
            // console.log(data);
            
        }
    };
}

function printDataToConsole(data){
    console.log(data);
}

getData(printDataToConsole); 
// {
//    console.log(data); 
// })
// console.log(data); was to be used with data = this.responseText;

// setTimeout(function(){
//     console.log(data);
// }, 500)//gives onreadystatechange function time to reach a ready state of 4 meaning we can remove setData function
// //Code waits for execution