const fs = require("fs")

function createWebsite(username){

const template = "./template-site"

const newSite = "./sites/"+username

fs.cpSync(template,newSite,{recursive:true})

console.log("Website created for "+username)

}

module.exports = createWebsite
