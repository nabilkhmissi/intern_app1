const { User } = require("../models");
const { password_utility } = require("../utils");

module.exports = init_admin_account = async ()=>{
    const exist_admin = await User.findOne({ email : "admin@mail.com" });
    if(exist_admin){
        return;
    }
    const salt = await password_utility.genSalt();
    const password = await password_utility.hashPassword("admin", salt);
    const admin_account = await User.create({
        fullName: "ala",
        phone: "9876543210",
        email: "admin@mail.com",
        password: password,
        role: "ADMIN",
        image: "avatar.jpg",
        nationality: "British",
        dateOfBirth: "1995-06-15",
        address: "456 Elm Street, Town, Country",
        department: "SYSTEM",
        gender: "male",
        salt : salt
    })
    
    if(admin_account){
        console.log("ADMIN ACCOUNT CREATED...")
    } 
}