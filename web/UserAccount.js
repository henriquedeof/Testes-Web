var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    //Utilizando metodo
    UserAccount.prototype.logDetails = function () {
        console.log("Meu nome eh " + this.name + " e a idade eh " + this.age);
    };
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    CharAccount.prototype.logDetails = function () {
        console.log("Meu nome eh " + this.name + " o nickname eh " + this.nickname + " e o meu level eh " + this.level);
    };
    return CharAccount;
}(UserAccount));
var henrique = new UserAccount('Henrique', 20);
console.log(henrique);
henrique.logDetails();
var pio = new CharAccount('Pio', 22, 'piozo9', 99);
console.log(pio);
console.log('Level de Pio: ' + pio.level);
pio.logDetails();
