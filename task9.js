let person={

}
person.name="ajaj"
console.log(person)

person.age=13,
console.log(person)

person.gender="male"
console.log(person)

console.log("---------------------------------------------------------------------------------")

 console.log(person.age)
console.log(person.gender)
delete person.gender;
 console.log(person.gender)

 for (const key in person){
    console.log(key ,":",person[key])
 }
 

 let car={
    brand:"tata",
    model:"mahenadra",
    year:2020,
    
}


let hascolor=Object.hasOwn(car,"color")
console.log(hascolor)

const {brand,model}=car
// const brand = car.brand
// const model = car.model
console.log(brand)
console.log(model)

let car2={

}
Object.assign(car2,car)
console.log(car2)

car2.price=666420
console.log(car2)