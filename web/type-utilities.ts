//=========================== Utilizando o Partial ===========================

type Todo = {
    title: string;
    description: string;
    completed: boolean;
};

//Utilizando o readonly para imutabilidade. Para modificar os valores deste objeto, eh necessario criar uma funcao para isto.
//Com isso, eu nao modifico meu o objeto "todo" instanciado, este fica imutavel e eu tenho que criar um novo que contera as informacoes modificadas.
const todo: Readonly<Todo> = {
    title: "Assistir filme",
    description: "Descricao da atividade",
    completed: false
};

function updateTodo(todo:Todo, fieldsToUpdate:Partial<Todo>){
    //Ao utilizar o Partial<Todo>, todos os campos do Todo se tornaram opcionais.
    //O fieldsToUpdate prevalecera sobre o todo. //O fieldsToUpdate pode conter somente alguns campos do objeto Todo
    return {...todo, ...fieldsToUpdate}; //retornando um novo objeto.
}

console.log(todo);

const todo2: Todo = updateTodo(todo, {completed: true});
console.log(todo2);


//=========================== Utilizando o Pick ===========================
//Ao utilizar o Pick, eu posso escolher quais campos de um TYPE ALIAS eu quero pegar.

type TodoPreview = Pick<Todo, "title" | "completed">;
const todo3: TodoPreview = {
    title: "PICK - Jogar outro jogo novo",
    completed: false
};

console.log(todo3);


//=========================== Utilizando o Pick ===========================
//Ao utilizar o Omit, eu escolho quais campos de um TYPE ALIAS eu quero DESPREZAR.

type TodoPreview2 = Omit<Todo, "description">;
const todo4: TodoPreview2 = {
    title: "OMIT - Jogar outro jogo novo",
    completed: true
};

console.log(todo4);
