const express = require("express");
const router = express.Router();
const Mgen = require("../model/MGen")

router.get("/", async (req,res)=>{
try {
    const arayGenesDB = await Mgen.find()
        console.log(arayGenesDB)
        res.render("GGuar",{
            arayGenes: arayGenesDB
        })
} catch (error) {
    console.log(error)
}
})

router.post("/", async (req,res)=>{
const body = req.body
try {
    const GenDB = new Mgen(body)
    await GenDB.save()
res.redirect("/GGuar")
} catch (error) {
    console.log(error)
}
});

//este es el codigo de GGuar ejs que imprime ArayGenes:

//<% if (ArayGenes.length > 0) { %>
//    <% ArayGenes.forEach(Gn => { %>
//        <tr>
//            <th scope="row"><%= Gn.id %></th>
//            <td><%= Gn.adn %></td>
//            <td><%= Gn.arnm %></td>
//            <td><%= Gn.polipéptidos %></td>
//        </tr>
//    <% }) %>
//<% } %>





module.exports = router;