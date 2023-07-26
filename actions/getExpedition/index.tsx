import getCurrentUser from "../getCurrentUser";
import prisma from "@/libs/prismadb";


export default async function getExpeditions(id: any) {
    try{
        const currentUser = await getCurrentUser()
        if(!currentUser) return null

        if (!id) return null

    

        const expedition = await prisma?.bus.findUnique({
            where: {
                id: id
            }
        })


        return expedition
    }catch(err){
        console.log(err)
        return null
    }

}