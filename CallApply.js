let fun1={
    firstName:'sia',
    lastName:"rahe"
}
let py=function funcPrint(location,state){
    console.log(this.firstName + ' ' + this.lastName + ' ' +  location + ' '+ state)
}
py.call(fun1,'pune','mh')

let fun2={
    firstName:'iaa',
    lastName:"kiata"
}

py.call(fun2,'pune','mh')

py.apply(fun2,['pune','ut'])

let p2=py.bind(fun2,'pune','mh')
console.log(p2)
p2()