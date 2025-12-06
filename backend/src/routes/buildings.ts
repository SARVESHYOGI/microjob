import { Router } from "express";
import { prisma } from "../lib/db";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const buildings = await prisma.building.findMany();
        res.json(buildings);
    } catch (error) {
        console.log("Error in /api/buildings",error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { name, address,joinCode } = req.body;
        if(!name || !address || !joinCode){
            return res.status(400).json({ error: "Missing required fields" });
        }
        const building = await prisma.building.create({
            data:{name,address,joinCode}
        });
        res.status(201).json(building);
    } catch (error) {
        console.log("Error in /api/buildings",error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
