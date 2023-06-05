import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}


//prevent hot reload from creating new instances of PrismaClient
const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client;
