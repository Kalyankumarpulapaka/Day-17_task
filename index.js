var data=  fetch("https://restcountries.com/v2/all")
var city1;
var city2;
var city3;
data.then(x=>x.json()).then(function(data){
   console.log(data[0],data[1],data[2])
   document.getElementById("head1").innerHTML=`<h5> Name: ${data[0].name}`

   document.getElementById("ac").innerHTML=`Capital : ${data[0].capital}`
   document.getElementById("ar").innerHTML=`Region : ${data[0].region}`
   document.getElementById("ac1").innerHTML=`Country Code: ${data[0].currencies[0].code}`

   document.getElementById("head2").innerHTML=`<h5> Name: ${data[1].name}`
   document.getElementById("alc").innerHTML=`Capital : ${data[1].capital}`
   document.getElementById("alr").innerHTML=`Region : ${data[1].region}`
   document.getElementById("alc1").innerHTML=`Country Code: ${data[1].currencies[0].code}`

   document.getElementById("head3").innerHTML=`<h5> Name: ${data[2].name}`
   document.getElementById("abc").innerHTML=`Capital : ${data[2].capital}`
   document.getElementById("abd").innerHTML=`Region : ${data[2].region}`
   document.getElementById("abe").innerHTML=`Country Code: ${data[2].currencies[0].code}`
  
  document.getElementById("f1").innerHTML=`<img src="${data[0].flags.png}">`;
  document.getElementById("f2").innerHTML=`<img src="${data[1].flags.png}">`;
  document.getElementById("f3").innerHTML=`<img src="${data[2].flags.png}">`;

 city1=data[0].name;
 city2=data[1].name;
 city3=data[2].name;
 
})

var key="5cbc15a05c1e15a5dbf9e18810946c22"
function fun1(){
 
var data1=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${key}`)
data1.then(x=>x.json()).then(function(x){
  document.getElementById("p1").innerHTML= ` Condition: ${x.weather[0].description}`;
})
}
function fun2(){

var data2=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${key}`)
data2.then(x=>x.json()).then(function(x){
  document.getElementById("p2").innerHTML= ` Condition: ${x.weather[0].description}`;
})}

function fun3(){

var data3=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${key}`)
data3.then(x=>x.json()).then(function(x){
  document.getElementById("p3").innerHTML= ` Condition: ${x.weather[0].description}`;
})
}



let a1=document.createElement("div");
a1.setAttribute('class', 'container');
let b1=document.createElement("div");
b1.setAttribute('class', 'row');
let c1=document.createElement("div");
c1.setAttribute('class', 'col-lg-4 border own');
c1.innerHTML=`<div class="card" style="width: 20rem, hight="30rem;">

<div class="card-header" id="head1"></div>
<div id="f1" class="image-container"></div>
<div class="card-body">
 
  <p class="card-text" id="ac"></p>
  <p class="card-text" id="ar"></p>
  <p class="card-text" id="ac1"></p>
  <button type="button" onclick="fun1()" class="btn btn-outline-light">Click for Weather</button>
 
 
</div>
<div class="foot">
<h6 class="cardtext" id="p1"></h6>
</div>
</div>`
let c2=document.createElement("div");
c2.setAttribute('class', 'col-lg-4 border own');
c2.innerHTML=`<div class="card" style="width: 20rem, hight=30rem;">
<div class="card-header" id="head2"></div>
<div id="f2" class="image-container"></div>
<div class="card-body">

  <p class="card-text" id="alc"></p>
  <p class="card-text" id="alr"></p>
  <p class="card-text" id="alc1"></p>
  <button type="button" onclick="fun2()" class="btn btn-outline-light">Click for Weather</button>
 

</div>
<div class="foot">
<h6 class="cardtext" id="p2"></h6>
</div>
</div>`
let c3=document.createElement("div");
c3.setAttribute('class', 'col-lg-4 border own');
c3.innerHTML=`<div class="card" style="width: 20rem, hight="30rem;">
<div class="card-header" id="head3"></div>
<div id="f3" class="image-container"></div>
<div class="card-body">
 
  <p class="card-text "id="abc"></p>
  <p class="card-text"id="abd"></p>
  <p class="card-text"id="abe"></p>
  <button type="button" onclick="fun3()" class="btn btn-outline-light">Click for Weather</button>
  
  
</div>
<div class="foot">
  <h6 class="cardtext" id="p3"></h6>
  </div>
</div>`

b1.append(c1,c2,c3)
a1.append(b1)
document.body.append(a1);







