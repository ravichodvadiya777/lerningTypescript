// class BankAccount {
//     private _balance : number | undefined;
//     // seter method
//     public set balance(balance:number) {
//         if(balance < 0 ){
//             throw new Error(`${balance} This number is not valid..`);
//         }
//         this._balance = balance;
//     }
//     // get method
//     public get balance() : number {
//         if(this._balance === undefined){
//             throw new Error("The account is not yet opened");
//         }
//         return this._balance;
//     }
//     introduceBalance() : string {
//         return  `Your current balance is ${this._balance} dollars`;
//     }
// }
// const balance1: BankAccount = new BankAccount();
// balance1.balance = 12;
// console.log(balance1);
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this._balance = 13;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            if (this.balance === undefined) {
                throw new Error('This action can be performed only on existing accounts');
            }
            return this.balance;
        },
        set: function (balance) {
            this._balance = balance;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
var bankAccount1 = new BankAccount();
bankAccount1.balance = undefined;
console.log(bankAccount1);
