var tlou = {
    title: "The last of us",
    description: "Some description",
    genre: "Action",
    platform: ["PS4", "PS5"],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Game 1, Game 2, Game 3");
    }
};
var leftBehind = {
    title: "TLOU - lef behind",
    description: "Description of this DLC",
    genre: "Action",
    platform: ['PS5'],
    originalGame: tlou,
    newContent: ['too long', 'new characters']
    // isValid: false // NAO posso adicionar um campo extra neste objeto, pois este campo nao existe na interface.
};
//Como o metodo getSimilars() pode retornar UNDEFINED, eh importante se certificar que o mesmo existe.
if (tlou.getSimilars) {
    tlou.getSimilars('HENRQIUE');
}
console.log(leftBehind.originalGame);
var CreateGame = /** @class */ (function () {
    // Os dois metodos abaixo sao opcionais.
    // getSimilars(title: string): void { }
    // platform: string[];
    function CreateGame(title, description, genre) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
    return CreateGame;
}());
