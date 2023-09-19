const express = require("express");
const router = express.Router();
const Mgen = require("../model/MGen");


router.post("/", async (req,res)=>{
const body = req.body
try {
    const GenDB = new Mgen(body)
    await GenDB.save()
res.redirect("/GGuar")
console.log(GenDB)
} catch (error) {
    console.log(error)
}
})
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

router.get("/GGuar", async (req, res) => {
try {
    const ArayGenesDB = await Mgen.find()
        console.log(ArayGenesDB)
        res.render("GGuar",{
        ArayGenes: ArayGenesDB
    })
} catch (error) {
    console.log(error)
}

})


module.exports = router;