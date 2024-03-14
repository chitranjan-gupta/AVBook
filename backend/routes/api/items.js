const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../../middleware/authenticate');
//Item Model
const Item = require('../../models/item');

//@route GET api/items
//@desc Get All items
//@access public

router.get('/', (req,res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

//@route POST api/items
//@desc Create Item
//@access public

router.post('/register', async (req,res) => {

    const user = await Item.findOne({ email: req.body.email});

    if(user){
        res.status(422).json({message:"Email Already Exists"});
    }
    else{
        const newItem = new Item({
            name:req.body.name,
            email:req.body.email,
            cemail:req.body.cemail,
            phone:req.body.phone,
            cphone:req.body.cphone,
            password:req.body.password,
            cpassword:req.body.cpassword
        });
        const newUser = await newItem.save();
        res.json({message:"Registered"});
    }
})

//@route POST api/items/signin
//@desc Check Item
//@access public

router.post('/signin', async(req,res) => {
    let token;
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({error:'Empty'});
    }

    const userLogin = await Item.findOne({ email:email });

    if(userLogin){
        const isMatch = await bcrypt.compare(password,userLogin.password);
        token = await userLogin.generateAuthToken();
        res.cookie("jwtoken",token,{
            expires:new Date(Date.now() + 25892000000),
            httpOnly:true
        });
        if(!isMatch){
            res.status(400).json({ error: "Invalid Credentials"});
        }else{
            res.json({message:"User Signin successfully"});
        }
    }else{
        res.status(400).json({error:"Invalid Username"});
    }
})

//@route DELETE api/items/:id
//@desc Delete Item
//@access public

router.delete('/:id', (req,res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success:false}))
})

router.get('/about',authenticate,(req,res) => {
    res.json(req.rootUser);
})

router.get('/signout', (req,res) =>{
   res.clearCookie('jwtoken',{ path:'/' });
   res.status(200).send('User Logout'); 
});

module.exports = router;