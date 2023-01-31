const Cars =["MMW",'Honda',"Toyata","Jeep"];
const newCars ={};
for(i=0;i<Cars.length;i++){
    newCars[i] = Cars[i];
}
console.log(newCars);
//using object assign
const newCar = Object.assign({ }, Cars);
console.log(newCar);
//using spread operater
const obj = {...Cars};
console.log(obj);