import express from 'express'
import users from '../models/UserSchema.js'


const usersRoute = express.Router();

usersRoute.post('/users',async(req,res)=>{
    try {
        const user = await users.create(req.body);
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
        const user = await users.findOne({email:req.query.email},{password:1, _id:1});
        console.log(user);
        res.status(200).json(user);
    }catch(error){
        res.status(404).json(user);
    }
})

export default usersRoute;