const router = require('express').Router();
let User = require('../models/users.model');
const adminHelpers = require('../helpers/admin.helpers');
const { response } = require('express');


router.route('/').get(async(req,res)=>{
   let users= await User.find()
   console.log(users);
   res.json(users)
});

router.route('/delete').delete((req,res)=>{
    User.findByIdAndRemove({_id : req.body.userId})
    .then(()=>{
        res.json("User removed")
    })
    .catch(err => res.status(400).json("Error :" + err))
});

module.exports = router;