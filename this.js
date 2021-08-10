/*
Explorando this

0 que é o this?
this é uma palavra referencia o escopo actual de execução

this sempre retorna um objecto

e esse objecto pode mudar

A referencia do this no browser é o windows

*/
/**
 * Tem um diferença do this 
 * chamada no browser como 
 * escopo global é window
 * que retorna.
 * Mas se for no node retorna
 * objecto global.
 * ! Var pode ser chamado no window mas o let e const depende local a ser chamado. 
 * Mas o valor do this depende
 * do local de invocação.
 * this invocado dentro de uma 
 * arrow function não é uma 
 * boa idea quando é um 
 * metodo de um objecto
 */

//this//referecia o objecto global(window para browser e objecto global para o node)
//console.log(this)

//function myFunc (){
//    console.log(this)
//}
//myFunc();//referecia o objecto global(window para browser e objecto global para o node) e passa ser um metedo do window no caso browser

//metodo alert e um do objecto window
//window.alert('oie');

//var food = 'pipoca';//é uma propriedade do objecto global

/*
let e const são palavras para criaçao de variavel para o contexto do escopo e se livram do objecto global
*/

/*
dentro do contexto de objecto chamaria o objecto
dentro de uma funcão invocada no objecto
*/
const person = {
    firstName: "Walter",
    lastName: "White",
    nickName: "Heisenberg",
    //nick: console.log(this),//não é possível chamar as propriedades e metodos
    getFullName() {
        //console.log(this);//é possivel chamar as propriendades e metódos
        const { firstName, lastName, nickName } = this;
        return `${firstName} ${lastName} ou ${nickName}`;
    },
    printBio() {
        const fullName = this.getFullName();
        console.log(`${fullName} é uma personagem da série Breaking Bad`);
    },
    laught: () => {
        console.log(this);
        console.log(`${this.nickName} diz hahahahhaha`);
    },
};
//person.printBio();//neste caso chamam objecto em sí
//person.nick;//neste caso chamam o objecto global

//const printBio = person.printBio;//passagem por referencia

//printBio();//nao faz invocacao por referencia this internamento nao reconhecido

/*
na arrow function o this  representa o this do escopo em que arrow function foi declarada
*/
//person.laught();

class MyClass {
    constructor(value) {
        this.prop1 = value;
    }

    isThisEqualObj() {
        console.log(this === obj);

        setInterval(() => {
            console.log(this === obj);
        }, 1000);
    }
}

//const obj = new MyClass('value')
//console.log(obj)
//obj.isThisEqualObj();//neste caso this do arrow representa o escopo da função isThisEqualObj

//class Cat {
//    constructor(name) {
//        this.name = name;
//    }
//
//    getName() {
//        return this.name;
//    }
//}
//const myCat = new Cat("Loki");

//console.log(myCat.getName());

//const makeCat = name =>({
//    getName: () => name
//})

//const myCat = makeCat('loki');

//console.log(myCat.getName());

//const form = document.querySelector('[data-js="form"]');
//form.addEventListener('submit', function(event){
//    event.preventDefault()
//
//    console.log(this.cep.value);
//})
//console.log(form)

//se trocar a calback de funcao anonima para arrow function evitamos o this e tambem pode funcionar numa função anonima 
const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(event.target.cep.value);
});
