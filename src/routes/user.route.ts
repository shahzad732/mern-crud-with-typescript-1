import  express from "express";
import { getById, getUser } from "../controller/user.controller.ts";


const route = express.Router();

route.get("/user" , getUser)
route.get("/user/:id" , getById)

export default route;