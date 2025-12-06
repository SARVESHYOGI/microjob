import { TaskStatus } from './../../generated/prisma/enums';
import { Router } from "express";
import { prisma } from "../lib/db";
import { Prisma } from '../../generated/prisma/client';

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { buildingId, status } = req.query;

    const where: Prisma.TaskWhereInput = {};

    if (buildingId) {
      where.buildingId = String(buildingId);
    }

    if (status && Object.values(TaskStatus).includes(status as TaskStatus)) {
      where.status = status as TaskStatus;
    }

    const tasks = await prisma.task.findMany({
      where,
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
            avatarUrl: true
          }
        },
        building: {
          select: {
            id: true,
            name: true,
            address: true
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });

    res.json(tasks);
  } catch (error) {
    console.log("Error in /api/tasks", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id",async(req,res)=>{
    try {
        const { id } = req.params;

        const task=await prisma.task.findUnique({
            where:{id},
            include:{
                owner:{
                    select:{
                        id:true,
                        name:true,
                        email:true,
                        avatarUrl:true
                    }
                },
                building:{
                    select:{
                        id:true,
                        name:true,
                        address:true
                    },
                   
                },
                assignments:{
                        include: {
                            user: { select: { id: true, name: true, avatarUrl: true } }
                        }
                }    
            }
        });
        if(!task){
            return  res.status(404).json({error:"Task not found"});
        }
        res.json(task);
    } catch (error) {
        console.log("Error in /api/tasks/:id", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.post("/",async(req,res)=>{
    try {
        const { title, description, buildingId, ownerId, location, category,budget } = req.body;

        if(!title || !description || !buildingId || !ownerId){
            return res.status(400).json({ error: "Missing required fields" });
        }

        const task=await prisma.task.create({
            data:{
                title,
                description,
                buildingId,
                ownerId,
                location,
                category,
                budget,
            }
        }
        );
        res.status(201).json(task);

    } catch (error) {
        console.log("Error in /api/takks post req",error);
        res.status(500).json({ error: "Internal server error" });
    }
})



export default router;
