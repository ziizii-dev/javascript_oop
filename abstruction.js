function Car(name,model,brand,price,color){
    this.name = name;
    this.model=model;
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.cardetails = function(){
        data = [
            this.name,
            this.model,
            this.color,
            this.brand,
            this.price,
            
            
        ]
        console.log(data);
    }
    this.datainfo = function(){
        console.log("Name:"+this.name+" "+"Brand:"+this.brand)
    }
}
const car = new Car("BMW",2016,"bmw",2000,"red")
car.datainfo();
car.cardetails();