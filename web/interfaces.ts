interface Game {
    title: string; //Posso modificar o valor desta variavel, pois a mesma nao possui nenhum modificador de acesso.
    description: string;
    readonly genre: string; //Nao posso modificar o valor deste atributo uma vez que criado, pois este eh readonly
    platform?: string[];
    getSimilars?: (title: string) => void; //Preciso informar o tipo do metodo.
                                           // Com a ?, o campo se torna opcional. Lembrando que as possibilidades de retorno sao: STRING ou UNDEFINED
}

const tlou: Game = {
    title: "The last of us",
    description: "Some description",
    genre: "Action",
    platform: ["PS4", "PS5"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Game 1, Game 2, Game 3`);
    }
};

interface DLC extends Game{
    originalGame: Game;
    newContent: string[];
}

const leftBehind: DLC = {
    title: "TLOU - lef behind",
    description: "Description of this DLC",
    genre: "Action",
    platform: ['PS5'],
    originalGame: tlou,
    newContent: ['too long', 'new characters']
    // isValid: false // NAO posso adicionar um campo extra neste objeto, pois este campo nao existe na interface.
}

//Como o metodo getSimilars() pode retornar UNDEFINED, eh importante se certificar que o mesmo existe.
if(tlou.getSimilars){
    tlou.getSimilars('HENRQIUE');
}

console.log(leftBehind.originalGame);

class CreateGame implements Game{
    title: string;
    description: string;
    readonly genre: string;

    // Os dois metodos abaixo sao opcionais.
    // getSimilars(title: string): void { }
    // platform: string[];

    constructor(title: string, description: string, genre: string) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
}

