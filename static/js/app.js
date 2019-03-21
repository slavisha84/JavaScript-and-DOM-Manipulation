
var ufos = data;
// creating variable tbody that will reflect on tbody within html
var tbody = d3.select("tbody");
//------------------------------------------------------------------------------------------------------------------------//
// by folowing the video instruction at: https://youtu.be/EfkbksORz-Y that homework instruction provided, 
// i was able to create for each function and populate the table by inseting single row for each set of the record from data.js
// utilizing key and value within for each function of object entries. 
 //-----------------------------------------------------------------------------------------------------------------------//
data.forEach(function(ufo){
    console.log(ufo);
    var row = tbody.append("tr");  
    Object.entries(ufo).forEach(function ([key,value]) {
        console.log(key,value);

        var cell = tbody.append("td");
        cell.text(value);
        
    })
});

//-----------------------------------------------------------------------------------------------------------------------//
//Fitlering the data -  i have tried using tutorial from the video and i tried using the calss lesson
//-----------------------------------------------------------------------------------------------------------------------//
// creating submit variable based on button id fitler
var submit = d3.select("#filter")

// definding funcitonality of submit.on button
submit.on("click", function(){
 //using prevent default from d3 we are going to prevent page from refreshing
 d3.event.preventDefault();
// establishing variables for element input and value input
 var inputElement = d3.select("#datetime").property('value');
 console.log(inpEl)
 //var inpVal = inpEl.property("value");
// printing out in console
 //console.log(inpVal);
 //console.log(ufos);
 // creating variable filtered which will store the data based on filtered ufos data that is filtered by datetime input value. 
 var filtered = ufos.filter(nlo => nlo.datetime === inputElement);

 function rendertbody() {

 }
 //console.log(filtered);
});