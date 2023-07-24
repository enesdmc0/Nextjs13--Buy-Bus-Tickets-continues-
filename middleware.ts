export {default} from "next-auth/middleware";

export const config = {
    matcher: [
        "/",
        "/payment", 
        "/ticket-sales/:path*"]
}