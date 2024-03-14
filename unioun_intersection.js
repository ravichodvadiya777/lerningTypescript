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
var userInfo = function (userDetils) {
    if (typeof (userDetils) === "string") {
        return "this is string value";
    }
    else if (typeof (userDetils) === "number") {
        return "this is number value";
    }
    else if (typeof (userDetils) === "boolean") {
        return "this is boolean value";
    }
    else {
        return "Invalid input type";
    }
};
var arr = [1, 2, 3, 4, 5];
var user = {
    id: 123,
    name: "ravi",
    email: "ravipatel@gmail.com"
};
var account = {
    accountId: 1234,
    accountType: "saving",
    balance: 9876
};
// const personalInfoDetaile:User = {
//     id : 123343,
//     name : "mahesh",
//     email : "maheshpatel@gmail.com"
// }
var combineUserAndAccount = function (user, account) {
    return __assign(__assign({}, user), account);
};
var combineDataUserAndAccount = combineUserAndAccount(user, account);
console.log(combineDataUserAndAccount);
