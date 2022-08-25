const express = require("express");
const router = express.Router();
const { check, validationResult  } = require('express-validator');
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const dbconfig = require('../db');

// ROUTER 1: Register a customer by POST method PATH: http://localhost:5000/api/user/register
// STATUS: WORKING
router.post('/register',[
    check("email","Enter the valid email").isEmail(),
    check("password","Your password is less then 6 digits").isLength({
        min:6
    })
],async(req,res)=>{

    const secPass = await bcrypt.hash(req.body.password,10);
    let name = req.body.name;
    let email = req.body.email;
    let number = req.body.number;
    let password = secPass;


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()});
    }

    const token = JWT.sign({
        email
    }, "fn789disdhcsc87scsdcsdb4", {
        expiresIn: 3600000
    })


    let qr =  `SELECT * FROM customer
                    WHERE email = '${email}'`
    dbconfig.query(qr,(err,result)=>{
            if (!err) {
                if (result.length <=0) {
                      let qr = `insert into customer(name,email,number,password)
                                values('${name}','${email}',${number},'${password}')`
                            dbconfig.query(qr,(err,result)=>{
                                    if (err) {
                                        console.log(err,'errs');
                                    }
                                    else {  
                                        res.json({
                                            token
                                        });
                                    }
                                })
                }
                else {
                    return res.status(400).json({message:"Email already exist"})
                }
            }
            else {  
                console.log(err,'errs');
            }
        })

    // if (!user) {
    //     return res.status(400).json({error:"Sorry a user with this email already exist"})
    // }
    
    // let qr = await `insert into customer(name,email,number,password)
    // values('${name}','${email}',${number},'${password}')`
    //     dbconfig.query(qr,(err,result)=>{
    //     if (err) {
    //         console.log(err,'errs');
    //     }
    //     else {  
            
    //         res.json({
    //             token
    //         });
    //     }
    // })
   
});


module.exports = router