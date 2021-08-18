class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    //Utilizando metodo
    logDetails(): void {
        console.log(`Meu nome eh ${this.name} e a idade eh ${this.age}`);
    }
}

class CharAccount extends UserAccount{
    nickname: string;
    readonly level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }

    logDetails() {
        console.log(`Meu nome eh ${this.name} o nickname eh ${this.nickname} e o meu level eh ${this.level}`);
    }

}


const henrique = new UserAccount('Henrique', 20);
console.log(henrique);
henrique.logDetails();

const pio = new CharAccount('Pio', 22, 'piozo9', 99);
console.log(pio);
console.log('Level de Pio: ' + pio.level);
pio.logDetails();
