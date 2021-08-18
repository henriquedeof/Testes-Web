// S - State
// T - Type
// K - Key
// V - Value
// E - Element
function useState() {
    //Para aceitar numero e string
    //let state: number | string;
    var state;
    function getState() {
        return state;
    }
    //Para aceitar numero e string
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
// const newState = useState();
//
// newState.setState('foo');
// console.log(newState.getState())
//
// newState.setState(123);
// console.log(newState.getState())
// PASSO 1: Ate o momento acima, posso utilizar number ou string, mas quero que quando um dos dois tipos for utilizado, o mesmo nao possa ser modificado.
//============================================================================================================================================================
// const newState = useState<string>(); //Preciso passar o tipo explicitamente
//
// newState.setState('foo');
// console.log(newState.getState())
//
// newState.setState(456); //Como useState foi definido como string, nao posso mais utilizar number.
// console.log(newState.getState());
//PASSO 2: Ate o momento acima, foi passado o <string> pra definir o tipo do campo state da funcao useState
//         Tambem foi ajustado o tipo da funcao pra um formato generico <S>.
//         Mas ainda nao esta bom, pois preciso definir explicitamente o tipo do useState<string>, toda vez que for usa-lo. E a funcao ainda aceita qualquer tipo.
//============================================================================================================================================================
var newState = useState(); //Nao preciso mais passar o tipo explicitamente, caso utilize string. Caso contrario, preciso informar explicitamente.
newState.setState('foo');
console.log(newState.getState());
// newState.setState(456);
// console.log(newState.getState());
//PASSO 3: A funcao foi ajustada para aceitar os tipos number e string sem que eu precise fazer a chamada do useState informado qual o tipo explicitamente.
//         Uma vez definido o tipo, o tipo sera sempre o mesmo.
//============================================================================================================================================================
