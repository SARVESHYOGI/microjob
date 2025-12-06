import { Router } from "express";
import { prisma } from "../lib/db";
import bcrypt from "bcrypt";
import { validate as uuidValidate } from "uuid";

const router=Router();

router.get("/", async (_req, res) => {
    try{
        const users = await prisma.user.findMany();
        res.json(users);
    }catch(err){
        res.status(500).json({ error: "Internal Server Error" });
    }
    
});

router.post("/register",async(req,res)=>{
    try {
        const { name, email,password,buildingId } = req.body;
        if(!name || !email || !password || !buildingId){
            return res.status(400).json({ error: "Missing required fields" });
        }
        if (!uuidValidate(buildingId)) {
            return res.status(400).json({ error: "buildingId must be a valid UUID" });
        }
        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser=await prisma.user.create({
            data:{
                name,
                email,
                passwordHash:hashedPassword,
                buildingId
            }
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.log("error in /user/register",error);
    }
});

router.post("/login",async(req,res)=>{
    try {
        const { email,password } = req.body;
        if(!email || !password){
            return res.status(400).json({ error: "Missing required fields" });
        }
        const user=await prisma.user.findUnique({
            where:{email}
        });
        if(!user){
            return res.status(404).json({ error: "User not found" });
        }
        const isPasswordValid = bcrypt.compareSync(password, user.passwordHash);
        if(!isPasswordValid){
            return res.status(401).json({ error: "Invalid password" });
        }
        res.cookie("userId",user.id,{ httpOnly: true, secure: true, sameSite: 'strict' });
        res.json(user);
    } catch (error) {
        console.log("Error in /api/user/login",error);
        res.status(500).json({ error: "Internal server error" });
    }
})

export default router;





