const fruits = {
    "mango":{
        "price":2000,
        "qty":7
    },
    "apple":{
        "price":5000,
        "qty":9
    },
    "orange":{
        "price":4000,
        "qty":19
    }

}
//using looping
const fruitLists = [];
const fruitDetails=[];
for(let key in fruits){
    fruitLists.push([key,fruits[key]]);
//    const data = fruitLists.push(key,fruits[key]);
//    console.log(data);
    
}
for(let key in fruits){
    

    fruitDetails.push(key,fruits[key]);
   
    
}
console.log(fruitLists);
console.log(fruitDetails);
console.log(Object.keys(fruits));

// using map function
 const data = Object.keys(fruits).map(key=>{
    return[
        key,fruits[key]
    ];
})
console.log(data);
//using entries
const dataList = Object.entries(fruits);
console.log(dataList);

//using spread operater
const newArray = [];
  
for( i=0;i< fruits.length; i++){
  newArray.push(fruits[i])
}
  
console.log(newArray);

////////////////////////////////////////

const Cars =["OOP","LPPO","UUE"];
const newCars ={};
for(i=0;i<Cars.length;i++){
  (newCars[i]=Cars[i]);
}
console.log(newCars);