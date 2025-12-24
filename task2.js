
const we = {are: {the: {best: "Koda"}}}
console.log(we.are.the.best)

const hello = { 
    world: "Hello World"
}
console.log(hello.world)

const obj = { str: [0,1,2,[0,[0,1,{man: [{tech: {academy: "Tech Academy"}},1]}]]]}
console.log(obj.str[3][1][2].man[0].tech.academy)

const my = [{favourite: [0,1,2,{fruit: {is: "Apple"}}]},1]
console.log(my[0].favourite[3].fruit.is)

const num = {first: [0,16],
    second: [0,1,16]
}
console.log(num.first[1]+num.second[2])
