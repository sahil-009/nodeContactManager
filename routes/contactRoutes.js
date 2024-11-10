const express = require("express")
const router = express.Router()





router.route("/").post((req,res) =>{
    res.status(200).json({message : "contact created"})
})

router.route("/:id").get((req,res) =>{
    res.status(200).json({message : `getting Contacts route ${req.params.id}`})
})

router.route("/:id").put((req,res) =>{
    res.status(200).json({message : `"updated contacts ${req.params.id}`})
})

router.route("/").delete((req,res) =>{
    res.status(200).json({message : `"main Contacts route ${req.params.id}`})
})

module.exports = router