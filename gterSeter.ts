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



class BankAccount {
    private _balance : number | undefined = 13;

    public set balance(balance:number){
        this._balance = balance;
    }

    public get balance(){
        if(this.balance === undefined){
            throw new  Error('This action can be performed only on existing accounts');
        }
        return this.balance;
    }
}

const bankAccount1 : BankAccount = new BankAccount();
bankAccount1.balance = 122;
console.log(bankAccount1);



