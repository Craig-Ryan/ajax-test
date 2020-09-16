/************************* Step 5 final step*************************/
// All a callback is is a function that's passed as a parameter through another function & executed inside that function
// Setting timeouts means we have to tell the system to wait every time we want something to happen
// We use callbacks instead

function getData(cb) {
    var xhr = new XMLHttpRequest(); //allows us to consume APIs

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");//mkes a request to GET data from website

    xhr.send();//sends request


    xhr.onreadystatechange = function() { //when state changes we run a check
        if(this.readyState == 4 && this.status == 200) { // readyState 4 means operation is done. status 200 is JS for OK
            // once the if statements respond positively, the div with #data will fill it's innerText with the data gotten from the API
            cb(JSON.parse(this.responseText));//after adding timeout we can add this to work afterall
                
            
        }
    };
}

function printDataToConsole(data){ /**Takes in data as an argument and prints to the console */
    console.log(data);
}

getData(printDataToConsole); /*passes in the actual function itself */
// {
//    console.log(data); 
// })
// console.log(data); was to be used with data = this.responseText;

// getData (function(){ **first used to call the cb function in the browser to return the JSON object but deleted in way for writing the function separately
//     console.log(data);
// });
                                    // *************************
// !!This gives us best control over the functions as they are only invoked when we want them to be!!
                                    // *************************

/* In steps */

/************************* Step 1*************************/

// var xhr = new XMLHttpRequest(); create new XML request to consume API data
// xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
// xhr.send(); send the XML function

// xhr.onreadystatechange = function() { --when the state changes,
//     if (this.readyState == 4 && this.status == 200) { --and if the states 4 and 200 show all is complete and OK,
//         document.getElementById("data").innerHTML(this.responseText); --"data" element will be filled with gathered data,
//     }
// };


// /************************* Step 2 *************************/ Response inside div in browser is not JSON

// var xhr = new XMLHttpRequest(); create new XML request to consume API data
// var data; --added to try console log data outside of variable

// xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
// xhr.send(); send the XML function

// xhr.onreadystatechange = function() { --when the state changes,
//     if (this.readyState == 4 && this.status == 200) { --and if the states 4 and 200 show all is complete and OK,
//         **1 console.log(typeof(this.responseText)); --shows a string that looks like JSON-- remove
            //** 2*/ console.log(typeof(JSON.parse(this.responseText))); --returns a JSON object
            //  **3 console.log(JSON.parse(this.responseText)); --shows the object logged into the console
            // **4 data = this.responseText;
//     }
// };

// console.log(data); - should return data as an object in the console but doesnt!!

/************************* Step 3*************************/

// var xhr = new XMLHttpRequest(); create new XML request to consume API data
// var data; --added to try console log data outside of variable

// xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
// xhr.send(); send the XML function

// xhr.onreadystatechange = function() { --when the state changes,
//     if (this.readyState == 4 && this.status == 200) { --and if the states 4 and 200 show all is complete and OK,
//         **1 console.log(typeof(this.responseText)); --shows a string that looks like JSON-- remove
            //** 2*/ console.log(typeof(JSON.parse(this.responseText))); --returns a JSON object
            //  **3 console.log(JSON.parse(this.responseText)); --shows the object logged into the console
            // **4 data = this.responseText;

            // **console.log(data); -- now it will works as it is called inside the function HOWEVER all of the work we need to work with would have to be within this function making it very messy to work with -- we should create a seperate function insted
//     }
// };

    // function setData(jsonData){
    //     data = jsonData;
    //      console.log(data); --this adds the JSON object to the console
    // }

    // xhr.onreadystatechange = function() { --make changes to the onreadystatechange function
//     if (this.readyState == 4 && this.status == 200) { 
        // setData(JSON.parse(this.responseText));

// console.log(data); - **set at the bottom results in the setData function being undefind and nothing will show in the browser


/************************* Step 4 *************************/

// var xhr = new XMLHttpRequest(); create new XML request to consume API data
// var data; --added to try console log data outside of variable

// xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
// xhr.send(); send the XML function

// xhr.onreadystatechange = function() { --when the state changes,
//     if (this.readyState == 4 && this.status == 200) { --and if the states 4 and 200 show all is complete and OK,
//         **1 console.log(typeof(this.responseText)); --shows a string that looks like JSON-- remove
            //** 2*/ console.log(typeof(JSON.parse(this.responseText))); --returns a JSON object
            //  **3 console.log(JSON.parse(this.responseText)); --shows the object logged into the console
            // **4 data = this.responseText;

            // **console.log(data); -- now it will works as it is called inside the function HOWEVER all of the work we need to work with would have to be within this function making it very messy to work with -- we should create a seperate function insted
//     }
// };

    // function setData(jsonData){
    //     data = jsonData;
    //      console.log(data); --this adds the JSON object to the console
    // } ** tihs can be deleted after the setTimeout is set

    // xhr.onreadystatechange = function() { --make changes to the onreadystatechange function

        // console.log(this.readyState); -- tells at what point of the sequence the function is currently, here it will be "undefined" as our data hasn't been set yet -- this is confirmed by the following 2, 3, 4 or process of the readyState function --** remove too after setTimeout


//     if (this.readyState == 4 && this.status == 200) { 
        // setData(JSON.parse(this.responseText)); -- can remove this and add the following after setTimeout is added
        // data = JSON.parse(this.responseText);

    // setTimeout(function(){
    //     console.log(data);
    // }, 500); -- this sets a timeout of 500ms to allow the function to catch all parameters