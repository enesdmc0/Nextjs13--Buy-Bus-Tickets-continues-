import bcrypt from "bcryptjs";
import prisma from "@/libs/prismadb";
import {NextResponse} from "next/server";


export async function POST(request: Request) {
    const {firstName, lastName, email, password, gender, birthDate, telephone} = await request.json()

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = await prisma.user.create({
        data: {
            firstName,
            lastName,
            email,
            passwordHash,
            gender,
            birthDate,
            telephone
        }
    })

    return NextResponse.json(newUser)

}