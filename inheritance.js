class Monster{
    constructor(name){
        this.name = name
    }
    attack(){
        console.log(`${this.name} attacked`)
    }
    walk(){
        console.log(`${this.name} walked`)
    }
    
    
}
class FlyingMonster extends Monster {
    fly(){
        console.log(`${this.name} flew`)
    }
}
class SwimMonster extends Monster{
    swim(){
        console.log(`${this.name} swam`)
    }
}
class FlyingSwimMonster extends FlyingMonster{
    fly(){
        console.log(`${this.name} flew`)
    }
}
const bear = new Monster('bear');
bear.walk();
bear.attack();
const eagle = new FlyingMonster('eagle')
eagle.fly();
eagle.walk();
eagle.attack();
const shark = new SwimMonster('shark');
shark.swim();
shark.walk();
shark.attack();
const fish = new FlyingSwimMonster('fish');
fish.fly();


function swimmer ({name}){
    return{
        swim:()=>console.log(`${name} swam`)
    }
}

function flyer ({name}){
    return{
        fly:()=>console.log(`${name} fly`)
    }
}
function attackAngWalkerRun ({name}){
    return{
        attack:()=>console.log(`${name} attack`),
        walk:()=>console.log(`${name} walk`),
        run:()=>console.log(`${name} run`)
    }
}

// function swimmmingMonsterCreator(name){
//     const monster = {name: name}
//     return{
//         ...monster,
//         ...swimmer(monster)
//     }
// }
function FlyingswimmmingMonsterCreator(name){
    const monster = {name: name}
    return{
        ...monster,
        ...swimmer(monster),
        ...flyer (monster),
        ...attackAngWalkerRun(monster)
    }
}
const obj = FlyingswimmmingMonsterCreator("Monster")
obj.swim();
obj.fly();
obj.attack();
obj.walk();
obj.fly();