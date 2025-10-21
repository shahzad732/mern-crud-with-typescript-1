import { type Request, type Response } from "express";
import { users } from "../model/user.schema.ts";

const getUser=  (req : Request , res : Response) => {
    res.json({
        message : "User route working!",
        users : users
    })
};

const getById = (req : Request , res : Response)=>{
    const { id } = req.params;
    const findUser = users.find((value)=> value.id ===  Number(id))

    if(!findUser){
        res.status(201).json({
            message : "User not found!",
            status : false
        })
    }
    res.status(201).json({
        message : "User found!",
        user : findUser,
        status : true
    })
}

export { getUser , getById };