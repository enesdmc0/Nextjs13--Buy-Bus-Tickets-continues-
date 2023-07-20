import NextAuth,{AuthOptions} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prismadb";
import bcrypt from "bcryptjs"

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {label: "email", type: "text"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials){
                if (!credentials?.email || !credentials?.password){
                    throw new Error("Invalid Credentials")
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user || !user?.passwordHash){
                    throw new Error("Invalid Credentials")
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password, user.passwordHash
                );

                if (!isCorrectPassword) {
                    throw new Error("Invalid credentials")
                }
                return user
            }
        })
    ],
    pages: {signIn: "/login"},
    debug: process.env.NODE_ENV === "development",
    session: {strategy: "jwt"},
    secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)