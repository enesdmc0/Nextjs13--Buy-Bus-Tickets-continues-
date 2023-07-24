import getCurrentUser from "../getCurrentUser";
import prisma from "@/libs/prismadb";


export default async function getExpeditions(params: any) {
    try{
        const currentUser = await getCurrentUser()
        if(!currentUser) return null
    
        
        const {departureCity, arrivalCity, travelHistory} = params

        if(!departureCity || !arrivalCity || !travelHistory) {
            const expeditions = await prisma?.bus.findMany()
            return expeditions
        }
        
        const expeditions = await prisma?.bus.findMany({
            where: {
                departureCity, 
                arrivalCity,
                travelHistory
            }
        })

        if (expeditions.length === 0) {
            return [];
        }

        return expeditions
    }catch(err){
        console.log(err)
        return null
    }
   
}