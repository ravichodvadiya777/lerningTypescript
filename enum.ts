enum Roles {
    user = "user",
    admin = "admin"
}


type LoginDetils = {
    name? : string;
    email : string;
    password : string;
    role : Roles;
}

const user1:LoginDetils = {
    email : "ravi@gmail.com",
    password : "sdfs",
    role : Roles.user
}

const user2:LoginDetils = {
    email : "patel@gmail.com",
    password : "fgd",
    role : Roles.admin
}