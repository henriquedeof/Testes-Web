//=========================== Utilizando o Partial ===========================
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Utilizando o readonly para imutabilidade. Para modificar os valores deste objeto, eh necessario criar uma funcao para isto.
//Com isso, eu nao modifico meu o objeto "todo" instanciado, este fica imutavel e eu tenho que criar um novo que contera as informacoes modificadas.
var todo = {
    title: "Assistir filme",
    description: "Descricao da atividade",
    completed: false
};
function updateTodo(todo, fieldsToUpdate) {
    //Ao utilizar o Partial<Todo>, todos os campos do Todo se tornaram opcionais.
    //O fieldsToUpdate prevalecera sobre o todo. //O fieldsToUpdate pode conter somente alguns campos do objeto Todo
    return __assign(__assign({}, todo), fieldsToUpdate); //retornando um novo objeto.
}
console.log(todo);
var todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: "PICK - Jogar outro jogo novo",
    completed: false
};
console.log(todo3);
var todo4 = {
    title: "OMIT - Jogar outro jogo novo",
    completed: true
};
console.log(todo4);
