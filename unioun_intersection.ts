const userInfo = (userDetils: string | number | boolean) => {
    if(typeof(userDetils) === "string"){
        return  `this is string value`
    }else if(typeof(userDetils) === "number"){
        return `this is number value`
    }else if(typeof(userDetils) === "boolean"){
        return `this is boolean value`
    }else{
        return `Invalid input type`;
    }
}
let arr: number[] = [1,2,3,4,5];
// console.log(userInfo("ravi"));
// console.log(userInfo(10));
// console.log(userInfo(true));
// console.log(userInfo(arr));



// create user management system
type User = {
    id : number;
    name : string;
    email : string;
}

type Account = {
    accountId : number;
    accountType : String;
    balance : number
}

const user:User = {
    id : 123,
    name : "ravi",
    email : "ravipatel@gmail.com"
}

const account:Account = {
    accountId : 1234,
    accountType : "saving",
    balance : 9876
}

// const personalInfoDetaile:User = {
//     id : 123343,
//     name : "mahesh",
//     email : "maheshpatel@gmail.com"
// }

const combineUserAndAccount = (user:User,account:Account) => {
    return {...user,...account,};
}

const combineDataUserAndAccount : User & Account = combineUserAndAccount(user, account)
console.log(combineDataUserAndAccount);



