import express from 'express'
import users from '../models/UserSchema.js'
import bcrypt from 'bcryptjs';


const usersRoute = express.Router();

usersRoute.post('/users',async(req,res)=>{
    try {
        var salt = await bcrypt.genSalt(10);
        var password = await bcrypt.hash(req.body.password, salt);
        const data=req.body;
        // console.log(data);
        const updatedData = {
            ...data,
            password: password
        }
        const user = await users.create(updatedData);
        res.status(201).json(user);
    } catch (error) {
        if(error.code===11000){
            if(error.message.includes("phone"))
            {
                res.status(400).json({error:"phone number already exists "+ error.code});
            }else if(error.message.includes("email")){
                res.status(400).json({error:"email address already exists "+error.message});
            }
        }else{
            res.status(400).json({error:error});
        }

    }
})

usersRoute.get('/users',async(req,res)=>{
    try{
        const user = await users.findOne({email:req.query.email},{password:1, _id:1,email:1});
        if(!user){
            res.status(404).json("user not found");
        }else{
            bcrypt.compare(req.query.password,user.password)
            .then((match)=>{
                if(match){
                    console.log("password matched");
                    res.status(200).json(user.email);
                }else{
                    console.log("incorrect password");
                    res.status(400).json({ error: "Incorrect password" });
                }
            })
        }
    }catch(error){
        res.status(404).json(user);
    }
})

export default usersRoute;